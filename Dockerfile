FROM node-tensorflow-opencv

RUN npm install jpeg-js fs express request

COPY . /code

CMD ["node", "wasseruhr.js"] 


