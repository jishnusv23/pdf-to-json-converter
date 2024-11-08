FROM node:alpine

WORKDIR /backend

COPY package*.json ./

RUN npm install


COPY dist/config/public ./public

COPY . .

RUN npm run build

EXPOSE 3001

CMD [ "npm", "start" ]
