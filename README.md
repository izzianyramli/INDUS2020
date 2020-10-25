# INDUS2020
Repository to store all the works for INDUS 2020

# Dependencies
sudo apt install libuvc-dev
sudo apt install libusb-1.0-0-dev
sudo apt install libjpeg-dev

# libuvc
```
git clone https://github.com/groupgets/libuvc
cd libuvc/
mkdir build && cd build
cmake ..
make && sudo make install
```

# Start flask server
```
. flask/bin/activate
export FLASK_APP=server.py
python3 -m flask run
```
