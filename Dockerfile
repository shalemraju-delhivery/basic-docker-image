FROM node:12-slim

WORKDIR /

COPY package.json ./

RUN yarn install --only=production && yarn cache clean

COPY . ./

CMD [ "npm", "start" ]