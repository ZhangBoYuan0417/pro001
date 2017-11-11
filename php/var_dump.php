<?php
//整型
$var = 123;
echo $var;
var_dump($var);
$a = 256;
$b = -256;
$c = 0256;
$d = 0x256;
var_dump($a,$b,$c,$d);

//浮点型
$float = 12.3;
var_dump($float);
$float = -12.3;
var_dump($float);
$float = 2e3;
var_dump($float);
$float = 2e-3;
var_dump($float);

//布尔型
$bool = true;
var_dump($bool);
$bool = false;
var_dump($bool);

//字符串
$username = "zby";
$email = "863938551@qq.com";
$string = '';
var_dump($string);
var_dump($username);
echo $username,"<br/>";
echo '$username',"<br/>";//单引号不解析变量
echo "$username","<br/>";//双引号解析变量

//He said "I'm Fine"
// $str = 'He said "I'm Fine"'
// $str = "He said "I'm Fine""
// $str = 'He said "I\'m Fine"';
$str = "He said \"I'm Fine\"";
echo $str,"<br/>";

$var = 123;
echo "\$var的值为$var","<br/>";
echo '\$var的值为$var';

$name = "zby";
echo "我的名字叫{$name}hahaha";