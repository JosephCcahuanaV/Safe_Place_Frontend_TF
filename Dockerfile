FROM node:18.17.1
WORKDIR /app
COPY . .
RUN npm install -g npm@9.6.7
RUN npm install -g @angular/cli@16.0.6
RUN npm install
RUN ng build --configuration production

FROM nginx:latest
COPY --from=build-step /app/dist/safe-place-frontend /usr/share/nginx/html