let handler = async (m, { conn }) => {

    // Newsletter globale ChatUnity
    const cuContext = {
        isForwarded: true,
        forwardingScore: 999,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363259442839354@newsletter',
            serverMessageId: 100,
            newsletterName: `ZETNO-BOT ✦ Staff Ufficiale`
        }
    };

    // Schede di contatto (vCard)
    const vcards = [
        { vcard: `BEGIN:VCARD\nVERSION:5.0\nN:;Endy | CEO;;;\nFN:Endy | CEO\nORG:Zeyno\nTITLE:CEO\nitem1.TEL;waid=393773842461:+39 350 198 9497\nitem1.X-ABLabel:Cellulare\nEND:VCARD` },
        { vcard: `BEGIN:VCARD\nVERSION:5.0\nN:;medalis;;;\nFN:Diego\nORG:Zeyno\nTITLE:Staff\nitem1.TEL;waid=393520583119:+212 693-877842 3119\nitem1.X-ABLabel:Cellulare\nEND:VCARD` },
        { vcard: `BEGIN:VCARD\nVERSION:5.0\nN:;ksav;;;\nFN:Matte\nORG:Zeyno\nTITLE:Staff\nitem1.TEL;waid=66621409462:+44 7393 088288 9462\nitem1.X-ABLabel:Cellulare\nEND:VCARD` },
        { vcard: `BEGIN:VCARD\nVERSION:5.0\nN:;Giuse;;;\nFN:Giuse\nORG:𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲\nTITLE:Staff\nitem1.TEL;waid=393291944932:+39 329 194 4932\nitem1.X-ABLabel:Cellulare\nEND:VCARD` }
    ];

    // Testo elegante con i numeri in chiaro
    let testo = `
୧・︶ ✦ 𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲-𝐁𝐨𝐭 ✦ ︶・୨
꒷꒦ ‧₊ 🛡️ 𝐒 𝐓 𝐀 𝐅 𝐅 🛡️ ₊‧ ꒷꒦
୧・︶ : ︶ : ︶ : ︶ : ︶ : ︶・୨

✦ 👑 +39 377 384 2461 ~ Vale |CEO|
✦ 👨‍💻 +39 352 058 3119 ~ Diego
✦ 👨‍💻 +66 62 140 9462 ~ Matte
✦ 👨‍💻 +39 329 194 4932 ~ Giuse

👑 _Il team dietro 𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲._
୧・︶ : ︶ ꒷꒦ ‧₊ ୧`.trim();

    // 1. Invia le schede contatto (rubrica)
    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: 'Staff 𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲',
            contacts: vcards
        },
        contextInfo: cuContext
    }, { quoted: m });

    // 2. Invia il testo stilizzato
    await conn.sendMessage(m.chat, {
        text: testo,
        contextInfo: cuContext
    });

};

handler.help = ['staff', 'owner', 'creatori'];
handler.tags = ['info'];
handler.command = /^(staff|owner|creatori|founder)$/i;

export default handler;