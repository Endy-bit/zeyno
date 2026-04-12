let handler = async (m, { conn }) => {

    // Newsletter globale Zeyno
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
        { vcard: `BEGIN:VCARD\nVERSION:5.0\nN:;Endy | CEO;;;\nFN:Endy | CEO\nORG:Zeyno\nTITLE:CEO\nitem1.TEL;waid=393501989497:+39 350 198 9497\nitem1.X-ABLabel:Cellulare\nEND:VCARD` },
        { vcard: `BEGIN:VCARD\nVERSION:5.0\nN:;medalis;;;\nFN:Diego\nORG:Zeyno\nTITLE:Staff\nitem1.TEL;waid=212693877842:+212 693-877842 3119\nitem1.X-ABLabel:Cellulare\nEND:VCARD` },
        { vcard: `BEGIN:VCARD\nVERSION:5.0\nN:;ksav;;;\nFN:Matte\nORG:Zeyno\nTITLE:Staff\nitem1.TEL;waid=447393088288:+44 7393 088288 9462\nitem1.X-ABLabel:Cellulare\nEND:VCARD` },
        { vcard: `BEGIN:VCARD\nVERSION:5.0\nN:;Exorcism;;;\nFN:Giuse\nORG:Zeyno\nTITLE:Staff\nitem1.TEL;waid=447935218835:+44 7935 218835 4932\nitem1.X-ABLabel:Cellulare\nEND:VCARD` }
    ];

    // Testo elegante con i numeri in chiaro
    let testo = `
୧・︶ ✦ Chatunity✦ ︶・୨
꒷꒦ ‧₊ 🛡️ 𝐒 𝐓 𝐀 𝐅 𝐅 🛡️ ₊‧ ꒷꒦
୧・︶ : ︶ : ︶ : ︶ : ︶ : ︶・୨

✦ 👑 +39 350 198 9497 ~ Endy |CEO|
✦ 👨‍💻 +212 693-877842 ~ Medalis
✦ 👨‍💻 +44 7393 088288 ~ ksav
✦ 👨‍💻 +44 7935 218835 ~ Exorcism

👑 _Il team dietro Zeyno._
୧・︶ : ︶ ꒷꒦ ‧₊ ୧`.trim();

    // 1. Invia le schede contatto (rubrica)
    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: 'Staff Zeyno',
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