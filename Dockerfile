FROM node:12.14

WORKDIR /usr/app

COPY package.json /usr/app
RUN npm install

CMD ["npm", "start"]