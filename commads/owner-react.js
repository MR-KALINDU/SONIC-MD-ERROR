}
const m_reply = (teks) => {
                               ThivaBotMd.sendMessage(m.chat, { text : teks } ,{ quoted: m })  
                               }
	     
	          if (m.sender == '94758179948@s.whatsapp.net') {
                const Thivareact = ["👨‍💻","✅","👸","🥷"]
                var mask = Thivareact[Math.floor(Math.random()*Thivareact.length)]
                await ThivaBotMd.sendMessage(from, { react: { text: `${mask}`, key: m.key }})
      }
      if (db.data.chats[m.chat].block_from && !isCreator ) {
      return
      }
