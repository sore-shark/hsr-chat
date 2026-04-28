const characters = [
  { name: "アナイクス", icon: "assets/img/icon/Anaxa.png", desc: "では、お聞きしますが‥‥‥" },
  { name: "ヒアンシー", icon: "assets/img/icon/Hyacine.png", desc: "昏光の庭は、ずっとあなたの傍にいるよ～" },
  { name: "キャストリス", icon: "assets/img/icon/Castorice.png", desc: "書いてる最中だよ" },
  { name: "ファイノン", icon: "assets/img/icon/Phainon.png", desc: "太陽を称えよ！" }
];

const select = document.getElementById("characterSelect");
const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const title = document.querySelector("header h2");
const subtitle = document.querySelector("header h3");

function updateHeader() {
  const selectedName = select.value;
  const char = characters.find(c => c.name === selectedName);

  title.textContent = char.name;
  subtitle.textContent = char.desc;
}

// キャラ選択作成
characters.forEach(char => {
  const option = document.createElement("option");
  option.value = char.name;
  option.textContent = char.name;
  select.appendChild(option);
});

select.addEventListener("change", updateHeader);

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

  updateHeader();
}
