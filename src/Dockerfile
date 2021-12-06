FROM node:16.13.1-alpine as build
WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm ci --production

COPY ./ ./

RUN npm run build

FROM nginx:1.21.4-alpine as prod

COPY --from=build /app/build  /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","deamon off;"]