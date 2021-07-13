const Discord = require("discord.js"); //buralara ellemeyin admin yapacaksanız tokenı env gizleyin.
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);


client.on('message', msg => {
  if (msg.content === '+gonder') { //Mesajınızı alta yazın
        msg.channel.send('selam nasılsın'); 
  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         // elleme
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + "ping");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   // elleme
}, 3000);

//Alttaki durumu kendinize göre düzenleyebilirsiniz.

client.on("ready", () => {
client.user.setActivity(`Can ❤️ `, {type: "watching"}); 
});

