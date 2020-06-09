FROM node:12.16.3-stretch-slim as build-stage

WORKDIR /app

COPY package.json yarn.lock ./
COPY workers/ ./workers/

RUN yarn install

COPY runner.ts tsconfig.json ./
COPY lib/ ./lib/

RUN yarn tsc