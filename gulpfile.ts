import { src, dest, watch, series, parallel } from "gulp";
import html from "gulp-file-include";
import markdown from 'gulp-markdown';

// CONTENT
function compileHtml() {
  return src("dev/content/*.html")
    .pipe(
      html({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("dev"));
}
function watchHtml() { watch(["dev/content/**/*.html", "dev/content/*.html"], compileHtml); }

// MARKDOWN
function compileMarkdown() {
  return src("dev/content/md/*.md")
    .pipe(markdown())
    .pipe(dest("dev/content/sections"));
}
function watchMarkdown() { watch("dev/content/md/*.md", compileMarkdown); }

exports.default = parallel(
    compileMarkdown,
    compileHtml,
    watchHtml,
    watchMarkdown
  );
