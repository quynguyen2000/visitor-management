FROM node:16.18-alpine

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE 4001

CMD [ "yarn", "run", "dev" ]
