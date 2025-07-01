FROM node:24-alpine3.21

RUN npm install -g npm@latest

WORKDIR /usr

COPY src/ /usr/src

EXPOSE 3000

ENTRYPOINT [ "start" ]

CMD ["npm"]  