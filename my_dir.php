
<?php
header('Content-type:text/json');
$list=scandir("upload");
echo  json_encode($list);
?>
