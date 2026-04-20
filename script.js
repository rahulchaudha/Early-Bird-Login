// ===== 1. POPUP FUNCTIONS =====
function showPopup(message, icon = "⚠️") {
  document.getElementById("popupMsg").innerText = message;
  document.getElementById("popupIcon").innerText = icon;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// ===== 2. LOADER FUNCTIONS =====
function showLoader() {
  document.getElementById("loader").style.display = "flex";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

// ===== 3. DARK MODE - SAVE HOTA HAI =====
function toggleDark() {
  document.body.classList.toggle("dark");
  let btn = document.querySelector(".dark-toggle");
  if (document.body.classList.contains("dark")) {
    btn.innerText = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    btn.innerText = "🌙";
    localStorage.setItem("theme", "light");
  }
}

// Page load pe theme check karo
window.addEventListener('load', function() {
  if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
    var btn = document.querySelector(".dark-toggle");
    if (btn) btn.innerText = "☀️";
  }
});

// ===== 4. SIGNUP FUNCTION - LOCALSTORAGE + FILE DOWNLOAD =====
function saveToFile() {
  var name = document.getElementById("signupName").value.trim();
  var email = document.getElementById("signupEmail").value.trim();
  var password = document.getElementById("signupPassword").value;
  var confirmPassword = document.getElementById("signupConfirmPassword").value;

  // VALIDATION
  if (name == "") {
    showPopup("Apna naam to batao", "😊");
    return;
  }
  if (email == "" || email.includes("@") == false) {
    showPopup("Sahi Email daalo jisme @ ho", "❌");
    return;
  }
  if (password.length < 4) {
    showPopup("Password 4 digit se bada rakho", "🛡️");
    return;
  }
  if (password!= confirmPassword) {
    showPopup("Dono Password same nahi hain", "❌");
    return;
  }

  showLoader();

  // LOCALSTORAGE ME SAVE - LOGIN KE LIYE
  var users = localStorage.getItem("users");
  users = users? JSON.parse(users) : [];

  // Check karo email pehle se hai ya nahi
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      hideLoader();
      showPopup("Ye Email pehle se registered hai", "⚠️");
      return;
    }
  }

  users.push({ name: name, email: email, password: password });
  localStorage.setItem("users", JSON.stringify(users));

  // CSV FILE DOWNLOAD - MOBILE FIX KE SAATH
  try {
    var csvData = "Name,Email,Date\n" + name + "," + email + "," + new Date().toLocaleDateString("en-IN");
    var blob = new Blob([csvData], { type: "text/csv" });
    var url = window.URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = "User_" + name.replace(/ /g, "_") + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    setTimeout(function() {
      hideLoader();
      showPopup("Account Ban Gaya! File Download Ho Gayi 📁", "✅");
      setTimeout(function() {
        window.location.href = "index.html";
      }, 1500);
    }, 1000);
  } catch (err) {
    hideLoader();
    navigator.clipboard.writeText(csvData);
    showPopup("Download Fail. Data Copy Ho Gaya 📋", "⚠️");
  }
}

// ===== 5. LOGIN FUNCTION - LOCALSTORAGE SE CHECK =====
function checkLogin() {
  var email = document.getElementById("loginUser").value.trim();
  var pass = document.getElementById("loginPassword").value;

  if (email == "" || pass == "") {
    showPopup("Email aur Password daalo", "😊");
    return;
  }

  showLoader();

  setTimeout(function() {
    var users = localStorage.getItem("users");
    if (!users) {
      hideLoader();
      showPopup("Pehle Sign Up karo", "❌");
      return;
    }

    users = JSON.parse(users);
    var foundUser = null;

    for (var i = 0; i < users.length; i++) {
      if (users[i].email == email && users[i].password == pass) {
        foundUser = users[i];
        break;
      }
    }

    hideLoader();

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      showPopup("Login Successful! Welcome 🎉", "✅");
      setTimeout(function() {
        window.location.href = "welcome.html";
      }, 1500);
    } else {
      showPopup("Galat Email ya Password", "❌");
    }
  }, 800);
}

// ===== 6. LOGOUT FUNCTION =====
function logoutUser() {
  localStorage.removeItem("currentUser");
  showPopup("Logout Ho Gaya", "👋");
  setTimeout(function() {
    window.location.href = "index.html";
  }, 1000);
}