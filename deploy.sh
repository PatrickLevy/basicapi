#!/bin/bash

ssh root@138.68.40.165 << EOF
  cd /root/basicapi
  npm install
  pm2 stop /root/basicapi/server/server.js 
  pm2 start /root/basicapi/server/server.js
EOF
