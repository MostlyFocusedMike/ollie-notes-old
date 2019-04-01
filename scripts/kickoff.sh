#!/bin/bash
npm install
docker-compose up -d --build
npm run start
