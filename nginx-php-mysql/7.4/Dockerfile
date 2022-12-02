FROM php:7.4-fpm-alpine

# Intl
RUN apk add icu-dev 
RUN docker-php-ext-configure intl && docker-php-ext-install intl

# Install dependencies
RUN apk upgrade --update && apk add --no-cache \
    libxml2-dev libzip-dev \
    && docker-php-ext-install pdo_mysql xml soap zip

RUN apk add --update nodejs npm

RUN curl -sS https://getcomposer.org/download/2.0.8/composer.phar --output /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer

RUN set -eux; \
	addgroup -g 1000 -S host-user; \
	adduser -u 1000 -D -S -G host-user host-user

# Create code dir
RUN mkdir /code && chown host-user: /code

USER host-user

WORKDIR /code
