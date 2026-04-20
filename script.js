<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Early Bird - Login</title>
  
  <!-- CSS wali file ko yaha jod rahe hain -->
  <link rel="stylesheet" href="style.css">
  
  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body>

  <div class="login-card">
    
    <!-- Logo: Figma se export karke 'bird.png' naam se save kar lena -->
    <img src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png" alt="Logo" class="logo">
    
    <h2 class="login-title">Login</h2>
    
    <div class="input-group">
      <input type="email" class="input-box" placeholder="Email or username" id="loginEmail">
    </div>
    
    <div class="input-group">
      <input type="password" class="input-box" placeholder="Password" id="loginPassword">
    </div>
    
    <button onclick="checkLogin()"class="login-btn">Login</button>
    
    <a href="#" class="forgot-link">Forgot Password</a>
    
    <p class="signup-text">
      Don't have an account? <a href="signup.html">Sign Up</a>
    </p>
    
  </div>
  <script src="script.js"></script>

<!-- Dark Mode Button -->
<button class="dark-toggle" onclick="toggleDark()">🌙</button>

<!-- Loading Screen -->
<div class="loader-overlay" id="loader">
  <div class="loader"></div>
</div>

<!-- Professional Popup -->
<div class="popup-overlay" id="popup">
  <div class="popup-box">
    <div class="popup-icon" id="popupIcon">⚠️</div>
    <p class="popup-msg" id="popupMsg">Message Yaha Aayega</p>
    <button class="popup-btn" onclick="closePopup()">Thik Hai</button>
  </div>
</div>
</body>
</html>