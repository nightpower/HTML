// let pos = 0
// let buff = 0
// const gline = ['#intro', '#about', '#langs', '#items', '#block']

// const up = () => {
//   if (pos <= 0) return
//   pos--
//   document.querySelector(gline[pos]).scrollIntoView()
// }

// const down = () => {
//   if (pos >= gline.length - 1) return
//   pos++
//   document.querySelector(gline[pos]).scrollIntoView()
// }

const loads_elem = () => {
  let data = [
    {
      "name": "AllDownloader",
      "descript": "Downloading photos and videos from various platforms:<p>- YouTube</p><p>- Instagram</p><p>- TikTok</p>",
      "type": "BOT",
      "avatar": "https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png",
      "money": 350
    },
    {
      "name": "FFBot",
      "descript": "To search for an interlocutor by interests.<p>A bot for finding and chatting with random strangers on Telegram. Set your floor and preferred interlocutors to start chatting.</p>",
      "type": "BOT",
      "avatar": "https://pbs.twimg.com/profile_images/568912709215739904/259tIObO_400x400.jpeg",
      "money": 200
    },
    {
      "name": "Chat-GPT",
      "descript": "Artificial intelligence that can answer any question.",
      "type": "BOT",
      "avatar": "https://openai.com/content/images/2022/05/openai-avatar.png",
      "money": 280
    }
  ];

  data.map(x => {
    let list = document.getElementById("container");
    let addElem = document.createElement("div");
    list.append(addElem);

    addElem.className = "card";
    addElem.innerHTML = `<img src="${x.avatar}"></img><b>(${x.type})</b><h2>${x.name}</h2><div class="cont"><p>${x.descript}</p></div><div class="link"><a href="#"><i class="fab fa-codepen"></i></a><a href="#"><i class="fab fa-github"></i></a></div>`;
  })
}

// window.onwheel = ({ layerY }) => {
//   layerY > buff ? down() : up();
//   buff = layerY
// };