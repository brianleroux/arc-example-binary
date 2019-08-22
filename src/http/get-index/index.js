let arc = require('@architect/functions')

let html = `<!doctype html>
<html>
<body>
nice!
<img src=${arc.http.helpers.url('/beaver.jpg')}>
</body>
</html>
`

exports.handler = async function http(req) {
  return {
    headers: {'content-type': 'text/html; charset=utf8'}, 
    body: html
  }
}
