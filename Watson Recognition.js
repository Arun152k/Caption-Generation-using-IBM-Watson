if (typeof msg.result == &#39;undefined&#39;) {
return &quot; &quot;;
}

// Text Extraction
if (typeof msg.result.images[0].text != &#39;undefined&#39;) {
var image_text = msg.result.images[0].text;
msg.payload = image_text;
msg.template = image_text;
if( image_text.length &gt;0 ) {
msg.template= &quot;Watson found the words: &quot;+image_text;
}
return msg;

}

var bestcolor = -1;
var colorscore = 0;
var c_id = 0;
var say = &quot;&quot;;
var item;

for ( c_id=0; c_id &lt; (msg.result.images[0].classifiers.length); c_id++ ){
// find the best color, if any
for( i =0; i&lt;(msg.result.images[0].classifiers[c_id].classes.length); i++ ){
var object = msg.result.images[0].classifiers[c_id].classes[i].class;
if ( object.includes(&quot;color&quot;) ) {
if( msg.result.images[0].classifiers[c_id].classes[i].score &gt; colorscore){
bestcolor = i;
colorscore = msg.result.images[0].classifiers[c_id].classes[i].score;
}
}
}

var bestItem = 0;
var itemScore = 0;
for( i =0; i&lt;(msg.result.images[0].classifiers[c_id].classes.length); i++ ){
var object = msg.result.images[0].classifiers[c_id].classes[i].class;
if ( !object.includes(&quot;color&quot;) ) {
if( msg.result.images[0].classifiers[c_id].classes[i].score &gt; itemScore){
bestItem = i;
itemScore = msg.result.images[0].classifiers[c_id].classes[i].score;
}
}
}

if( bestcolor != &quot;-1&quot;) {
// found a color
item = msg.result.images[0].classifiers[c_id].classes[bestcolor].class + &quot; &quot; +
msg.result.images[0].classifiers[c_id].classes[bestItem].class;
bestcolor = -1;
} else {
item = msg.result.images[0].classifiers[c_id].classes[bestItem].class;
}
// say = say + &quot; Watson&#39;s &quot; + msg.result.images[0].classifiers[c_id].name + &quot; classifier thinks this
picture contains a &quot; + item +&quot;.&quot;;
say = say + &quot; Watson thinks this picture contains a &quot; + item +&quot;.&quot;;
}
msg.payload = say;

return msg;
