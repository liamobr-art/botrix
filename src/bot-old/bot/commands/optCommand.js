const { MessageEmbed } = require ('discord.js');


module.exports.run = async (client, message, args) => {
    console.log(args[0]);

    let roleMap = {
        "giveaways": "780368006190465064",
        "announcements": "750891030429040642",
        "changelog": "750894910197989567",
    }
    
    if (!args[0] || !roleMap[args[0]]) return message.reply('please add the role you would like to opt into. \n Roles to opt into: \n `giveaways`, `announcements`, `changelog`');
    
    let role = message.guild.roles.cache.find(r => r.id === roleMap[args[0]]);
    let member = message.member;
    let check = member.roles.cache.has(role.id) 

    if(!check)
        member.roles.add(role);
    else 
        member.roles.remove(role);
    message.react('👍');
}

module.exports.help = {
    name: 'opt',
    category: 'Utility',
    aliases: [''],
    description: 'opt in or out of roles',
    example: 'opt announcements | giveaways | changelog'
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: ['EMBED_LINKS'],
    approverOnly: false
}