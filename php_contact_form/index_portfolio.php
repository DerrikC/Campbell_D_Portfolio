<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> Contact | derrikxavier </title>
</head>

<body>
<h1>Contact</h1>
<h3>Get in touch!</h3>

<div class="container">

  <form action="data/contact.php" method="post">
    <label for="name-field">Name</label>
    <input id="name-field"  name="name" placeholder="Your name..">

    <label for="email-field">Email</label>
    <input id="email-field" name="email" placeholder="Email..">

    <label for="subject-field">Subject</label>
    <input id="subject-field" name="subject" placeholder="Subject..">

    <label for="message-field">Message</label>
    <textarea id="message-field" name="message" placeholder="Write something.." style="height:200px"></textarea>

    <button type="submit" value="Submit">SEND</button>
  </form>
</div>

</body>
</html>
