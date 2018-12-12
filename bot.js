const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-2'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-2'){
        message.channel.send('#credit @SToReD#0241 10000')
    }
});

client.on('message', message => {
    if(message.content === '-2'){
        message.channel.send('#rep @SToReD#0241')
    }
});

client2.on('message', message => {
    if(message.content === '-2'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-2'){
        message.channel.send('#credit @SToReD#0241 10000')
    }
});

client2.on('message', message => {
    if(message.content === '-2'){
        message.channel.send('#rep @SToReD#0241')
    }
});

client3.on('message', message => {
    if(message.content === '-2'){
        message.channel.send('#daily @SToReD#0241')
    }
});

client3.on('message', message => {
    if(message.content === '-2'){
        message.channel.send('#credit @SToReD#0241 10000')
    }
});

client3.on('message', message => {
    if(message.content === '-2'){
        message.channel.send('#rep @SToReD#0241')
    }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam2') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam2') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam2') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
client3.login(process.env.TOKEN3);
