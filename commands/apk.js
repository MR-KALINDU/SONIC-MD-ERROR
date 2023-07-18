cmd({
            pattern: "apk",
            desc: "Downloads apks  .",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
        },

        async(Void, citel, text) => {
        if(!text )return citel.reply("*_Give me App Name_*");

	const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`; };
	let randomName = getRandom(".apk");
	const filePath = `./${randomName}`;     // fs.createWriteStream(`./${randomName}`)
        const {  search , download } = require('aptoide-scraper')
	let searc = await search(text);          //console.log(searc);
	let data={};
	if(searc.length){ data = await download(searc[0].id); }
	else return citel.reply("*_APP not Found, Try Other Name_*");
	
	
	const apkSize = parseInt(data.size);
	if(apkSize > 100) return citel.reply(`❌ File size bigger than 150mb.`);
       const url = data.dllink;
	 let  inf  ="*App Name :* " +data.name;
         inf +="\n*App id        :* " +data.package;
         inf +="\n*Last Up       :* " +data.lastup;
         inf +="\n*App Size     :* " +data.size;
        // inf +="\n*App Link     :* " +data.dllink;
	inf +="\n\n "+ Config.caption
         

axios.get(url, { responseType: 'stream' })
  .then(response => {
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  }).then(() => {
	
	let buttonMessage = {
                        document: fs.readFileSync(filePath),
                        mimetype: 'application/vnd.android.package-archive',
                        fileName: data.name+`.apk`,
                        caption : inf
                        
                    }
                  Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

    console.log('File downloaded successfully');

  
    fs.unlink(filePath, (err) => {
      if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
  }) .catch(error => {
	fs.unlink(filePath)
    return citel.reply('*_Apk not Found, Sorry_*')//:', error.message);
  });
	
	
	
	
	
	
	
	/*
  if(!text) return citel.reply(`*_Please Give Me App Name_*`);
let searc = await search(text);
//console.log(searc);
let data = await download(searc[0].id);
//console.log(data);

     let  inf  ="☄ App Name : " +data.name;
         inf +="\n*☄ App id        :* " +data.package;
         inf +="\n*☄ App id        :* " +data.lastup;
         inf +="\n*☄ App Size     :* " +data.size;
         inf +="\n*☄ App Link     :* " +data.dllink;
         inf +="\n ► ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ᴋᴀʟɪɴᴅᴜ 🧚‍♂️
         
                        let buttonMessage = {
                        document: {url : data.dllink},
                        mimetype: 'application/vnd.android.package-archive',
                        fileName: data.name+`.apk`,
                        caption : inf
                        
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
*/}
)
