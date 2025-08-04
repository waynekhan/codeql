/**
 * https://codeql.github.com/codeql-query-help/javascript/js-incomplete-sanitization/
 * https://github.com/github/codeql/blob/main/javascript/ql/src/Security/CWE-116/examples/IncompleteSanitization.js
 */

function escapeQuotes(s) {
  return s.replace("'", "''");
}
