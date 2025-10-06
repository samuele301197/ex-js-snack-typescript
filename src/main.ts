let valore: unknown;
valore = true;
valore = "Ciao Samu";
valore = null;

if (typeof valore === "string") {
  console.log(valore.toUpperCase());
} else if (typeof valore === "number") {
  console.log(valore * 2);
} else if (typeof valore === "boolean") {
  console.log(valore ? "Si" : "No");
} else if (valore === null) {
  console.log("Il dato è vuoto");
} else if (Array.isArray(valore)) {
  console.log(valore.length);
} else {
  console.log("Tipo non supportato");
}
