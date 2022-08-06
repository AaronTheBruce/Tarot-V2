FROM node:14.17.3-alpine as builder

ENV FRONTEND=/home/app/frontend

RUN mkdir -p ${FRONTEND}

WORKDIR ${FRONTEND}

RUN apk --no-cache --virtual build-dependencies add

RUN yarn install --network-timeout 1000000

COPY . ${FRONTEND}

RUN yarn install

CMD ["yarn", "start"]