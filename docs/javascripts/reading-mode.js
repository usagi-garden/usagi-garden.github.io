document.addEventListener("DOMContentLoaded", () => {
  
  /* === 创建阅读模式按钮 === */
  const btn = document.createElement("button");
  btn.id = "lotus-toggle";
  btn.innerHTML = "📖";
  btn.title = "进入阅读模式";

  /* 放在 body 下（避免 header 隐藏时丢失按钮） */
  document.body.appendChild(btn);

  /* === 切换模式 === */
  btn.addEventListener("click", () => {
    const isReading = document.body.classList.toggle("reading-mode");

    btn.title = isReading ? "退出阅读模式" : "进入阅读模式";
  });
});

