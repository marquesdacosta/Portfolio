<?php  
//si le bouton envoyer a été cliqué  
if (isset($_GET["envoyer"])){   
//on recupère l'adresse email  
$email = $_GET["mail"];      
//on recupère l'objet du message  
$objet = $_GET["objet"];  
//on recupère le message  
$message = $_GET["msg"];  

$to = "tomasmarquesdacosta@gmail.com";      
$headers = "From: ". $email;    
//on envoie le message avec la fonction mail  
if (mail($to,$objet,$message,$headers))   
//si le message a été envoyé, on le confirme  
{   
echo " ton message est bien envoyé.";    
}   
//sinon on n'affiche un message d'erreur  
else   
{   
echo "Une erreur s'est produite";   
}   
}   
?>