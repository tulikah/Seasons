FROM alpine

LABEL maintainer="tharsulkar092@gmail.com"

RUN apk add --update nodejs nodejs-npm

COPY ./seasons ./src

WORKDIR /src

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]