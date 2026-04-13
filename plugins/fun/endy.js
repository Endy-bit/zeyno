let handler = async (m, { conn, command, text }) => {
  const message = `𝑬𝒏𝒅𝒚 𝒆́ 𝒊𝒍 𝒓𝒂𝒈𝒂𝒛𝒛𝒐 𝒑𝒊𝒖 𝒔𝒊𝒎𝒑𝒂𝒕𝒊𝒄𝒐 𝒊𝒏 𝒄𝒐𝒎𝒎, 𝒃𝒂𝒔𝒕𝒂 𝒏𝒐𝒏 𝒇𝒂𝒓𝒍𝒐 𝒊𝒏𝒄𝒂𝒛𝒛𝒂𝒓𝒆 𝒐 𝒕𝒊 𝒔𝒄𝒐𝒑𝒂 𝒊𝒍 𝒄𝒖𝒍𝒐, 𝒗𝒊𝒗𝒂 𝒊𝒍 𝒅𝒖𝒄𝒆 𝒏𝒆𝒍 𝒅𝒖𝒃𝒃𝒊𝒐 𝒑𝒆𝒓𝒐 𝑷𝑶𝑹𝑪 𝑫𝑰𝑶 𝑨𝑨𝑨𝑨𝑨𝑨 𝑯𝑨𝑯𝑨𝑯𝑨𝑯𝑨𝑨.`;
  // manda il messaggio nella chat dove il comando è stato usato, citandolo
  await conn.sendMessage(m.chat, { text: message }, { quoted: m });
};

handler.help = ['endy'];
handler.tags = ['giochi'];
handler.command = /^endy$/i;

export default handler;