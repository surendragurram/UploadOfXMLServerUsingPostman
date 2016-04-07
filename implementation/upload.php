<?php
	if(isset($_POST) == true){
		$errors = array();
		
		
		session_start();
		
		$file_name = $_FILES['file']['name'];//file		
		$file_tmp = $_FILES['file']['tmp_name'];//temporary file name
		$t = time();
		$date = date("Y-m-d",$t);
		$b = time ();  
		date_default_timezone_set('Europe/Berlin');
		$ts = explode(":", date("G:i:s:ms",$b));
		$times = $ts[0]."h".$ts[1]."m".$ts[2]."s".$ts[3]."ms";
		
		
        $session_id = session_id();
		$data=$date."_".$times."_sid_=".$session_id."_";
		
		
	   if(empty($errors)==true){
			move_uploaded_file($file_tmp,"D:/server/htdocs/server_files/".$data.$file_name);//file to upload to server
	    }
	}   
	       
?>	 