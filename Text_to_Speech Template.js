<h3>Voice Service Active</h3>
<script>
var classes=',';
function getdata(data)
	{
		 var html = '';
		 classes='';
            if(data != 0)
			{
				$.each(data, function(i){
				var row = data[i];
				console.log(row);
				if(row.score>0.6)
				{
			
		                
				    classes +=row.class;
	                classes+=', '
				    html += '<tr>';
    				html += '<td>';
    				html +=  row.class;
    				html += '</td>';
    				html += '<td>';
    				html +=  row.score;
    				html += '</td>';
    				html += '</tr>';
    				localStorage.setItem("message",classes);
				}
			});
			}
			else
				{
				   // html+="<div>No Data</div>";
				 //   classes+= "<div>No Data</div>";
				}
			
			$('#scoretable').html(html);
	}
    (function(scope) {
        scope.$watch('msg.payload', function(data) {
            
            console.log('Position 2');
            console.dir(data);
            getdata(data);
            scope.send({payload: classes});
        }
        
        );
    })(scope);
    
    
// or overwrite value in your callback function ...
this.scope.action = function() { return x; }
</script>
