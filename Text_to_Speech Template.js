&lt;h3&gt;Voice Service Active&lt;/h3&gt;
&lt;script&gt;
var classes=&#39;Insert Picture&#39;;
function getdata(data)
{
var html = &#39;&#39;;
classes=&#39;&#39;;
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
// html+=&quot;&lt;div&gt;No Data&lt;/div&gt;&quot;;
// classes+= &quot;&lt;div&gt;No Data&lt;/div&gt;&quot;;
}

$(&#39;#scoretable&#39;).html(html);

}
(function(scope) {

scope.$watch(&#39;msg.payload&#39;, function(data) {

console.log(&#39;Position 2&#39;);
console.dir(data);
getdata(data);
scope.send({payload: classes});
}

);
})(scope);

// or overwrite value in your callback function ...
this.scope.action = function() { return x; }
&lt;/script&gt;
