let fs = require('fs')
let chalk = require('chalk')

global.owner = ['919015286428'] // Put your number here
global.mods = [9015286428] // Want some help?
global.prems = [9015286428] // Premium user has unlimited limit
global.APIs = { // &
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  dzx: 'https://api.dhamzxploit.my.id',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // &
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'I hope you\'re fine'
  var sticker_author = 'Deepak❤️‍🔥'
} else {
  var sticker_name = stickerpack.Gappu
  var sticker_author = stickerpack.Deepak
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.packname = Gappu 👻
global.author = Deepak♥️


global.multiplier = 69 // The higher, The harder levelup


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
