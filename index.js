const { channel } = require("diagnostics_channel");
const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
})

const prefix = "=";
const prefix2 = "!"

const Vin = ["Wine", "wine", "Vin", "vin"];
const VName = ["Venti", "venti", "Barbatos", "barbatos"];
const Ventibot = ["Ventibot", "ventibot", "Venti Bot", "venti bot"];
const Insulte = ["drunkard", "Drunkard", "perso inutile", "@ venti"];
const Apple = ["pomme", "Pomme"];
const Zhongli = ["Zhongli", "zhongli"];
const kazuha = ["kazuha", "Kazuha", "Kaedehara Kazuha", "kaedehara kazuha"];
const Traveler = ["Aether", "aether", "Lumine", "lumine", "traveler", "Traveler"];
const Sayu = ["sayu", "Sayu"];
const Jean = ["jean", "Jean"];
const Sucrose = ["Sucrose", "sucrose"];

Client.on("ready", () => {
    console.log("Yahoo !");

});



Client.on("messageCreate", message => {
    if (message.author.bot) return;
    
    //Kazuha
    for(var i = 0; i<kazuha.length; i++){
        if(message.content.includes (prefix + kazuha[i])){
        
            const attachment = new Discord.MessageAttachment('https://gamingsection.net/wp-content/uploads/2022/03/What-material-does-kazuha-need.png'); 

            message.channel.send({ content: "Here is the wandering samurai's required materials!", files: [attachment] })

        }
    }  
     //Venti
    for(var i = 0; i<VName.length; i++){
        if(message.content.includes(prefix + VName[i])){

        const attachment = new Discord.MessageAttachment('https://i.pinimg.com/736x/81/d9/ec/81d9ecabea1f8cb2790715d4a757357a.jpg'); 

        message.channel.send({ content: "Here's my required materials !", files: [attachment] })
        }
    }
    // traveler
    for(var i = 0; i<Traveler.length; i++){
        if(message.content.includes (prefix + Traveler[i])){
        
            const attachment = new Discord.MessageAttachment('http://genshintool.com/wp-content/uploads/2021/12/unnamed-file-202.jpg'); 

            message.channel.send({ content: "Here's' the traveler's required materials!", files: [attachment] })

        }
    }
    //Jean
    for(var i = 0; i<Jean.length; i++){
        if(message.content.includes (prefix + Jean[i])){
    
            const attachment = new Discord.MessageAttachment('http://genshintool.com/wp-content/uploads/2021/11/unnamed-file-3.jpeg'); 

            message.channel.send({ content: "Here is the Acting Grand Master's required materials!", files: [attachment] })

        }
    }
    //Sucrose
    for(var i = 0; i<Sucrose.length; i++){
        if(message.content.includes (prefix + Sucrose[i])){
    
            const attachment = new Discord.MessageAttachment('https://i.pinimg.com/474x/95/15/4b/95154ba5b40cea97a1dbf9c95799e2c9.jpg'); 

            message.channel.send({ content: "Here is Sucrose's required materials!", files: [attachment] })

        }   
    }
    //Sayu
    for(var i = 0; i<Sayu.length; i++){
        if(message.content.includes (prefix + Sayu[i])){
        
            const attachment = new Discord.MessageAttachment('https://pbs.twimg.com/media/E6d4CbeXsAERRVB.jpg'); 
    
            message.channel.send({ content: "Here is the tiny, sleepy ninja's required materials!", files: [attachment] })
    
        }   
    }

    //Bonjour
    if(message.content.includes(prefix + ("hello"))){
        message.channel.send("Hello !");
        }

    for (var i=0; i < Insulte.length; i++){
        
        if(message.content.includes(Insulte[i])){
        
            message.channel.send("rude.");
            
            }
    }   
    
    // réaction à Zhongli
    for (var i=0; i < Zhongli.length; i++){
        
        if(message.content.includes(Zhongli[i])){
    
            message.channel.send("old man.");
    
            }
        }   

    //réaction au mot "wine"
    for (var i=0; i < Vin.length; i++){
        
        if(message.content.includes(Vin[i])){

        message.reply(":slight_smile:");

        }
    }  
    
    //Liste de commandes pour Venti
    for (var i=0; i < Ventibot.length; i++){

        if(message.content.includes(prefix2 + Ventibot[i])){

            message.channel.send("I answer to different commands and words ! This includes :\n\n =<any anemo character>\n\n =hello\n\n My own name !\n\nSecret words !\n");
            
        
        }
    
    }

    // Appeler Venti
    for (var i=0; i < VName.length; i++){

        if(message.content.includes(VName[i])){ 
            if(message.content.includes(prefix2)) return;

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
