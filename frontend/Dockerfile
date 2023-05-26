FROM node:18-alpine as build-stage
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.21-alpine as production-stage
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html