document.addEventListener("DOMContentLoaded", function() {
  const availability = [
    "🕖 Monday: 7:00 AM – 10:00 AM, 1:00 PM – 5:00 PM",
    "🕖 Tuesday: 7:00 AM – 10:00 AM, 1:00 PM – 5:00 PM",
    "🕖 Wednesday: 7:00 AM – 10:00 AM, 1:00 PM – 5:00 PM",
    "🕖 Thursday: 7:00 AM – 10:00 AM, 1:00 PM – 5:00 PM",
    "🕖 Friday: 7:00 AM – 10:00 AM, 1:00 PM – 5:00 PM",
    "🕖 Saturday: 7:00 AM – 5:00 PM",
    "🚫 Sunday: No sessions"
  ];

  const box = document.getElementById("availability");
  box.innerHTML = availability.map(slot => `<p>${slot}</p>`).join("");
});
