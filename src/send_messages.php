<?php 

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    if ($_POST['name'] and $_POST['phone']){
        mail('gazgoldernn@bk.ru', 'Заказ завонка от '.$_POST['name'], "Посетитель c сайта GazgolderNN.ru\nТелефон: ".$_POST['phone']);
        echo true;
        
    }
    else{
        echo false;
    }
    http_response_code(200);
?>