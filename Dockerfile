FROM node:20.12.2-alpine3.19
WORKDIR /app
COPY ./app/ .
CMD [ "node", "server.js" ]