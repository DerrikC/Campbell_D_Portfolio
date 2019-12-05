<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Form</title>
</head>

<body>
<h1>This is PHP Contact Form Project</h1>
<h3>Contact Us</h3>

<div class="container">

  <form action="data/contact.php" method="post">
    <label for="name-field">Name</label>
    <input id="name-field" id="name" name="name" placeholder="Your name..">

    <label for="email-field">Email</label>
    <input id="email-field" id="email" name="email" placeholder="Email..">

    <label for="subject-field">Subject</label>
    <input id="subject-field" id="subject" name="subject" placeholder="Subject..">

    <label for="">Message</label>
    <textarea id="message" name="message" placeholder="Write something.." style="height:200px"></textarea>

    <button type="submit" value="Submit">SEND</button>
  </form>
</div>

</body>
</html>