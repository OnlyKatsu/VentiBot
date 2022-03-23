const { channel } = require("diagnostics_channel");
const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
})

const prefix = "!";
const Vin = ["Wine", "wine", "Vin", "vin"];
const VName = ["Venti", "venti", "Barbatos", "barbatos", "drunkard", "Drunkard"];
const Apple = ["pomme", "Pomme"];
const Zhongli = ["Zhongli", "zhongli"]


Client.on("ready", () => {
    console.log("Yahoo !");

});



Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //Bonjour
    if(message.content.includes(prefix + ("hello"))){
        message.channel.send("Hello !");
        }

    //Zhongli
    for (var i=0; i < Zhongli.length; i++){
        
        if(message.content.includes(Zhongli[i])){
    
            message.reply("Old man.");
    
            }
        }   

    //réaction au mot "wine"
    for (var i=0; i < Vin.length; i++){
        
        if(message.content.includes(Vin[i])){

        message.reply(":slight_smile:");

        }
    }   
    
    // Appeler Venti
    for (var i=0; i < VName.length; i++){

        if(message.content.includes(VName[i])){

            message.channel.send("ehe");

        
        }
    
    }

    for (var i=0; i < Apple.length; i++){

        if(message.content.includes(Apple[i])){

            message.reply(":heart:");
        
        }

    }
    
});

Client.login(process.env.TOKEN);