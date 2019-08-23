const jpeg = require('jpeg-js');
const opencv = require('opencv4nodejs');
const fs = require('fs');
const tf = require('@tensorflow/tfjs')


var express = require('express');
var app = express();
app.use(express.static('config/neuralnets'));

app.listen(33123), function () {
    console.log('File Server for Model on port 33123!');
  };


function ImageResize(input, output, dx, dy)
{
    var im = opencv.imread(input).resize(dx, dy);
    opencv.imwrite(output, im);
}

function load_image_to_tensor(image_name, dx, dy)
{
    var jpegData = fs.readFileSync(image_name);
    var rawImageData = jpeg.decode(jpegData);
    var rawImOhneAlpha = [];
    fLen = rawImageData.data.length;
    for (i = 0; i < fLen; i++) {
      if (((i+1) % 4) != 0)
      {
        rawImOhneAlpha.push(rawImageData.data[i]);
      }
    }
    var image_tensor = tf.tensor(rawImOhneAlpha, [1, dx, dy, 3])
    return image_tensor;
}

module.exports = 
{
    ImageResize,
    load_image_to_tensor
}