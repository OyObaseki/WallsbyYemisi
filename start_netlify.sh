#!/bin/bash
npx netlify build
npx netlify serve &
PID=$!
sleep 15
curl -I http://localhost:8888/
kill $PID
