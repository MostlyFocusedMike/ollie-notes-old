#!/bin/bash
npm install
docker-compose up -d --build
echo "now do: npm run setup:db"