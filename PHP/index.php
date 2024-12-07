<?php
echo ("hello world");
echo "<br>";
$arr= array(
    'name'=> "john",
    'address'=>"Ktm",
    'contact_number'=>99999999,
    'isHappy'=>true,
    'hobby'=>"Playing Sports"


);

foreach($arr as $key=>$value){
    echo $value."<br>";
}

echo "<br>";

$arr1=array("john","KTM",99999999,true,"playing sports");

// echo "<pre>";
// print_r($arr1);
// echo "</pre>";


for($i=0;$i<count($arr1);$i++){
    
    echo $arr1[$i]."<br>";
}

// echo implode(", ", $arr);

// $str="a,b,c,d,e";
// echo "<pre>";
// print_r(explode(",", $str));
// echo "</pre?";

 ?>