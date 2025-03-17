---
title: "Ask 'Em Out"
url: "/askemout/"
draft: false
externalURL: false
showComments: false
showReadingTime: false
showTOC: false
hidden: true
---

<div id="valentine-container">
  <!-- Background Music -->
  <audio id="bg-music" autoplay loop>
    <source src="/music/rizz song.mp3" type="audio/mp3">
    Your browser does not support the audio element.
  </audio>

  <!-- Music Toggle Button -->

<button id="music-toggle">🔊 Pause Music</button>

  <img src="/gif/dawg.gif" alt="Cute Dog GIF" class="responsive-gif" />

  <div class="message">
    <h1 class="crazy-text">Since Feb 14 is coming up.asdads..<br>Why don’t you be  the <span class="highlight">1 4</span> me? 💘</h1>
    <h2>Will you be my Valentine? 💕</h2>
  </div>

  <div class="buttons">
    <button id="yes-btn" onclick="sayYes()">Yes ❤️</button>
    <button id="no-btn" onclick="shrinkNo()">No 😢</button>
  </div>
</div>

<script>
  // "No" Button Shrinking Logic
  const noBtn = document.getElementById("no-btn");
  let noBtnSize = 100;

  function shrinkNo() {
    noBtnSize = Math.max(10, noBtnSize - 20);
    noBtn.style.transform = `scale(${noBtnSize / 100})`;

    if (noBtnSize === 10) {
      noBtn.disabled = true;
      noBtn.innerText = "Too late! 😜";
    }
  }

  // "Yes" Button Redirect
  function sayYes() {
    window.location.href = "/askemout/yes";
  }

  // Background Music Control
  const music = document.getElementById("bg-music");
  const musicToggle = document.getElementById("music-toggle");

  music.volume = 0.5; // Set volume to 50%

  musicToggle.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicToggle.innerText = "🔊 Pause Music";
    } else {
      music.pause();
      musicToggle.innerText = "🔈 Play Music";
    }
  });
</script>

<style>
  #valentine-container {
    background: linear-gradient(to bottom right, #ff007f, #ff4a6e, #ff9a9e);
    font-family: "Comic Sans MS", cursive, sans-serif;
    color: #fff;
    text-align: center;
    width: 100%;
    max-width: 600px;
    margin: 50px auto;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    animation: pulse 2s infinite;
  }

  /* Crazy Glow Animation */
  @keyframes pulse {
    0% { box-shadow: 0 0 20px #ff007f; }
    50% { box-shadow: 0 0 40px #ff4a6e; }
    100% { box-shadow: 0 0 20px #ff007f; }
  }

  /* Music Toggle Button (Better Contrast & Mobile-Friendly) */
  #music-toggle {
    background: #ffffff;
    color: #ff007f;
    font-size: 1rem;
    padding: 10px 20px;
    border: 2px solid #ff007f;
    border-radius: 50px;
    cursor: pointer;
    margin-bottom: 15px;
    transition: all 0.3s ease;
  }

  #music-toggle:hover {
    background: #ff007f;
    color: white;
  }

  /* Reduce GIF size */
  .responsive-gif {
    width: 70%;
    max-width: 250px;
    height: auto;
    border-radius: 15px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: wobble 2s infinite alternate;
  }

  @keyframes wobble {
    0% { transform: rotate(-3deg); }
    100% { transform: rotate(3deg); }
  }

  .message {
    margin-top: 20px;
  }

  .message h1 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    text-shadow: 0 0 10px #ff007f;
  }

  .highlight {
    color: yellow;
    font-weight: bold;
    text-shadow: 0 0 10px yellow;
  }

  .message h2 {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .buttons button {
    padding: 15px 30px;
    font-size: 1.2rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  /* Highlighted "Yes" Button */
  #yes-btn {
    background: gold;
    color: black;
    font-weight: bold;
    border: 3px solid white;
    box-shadow: 0 0 10px gold;
  }

  #yes-btn:hover {
    background: yellow;
    transform: scale(1.1);
    box-shadow: 0 0 15px yellow;
  }

  /* "No" Button is Less Visible */
  #no-btn {
    background: #ff4a6e;
    color: white;
    opacity: 0.6;
    transition: transform 0.2s ease, opacity 0.3s ease;
  }

  #no-btn:hover {
    opacity: 1;
  }

  #no-btn:disabled {
    background: #aaa;
    cursor: not-allowed;
  }

  /* Mobile Optimization */
  @media (max-width: 600px) {
    #valentine-container {
      padding: 15px;
      margin: 30px auto;
    }

    .responsive-gif {
      border-radius: 10px;
      margin-bottom: 20px;
    }

    .message h1 {
      font-size: 1.5rem;
    }

    .message h2 {
      font-size: 1.1rem;
      margin-bottom: 15px;
    }

    .buttons {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .buttons button {
      padding: 12px 25px;
      font-size: 1rem;
    }

    #music-toggle {
      width: 90%;
    }
  }
</style>
