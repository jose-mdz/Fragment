#!/usr/bin/env bash

#
# Builds the fragment image and publishes it.
# It will require to be logged into docker hub
#

docker image rm -f menendezpoo/fragment:latest

docker build --tag=menendezpoo/fragment:latest ../.

docker push menendezpoo/fragment:latest