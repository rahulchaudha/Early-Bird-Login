// ===== 1. PROFESSIONAL POPUP FUNCTION =====
function showPopup(message, icon = "⚠️") {
  document.getElementById("popupMsg").innerText = message;
  document.getElementById("popupIcon").innerText = icon;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// ===== 2. LOADING ANIMATION FUNCTION =====
function showLoader() {
  document.getElementById("loader").style.display = "flex";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

// ===== 3. DARK MODE FUNCTION =====
function toggleDark() {
  document.body.classList.toggle("dark");
  // Button ka icon badlo
  let btn = document.querySelector(".dark-toggle");
  if (document.body.classList.contains("dark")) {
    btn.innerText = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    btn.innerText = "🌙";
    localStorage.setItem("theme", "light");
  }
}

// Page load hote hi Dark Mode check karo
window.onload = function() {
  if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
    document.querySelector(".dark-toggle").innerText = "☀️";
  }

  
  if (password == "") {
    showPopup("Password bhool gaye kya?", "🔒");
    return;
  }
  
  if (password.length < 4) {
    showPopup("Password kam se kam 4 digit ka rakho", "⚠️");
    return;
  }
  
  // Loading dikhao, phir Dashboard pe bhejo
  showLoader();
  setTimeout(function() {
    hideLoader();
    showPopup("Login Successful! Welcome 🎉", "✅");
    setTimeout(function() {
      window.location.href = "dashboard.html";
    }, 1500);
  }, 1000);
}

// ===== 5. SIGNUP FUNCTION - UPGRADED =====
function checkSignup() {
  var name = document.getElementById("signupName").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;
  var confirmPassword = document.getElementById("signupConfirmPassword").value;
  
  if (name == "") {
    showPopup("Apna naam to batao", "😊");
    return;
  }
  
  if (email == "") {
    showPopup("Email ke bina account nahi banega", "📧");
    return;
  }
  
  if (email.includes("@") == false) {
    showPopup("Sahi Email daalo jisme @ ho", "❌");
    return;
  }
  
  if (password == "") {
    showPopup("Password set karo", "🔒");
    return;
  }
  
  if (password.length < 4) {
    showPopup("Password 4 digit se bada rakho. Safety ke liye", "🛡️");
    return;
  }
  
  if (password != confirmPassword) {
    showPopup("Dono Password same nahi hain", "❌");
    return;
  }
  
  showLoader();
  setTimeout(function() {
    hideLoader();
    showPopup("Account Ban Gaya! Ab Login Karo 🎉", "✅");
    setTimeout(function() {
      window.location.href = "index.html";
    }, 1500);
  }, 1000);
}

// ===== 6. LOGOUT FUNCTION - UPGRADED =====
function logoutUser() {
  showPopup("Kya sach me Logout karna hai?", "🤔");
  document.querySelector(".popup-btn").onclick = function() {
    closePopup();
    showLoader();
    setTimeout(function() {
      window.location.href = "index.html";
    }, 800);
  }
}