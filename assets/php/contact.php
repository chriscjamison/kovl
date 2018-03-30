<?php
  $to      = 'kovlradio@gmail.com';
  $subject = "Message from " . $_POST["full_name"] . ", sent from kovlradio.com";
  $message = 
    "From: " . $_POST["full_name"] . "\n\n" . 
    "Email Address: " . $_POST["email_address"] . "\n" . 
    "Message: " . "\n" . $_POST["message"];
  $headers = 'From: no_reply@kovlradio.com' . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);

  $to = $_POST["email_address"];
  $subject = "You sent a message to KOVL Radio - Rulers Over The Land";
  $message = "Hey, " . $_POST["full_name"] . ".\n\n" . "We recently received a message from you and we thank you " . 
             "for listening to our station and reaching out to us. We will read your message and respond to you within " . 
             "the next day or two. \n\n" . 
             "We've included a copy of the message you sent to us below.\n\n" . 
             "\"" . $_POST["message"] . "\"\n\n" . 
             "Thank you so much for your feedback and we hope you continue to enjoy our shows! \n\n" .
             "KOVL Radio";
  $headers = "From: noreply@kovlradio.com" . "\r\n" . 
             "X-Mailer: PHP/" . phpversion(); 

  mail($to, $subject, $message, $headers);
?>

<html>
  <script>window.location.href = "http://kovlradio.com/index.htm#message=complete";</script>
</html>