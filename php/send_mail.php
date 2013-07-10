<?php

  $ch = curl_init();

  curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
  curl_setopt($ch, CURLOPT_USERPWD, 'api:key-1dow9lzqm1rva79c2qz2-e407f2qamk7');
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
  curl_setopt($ch, CURLOPT_URL, 'https://api.mailgun.net/v2/in2teck.mailgun.org/messages');
  curl_setopt($ch, CURLOPT_POSTFIELDS, array('from' => 'in2teck@in2teck.mailgun.org',
                                             'to' => 'info@in2teck.com',
                                             'subject' => 'Contacto pagina web: ' . $_GET['nombre'] . ' ' . $_GET['email'],
                                             'text' => $_GET['body']));

  $result = curl_exec($ch);
  curl_close($ch);

  return $result;

?>
