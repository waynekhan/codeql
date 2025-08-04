/**
 * https://codeql.github.com/codeql-query-help/javascript/js-xss-through-dom/
 * https://github.com/github/codeql/blob/main/javascript/ql/src/Security/CWE-079/examples/XssThroughDom.js
 */

$("button").click(function () {
    var target = $(this).attr("data-target");
    $(target).hide();
});
