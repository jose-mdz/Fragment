# https://hub.docker.com/_/php/
FROM php:7-apache

RUN apt-get update -y && apt-get install -y libpng-dev curl libcurl4-openssl-dev

RUN docker-php-ext-install pdo pdo_mysql gd curl mysqli

COPY . /var/www

RUN a2enmod rewrite
RUN service apache2 restart