function toggleBio(btn) {
  const expanded = btn.previousElementSibling;
  const isOpen = expanded.classList.toggle("open");
  btn.textContent = isOpen ? "Read less" : "Read more";
}

function togglePlay(btn) {
  const isPlaying = btn.classList.contains("playing");

  // Reset all buttons
  document.querySelectorAll(".play-btn").forEach((b) => {
    b.classList.remove("playing");
    b.innerHTML = '<span class="play-icon">&#9654;</span> Play Episode';
  });

  if (!isPlaying) {
    btn.classList.add("playing");
    btn.innerHTML = '<span class="play-icon">&#9646;&#9646;</span> Playing…';
  }
}
