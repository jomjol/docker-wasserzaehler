# docker-wasserzaehler

This dockerfile is published on [https://cloud.docker.com/u/jomjol/repository/docker/jomjol/wasserzaehler](https://cloud.docker.com/u/jomjol/repository/docker/jomjol/wasserzaehler)
It is the content of a Dockerfile for an water meter described here: [https://github.com/jomjol/water-meter-system-complete](https://github.com/jomjol/water-meter-system-complete)

## Version
##### 1.0 Initial Version
* Inital implementatin of water-meter-system-complete (usage of Version 2.2)


## Usage
The docker container can be found as: jomjol/wasserzaehler
It is bases on a full ubuntu version and therefore pretty big. This can be improved in further versions. The usage of the server can be found in the [original post](https://github.com/jomjol/water-meter-system-complete). Starting in Docker it provides an server listening on port 3000. Therefore the start minimum needs a mapping of this port to the outside:

'docker run -p 3000:3000 wasserzaehler'

The container contains a running configuration. The setting is fitting to an dedicated setup, used for development. Therefore usually a adaption of the configuration is needed. All information is stored in the '/code/config' folder inside the adapter. 
So you can either make a subversion of the container with modificated contend or map this folder to an outside folder, containing the corresponding content.
