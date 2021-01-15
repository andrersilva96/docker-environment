FROM php:7.4-fpm-alpine

# Install dependencies
RUN apk upgrade --update && apk add --no-cache \
    npm libxml2-dev libzip-dev libpng-dev libjpeg-turbo-dev freetype-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo_mysql xml soap zip gd
# gd image installed if you want to uninstall just exlude docker-php-ext-configure
# and libzip-dev libpng-dev libjpeg-turbo-dev

RUN curl -sS https://getcomposer.org/download/2.0.8/composer.phar --output /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer

# Create code dir
RUN mkdir /code

WORKDIR /code
