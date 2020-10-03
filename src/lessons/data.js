import raw from "raw.macro"; // raw.macro used for bringing in file data as string

// lesson 1
const lesson_01_html = raw("./01/html.txt");
const lesson_01_css = raw("./01/css.txt");
const lesson_01_js = raw("./01/js.txt");

// lesson 2
const lesson_02_html = raw("./02/html.txt");
const lesson_02_css = raw("./02/css.txt");
const lesson_02_js = raw("./02/js.txt");

// lesson 3
const lesson_03_html = raw("./03/html.txt");
const lesson_03_css = raw("./03/css.txt");
const lesson_03_js = raw("./03/js.txt");

const lessons = [
  {
    html: lesson_01_html,
    css: lesson_01_css,
    js: lesson_01_js,
  },
  {
    html: lesson_02_html,
    css: lesson_02_css,
    js: lesson_02_js,
  },
  {
    html: lesson_03_html,
    css: lesson_03_css,
    js: lesson_03_js,
  },
];

export default lessons;
