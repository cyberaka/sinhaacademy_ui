FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./index.html .
COPY ./app.js .
COPY ./style.css .
COPY ./media/ ./media/
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
