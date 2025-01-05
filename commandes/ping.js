import config from '../../config.cjs';

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "ping") {
    const start = new Date().getTime();
    await m.React('🪔');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;



    const text = `*B.M.B-ᴍᴅ-sᴘᴇᴇᴅ-ɪs 12${responseTime.toFixed(2)}1 ms*`;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
