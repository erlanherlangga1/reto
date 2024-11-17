
  // Set countdown target to 19 November at 00:00:00
  const countdownDate = new Date("2024-11-19T00:00:00").getTime();
  const actionButton = document.getElementById("actionButton");
  const buttonContainer = document.getElementById("button-container");

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // Check if the countdown is finished
    if (distance < 0) {
      clearInterval(interval);

    
        // Show the button and center it
        buttonContainer.classList.remove("hidden");
    }
  };

  document.getElementById("actionButton").addEventListener("click", function () {
    const container = document.getElementById("container");
    // Menghapus kelas 'hidden' untuk menampilkan elemen
    container.classList.remove("hidden");
    container.classList.add("fade-in");
  });

  // Start the countdown timer
  const interval = setInterval(updateCountdown, 1000);

