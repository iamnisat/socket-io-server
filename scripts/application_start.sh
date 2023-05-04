#!/bin/bash

# Stop all servers and start the server as a daemon
sudo forever stopall
sudo forever start --minUptime 1000 --spinSleepTime 1000 -c /usr/bin/node /home/ubuntu/socket-io-server/src/index.js