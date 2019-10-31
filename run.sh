#!/usr/bin/env bash

# Remove previous running containers (force)
docker rm -f $(docker container ls -a -q -f name=fragment_dev)

xlatte --release fragment

# Exit if fails
if [[ ! $? -eq 0 ]]; then
    exit 1
fi

# Build fragment_dev
docker build --tag=fragment_dev .

# Exit if fails
if [[ ! $? -eq 0 ]]; then
    exit 1
fi

# Go to docker-compose folder & execute
cd docker/stateless-dev

if [[ $? -eq 0 ]]; then
    docker-compose up
    cd ..
fi
