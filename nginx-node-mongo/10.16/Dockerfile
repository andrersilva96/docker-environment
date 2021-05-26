FROM node:10.16-alpine

WORKDIR /code

COPY ./code/package*.json ./

# run this one
ENTRYPOINT [ "npm", "install" ]

# comment the up and uncomment the above to run again docker-compose up --build
# ENTRYPOINT [ "npm", "run", "start" ]
