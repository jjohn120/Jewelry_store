<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Jewelry Store</title>
    <link href="index.css" rel="stylesheet" type="text/css">
    <link href="Appointment.css" rel="stylesheet" type="text/css">
</head>
<body>

<header>
    <h1>Welcome to Our Online Jewelry Store</h1>
</header>

<nav>
    <a href="index.html">Home</a>
    <a href="rings.html">Rings</a>
    <a href="necklaces.html">Necklaces</a>
    <a href="Bracelets.html">Bracelets</a>
    <a href="Earrings.html">Earrings</a>
    <a href="Appointment.html">Book Appointment</a>
</nav>

<div class="container">
    <h2>Book an Appointment</h2>
    <form id="booking-form" action="https://formsubmit.co/98e9e2bfb837420b74a2ab4fc2da3ebd" method="POST">
        <label>Full name</label>
        <input type="text" name="name" required>
        <label>Email</label>
        <input type="email" name="email" required>
        <label>Number of people attending</label>
        <input type="number" name="Number of people attending" required>
        <label>Date</label>
        <input type="date" name="Date" id="appointment-date" required>
        <label>Time</label>
        <input type="time"name="time" id="appointment-time" required></input>
        <input type="hidden" name="_autoresponse" value="Thank you for booking your appointment! 
        You should be receiving your confirmation email shortly! Your appointment information is below!">
        <input type="hidden" name="_next" value="https://gorgeous-platypus-25d0b5.netlify.app/appointment">
        <button type="submit">Book Appointment</button>
    </form>
    <div id="message"></div>
</div>

<div id="calendar"></div>

<footer>
    <p>&copy; 2024 Online Jewelry Store</p>
</footer>
<?php

$conn = mysqli_connect("sql5.freesqldatabase.com","sql5715888","TDKQc3ctig","sql5715888");
?>




</body>
</html>
