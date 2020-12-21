<?php
   $to = "jonnib24@gmail.com"; 
   //Getting the 'to' textbox data from the form

   /* If you are using GET method ,then use $_GET[] */

   $subject = "Jonathan Bryan Web Page" ;
   $message = $_POST['comment'];
   $headers = "From: ".$_POST['name'].";".$_POST['mail'];
   echo $headers;

   // If you leave the $headers from field empty,then your server mail ID will be displayed 
   // and it may be moved to the spam section of the email

   mail($to,$subject,$message,$headers);

   /* Done , Your mail will be sent to the email address you want
   */
?>