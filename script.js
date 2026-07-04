const codes = {
"X7K2AQS23": false,
"P4Q92SDR2": false,
"N2F635CSN": false,
"M4T8PLX92": false,
"Q9ZL2KX71": false,
"H7R5VNQ84": false,
"Y2B8CJX66": false,
"K3L9WQP20": false,
"D8X4ZMN55": false,
"P6R2VTX91": false,
"L9Q3FDS77": false,
"W5N8KLA63": false,
"Z1X7CVM48": false,
"U8P4QRS39": false,
"J3F9LKP52": false,
"N6B2XZT80": false,
"C7D5MPL44": false,
"R2K8JYH73": false,
"V9T1WXB65": false,
"E4Z7NQC28": false,
"A8M3RLP90": false,
"T5Y2HGD61": false,
"G7U4XNB36": false,
"S2L9QWE83": false,
"X6V1KJM47": false,
"B3C8YTR59": false,
"F9P2LSD74": false,
"H1J6QAZ82": false,
"K8W3XCV95": false
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
