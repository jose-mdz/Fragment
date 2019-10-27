# https://hub.docker.com/_/php/
FROM php:7-apache

RUN apt-get update -y && apt-get install -y libpng-dev curl libcurl4-openssl-dev

RUN docker-php-ext-install pdo pdo_mysql gd curl mysqli

# Copy Fragment sources
COPY ./data /var/www/data
COPY ./html /var/www/html
COPY ./latte /var/www/latte

# Change /data owner
RUN chown www-data /var/www/data

# Copy .htaccess
RUN cp /var/www/html/fragment/files/install/htaccess_original.txt /var/www/html/.htaccess

# Add mod_rewrite module
RUN a2enmod rewrite

# Start Apache
RUN service apache2 restart