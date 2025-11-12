<?php
// --- PHP Backend Section ---
$servername="localhost";
$username="root";
$password="";
$databasename="mn";
$conn=mysqli_connect($servername,$username,$password,$databasename);
if(!$conn){
    die("Connection failed:".mysqli_connect_error());
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $subject = htmlspecialchars($_POST['subject']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $sql_query = "INSERT INTO details (name,subject,phone,email,message)
                  VALUES ('$name','$subject','$phone','$email','$message')";

    if (mysqli_query($conn, $sql_query)) {
        echo "<script>
                alert('✅ Your message has been submitted successfully!');
                window.location.href='#home';
              </script>";
    } else {
        echo "<script>alert('❌ Error submitting details');</script>";
    }
    mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BookParadise | One Page</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    html {
        scroll-behavior: smooth;
    }
  </style>
</head>
<body>

  <!-- Navbar -->
  <header class="navbar" id="home">
    <a href="#home" class="logo">BookParadise</a>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  </header>


  <!-- HERO SECTION -->
  <section class="hero">
    <div class="hero-text">
      <h1>"Beyond their purpose as a source of information and entertainment, books play a vital role in personal and societal development"</h1>
      <p>We have a huge collection of books in multiple category.
      BookParadise offers all books at fair price and extends, customer satisfaction by providing user-friendly search engine, easy payment options, and quicker delivery systems. We provide exciting offers and discounts on our books.</p>
      <a href="#products" class="explore-btn">Explore Books</a>
    </div>
    <div class="hero-image">
      <img src="images/banner.jpg" alt="Books banner">
    </div>
  </section>


  <!-- ABOUT SECTION -->
  <section id="about" class="featured">
<center><h2>About Us</h2></center>
    <p>BookParadise is also looking to partner with all the sellers around the country.
    We have an affiliate program that pays a 10% commission on every sale. Anyone can join the program and be rewarded for advocacy of books.
    BookParadise wants to give back to everyone who promotes books, authors, and independent bookstores!
    We give away over 65% of our profit margin to stores, and authors who make up the inspirational culture around books!</p>
  </section>


  <!-- PRODUCTS SECTION -->
  <section class="products" id="products">
    <h2>Our Books</h2>
    <div class="controls">
      <input type="text" id="searchBox" placeholder="Search...">
      <select id="sortSelect">
        <option value="">Sort by</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
    <div id="productList" class="product-list"></div>
  </section>


  <!-- MODAL -->
  <div id="overlay"></div>
  <div class="modal" id="bookModal">
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <div class="modal-body">
        <div class="modal-left">
          <img id="modalImage" src="" alt="">
        </div>
        <div class="modal-right">
          <h2 id="modalTitle"></h2>
          <p class="price" id="modalPrice"></p>
          <button class="add-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>


  <!-- CONTACT SECTION -->
  <section id="contact" class="wrapper">
    <h2 class="title">Contact Us</h2>
    <form method="POST" action="">
      <div class="input_field">
        <input type="text" placeholder="Name" name="name" required>
      </div>
      <div class="input_field">
        <input type="text" placeholder="Subject" name="subject">
      </div>
      <div class="input_field">
        <input type="text" placeholder="Phone" name="phone" required>
      </div>
      <div class="input_field">
        <input type="text" placeholder="Email" name="email">
      </div>
      <div class="input_field">
        <textarea placeholder="Message" name="message" required></textarea>
      </div>
      <div class="submitbtn">
        <input type="submit" value="Send Message">
      </div>
    </form>
  </section>


  <!-- FOOTER -->
  <footer>
    <p>© 2025 BookParadise | All Rights Reserved.</p>
  </footer>

  <script src="main.js"></script>

</body>
</html>
