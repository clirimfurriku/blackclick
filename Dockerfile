# pull official base image
FROM python:3.10.8-alpine as builder

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip

# install dependencies
RUN mkdir -p /usr/src/app/requirements
COPY ./requirements/base.txt /usr/src/app/requirements/base.txt
COPY ./requirements/prod.txt /usr/src/app/requirements/prod.txt

RUN pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r requirements/prod.txt

# pull official base image
FROM python:3.10.8-alpine as web

# create directory for the app user
RUN mkdir -p /home/app

# create the app user
RUN addgroup -S app && adduser -S app -G app

# create the appropriate directories
ENV HOME=/home/app
ENV APP_HOME=/home/app/web
RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/staticfiles
RUN mkdir $APP_HOME/mediafiles
RUN mkdir $APP_HOME/db
RUN mkdir $APP_HOME/logs
RUN touch $APP_HOME/logs/debug.log
WORKDIR $APP_HOME

# install dependencies
RUN apk update && apk add --no-cache --virtual libpq libmagic gettext chromium chromium-chromedriver
COPY --from=builder /usr/src/app/wheels /wheels
COPY --from=builder /usr/src/app/requirements .
RUN pip install --no-cache /wheels/*

# chown all the files to the app user
RUN chown -R app:app $APP_HOME

# copy project
COPY --chown=app:app . $APP_HOME

# change to the app user
USER app

FROM node:16-alpine as build-fe-stage
WORKDIR /app
COPY ./frontend/package.json /app/
COPY ./frontend/package-lock.json /app/
RUN npm install
COPY ./frontend /app/
RUN npm run build


FROM nginx:1.23.1-alpine as nginx

RUN mkdir -p /home/app/frontend/
COPY --from=build-fe-stage /app/dist/ /home/app/frontend/

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
