import pkg from '@whiskeysocket/baileys'
const { generateWAMessageFromContent } = pkg

let handler = async (m, { conn }) => {
  const ownerNumber = '393501989497'
  const ownerName = 'endy'
  const nomebot = conn.user?.name || global.db?.data?.nomedelbot || global.nomebot || 'zeyno'

  await conn.sendContact(m.chat, [[ownerNumber, ownerName]], m)

  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: { title: "I miei social" },
          body: { text: "Puoi contattarmi anche qua: 👇" },
          footer: { text: nomebot },
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "『 💻 』 GitHub",
                  url: "https://github.com/Endy-bit",
                  merchant_url: "https://github.com/Endy-bit"
                })
              },
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "『 📸 』 Instagram",
                  url: "https://www.instagram.com/endy.2011_?igsh=aGZycG90b3BhNzBi",
                  merchant_url: "https://www.instagram.com/endy.2011_?igsh=aGZycG90b3BhNzBi"
                })
              }
            ]
          }
        }
      }
    }
  }, { userJid: m.sender })

  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = [
  'owner',
  'creatore',
  'propietario',
  'dono',
  'eigentümer',
  '所有者',
  'владелец',
  'المالك',
  'मालिक',
  'propriétaire',
  'pemilik',
  'sahip'
];
handler.tags = ['main'];
handler.command = /^(creatore|propietario|dono|eigentümer|所有者|владелец|المالك|मालिक|propriétaire|pemilik|sahip)$/i;

export default handler