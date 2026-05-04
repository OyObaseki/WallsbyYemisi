#!/bin/bash
npm run build
node ./dist/server/entry.mjs &
NODE_PID=$!
sleep 5
curl -I http://localhost:4321/
kill $NODE_PID
