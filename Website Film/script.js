document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (username === "rana" && password === "123") {
      alert("Login Berhasil!");
      window.location.href = "index.html";
    } else {
      alert("Login Gagal!");
    }
  });
});
