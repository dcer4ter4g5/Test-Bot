const Discord = require("discord.js");
const client = new Discord.Client();
const figlet = require('figlet');
const config = require('./config.json');
const colors = require('colors');
require('dotenv').config();
const { readdirSync } = require('fs');
const { join } = require('path');
const { Collection } = require('discord.js');
const readline = require('readline');
const cheerio = require('cheerio');
const request = require('request');
const splashy = new Discord.Client();
let prefix = config.prefix;
const fs = require("fs");
var userTickets = new Map();

usedCommandRecently4 = new Set();

const cmdsArray = [
    "**-------------------------------------------------------**",
    "fma!Minecraft",
    "fma!daily",
    "fma!balance (membru)"
];

const infoArray = [
    "**-------------------------------------------------------**",
    "Official Bot Developer:",
    "TheCosminRO#8240",
    "Official Bot Discord:",
    "https://discord.gg/wVsbcvu"
];

client.on("message", (message) => {
    if(config.restrictToID == true && message.author.id != config.id) return;

    if(message.channel.type == "dm") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command == "help"){
        const embed = new Discord.RichEmbed()
        .addField("**COMENZI:**", cmdsArray)
        .addField("**INFORMATII:**", infoArray)
        .setColor('#c8e600');
        message.channel.send({embed: embed});
    }
});

client.on("error", (error) => {
    client.login(config.token);
});

