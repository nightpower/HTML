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
      "descript": "Artificial intelligence that can answer any question.<p>Developed by the OpenAI Lab Is a large statistical language model optimized for dialogue and debugged with tutored and reinforcement learning techniques</p>",
      "type": "BOT",
      "avatar": "https://openai.com/content/images/2022/05/openai-avatar.png",
      "money": 280
    },
    {
      "name": "NightDefender",
      "descript": "Auto-moderation bot to protect the group from spam and other rubbish<p>Which automatically monitors and moderates content on your group. It can automatically block or remove unwanted comments, posts, and other content that doesn't comply with your group's rules or policies.</p>",
      "type": "BOT",
      "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Windows-defender.svg/240px-Windows-defender.svg.png"
    },
  ];

  data.map(x => {
    let list = document.getElementById("container");
    let addElem = document.createElement("div");
    list.append(addElem);

    addElem.className = "card";
    addElem.innerHTML = `<img src="${x.avatar}"></img><b>(${x.type})</b><h2>${x.name}</h2><div class="cont"><p>${x.descript}</p></div><div class="link"><a href="#"><i class="fab fa-codepen"></i></a><a href="#"><i class="fab fa-github"></i></a></div>`;
  })
}