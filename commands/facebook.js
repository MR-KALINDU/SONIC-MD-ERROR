/*cmd({ 
             pattern: "fb", 
             desc: "Downloads fb videos  .", 
             category: "downloader", 
             filename: __filename, 
             use: '<add fb url.>' 
         }, 
  
         async(Void, citel, text) => { 
           if(!text) return citel.reply(`*_Please Give me Facebook Video Url_*`); 
  
          
          
          
         const {  fbdl1, fbdl2 } = require('vihangayt-fbdl') 
  
 let res = await fbdl1(text) 
 //citel.reply("url :" +res.meta.title+"\n Duration "+ res.meta.duration); 
 // console.log(res) 
 let vurl=res.url[0].url; 
  
     let data  ="*Video Name       :* "+ res.meta.title ; 
         data +="\n*Video Duration : *" + res.meta.duration ; 
         data +="\n*Video Link     :* "+  vurl; 
  
                         let buttonMessage = { 
                         video: {url:vurl}, 
                         mimetype: 'video/mp4', 
                         fileName: res.meta.title+`.mp4`, 
                         caption : "    *FACEBOOK DOWNLOADER*  \n"+data 
                          
                     } 
                  Void.sendMessage(citel.chat, buttonMessage, { quoted: citel }); 
  
  
 } 
 )*/
 
 //--------------------------------------------------------------------------- 
 cmd({ 
             pattern: "facebook", 
             alias :  ['fb','fbdl'], 
             desc: "Downloads fb videos  .", 
             category: "downloader", 
             filename: __filename, 
             use: '<add fb url.>' 
         }, 
  
         async(Void, citel, text) => { 
 if(!text) return citel.reply(`*_Please Give me Facebook Video Url_*`); 
 fbInfoVideo.getInfo(text) 
   .then(info =>{ 
 let vurl=info.video.url_video; 
 // citel.reply('name:-------'+info.video.title); 
  
       let data  ="*Video Name     :* "+  info.video.title; 
         data +="\n*Video Views    :* "+  info.video.view; 
         data +="\n*Video Comments :* "+  info.video.comment; 
         data +="\n*Video Likes    :* "+info.video.reaction.Like ; 
         //data +="\n*Video Link     :* "+  vurl; 
 //citel.reply("    FACEBOOK DOWNLOADER  \n"+data) 
 //console.log(info); 
         data +=Config.caption ; 
                         let buttonMessage = { 
                         video: {url:vurl}, 
                         mimetype: 'video/mp4', 
                         fileName: info.video.title+`.mp4`, 
                         caption :"     *FACEBOOK DOWNLOADER*  \n"+data 
  
                     } 
                  Void.sendMessage(citel.chat, buttonMessage, { quoted: citel }); 
  
  
  
 }) 
   .catch(err => {citel.reply("Error, Video Not Found\n *Please Give Me A Valid Url*"); 
                         console.error(err);}) 
 } 
 )
