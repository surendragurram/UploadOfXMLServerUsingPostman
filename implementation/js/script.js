$(function(){

//event from index.html of div tag
	$("#drop-box").click(function(){
		$("#upl").click();
	});

	// To prevent Browsers from opening the file when its dragged and dropped on to the page
	$(document).on('drop dragover', function (e) {
        e.preventDefault();
    }); 

	// Add events button
	$('input[type=file]').on('change', fileUpload);

	// File uploader function

	function fileUpload(event){  
		$("#drop-box").html("<p>"+event.target.value+" uploading...</p>");//it displays file name
		files = event.target.files;
		var data = new FormData();
		var error = 0;
		//getting file 
		for (var i = 0; i < files.length; i++) {
  			var file = files[i];
  			console.log(file.size);
  			data.append('file', file, file.name);
  			//checking only image file.
			/*if(!file.type.match('image.*')) {
		   		$("#drop-box").html("<p> Images only. Select another file</p>");
		   		error = 1;
		  	}else if(file.size > 1048576){//size of image
		  		$("#drop-box").html("<p> Too large Payload. Select another file</p>");
		   		error = 1;
		  	}else{
		  		data.append('file', file, file.name);
		  	}*/
	 	}
	 	if(!error){
	 		//creating XMLHttpRequest request
		 	var xhr = new XMLHttpRequest();
		 	//redirecting to upload.php file
		 	xhr.open('POST', 'http://bosch/updated/upload.php', true);
		 	xhr.send(data);
		 	xhr.onload = function () {
		 		//status of uploaded file
				if (xhr.status === 200) {
					$("#drop-box").html("<p> File Uploaded. Select more files</p>");
				} else {
					$("#drop-box").html("<p> Error in upload, try again.</p>");
				}
			};
		}
	}

});