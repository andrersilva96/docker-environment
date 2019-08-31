FROM node:10.16-alpine

WORKDIR /code

COPY ./code/package*.json ./

RUN npm install

ENTRYPOINT [ "npm", "start" ]