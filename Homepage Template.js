&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
&lt;title&gt;Visual Recognition&lt;/title&gt;
&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
&lt;link rel=&quot;stylesheet&quot;
href=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css&quot;&gt;
&lt;script src=&quot;https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js&quot;&gt;&lt;/script&gt;
&lt;style&gt;
.bg-light {
background-color: #00838F!important;
}
h4 {
color: #fff;
}

.custom-file {
margin-bottom: 14px;
}

.table .thead-dark th {
color: #fff;
background-color: #307d76;
border-color: #307d76;
}
h5{
text-align: center;

color: #bd6666;
}
.text-center {
text-align: center;
}
.imgdiv
{
align:center;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;nav class=&quot;navbar navbar-expand-sm bg-light&quot;&gt;
&lt;div class=&quot;justify-content-center&quot;&gt;
&lt;h4 class=&quot;text-center&quot;&gt;Object Detection using Visual Recognition &lt;/h4&gt;
&lt;/div&gt;
&lt;/nav&gt;
&lt;br&gt;&lt;br&gt;
&lt;div class=&quot;containetr&quot;&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;div class=&quot;col-sm-2&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-sm-8&quot;&gt;

&lt;div class=&quot;custom-file&quot;&gt;

&lt;input type=&quot;file&quot; name=&quot;pic&quot; accept=&quot;image/*&quot;

onchange=&quot;readURL(this);&quot; class=&quot;custom-file-input&quot; id=&quot;customFile&quot;&gt;

&lt;label class=&quot;custom-file-label&quot;

for=&quot;customFile&quot;&gt;Choose file&lt;/label&gt;
&lt;/div&gt;

&lt;br&gt;
&lt;div class=&quot;imgdiv&quot;&gt;
&lt;img src=&quot;#&quot; id=&quot;blah&quot; class=&quot;rounded&quot;

alt=&quot;Selected Image&quot;&gt;

&lt;/div&gt;
&lt;!--&lt;md-button ng-click=&quot;send({payload:action()})&quot;&gt;
Predict
&lt;/md-button&gt;--&gt;
&lt;button type=&quot;submit&quot; ng-click=&quot;send({payload:action()})&quot;

class=&quot;btn btn-success&quot;&gt;Submit&lt;/button&gt;

&lt;/div&gt;
&lt;div class=&quot;col-sm-2&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;div class=&quot;col-sm-2&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-sm-8&quot;&gt;
&lt;h5&gt; The Recognised Objects &lt;/h5&gt;
&lt;table class=&quot;table&quot;&gt;
&lt;thead class=&quot;thead-dark&quot;&gt;
&lt;tr&gt;
&lt;th&gt;Class&lt;/th&gt;
&lt;th&gt;Score&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody id=&quot;scoretable&quot;&gt;
&lt;/tbody&gt;
&lt;/table&gt;

&lt;/div&gt;
&lt;div class=&quot;col-sm-2&quot;&gt;
&lt;/div&gt;

&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
&lt;script&gt;
var x=&quot;&quot;;
function readURL(input) {
if (input.files &amp;&amp; input.files[0]) {
var reader = new FileReader();

reader.onload = function (e) {
$(&#39;#blah&#39;)
.attr(&#39;src&#39;, e.target.result)
.width(150)
.height(200);
};

reader.readAsDataURL(input.files[0]);
x= input.files[0]

}
}
function getdata(data)
{
var html = &#39;&#39;;
var classes=&#39;&#39;;

if(data != 0)
{
$.each(data, function(i){
var row = data[i];
console.log(row);
if(row.score&gt;0.6)
{

classes +=row.class;

classes+=&#39;, &#39;

html += &#39;&lt;tr&gt;&#39;;
html += &#39;&lt;td&gt;&#39;;
html += row.class;
html += &#39;&lt;/td&gt;&#39;;
html += &#39;&lt;td&gt;&#39;;
html += row.score;
html += &#39;&lt;/td&gt;&#39;;
html += &#39;&lt;/tr&gt;&#39;;
localStorage.setItem(&quot;message&quot;,classes);

}
});
}
else
{

html+=&quot;&lt;div&gt;No Data&lt;/div&gt;&quot;;
classes+= &quot;&lt;div&gt;No Data&lt;/div&gt;&quot;;

}
$(&#39;#scoretable&#39;).html(html);

}
(function(scope) {

scope.$watch(&#39;msg.payload&#39;, function(data) {
console.log(&#39;Position 2&#39;);
console.dir(data);
getdata(data);

});
})(scope);

// or overwrite value in your callback function ...
this.scope.action = function() { return x; }

&lt;/script&gt;
