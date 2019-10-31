#!/usr/bin/env bash


function stateless_dev(){
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
}


case $1 in
    stateless-dev)
    stateless_dev
    ;;
    build-image)
    echo Building...
    ;;
    *)
    echo "Usage: run.sh [command]"
    echo
    echo "Commands:"
    echo
    echo " stateless-dev    Runs a the docker/stateless-dev container"
    echo " build-image      Builds the fragment image"
    echo
    echo

    exit 1
    ;;
esac