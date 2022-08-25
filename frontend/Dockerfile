FROM node:14.17.3-alpine
# FROM node:13.12.0-alpine

# set working directory
WORKDIR /home/app/frontend

RUN apk add --no-cache python g++ make

ADD package.json /home/app/frontend
ADD yarn.lock /home/app/frontend
ADD ./ /home/app/frontend
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++
RUN yarn install
CMD yarn start