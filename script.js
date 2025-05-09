function checkPassword() {
  const password = document.getElementById("pw").value;
  const correct = "nyankomin";

  if (password === correct) {
    // パスワードが正解なら secret.html に移動
    window.location.href = "secret.html";
  } else {
    alert("パスワードが違います");
  }
}
