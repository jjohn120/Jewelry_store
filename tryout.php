<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Email sender</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <div class="card-body">
        <form action=sendMail.php method="POST">
            <div class="mb-3">
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname" name="full_name" class="form-control"/>

            </div>
            <div class="mb-3">
                <label for="Email_address">Email</label>
                <input type="text" id="Email" name="Email" class="form-control"/>

            </div>
            <div class="mb-3">
                <label for="subject">Full Name</label>
                <input type="text" id="subject" name="subject " class="form-control"/>

            </div>
            <div class="mb-3">
                <label for="message">Message</label>
                <input type="text" id="Message" name="Message" class="form-control"/>
            </div>
            <div class="mb-3">
                <button type="submit" name="submitSContact" class="btn btn-primary">Submit</button>
            </div>
            
        </form>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>