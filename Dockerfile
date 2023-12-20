FROM node:alpine

WORKDIR /app

COPY package.json .

COPY index.js .

RUN npm install 

ENTRYPOINT ["node", "index.js"]
