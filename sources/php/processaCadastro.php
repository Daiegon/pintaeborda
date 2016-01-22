<?php
$nome = $_POST['nome'];
$whatsapp = $_POST['whatsapp'];
$data = date('Y-m-d H:i:s');

$myfile = fopen("data.txt", "w") or die("Unable to open file!");
$txt = "$nome, $whatsapp, $data\n";
fwrite($myfile, $txt);
fclose($myfile);

echo 'ok';

?>