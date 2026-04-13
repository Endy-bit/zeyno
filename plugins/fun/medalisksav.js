let handler = async (m, { conn, command, text }) => {
  const message = `𝑴𝑬𝑫𝑨𝑳𝑰𝑺 𝑬 𝑲𝑺𝑨𝑽 𝑺𝑶𝑵𝑶 𝑰 𝑴𝑰𝑬𝑰 𝑭𝑹𝑨𝑻𝑬𝑳𝑳𝑰 𝒁𝑶𝒁𝒁𝑨𝑷𝑨𝑹𝑰, 𝑬 𝑪𝑶𝑴𝑷𝑨𝑮𝑵𝑰 𝑵𝑼𝑲𝑲𝑬𝑹, 𝑽𝑶𝑮𝑳𝑰𝑶 𝑩𝑬𝑵𝑬 𝑨𝑰 𝑴𝑰𝑬𝑰 𝑭𝑹𝑨𝑻𝑬𝑳𝑳𝑰.`;
  // manda il messaggio nella chat dove il comando è stato usato, citandolo
  await conn.sendMessage(m.chat, { text: message }, { quoted: m });
};

handler.help = ['medalisksav'];
handler.tags = ['giochi'];
handler.command = /^medalis-ksav$/i;

export default handler;