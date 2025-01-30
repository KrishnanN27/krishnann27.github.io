---
title: "Good Choice 😎🔥"
url: "/askemout/yes/"
draft: false
---

<div id="valentine-container">
  <h1 class="headline">Good choice! Fine huzz.  🫦🔥</h1>
  <img src="/gif/shrek-rizz.gif" alt="Shrek Rizz GIF" class="responsive-gif" />
  <p class="message">Something magical is about to happen... 💫</p>

  <!-- Step 1: Enter Your Name -->
  <div class="name-section">
    <h2>📝 Your Name:</h2>
    <input type="text" id="your-name" placeholder="Enter your name" />
  </div>

  <!-- Step 2: Time Picker -->
  <div class="time-section">
    <h2>⏳ Choose Your Time (5 PM - 9 PM)</h2>
    <select id="date-time">
      <option value="">Select Time</option>
      <option value="5:00 PM">5:00 PM</option>
      <option value="5:30 PM">5:30 PM</option>
      <option value="6:00 PM">6:00 PM</option>
      <option value="6:30 PM">6:30 PM</option>
      <option value="7:00 PM">7:00 PM</option>
      <option value="7:30 PM">7:30 PM</option>
      <option value="8:00 PM">8:00 PM</option>
      <option value="8:30 PM">8:30 PM</option>
      <option value="9:00 PM">9:00 PM</option>
    </select>
  </div>

  <!-- Step 3: Date Idea Selection -->
  <div id="date-options">
    <h2>🌷 Pick a Plan:</h2>
    <ul id="date-ideas-list"></ul>
  </div>

  <!-- Step 4: Send Invitation -->
  <div class="send-section">
    <button class="send-invite-button" onclick="sendInvite()">📩 Send Invitation</button>
    <p id="send-status" class="hidden success-message">✅ Sent!</p>
  </div>

  <!-- Final Confirmation Box -->
  <div id="selected-date" class="hidden confirmation-box">
    <h2>💞 It's Set!</h2>
    <p id="final-date-text"></p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

<script>
  emailjs.init("eahHL2QpzyenwxZO8"); // Your EmailJS Public Key

  const dateIdeas = [
    "🍕 Grab some pizza and drive up to Lookout Mountain to enjoy the view.",
    "👩‍🍳 Cook together and then cuddle up to binge-watch *The Chosen*.",
    "⛪ Go to church and worship together.",
    "🎨 Go to a paint-and-sip and accidentally create a masterpiece.",
    "💃 Take a dance class and instantly become pros (or not).",
    "🍷 Go wine tasting and pretend we know the difference between flavors.",
    "🚗 I pick you up, forget to drop you back, and suddenly we’ve moved to Italy. 🇮🇹✨"
  ];

  function populateDateIdeas() {
    const dateList = document.getElementById("date-ideas-list");
    dateList.innerHTML = ""; 

    dateIdeas.forEach((idea, index) => {
      let listItem = document.createElement("li");
      let button = document.createElement("button");

      button.innerText = idea;
      button.classList.add("idea-button");
      button.setAttribute("data-index", index);
      button.onclick = function () {
        selectDatePlan(this, idea);
      };

      listItem.appendChild(button);
      dateList.appendChild(listItem);
    });
  }

  function selectDatePlan(selectedButton, idea) {
    const time = document.getElementById("date-time").value;
    if (!time) {
      alert("Pick a time first, darling! ⏰");
      return;
    }

    document.querySelectorAll(".idea-button").forEach(btn => btn.classList.remove("selected"));
    selectedButton.classList.add("selected");

    document.getElementById("final-date-text").innerText = `📅 At ${time}, ${idea}`;
    document.getElementById("selected-date").dataset.time = time;
    document.getElementById("selected-date").dataset.idea = idea;
  }

  function sendInvite() {
    const yourName = document.getElementById("your-name").value;
    if (!yourName) {
      alert("Enter your name first! 💖");
      return;
    }

    const time = document.getElementById("selected-date").dataset.time;
    const idea = document.getElementById("selected-date").dataset.idea;

    if (!time || !idea) {
      alert("Pick a date and a plan first! 💖");
      return;
    }

    sendEmailInvite(yourName, time, idea);
    
    document.getElementById("selected-date").classList.remove("hidden");
  }

  function sendEmailInvite(yourName, time, idea) {
    const emailParams = {
      from_name: yourName,
      to_name: "Your Email",
      to_email: "your-email@example.com",
      time: time,
      plan: idea,
    };

    emailjs.send("service_lce9t4k", "template_wv1ezv9", emailParams)
      .then(function (response) {
        console.log("✅ Invite sent successfully", response.status, response.text);
      })
      .catch(function (error) {
        console.log("❌ Invite failed to send:", error);
        alert("❌ Email could not be sent.");
      });
  }

  populateDateIdeas();
</script>

<style>
  /* Valentine Theme */
  #valentine-container {
    background: rgba(255, 240, 245, 0.95);
    backdrop-filter: blur(10px);
    font-family: "Playfair Display", serif;
    color: #5a3e36;
    text-align: center;
    width: 90%;
    max-width: 600px;
    margin: 50px auto;
    padding: 35px;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  /* Send Invitation Button */
  .send-invite-button {
    background: linear-gradient(45deg, #ff758c, #ff7eb3);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    width: 100%;
    margin-top: 15px;
  }

  .send-invite-button:hover {
    background: linear-gradient(45deg, #ff7eb3, #ff758c);
    transform: scale(1.05);
  }

  /* Idea Buttons */
  .idea-button {
    background: #e8a1a0;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    width: 100%;
    margin: 10px 0;
  }

  .idea-button:hover, .idea-button.selected {
    background: #d88a9b;
    transform: scale(1.05);
  }

  /* Confirmation Box */
  .confirmation-box {
    background: white;
    border-radius: 15px;
    padding: 15px;
    margin-top: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  /* Hidden Class */
  .hidden {
    display: none !important;
  }
</style>