client.on('message', message =>{
    if (!message.guild) return;
    if (message.channel.id === '676115467534073857') 
if (message.content === 'fma!Minecraft'){
    const embed = new Discord.RichEmbed()
    .setTitle('Ai primit cont-ul in privat.')
    .setColor('#c8e600')
    message.channel.send({embed: embed});

    if (usedCommandRecently4.has(message.author.id)){
        const embed = new Discord.RichEmbed()
        .setTitle('Nu mai genera atat de rapid, poti lua ban..')
        .setColor('#859900')
        message.channel.send({embed: embed});
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1)
    var string = `jake5mlakefield@hotmail.co.uk:Worldatwar1
    chase_russo@yahoo.com:Chaserocks246
    joshbreed@ymail.com:mysavior137
    cloudkicker57@yahoo.com:soccer18
    raysparks38@gmail.com:Blabby38
    smultron.reynolds@gmail.com:stockholm08
    morgansquire@live.com:Morgipies61
    geesmarshmallows@gmail.com:sh3Rl0ck3d
    xerneasgamming@gmail.com:pokemon44
    shawnklass@yahoo.com:qmkxqmkx2
    slobbishpilot@aol.com:yank12
    skillsrus2004@aol.com:angel100
    shadowkitcorp@aol.com:husband
    smithnl1227@hotmail.com:anakin
    shamekiabrown@ymail.com:brown1981
    slackey511@gmail.com:grayson511
    snigirev99@inbox.ru:snigirev00
    amber81802@gmail.com:Ambuscus7
    ig.blvckwulf@gmail.com:barbara1010
    vargas0719@yahoo.com:avery0719
    martixingwei@gmail.com:Lpwa0xsrsdw
    MataGaming1@gmail.com:gocats22
    xahni@starless.dk:Cugeher13
    sabbytheninja@gmail.com:3doorsdown
    tommytang_319@yahoo.com:tommy319
    simon_chatelier@hotmail.fr:ganondorf44
    mikkosmith@gmail.com:skyline8
    varuxz98@hotmail.se:vision99
    moniqueabarker@hotmail.com:justindrew123
    genetixac@gmail.com:genetix59169
    seanmagane@simnet.is:2assneck
    maehlic@hotmail.de:eg0is712
    connorchapdelaine@hotmail.com:March132000
    steffen.keller@live.de:bibbels1996
    cortezwalker4@gmail.com:walker923
    cmicciulli@gmail.com:brooklyn814
    mclapaloma@web.de:jakob5914
    iliketoreed93@gmail.com:Bassoon@2798
    stonedrider87@gmx.de:1593tgsr
    zackxattack@gmail.com:Code16me
    gilcardenas@me.com:Fn3581321
    brick.lichter@gmail.com:BenL2003
    spamnebula666@gmail.com:ljra2000
    masterhandjulius@gmail.com:loton101
    tshurtz722@gmail.com:12east
    ugamerzz@gmail.com:gqfbemxh
    elixince@gmail.com:Jacob604!
    lufos33@gmail.com:12042005lo
    tnda2010@yahoo.com:sandile
    p.bluyssen@hetnet.nl:willem133
    treen7223@yahoo.com:maymay32
    perrudolph@gmail.com:jesusis1
    ku6u705@gmail.com:Danonek02
    pablosantiago99@gmail.com:Casimiro123
    red68621@gmail.com:Ann45plT
    nauticalbanana@gmail.com:zamabing123
    miguel.s.g@live.com:q3jgyfcdq
    jackplay1998@hotmail.com:devilsoul54
    alice28629@msn.com:whatever03
    bigsisjazzy3@yahoo.com:tanya5504
    xastrela@gmail.com:zombiekitty25
    erishay123@gmail.com:July1776
    slowmotionman2@gmail.com:scatt3rblast3r
    marrs79ss@sbcglobal.net:sparkplug4
    jitters126@gmail.com:99falcons
    maya2903@gmx.de:Oddworld123
    deli_walsh@sbcglobal.net:ghmndmnq1
    baileyrosebates@gmail.com:bobandsophie1
    ejg83713@gmail.com:Ohio2007
    theinsanemonkey@hotmail.com:007magnet007
    dazzle1davis@gmail.com:pdazzle3
    brendin101@msn.com:IMAWIZARD007
    porkchop056@gmail.com:Porkchop650
    laurenumbarger@gmail.com:nerual03
    carlabrownky@yahoo.com:cb112202
    brendan1974@hotmail.ca:mommy1974
    aske47@hotmail.com:AndersAnd47
    halo99elite@hotmail.com:theawesome123
    mrtmarkowski@gmail.com:newford2
    kenadiancsj@gmail.com:Anyatisiti1
    jandaxigas@westnet.com.au:michael02
    allieskittles7@gmail.com:Rulerhorses19
    buchadnezzar@hotmail.com:Bokkie2105
    choppycands0110@gmail.com:ella2018
    mockingjay101@hotmail.com:bakaandtest1212
    anhilliatorraids@gmail.com:Web23456
    tungm2011@gmail.com:1q2w3e4r
    rluxon@hotmail.co.uk:andrew93
    bomberkj@yahoo.de:Marc07061987
    lucasos@live.co.uk:lonsdale12
    zzzboysgville@gmail.com:3reuters
    lesliegastonguay@hotmail.com:Assclown6
    hybrid7884@gmail.com:hybrid7884
    serbbrant@yahoo.com:blue3040
    poylido@live.ca:remi1994
    cyralek@gmail.com:destiny2015
    mac.cofell@gmail.com:Hardhead12
    macauleyward13@gmail.com:stars112
    faithswim@yahoo.com:sparky01
    bakerdeloro@gmail.com:pass9759`

    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
};
});

client.on('message', message =>{
    if (message.content === 'Cine da conturi?'){
        message.author.send('Conturile le da TheCosminRO');
    };
});

client.on('message', message =>{
    if (message.content === 'Cum fac rost de un cont?'){
        message.author.send('Viziteaza canalul #🏦-invita');
    };
});

client.on('message', message =>{
    if (message.content === 'Vreau sa cumpar un cont.'){
        message.author.send('Daca vrei sa cumperi un cont te rugam sa il contactezi pe TheCosminRO#8240');
    };
});

