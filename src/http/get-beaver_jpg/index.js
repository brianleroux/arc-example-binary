let fs = require('fs')

exports.handler = async function http(req) {
  return {
    headers: {'content-type': 'image/jpg'}, 
    body: fs.readFileSync(__dirname + '/babybeaver.jpg').toString('base64'),
    isBase64Encoded: true
  }
}
