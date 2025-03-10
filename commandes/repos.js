﻿"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"General", reaction: "👊", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/bmbttz/B.M.B-MD';
  const img = 'https://files.catbox.moe/ifk0zg.png';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*ʜᴇʟʟᴏᴡ ᴡʜᴀᴛsᴀᴀᴘ ᴜsᴇʀ
ᴛʜɪs ɪs* *MR-B.M.B-MD .*\n sᴜᴘᴘᴏʀᴛ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ *ʙʏ*,  https://whatsapp.com/channel/0029VaucCUJGk1Fw4dk0jk35

╔═━━━━════──────➳
║╔═━━━━━━════─━━─➳
║║ 🗼 *REPOSITORY:* ${data.html_url}
║║ 🌟 *STARS:* ${repoInfo.stars}
║║ 🧧 *FORKS:* ${repoInfo.forks}
║║ 📅 *RELEASE DATE:* ${releaseDate}
║║ 🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
║║ 👨‍💻 *OWNER:* *MR-B.M.B*
║║ 💞 *NAME:* *MR-B.M.B-MD *
║║ 🥰 *ENJOY TO USE MR-B.M.B MD * ╚══━━━━════─━━━━──➳
╚══━━━━════─━━━━──➳`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
