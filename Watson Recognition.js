// This node function identifies the dominant colour and class present in the Image and generates a suitable caption for the Image.
if (typeof msg.result == 'undefined') {
    return " ";
}

// Text Extraction
if (typeof msg.result.images[0].text != 'undefined') {
    var image_text = msg.result.images[0].text;
    msg.payload = image_text;
    msg.template = image_text;
    if( image_text.length >0 ) {
       msg.template= "Watson found the words: "+image_text;
    }
    return msg;
}

var bestcolor = -1;
var colorscore = 0;
var c_id = 0;
var say = "";
var item;

for ( c_id=0; c_id < (msg.result.images[0].classifiers.length); c_id++ ){
    // find the best color, if any
    for( i =0; i<(msg.result.images[0].classifiers[c_id].classes.length); i++ ){
      var object = msg.result.images[0].classifiers[c_id].classes[i].class;
      if ( object.includes("color") ) {
        if( msg.result.images[0].classifiers[c_id].classes[i].score > colorscore){
            bestcolor = i;
            colorscore = msg.result.images[0].classifiers[c_id].classes[i].score;
        }
      }
    }
 
    var bestItem = 0;
    var itemScore = 0;
    for( i =0; i<(msg.result.images[0].classifiers[c_id].classes.length); i++ ){
      var object = msg.result.images[0].classifiers[c_id].classes[i].class;
      if ( !object.includes("color") ) {
        if( msg.result.images[0].classifiers[c_id].classes[i].score > itemScore){
            bestItem = i;
            itemScore =  msg.result.images[0].classifiers[c_id].classes[i].score;
        }
      }
    }
 
     if( bestcolor != "-1") {
        // found a color
        item = msg.result.images[0].classifiers[c_id].classes[bestcolor].class + " " + msg.result.images[0].classifiers[c_id].classes[bestItem].class;
        bestcolor = -1;
    } else {
       item = msg.result.images[0].classifiers[c_id].classes[bestItem].class;
    }
    say = say + " Watson thinks this picture contains a " + item +".";
}
msg.payload =  say;
return msg;
