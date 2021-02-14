const help = (prefix) => {
	return `> *𝐒𝐭𝐢𝐜𝐤𝐞𝐫* <
            𝐭𝐢𝐨 𝐝𝐚𝐫𝐤 𝐨 𝐛𝐫𝐚𝐛𝐨
 
command : *${prefix}sticker* or *${prefix}stiker*
desc : converter imagem / gif / vídeo em adesivo
usage : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo with caption\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : convert image to sticker while removing the background
usage : responder imagem ou enviar imagem with caption\n
command : *${prefix}toimg*
desc : converter adesivo em imagem
usage : reply sticker\n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto em adesivo
usage : *${prefix}tsticker text in here*\n

                       > *𝐌𝐞𝐦𝐞𝐬* <
command : *${prefix}meme*
desc : imagens aleatórias de meme [english]
usage : apenas envie o comando\n

                         > *𝑶𝒖𝒕𝒓𝒐𝒔* <
command : *${prefix}tp*
desc : Text / Logo fabricante de textpro.me
usage : *${prefix}tp [no] [text]*\nexample : *${prefix}tp 1 YourText*
note : *${prefix}tp list* ( for show all theme )\n
command : *${prefix}ep*
desc : Text / Logo maker from ephoto360.com
usage : *${prefix}ep [no] [text]*\nexample : *${prefix}ep 1 YourText*
note : *${prefix}ep list* ( for show all theme )\n
command : *${prefix}tahta*
desc : Harta Tahta .....
usage : *${prefix}tahta [text]*\nexample : *${prefix}tahta YourText*\n
command : *${prefix}gtts*
desc : convert text to speech/audio
usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : imagens aleatórias de loli
usage : just send the command\n
command : *${prefix}nsfwloli*
desc : random nsfw loli images
usage : just send the command\n
command : *${prefix}url2img*
desc : take web screenshots
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : your message will be replied to by simi
usage : *${prefix}simi yourmessage*\n
command : *${prefix}ocr*
desc : take the text in the picture
usage : reply image, or send image with caption\n
command : *${prefix}wait*
desc : search anime with image [ What Anime Is This/That ]
usage : reply image, or send image with caption\n
command : *${prefix}setprefix*
desc : replace prefix
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : This command can only be used by the bot owner\n

                         > *𝑮𝒓𝒖𝒑𝒐𝒔* <
command : *${prefix}add*
desc : adicionar membro ao grupo
usage : *${prefix}add 62813xxxxx*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}kick*
desc : chutar membros do grupo
usage : *${prefix}kick @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}promote*
desc : make the group member as group admin
usage : *${prefix}promote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
usage : *${prefix}demote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}linkgroup*
desc : pegue o link do grupo
usage : apenas envie o comando
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}leave*
desc : Faça o bot sair do grupo
usage : apenas envie o comando
note : Só pode ser usado por administradores de grupo e proprietário do bot\n
command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usage : apenas envie o comando
note : This command can be used if you are a group admin\n
command : *${prefix}simih*
desc : ative o modo simi no grupo
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
