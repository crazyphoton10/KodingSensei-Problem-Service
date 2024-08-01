const sanitizeHtml = require("sanitize-html");
const marked = require("marked");
const TurndownService = require("turndown");

function markdownSanitizer(markdownContent) {
  const turndownService = new TurndownService();

  //Convert markdown to html
  const parsedHtml = marked.parse(markdownContent);
//   console.log(parsedHtml);

  //Sanitize Html
  const sanitizedHtml = sanitizeHtml(parsedHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags,
  });
//   console.log(sanitizedHtml);

  //Convert sanitizedHtml back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
//   console.log(sanitizedMarkdown);

  return sanitizedMarkdown;
}

module.exports = markdownSanitizer;

// Test
// const input = `
// # Hello world

// ### This is a markdown

// - something

// <script>alert("Wohoo")</script>

// [Link] (www.google.com)`;

// markdownSanitizer(input);
