function copyToClipboard() {
    navigator.clipboard.writeText("doge.digital").then(() => {
      const message = document.getElementById("copy-message");
      message.classList.remove("hidden");
  
      // Oculta a mensagem após 2 segundos
      setTimeout(() => {
        message.classList.add("hidden");
      }, 2000);
    }).catch(err => console.error("Erro ao copiar texto: ", err));
  }
  
  function copyToClipboard1() {
    navigator.clipboard.writeText("democratizaedicoes@gmail.com").then(() => {
      const message = document.getElementById("copy-message");
      message.classList.remove("hidden");
  
      // Oculta a mensagem após 2 segundos
      setTimeout(() => {
        message.classList.add("hidden");
      }, 2000);
    }).catch(err => console.error("Erro ao copiar texto: ", err));
  }
  
  document.querySelectorAll(".tagline-item").forEach(item => {
    item.addEventListener("click", () => {
      location.href = "/index.html#services"; // Redireciona corretamente
    });
  });
  