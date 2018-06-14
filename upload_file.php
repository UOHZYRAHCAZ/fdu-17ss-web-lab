<?php
     $oldname=$_FILES["file_upload"]["name"];
		 $names=explode(".",$oldname,2);
			$newname=$_POST["titleinput"].".".$names[1];
			$lrcfile=fopen("upload/".$_POST["titleinput"].".lrc","w");
      fwrite($lrcfile,"[ti:".$_POST["titleinput"]."]"."\r\n");
      fwrite($lrcfile,"[ar:".$_POST["artistinput"]."]"."\r\n");
			fwrite($lrcfile,$_POST["edit_lyric"]);
			fclose($lrcfile);
			move_uploaded_file($_FILES["file_upload"]["tmp_name"], "upload/" . $newname);
			header("Location: lab11.html");

?>
