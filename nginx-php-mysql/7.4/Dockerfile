FROM php:7.4-fpm-alpine

# Install dependencies
RUN apk upgrade --update && apk add --no-cache \
    libxml2-dev libzip-dev \
    && docker-php-ext-install pdo_mysql xml soap zip
    
RUN curl -sS https://getcomposer.org/download/2.0.8/composer.phar --output /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer

# Create code dir
RUN mkdir /code

WORKDIR /code
