var newImage=null;

function upload(){
  var jsImage=document.getElementById("htmlImg");
  var jsCan = document.getElementById("can");
  newImage = new SimpleImage(jsImage);
  newImage.drawTo(jsCan);
  
}

function makeGray(){
  var grayImage = document.getElementById("htmlImg");
  for (var pixel of grayImage.getValue()){
    var newPixel = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(newPixel);
    pixel.setBlue(newPixel);
    pixel.setGreen(newPixel);
  }
}
