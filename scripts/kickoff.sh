#!/bin/bash
npm install
npm run dc:build
npm run migrate
npm run seed
npm run webpack:watch
