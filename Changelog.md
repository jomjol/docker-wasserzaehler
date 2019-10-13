## Changelog
##### 3.0.0 (2019-10-13)
* Load of default configuration on newly installed system with mounted of empty log / config directory
* Usage of previous values and optional conistency check of readout with error information
##### 2.0.0 Implemenation of Python code and environment
* usage of self build / compiled version of Tensorflow wihtout need for AVX/AVX2 processor library
* implementation of improved analog meter network with sin/cos algorithm
##### 1.0.0 Initial Version implemented in NodeJS not followed anymore - depreceated
* Tensorflow in standard configuration is expecting a processor with AVX/AVX2 library. Therefor there is some limitations for usage on some processor, which are e.g. used in Synology Diskstations. Therefore this version of Dockerfile is not working on all systems