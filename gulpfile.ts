import { src, dest, watch, series, parallel } from "gulp";
import html from "gulp-file-include";
// import rename from "gulp-rename";
// import ejs from "gulp-ejs";
// import markdown from 'gulp-markdown';

// CONTENT
function compileHtml() { 
  return src("src/views/*.html")
    .pipe(
      html({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("src"));
}
function watchHtml() { watch(["src/views/**/*.html", "src/components/**/*.html"], compileHtml); }

// function compileEjs() {
//   return src("src/views/*.ejs")
//     .pipe(ejs())
//     .pipe(rename({ extname: ".html" }))
//     .pipe(dest("src"));
// }

// function watchEjs() { watch("src/**/*.ejs", compileEjs); }
// // MARKDOWN
// function compileMarkdown() {
//   return src("dev/content/md/*.md")
//     .pipe(markdown())
//     .pipe(dest("dev/content/sections"));
// }
// function watchMarkdown() { watch("dev/content/md/*.md", compileMarkdown); }

exports.default = parallel(
  // compileEjs,
  // watchEjs,
    // compileMarkdown,
    compileHtml,
    watchHtml,
    // watchMarkdown
  );
