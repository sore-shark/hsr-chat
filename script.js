const characters = [
  { name: "アナイクス", icon: "assets/img/icon/Anaxa.png" },
  { name: "ヒアンシー", icon: "assets/img/icon/Hyacine.png" },
  { name: "キャストリス", icon: "assets/img/icon/Castorice.png" },
  { name: "ファイノン", icon: "assets/img/icon/Phainon.png" }
];

const select = document.getElementById("characterSelect");
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

// キャラ選択作成
characters.forEach(char => {
  const option = document.createElement("option");
  option.value = char.name;
  option.textContent = char.name;
  select.appendChild(option);
});

// メッセージ送信
sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  const selectedName = select.value;
  const char = characters.find(c => c.name === selectedName);

  const div = document.createElement("div");
  div.className = "message";

  div.innerHTML = `
  <img src="${char.icon}" class="avatar">

  <div class="chat-content">
    <b class="name">${char.name}</b>
    <div class="bubble" style="color:#121212">${text}</div>
  </div>
`;

  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = "";
}