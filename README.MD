# docker-wasserzaehler

This dockerfile is published on [https://cloud.docker.com/u/jomjol/repository/docker/jomjol/wasserzaehler](https://cloud.docker.com/u/jomjol/repository/docker/jomjol/wasserzaehler)

It is the content of a Dockerfile for an water meter described here: [https://github.com/jomjol/water-meter-system-complete](https://github.com/jomjol/water-meter-system-complete)

## Version
##### 1.0.0 Initial Version implemented in NodeJS not followed anymore - depreceated
* Tensorflow in standard configuration is expecting a processor with AVX/AVX2 library. Therefor there is some limitations for usage on some processor, which are e.g. used in Synology Diskstations. Therefore this version of Dockerfile is not working on all systems
##### 2.0.0 Implemenation of Python code and environment
* usage of self build / compiled version of Tensorflow wihtout need for AVX/AVX2 processor library
* implementation of improved analog meter network with sin/cos algorithm
 


## Usage
The docker container can be found as: jomjol/wasserzaehler
It is bases on a Python 3.7 version and therefore pretty big. This can be improved in further versions. The usage of the server can be found in the [original post](https://github.com/jomjol/water-meter-system-complete). Starting in Docker it provides an server listening on port 3000. Therefore the start minimum needs a mapping of this port to the outside:

`docker run -p 3000:3000 wasserzaehler`

The setting and logging folders can be binded to outside directories, therefore a configuration without rebuild of the container is possible. Details see in the docker description.