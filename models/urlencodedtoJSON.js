const querystring = require('querystring');

function urlencodedToJSON(req, res, next) {
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            req.body = querystring.parse(body);
            next();
        });
    } else {
        next();
    }
}

module.exports = urlencodedToJSON;