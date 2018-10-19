const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity("LuckyCraft BOT", {type: "PLAYING"});

});


bot.on("message", async message => {


    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice[1];

    if (command === `${prefix}help`){

        var icon = message.guild.iconURL;

        var serverEmbed = new discord.RichEmbed()
            .setDescription("__**Help Informatie**__")
            .setColor("#43d4e8")
            .addField("Begin Command", "Doe !commands om te beginnen met commando's!");

        return message.channel.send(serverEmbed);

    }

    if( command === `${prefix}botinfo`){

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.RichEmbed()
            .setDescription("__**Bot Informatie**__")
            .setColor("#43d4e8")
            .setThumbnail(botIcon)
            .addField("Bot naam", bot.user.username)
            .addField("Gemaakt door", "LuckyCreations // AlwaysLucky_");

        return message.channel.send(botEmbed);

    }

    if (command === `${prefix}serverinfo`){

        var icon = message.guild.iconURL;

        var serverEmbed = new discord.RichEmbed()
            .setDescription("__**Speler Informatie**__")
            .setColor("#43d4e8")
            .setThumbnail(icon)
            .addField("Jouw naam", message.member.displayName)
            .addField("Gejoined op op", message.member.joinedAt);

        return message.channel.send(serverEmbed);

    }

    if (command === `${prefix}winkelinfo`){

        var icon = message.guild.iconURL;

        var serverEmbed = new discord.RichEmbed()
            .setDescription("__**Winkel Informatie**__")
            .setColor("#43d4e8")
            .setThumbnail(icon)
            .addField("Winkelstatus", "Geopend")
            .addField("Totale Medewerkers", "5")
            .addField("Vooraad", "Vol");

        return message.channel.send(serverEmbed);

    }

    if( command === `${prefix}bestellen`){

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.RichEmbed()
            .setDescription("__**Bestel Informatie**__")
            .setColor("#43d4e8")
            .addField("Bestel status", "Mogelijk")
            .addField("Bestel link", "https://sites.google.com/view/luckystorest/");

        return message.channel.send(botEmbed);

    }

    if (command === `${prefix}commands`){

        var commandEmbed = new discord.RichEmbed()
            .setDescription("__**Commands Informatie**__")
            .setColor("#43d4e8")
            .setThumbnail(icon)
            .addField("!botinfo", "Dit geeft info over de bot!")
            .addField("!serverinfo", "Dit geeft info over de server!")
            .addField("!winkelinfo", "Dit geeft info over de winkel!")
            .addField("!bestellen", "Dit geeft uitleg over de bestellingen!")
            .addField("!zora", "Dit is toegevoegd voor ALLE medewerkers!")
            .addField("!dean", "Dit is toegevoegd voor ALLE medewerkers!")
            .addField("!wouter", "Dit is toegevoegd voor ALLE medewerkers!")
            .addField("!arda", "Dit is toegevoegd voor ALLE medewerkers!");

        return message.channel.send(commandEmbed);

    }

    if( command === `${prefix}zora`){

        return message.channel.send("Bram? Wanneer kan ik beginnen met werken?");

    }

    if( command === `${prefix}dean`){

        return message.channel.send("WORDT TOEGEVOEGD DEAN MELD JE IN PM!");

    }

    if( command === `${prefix}wouter`){

        return message.channel.send("WORDT TOEGEVOEGD WOUTER MELD JE IN PM!");

    }

    if( command === `${prefix}arda`){

        return message.channel.send("WORDT TOEGEVOEGD ARDA MELD JE IN PM!");

    }

})
bot.login(botConfig.token);