const codes = {
  "ABC123": false,
  "TEST01": false,
  "MARIAGE2026": false
};

function getCodeFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("code");
}

function verifierCode(code) {
  if (!codes.hasOwnProperty(code)) {
    return { status: "INVALID" };
  }

  if (codes[code] === true) {
    return { status: "USED" };
  }

  codes[code] = true;
  return { status: "OK" };
}

// ✅ AU CHARGEMENT DE LA PAGE
window.onload = () => {
  const code = getCodeFromURL();

  if (!code) return;

  const result = verifierCode(code);

  if (result.status === "OK") {
    lancerConfettis(); // ta fonction existante
  } else if (result.status === "USED") {
    afficherErreur("Code déjà utilisé");
  } else {
    afficherErreur("Code invalide");
  }
};
