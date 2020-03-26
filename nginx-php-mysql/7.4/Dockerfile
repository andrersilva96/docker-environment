FROM php:7.4-fpm-alpine

# Install dependencies
RUN apk upgrade --update && apk add --no-cache \
    libxml2-dev libzip-dev \
    && docker-php-ext-install pdo_mysql xml soap zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && composer global require hirak/prestissimo --no-plugins --no-scripts

# Create code dir
RUN mkdir /code

WORKDIR /code
