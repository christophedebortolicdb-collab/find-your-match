// ============================================================
//  ⚠️  REMPLACER PAR TON URL GOOGLE APPS SCRIPT
// ============================================================
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby-qge3qMmY3J_5_Qz7eiH3EBuEVwTFlO9afRvYCW6I5QyF_fpuTXiLRAMi1xOXQ5EL/exec';

// ============================================================
//  Vérifie le code auprès de Google Sheets
// ============================================================
async function verifierCode(code) {
  const messageEl = document.getElementById('message');

try {
    const response = await fetch(GOOGLE_SCRIPT_URL + "?code=" + code);
    const data = await response.json();

    if (data.status === "OK") {
        messageEl.textContent = "🎉 Défi validé !";
        showConfetti();
    } else if (data.status === "USED") {
        messageEl.textContent = "⚠️ Code déjà utilisé";
    } else {
        messageEl.textContent = "❌ Code invalide";
    }

} catch (err) {
    messageEl.textContent = "❌ Erreur de connexion";
    console.error(err);
}


// ============================================================
//  Confettis
// ============================================================
function showConfetti() {
  const colors = ['#f2a900', '#c8102e', '#0033a0', '#ffffff'];

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: colors
  });

  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
  }, 250);

  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
  }, 400);
}
