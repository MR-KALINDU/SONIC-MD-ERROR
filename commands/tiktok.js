async function tiktokdl (url) { 
     const gettoken = await axios.get("https://tikdown.org/id"); 
     const $ = cheerio.load(gettoken.data); 
     const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value"); 
     const param = { 
         url: url, 
         _token: token, 
     }; 
     const { data } = await axios.request("https://tikdown.org/getAjax?", { 
         method: "post", 
         data: new URLSearchParams(Object.entries(param)), 
         headers: { 
             "content-type": "application/x-www-form-urlencoded; charset=UTF-8", 
             "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36", 
         }, 
     }); 
     var getdata = cheerio.load(data.html); 
     if (data.status) { 
         return { 
             status: true, 
             thumbnail: getdata("img").attr("src"), 
             video: getdata("div.download-links > div:nth-child(1) > a").attr("href"), 
             audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"), 
         }; 
     } else return { status: false }; 
 }; 
  
  
  
  
 //--------------------------------------------------------------------------- 
  
 cmd({ 
             pattern: "tiktok", 
             alias :  ['tt','ttdl'], 
             desc: "Downloads Tiktok Videos Via Url.", 
             category: "downloader", 
             filename: __filename, 
             use: '<add tiktok url.>' 
         }, 
  
         async(Void, citel, text) => { 
  if(!text) return await citel.reply(`*Uhh Please, Provide me tiktok Video Url*\n*_Ex .tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*`); 
  let txt = text ? text.split(" ")[0]:''; 
  if (!/tiktok/.test(txt)) return await citel.reply(`*Uhh Please, Give me Valid Tiktok Video Url!*`); 
  const { status ,thumbnail, video, audio } = await tiktokdl(txt) 
  console.log("url : " , video  ,"\nThumbnail : " , thumbnail ,"\n Audio url : " , audio ) 
  if (status) return await Void.sendMessage(citel.chat, {video : {url : video } , caption : Config.caption } , {quoted : citel }); 
  else return await citel.reply("Error While Downloading Your Video")  
 }) 
 //--------------------------------------------------------------------------- 
 /* 
 cmd({ 
             pattern: "tiktok", 
                   alias :  ['tt','ttdl'], 
             desc: "Downloads Tiktok Videos Via Url.", 
             category: "downloader", 
             react :'🥳', 
             filename: __filename, 
             use: '<add tiktok url.>' 
         }, 
  
         async(Void, citel, text) => { 
 if(!text) return await citel.reply(`*Uhh Please, Provide me tiktok Video Url*\n*_Ex .tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*`); 
 let txt = text ? text.split(" ")[0]:''; 
 const ttdl =  require("tiktok-video-downloader"); 
 if (!txt.includes("tiktok.com")) return  citel.reply(`*Uhh Please, Give me Valid Tiktok Video Url!*`); 
 try { 
   let res = await ttdl.getInfo(txt) 
     console.log(res); 
 let data  =" *User Name :* "+ res.author.username; 
     data +="\n *Video Views :* " + res.video.views; 
     data +="\n *Video Comments :* " + res.video.comments; 
     data +="\n *Video Sound :* " + res.backsound.name; 
     //data +="\n Video Link     : "+  res.video.url.no_wm; 
     data += "\n"+Config.caption; 
 let buttonMessage = 
     { 
               video: {url:res.video.url.no_wm}, 
               mimetype: 'video/mp4', 
               caption : "\t    *TIKTOK DOWNLOADER*  \n"+data 
      } ; return await Void.sendMessage(citel.chat, buttonMessage , {quoted : citel }); 
  
 } catch (error) {return citel.reply("Error While Downloading Your Video") } 
  
 }
