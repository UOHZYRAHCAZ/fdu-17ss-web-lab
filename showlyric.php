<?php
header('Content-type:text/json');
$lryicsrc=$_GET["value"];
$myfile = fopen("./upload/".$lryicsrc.".lrc", "r");
$mylryic=fread($myfile,filesize("./upload/".$lryicsrc.".lrc"));
fclose($myfile);
echo  json_encode($mylryic);
?>
