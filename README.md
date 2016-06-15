# Tutorial: Distributed X's and O's game

### lessons

The lessons for this tutorial are split across branches.

### installation
```bash
git clone https://github.com/coder-forge/tutorial-xos
cd tutorial-xos
git checkout min-shippable-product
cd app
npm install
meteor
```

### Flow

User selects Opponant from list (see networking below)
Oponent accepts
Coin toss (random num generator) selects who's X and who's O
X's start first

### Networking

App will listen for broadcasts from other apps on a port.
App will broadcast across subnet (default 255.255.0.0) once every x times, and
always on startup.
Broadcast will include {ipAddress, username}
App will list ip's => username's of any broadcasts made.
