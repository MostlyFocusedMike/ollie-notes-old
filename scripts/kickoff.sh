#!/bin/bash
if [ ! -f "./.env" ]; then cp ./.sample.env ./.env; fi
docker-compose up -d --build
docker-compose exec web ./scripts/wait-for-it.sh db:5432 -- npx knex migrate:latest
docker-compose exec web ./scripts/wait-for-it.sh db:5432 -- npx knex seed:run
npm start