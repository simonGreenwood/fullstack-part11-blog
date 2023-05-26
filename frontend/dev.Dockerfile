FROM node:18-alpine as dev
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["npm", "start"]