const Discord = require('discord.js'); 
const client = new Discord.Client();
const { Client, MessageAttachment, MessageEmbed } = require('discord.js');

client.once('ready', () => {
    console.log('DemoBot is online!');
}); 

//NEW MEMBER WELCOME
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    console.log(channel);
    if (!channel) return;
    channel.send(`Dont expect a welcome here, ${member}`);
  });
  

//IMAGE UPLOAD

client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!rip') {
      // Create the attachment using MessageAttachment
      const attachment = new MessageAttachment('./rip.jpg');
      // Send the attachment in the message channel with a content
      message.channel.send(`${message.author},`, attachment);
    }
  });


const prefix = '!'

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)
        return;
    
    else if(message.content.startsWith('!ban')) {
            const user = message.mentions.users.first();
            if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                .ban({
                    reason: 'BANNED!',
                })
                .then(() => {
                    message.reply(`BANNED ${user.tag}`);
                })
                .catch(err => {
                    message.reply('I am powerless here');
                
                    console.error(err);
                });
            } else {
                message.reply("Failed!");
            }
            } else {
            message.reply("Ban WHO?");
            }
    }
    else if (message.content.startsWith('!kick')) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .kick('Get outta here')
              .then(() => {
                message.reply(`THROWED ${user.tag}`);
              })
              .catch(err => {
                message.reply("There's always a bigger fish."); //fail 
                // Log the error
                console.error(err);
              });
          } else {
            message.reply("Are you retarded?");
          }
        } else {
          message.reply("Just say the GODDAMN NAME!");
        }
      }
      else if (message.content === '!help'|| message.content === '!commands') {
        const embed = new MessageEmbed()
          .setTitle('A Bot by Bot for Bots.')
          .setColor(0x10DF10)
          .setDescription('\n\n List of Commands are given below:\n !kick - to kick a member\n !ban - to ban a member\n !toxic - to check the toxic meter\n\n An Exclusive Bot for TOXIC TRYHARDS!');
        message.channel.send(embed);
      }
      else if (message.content === '!toxic') {
          //message.channel.send(`HyperBOI_69 : ${hb_counter}\n Ghoxtrix : ${g_counter} \n SinOfPride07 : ${sop_counter} \n Miserable_TaiPAn : ${p_counter}\n JeSus : ${s_counter}\n fifuhoobs : ${n_counter}`);
          const embed = new MessageEmbed()
          .setTitle('TOXIC METER:')
          .setColor('#FF0000')
          .setDescription(`HyperBOI_69 : ${hb_counter}\n Ghoxtrix : ${g_counter} \n SinOfPride07 : ${sop_counter} \n Miserable_TaiPAn : ${p_counter}\n JeSus : ${s_counter}\n fifuhoobs : ${n_counter}`);
        message.channel.send(embed);
        }

    
});

forbiddenWords = ['anus',
    'arse',
    'ass',
    'ass fuck',
    'ass hole',
    'assfucker',
    'asshole',
    'assshole',
    'bastard',
    'bitch',
    'black cock',
    'bloody hell',
    'boong',
    'cock',
    'cockfucker',
    'cocksuck',
    'cocksucker',
    'coon',
    'coonnass',
    'crap',
    'cunt',
    'cyberfuck',
    'damn',
    'darn',
    'dick',
    'dirty',
    'douche',
    'dummy',
    'erect',
    'erection',
    'erotic',
    'escort',
    'fag',
    'faggot',
    'fuck',
    'Fuck off',
    'fuck you',
    'fuckass',
    'fuckhole',
    'god damn',
    'gook',
    'hard core',
    'hardcore',
    'homoerotic',
    'hore',
    'lesbian',
    'lesbians',
    'mother fucker',
    'motherfuck',
    'motherfucker',
    'negro',
    'nigger',
    'orgasim',
    'orgasm',
    'penis',
    'penisfucker',
    'piss',
    'piss off',
    'porn',
    'porno',
    'pornography',
    'pussy',
    'retard',
    'sadist',
    'sex',
    'sexy',
    'shit',
    'slut',
    'son of a bitch',
    'suck',
    'tits',
    'viagra',
    'whore',
    'xxx',
    'maderchod',
    'madherchod',
    'bhosadike',
    'bhosdike',
    'bsdk',
    'behenchod',
    'bc',
    'mc',
    'betichod',
    'chodu',
    'gay',
    'gae',
    'gaand',
    'gandu',
    'chutiya',
    'gadha',
    'idiot',
    'idot',
    'lauda',
    'loda',
    'lund',
    'hijra',
    'kutta',
    'kamina',
    'harami',
    'randi',
    'sala',
    'saala',
    'chut',
    'chuchi',
    'boobs',
    'bur',
    'jhat',
    'jhaat',
    'jhaatu',
    'lavde',
    'maa',
    'chudao',
    'panda',
    'pandachodi',
    'madharchod',
    'madarchod',
    'bhosdiwale',
    'bhosdiwala',
    'bahinchod',
    'boor',
    'chorchoda',
    'gand',
    'madaarchod',
    'land',
    'bakchodi',
    'lwda',
    'lawda',
    'chodo',
    'lasan'
];
sop_counter = 0;
hb_counter = 0;
g_counter = 0;
p_counter = 0;
n_counter = 0;
s_counter = 0;
client.on('message', message =>{
    for (var i = 0; i < forbiddenWords.length; i++) {
    if (message.content.includes(forbiddenWords[i])) {
        message.react(`🤬`)
        message.reply(forbiddenWords[i])
        if(message.author.username === 'SinOfPride07')
        sop_counter = sop_counter + 1;
        if(message.author.username === 'Ghoxtrix.')
        g_counter = g_counter + 1;
        if(message.author.username === 'HyperBOI_69')
        hb_counter = hb_counter + 1;
        if(message.author.username === 'Currency_180')
        p_counter = p_counter + 1;
        if(message.author.username === 'JeSus')
        s_counter = s_counter + 1;
        if(message.author.username === 'fifuhoobs')
        n_counter = n_counter + 1;
        
      break;
    }
  }

});

client.on('message', message =>{
    if(message.content.includes('vc') || message.content.includes('VC'))
        message.channel.send('Join the voice chat you dumb little shit');
});





client.login(process.env.token);
