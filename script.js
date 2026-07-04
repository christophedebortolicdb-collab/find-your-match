const codes = {
  "MARIAGE2026": false,
  "ABC123": false,
  "TEST01": false
};

function verifierCode(code) {
  const message = document.getElementById("message");

  if (!codes.hasOwnProperty(code)) {
    message.textContent = "❌ Code invalide";
    return;
  }

  if (codes[code]) {
    message.textContent = "⚠️ Code déjà utilisé";
    return;
  }

  // Marquer utilisé
  codes[code] = true;

  message.textContent = "🎉 Code valide !";

  lancerConfettis();
}

function lancerConfettis() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}
