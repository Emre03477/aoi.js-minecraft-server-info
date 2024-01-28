module.exports = {
name:"sunucu",
aliases:["mcsunucu","minecraftsunucu","mcsw","minecraftsw","sw","sv"],
code:`
$title[Ayran Code Share;https://discord.com/invite/akparti]
$author[$guildname;$guildIcon[$guildID]]
$addField[Oyun Modu:;Hayatta Kalma;true]
$addField[Oyuncu Sayısı:;
$get[aktif] / $get[max];true]
$addField[Sunucu Sürümü:;$get[surum];true]
$addField[Sunucu açık mı?;$get[durum2];true]
$image[$get[resim]]
$addTimesTamp
$let[durum2;$replaceText[$get[durum];true;Açık]
$replaceText[$let[durum;$jsonRequest[https://api.mcstatus.io/v2/status/bedrock/$get[i]:$get[p];online;Hata!]] ;false;Kapalı]
$let[surum;$jsonRequest[https://api.mcstatus.io/v2/status/bedrock/$get[i]:$get[p];version.name;hata]]
$let[aktif;$jsonRequest[https://api.mcstatus.io/v2/status/bedrock/$get[i]:$get[p];players.online;Hata]]
$let[max;$jsonRequest[https://api.mcstatus.io/v2/status/bedrock/$get[i]:$get[p];players.max;Hata]]
$addButton[1;Ayran Code Share;link;https://discord.com/invite/akparti;false]
$let[resim;http://status.mclive.eu/$get[i]/$get[i]/$get[p]/banner.png]
$footer[discord.gg/akparti;$userAvatar[$clientID]]
$onlyIf[$jsonRequest[https://api.mcstatus.io/v2/status/bedrock/$get[i]:$get[p];online;Hata!]==true;Sunucu açık olmadığından dolayı sunucu verileri gösterilemiyor.]
$reply[$messageid;false]
$let[i;$getVar[ip;main]
$let[p;$getVar[port;main]
$cooldown[20s;]
`}
