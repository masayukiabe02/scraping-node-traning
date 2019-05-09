FROM node:8.12-stretch

ENV LC_ALL ja_JP.UTF-8

# http://docs.docker.jp/engine/articles/dockerfile_best-practice.html
# 日本語化も行っている
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev locales\
    autoconf libtool make nasm pkg-config\
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/* \
 && echo "ja_JP.UTF-8 UTF-8" > /etc/locale.gen \
 && locale-gen ja_JP.UTF-8 \
 && /usr/sbin/update-locale LANG=ja_JP.UTF-8

#COPY dockerfiles/nuxtjs/files/etc/profile.d/common.sh /etc/profile.d/common.sh

ENV APP_ROOT_DIR /app
WORKDIR $APP_ROOT_DIR

ENV HOST 0.0.0.0
COPY . $APP_ROOT_DIR