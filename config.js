const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'kaliduofficial2023@gmail.com'
global.github = 'https://github.com/KALINDU-LK/SONIC-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://github.com/KALINDU-LK' // add your username
global.sudo = process.env.SUDO || '94758179948'
global.devs = '94758179948';
global.website = 'https://github.com/KALINDU-LK/' //wa.me/+91000000000000
global.THUMB_IMAGE = 'https://i.ibb.co/2n3DC0b/Sonic.jpg'
module.exports = {
  aliveimg: process.env.ALIVE_IMAGE || 'https://i.ibb.co/2n3DC0b/Sonic.jpg',
  botname: process.env.BOT_NAME || 'SONIC-MD',
  ownername:process.env.OWNER_NAME || 'KALINDU',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0] || 'KALINDU', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'SONIC-MD',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  caption: process.env.CAPTION || 'SONIC-MD CREATED BY KALINDU',
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'dragon-md',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || `*Hello, ${citel.pushName},*

▬▬▬▬▬▬▬▬▬▬▬▬

       💚‿ʜᴇʟʟᴏᴡ‿❤️
 
► ɪ'ᴀᴍ ᴏɴʟɪɴᴇ ɴᴏᴡ...🦸‍♂️

► ᴍʏ ɴᴀᴍᴇ ɪꜱ ꜱᴏɴɪᴄ-ᴍᴅ ᴡᴀ ʙᴏᴛ...🤖

► ᴄʀᴀᴇᴛᴇᴅ ʙʏ ᴋᴀʟɪɴᴅᴜ...💗

► ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ...💃

► ᴛʏᴘᴇ .menu ᴛᴏ ɢᴇᴛ ᴍʏ ꜰᴜʟʟ ᴄᴏᴍᴍᴀᴍᴅ ʟɪꜱᴛ...🦚 

▬▬▬▬▬▬▬▬▬▬▬▬

ͲᎻᎪΝᏦՏ ҒϴᎡ ႮՏᏆΝᏀ ՏϴΝᏆᏟ-ᎷᎠ...🌵`,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  heroku: process.env.heroku || false,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v4.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'SI',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
