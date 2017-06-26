<?php
/*
 *  CONFIGURE EVERYTHING HERE
 */

// an email address that will be in the From field of the email.
$from = 'Projetistas Periféricos <contato@projetistasperifericos.org>';

// an email address that will receive the email with the output of the form
$sendTo = 'Laryssa Rocha <laryssa.vrocha@gmail.com>, Projetistas Periféricos <contato@projetistasperifericos.org>';

// subject of the email
$subject = 'Contato - Projetistas Periféricos';

// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array('nome' => 'Nome', 'email' => 'E-mail', 'assunto' => 'Assunto', 'mensagem' => 'Mensagem'); 

// message that will be displayed when everything is OK :)
$okMessage = 'Mensagem foi enviada com sucesso!';

// If something goes wrong, we will display this message.
$errorMessage = 'Oops! Houve um problema ao enviar sua mensagem, tente novamente mais tarde';

/*
 *  LET'S DO THE SENDING
 */

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
// error_reporting(E_ALL & ~E_NOTICE);

try
{

    if(count($_POST) == 0) throw new \Exception('Form is empty');
            
    $emailText = "Contato enviado pelo site\n=============================\n";

    foreach ($_POST as $key => $value) {
        // If the field exists in the $fields array, include it in the email 
        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    // All the neccessary headers for the email.
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    
    // Send email
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}


// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
// else just display the message
else {
    echo $responseArray['message'];
}