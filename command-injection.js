/**
 * https://codeql.github.com/codeql-query-help/javascript/js-command-line-injection/
 * https://github.com/github/codeql/blob/main/javascript/ql/src/Security/CWE-078/examples/command-injection.js
 */

var cp = require("child_process"),
    http = require('http'),
    url = require('url');

var server = http.createServer(function(req, res) {
    let file = url.parse(req.url, true).query.path;

    cp.execSync(`wc -l ${file}`); // BAD
});
