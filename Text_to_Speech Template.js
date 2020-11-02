/*
The Function getdata() iterates over all the classes present in the image, as identified by the Visual Recognition Service.
The necessary classes are appended to the 'voice_message' variable.
Once all the iterations are completed, the voice_message variable is copied to msg.payload and is then sent to the Watson Text to Speech
Service, to be played as audio output.
*/
<h3>Voice Service Active</h3>
<script>
var voice_message=',';
function getdata(data)
	{
	    voice_message='';
            if(data != 0)
			{
				$.each(data, function(i){
				var row = data[i];
				console.log(row);
				if(row.score>0.6)  //Accepts any Class with Probability score greater than 0.6 (Minimum Threshold).
				{
				voice_message +=row.class;
	                	voice_message+=', '
				}
			});
			}
	}
    (function(scope) {
        scope.$watch('msg.payload', function(data) {
            
            console.log('Position 2');
            console.dir(data);
            getdata(data);
            scope.send({payload: voice_message});
        }
        
        );
    })(scope);
this.scope.action = function() { return x; }
</script>
