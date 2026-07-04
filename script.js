const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyIAzgMCVMfEbxbMZjaCKQ-S8BknqdLggEP2KI-AyrO_wAO3pnd-P0Cv_2iuV19nv1c/exec"; // ⚠️ à remplacer

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get("code");

const messageElement = document.getElementById("message");

if (!code) {
  messageElement.innerHTML = "⚠️ Aucun code fourni";
} else {
  verifierCode(code);
}

async function verifierCode(code) {
  try {
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?code=${code}`);
    const data = await response.json();

    if (data.status === "OK") {
      // ✅ Code valide
      messageElement.innerHTML = "✅ Défi validé !";

      lancerConfetti();

    } else {
          if (data.status === "USED") {
              // ✅ Code valide
              messageElement.innerHTML = "✅ Défi déjà validé !";
        
              lancerConfetti();
        
            } else {
              // ❌ Code invalide
              messageElement.innerHTML = "❌ Défi invalide";
            }
    }

  } catch (error) {
    console.error(error);
    messageElement.innerHTML = "⚠️ Erreur serveur";
  }
}

function lancerConfetti() {
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
