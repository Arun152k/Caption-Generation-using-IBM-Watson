<!DOCTYPE html>
<html lang="en">
<head>
  <title>Visual Recognition</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <style>
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
	</style>
</head>
<body>
	<nav class="navbar navbar-expand-sm bg-light">
		<div class="justify-content-center">
			<h4 class="text-center">Object Detection using Visual Recognition </h4>
		</div>
	</nav>
	<br><br>
    <div class="containetr">
		<div class="row">
			<div class="col-sm-2">
			</div>
			<div class="col-sm-8">
				
					<div class="custom-file">
					
						<input type="file" name="pic" accept="image/*" onchange="readURL(this);" class="custom-file-input" id="customFile">
						
						<label class="custom-file-label" for="customFile">Choose file</label>
					</div>
					<br>
					<div class="imgdiv">
						<img src="#" id="blah" class="rounded" alt="Selected Image">
					</div>
					<!--<md-button ng-click="send({payload:action()})">
						Predict
					</md-button>-->
					<button type="submit" ng-click="send({payload:action()})" class="btn btn-success">Submit</button>
				
				
			</div>
			<div class="col-sm-2">
			</div>
		</div>
		<div class="row">
			<div class="col-sm-2">
			</div>
			<div class="col-sm-8">
			<h5> The Recognised Objects  </h5>
			<table class="table">
				<thead class="thead-dark">
				  <tr>
					<th>Class</th>
					<th>Score</th>
				  </tr>
				</thead>
				<tbody id="scoretable">
				</tbody> 
			  </table>
			  
			 </div>
			<div class="col-sm-2">
			</div>
	</div>	
</body>
</html>
<script>
var x="";
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
                    .width(150)
                    .height(200);
            };

            reader.readAsDataURL(input.files[0]);
            x= input.files[0]

            
            

        }
    }
    function getdata(data)
	{
		 var html = '';
		 var classes='';
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
		            html+="<div>No Data</div>";
	      		    classes+= "<div>No Data</div>"; 
				}
			$('#scoretable').html(html);
	}
    (function(scope) {
        scope.$watch('msg.payload', function(data) {
            console.log('Position 2');
            console.dir(data);
            getdata(data);

        });
    })(scope);
    
    
// or overwrite value in your callback function ...
this.scope.action = function() { return x; }

</script>
