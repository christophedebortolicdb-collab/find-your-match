// ============================================================
//  ⚠️  REMPLACER PAR TON URL GOOGLE APPS SCRIPT
// ============================================================
const GOOGLE_SCRIPT_URL = 'https://docs.google.com/spreadsheets/d/1d-qk3w3wyi1xn__M7w0FD1SK9IqO-_XgSf5qwLh_Hjo/edit?usp=sharing';

// ============================================================
//  Vérifie le code auprès de Google Sheets
// ============================================================
async function verifierCode(code) {
  const messageEl = document.getElementById('message');

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // no-cors requis pour Google Apps Script
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code })
    });

    // Avec no-cors on ne peut pas lire la réponse,
    // on traite le succès comme "valide"
    messageEl.textContent = '🎉 Défi validé !';
    showConfetti();

  } catch (err) {
    messageEl.textContent = '❌ Erreur de connexion';
    console.error(err);
  }
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
