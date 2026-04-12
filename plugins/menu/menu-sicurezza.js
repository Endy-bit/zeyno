import path from 'path';
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let handler = async (m, { conn, usedPrefix, command }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    const chat = global.db.data.chats[m.chat] || {};
    const imagePath = path.join(__dirname, '../../media/image-4.jpg');

    const menuText = generateMenuText(chat, userId, groupId);
    const footerText = global.t('chooseMenu', userId, groupId) || 'Scegli un menu:';
    const mainMenuText = global.t('mainMenuButton', userId, groupId) || '🏠 Menu Principale';
    const adminMenuText = global.t('menuAdmin', userId, groupId) || '🛡️ Menu Admin';
    const ownerMenuText = global.t('menuOwner', userId, groupId) || '👑 Menu Owner';
    const groupMenuText = global.t('menuGroup', userId, groupId) || '👥 Menu Gruppo';

    await conn.sendMessage(m.chat, {
        image: { url: imagePath },
        caption: menuText,
        footer: footerText,
        buttons: [
            { buttonId: `${usedPrefix}menu`, buttonText: { displayText: mainMenuText }, type: 1 },
            { buttonId: `${usedPrefix}menuadmin`, buttonText: { displayText: adminMenuText }, type: 1 },
            { buttonId: `${usedPrefix}menuowner`, buttonText: { displayText: ownerMenuText }, type: 1 },
            { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: groupMenuText }, type: 1 },
        ],
        viewOnce: true,
        headerType: 4,
    }, { quoted: m });
};

handler.help = [
  'menusicurezza',
  'securitymenu',
  'menúseguridad',
  'menuseguridad',
  'menuseguranca',
  'menuseguro',
  'sicherheitsmenü',
  'sicherheitsmenu',
  '安全菜单',
  '安全',
  'менюбезопасности',
  'менюохрана',
  'قائمةالأمان',
  'قائمةالحماية',
  'सुरक्षामेनू',
  'सुरक्षा',
  'menusecurité',
  'menu_securite',
  'menukeamanan',
  'menuproteksi',
  'güvenlikmenü',
  'korumamenü'
];
handler.tags = ['menu'];
handler.command = /^(menusicurezza|securitymenu|menúseguridad|menuseguridad|menuseguranca|menuseguro|sicherheitsmenü|sicherheitsmenu|安全菜单|安全|менюбезопасности|менюохрана|قائمةالأمان|قائمةالحماية|सुरक्षामेनू|सुरक्षा|menusecurité|menu_securite|menukeamanan|menuproteksi|güvenlikmenü|korumamenü)$/i;


export default handler;

function generateMenuText(chat, userId, groupId) {
    const vs = global.vs;
    const menuTitle = global.t('securityMenuTitle', userId, groupId) || '𝑴𝑬𝑵𝑼 𝐅𝐔𝐍𝐙𝐈𝐎𝐍𝐈';
    const versionText = global.t('versionLabel', userId, groupId) || '𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬';

    const functions = {
        Antilink: !!chat?.antiLink,
        Antilinkhard: !!chat?.antiLinkHard,
        Antispam: !!chat?.antispam,
        AntispamComandi: !!chat?.antispamcomandi,
        Antitrava: !!chat?.antitrava,
        Benvenuto: !!chat?.welcome,
        Addio: !!chat?.bye,
        Antibestemmie: !!chat?.antibestemmie,
        SoloGruppo: !!chat?.sologruppo,
        SoloPrivato: !!chat?.soloprivato,
        soloadmin: !!chat?.soloadmin,
        BanGruppo: !!chat?.isBanned,
        Antiporno: !!chat?.antiporno,
        AntiCall: !!chat?.antiCall,
        Antivirus: !!chat?.antivirus,
        Antibot: !!chat?.antibot,
        Antivoip: !!chat?.antivoip,
        Antimedia: !!chat?.antimedia,
        Antisondaggi: !!chat?.antisondaggi,
        AntiTikTok: !!chat?.antitiktok
    };

    const howToUse = `
*ℹ ${global.t('howToUse', userId, groupId) || '𝐂𝐎𝐌𝐄 𝐒𝐈 𝐔𝐒𝐀'}*
*🟢 ${global.t('activateFunction', userId, groupId) || '.attiva [funzione]'}*
*🔴 ${global.t('disableFunction', userId, groupId) || '.disabilita [funzione]'}*
    `.trim();

    const statusList = Object.entries(functions)
        .map(([name, state]) => `${state ? '🟢' : '🔴'} - *${name}*`)
        .join('\n');

    return `
⋆ ︵ ★ ${menuTitle} ★ ︵ ⋆

${howToUse}

꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
${statusList.split('\n').map(line => `୧ ${line}`).join('\n')}
꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
  ୧・*${versionText}:* ${vs}

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩
`.trim();
}
