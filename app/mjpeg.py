import cv2
from PIL import Image
import threading
from http.server import BaseHTTPRequestHandler, HTTPServer
from socketserver import ThreadingMixIn
from io import BytesIO, StringIO
import time
import sys
import numpy as np
capture = None
img = None

class CamHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(20)
        self.send_header(
            'Content-type', 'multipart/x-mixed-replace; boundary=--jpgboundary')
        self.end_headers()
        while True:
            try:
                if type(img) is np.ndarray:
                    r, buf = cv2.imencode(".jpg", img)
                    self.wfile.write("--jpgboundary\r\n".encode())
                    self.end_headers()
                    self.wfile.write(bytearray(buf))
            except KeyboardInterrupt:
                break
        return


class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    """Handle requests in a separate thread."""


class thermal_thread(threading.Thread):
    def __init__(self):
        super(thermal_thread, self).__init__()

        self.port = 8000

    def read_image(self, incomingImage):
        global img
        img = incomingImage

    def run(self):
        try:
            server = ThreadedHTTPServer(('0.0.0.0', self.port), CamHandler)
            print("AntiCovid-19 rgb server started on ", self.port)
            server.serve_forever()
        except KeyboardInterrupt:
            server.socket.close()

