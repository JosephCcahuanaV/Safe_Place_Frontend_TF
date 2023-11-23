FROM node:18.17.1
WORKDIR /app
COPY . .
RUN npm install -g npm@9.6.7
RUN npm install -g @angular/cli@16.0.6
RUN npm install
RUN ng build --configuration production

FROM nginx:latest
COPY --from=0 /app/dist/safe-place-frontend /usr/share/nginx/html
COPY --from=0 /app/default.conf /etc/nginx/conf.d/default.conf