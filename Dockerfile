FROM node

WORKDIR /app

COPY package.json ./

ADD . .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]