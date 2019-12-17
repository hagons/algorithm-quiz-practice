FROM node:8.11

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

EXPOSE 8000
CMD ["npm", "start"]