const codes = {
    "ABC123": false,
    "TEST01": false,
    "MARIAGE2026": false
};

const emoji = {
    "noCode": "⚠️",
    "invalid": "❌",
    "used": "⚠️",
    "valid": "🎉"
};

const message = {
    "noCode": "Aucun code fourni",
    "invalid": "Code invalide",
    "used": "Code déjà utilisé",
    "valid": "Code valide !"
};

function lancerConfettis() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 }
        });
    }, 300);
}

function verifierCode(code) {
    if (!code) {
        document.getElementById("message").textContent = emoji.noCode + " " + message.noCode;
        return;
    }

    code = code.trim().toUpperCase();

    if (!(code in codes)) {
        document.getElementById("message").textContent = emoji.invalid + " " + message.invalid;
        return;
    }

    if (codes[code] === true) {
        document.getElementById("message").textContent = emoji.used + " " + message.used;
        return;
    }

    codes[code] = true;
    document.getElementById("message").textContent = emoji.valid + " " + message.valid;
    lancerConfettis();
}

const params = new URLSearchParams(window.location.search);
const code = params.get("code");
verifierCode(code);