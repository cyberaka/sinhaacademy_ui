FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./public/ .
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
