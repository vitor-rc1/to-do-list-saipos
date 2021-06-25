FROM node
WORKDIR /usr/app

COPY package*.json ./

RUN npm install
RUN npm run prestart

COPY . .

EXPOSE 3001
CMD [ "node", "index.js" ]