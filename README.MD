# docker-wasserzaehler

This dockerfile is published on [https://cloud.docker.com/u/jomjol/repository/docker/jomjol/wasserzaehler](https://cloud.docker.com/u/jomjol/repository/docker/jomjol/wasserzaehler)

It is the content of a Dockerfile for an water meter described here: [https://github.com/jomjol/water-meter-system-complete](https://github.com/jomjol/water-meter-system-complete)

## Changelog - lastest version
##### 3.0.0 (2019-10-13)
* Load of default configuration on newly installed system with mounted of empty log / config directory
* Usage of previous values and optional conistency check of readout with error information
### [Full Changelog](Changelog.md)


## Usage
The docker container can be found as: jomjol/wasserzaehler
It is bases on a Python 3.7 version and therefore pretty big. This can be improved in further versions. The usage of the server can be found in the [original post](https://github.com/jomjol/water-meter-system-complete). Starting in Docker it provides an server listening on port 3000. Therefore the start minimum needs a mapping of this port to the outside:

`docker run -p 3000:3000 wasserzaehler`

The setting and logging folders can be binded to outside directories, therefore a configuration without rebuild of the container is possible. Details see in the docker description.

`docker run -p 3000:3000 --mount type=bind,source=/volume/configpath,target=/config`

`docker run -p 3000:3000 --mount type=bind,source=/volume/configpath,target=/config --mount type=bind,source=/volume/log,target=/log`
