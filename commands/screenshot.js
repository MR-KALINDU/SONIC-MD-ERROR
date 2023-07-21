const {
sswebA
} = require('getscreenshot.js');
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

//await sswebA('websiteurl', fullss(true/false), 'desktop/tablet/phone')
const res = await sswebA('https://github.com/vihangayt0',false,'desktop');
let namefile = getRandom('') + '.jpg'
fs.writeFileSync(namefile, res);
await conn.sendMessage(from, { image: fs.readFileSync(namefile), caption: 'SCREENSHOT BY SONIC-MD' }, { quoted: mek })