client.on('message', message =>{
    if (message.content === 'Vreau sa cumpar un cont'){
        message.author.send('Daca vrei sa cumperi un cont te rugam sa il contactezi pe TheCosminRO#8240');
    };
});

client.on('message', message =>{
    if (message.content === 'Vreau cont!'){
        message.author.send('Daca vrei sa cumperi un cont te rugam sa il contactezi pe TheCosminRO#8240');
    };
});

client.on('message', message =>{
    if (message.content === 'Vreau cont.'){
        message.author.send('Daca vrei sa cumperi un cont te rugam sa il contactezi pe TheCosminRO#8240');
    };
});

client.on('message', message =>{
    if (message.content === 'Vreau cont'){
        message.author.send('Daca vrei sa cumperi un cont te rugam sa il contactezi pe TheCosminRO#8240');
    };
});

client.on('message', message =>{
    if (message.content === 'Pot sa iau un cont gratis?'){
        message.author.send('Nu poti lua un cont gratis. Daca vrei cont invita sau cumpara');
    };
});

client.on('message', message =>{
    if (!message.guild) return;
    if (message.channel.id === '673447619279716372') 
if (message.content === 'fma!Minecraft'){
    const embed = new Discord.RichEmbed()
    .setTitle('Nu ai acces sa generezi pe acest canal.')
    .setColor('#c8e600')
    message.channel.send({embed: embed});

    if (usedCommandRecently4.has(message.author.id)){
        const embed = new Discord.RichEmbed()
        .setTitle('Nu mai genera atat de rapid, poti lua ban..')
        .setColor('#859900')
        message.channel.send({embed: embed});
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1)
};
};
});

client.on('message', message =>{
    if (!message.guild) return;
    if (message.channel.id === '673445476137304126') 
if (message.content === 'fma!Minecraft'){
    const embed = new Discord.RichEmbed()
    .setTitle('Nu ai acces sa generezi pe acest canal.')
    .setColor('#c8e600')
    message.channel.send({embed: embed});

    if (usedCommandRecently4.has(message.author.id)){
        const embed = new Discord.RichEmbed()
        .setTitle('Nu mai genera atat de rapid, poti lua ban..')
        .setColor('#859900')
        message.channel.send({embed: embed});
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1)
};
};
});

client.on('message', message =>{
    if (!message.guild) return;
    if (message.channel.id === '673447485087416330') 
if (message.content === 'fma!Minecraft'){
    const embed = new Discord.RichEmbed()
    .setTitle('Nu ai acces sa generezi pe acest canal.')
    .setColor('#c8e600')
    message.channel.send({embed: embed});

    if (usedCommandRecently4.has(message.author.id)){
        const embed = new Discord.RichEmbed()
        .setTitle('Nu mai genera atat de rapid, poti lua ban..')
        .setColor('#859900')
        message.channel.send({embed: embed});
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1)
};
};
});

client.on('message', message =>{
    if (!message.guild) return;
    if (message.channel.id === '673447931675803668') 
if (message.content === 'fma!Minecraft'){
    const embed = new Discord.RichEmbed()
    .setTitle('Nu ai acces sa generezi pe acest canal.')
    .setColor('#c8e600')
    message.channel.send({embed: embed});

    if (usedCommandRecently4.has(message.author.id)){
        const embed = new Discord.RichEmbed()
        .setTitle('Nu mai genera atat de rapid, poti lua ban..')
        .setColor('#859900')
        message.channel.send({embed: embed});
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1)
};
};
});

client.on('ready', () =>{
    console.log('Ai pornit bot-ul.')
    client.user.setStatus('idle')
    client.user.setPresence({
        game: {
            name: 'Free Minecraft Accounts',
            type: "PLAYING",
            url: "https://www.twitch.tv/thecosminro"
        }
    });
});

const TOKEN = "Njc1MDE1MzYwNTk2MDE3MTYy.Xj5SWA.8lXk6Uge62KKNXtXwT9vmtp3vFM"
client.login(TOKEN);