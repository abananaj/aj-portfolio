import { src, dest, watch, series, parallel } from "gulp";
import html from "gulp-file-include";
// import sass from "gulp-sass";
const sass = require('gulp-sass')(require('sass'));
import ts from "gulp-typescript";
import rename from "gulp-rename";
import path from "path";

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

function compileStyles() {
    return src("src/components/**/*.scss")
      .pipe(sass())
      .pipe(rename(function (file: { dirname: string; basename: string; extname: string; }) {
            // Get the parent directory name
            const parentDirectory = path.basename(file.dirname);
            // Set the new filename to the parent directory name with .css extension
            file.basename = parentDirectory; 
            file.extname = '.css'; // Ensure the extension is .css
        }))
        .pipe(dest("public/"));
}
function watchStyles() { watch(["src/**/*.scss"], compileStyles); }

function compileScripts() {
    return src("src/components/**/*.js")
        .pipe(ts({
            noImplicitAny: true,
            outFile: "index.js"
        }))
        .pipe(dest("public/"));
}
function watchScripts() { watch(["src/views/**/*.html", "src/components/**/*.html"], compileHtml); }
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
  // watchMarkdown
  compileStyles,
  watchStyles,
  compileScripts,
  watchScripts,
    compileHtml,
    watchHtml,
  );
