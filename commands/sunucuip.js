module.exports = {
name:"ip",
aliases:["swip","serverip","sunucuip","port","mcip","minecraftip"],
code:`
$title[Sunucu verileri aşağıda yer alıyor.;https://discord.gg/akparti]
$addField[Sunucu Port:;$getVar[port;main];true]
$addField[Sunucu IP:; $getVar[ip;main];true]
$footer[$guildName[$guildID;$userAvatar[$clientID]]
$addButton[1;Bot Ping: $ping ms;primary;ping;true]
$addButton[1;Ayran Code Share;link;https://discord.com/invite/akparti;false]
$reply[$messageID;false]
$cooldown[20s;]`
    }
