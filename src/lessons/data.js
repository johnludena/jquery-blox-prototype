import raw from "raw.macro"; // raw.macro used for bringing in file data as string

// lesson 1
const lesson_01_html = raw("./01/html.txt");
const lesson_01_css = raw("./01/css.txt");
const lesson_01_js = raw("./01/js.txt");
const lesson_01_js_validation = raw("./01/js_validation.txt");

// lesson 2
const lesson_02_html = raw("./02/html.txt");
const lesson_02_css = raw("./02/css.txt");
const lesson_02_js = raw("./02/js.txt");
const lesson_02_js_validation = raw("./02/js_validation.txt");

// lesson 3
const lesson_03_html = raw("./03/html.txt");
const lesson_03_css = raw("./03/css.txt");
const lesson_03_js = raw("./03/js.txt");
const lesson_03_js_validation = raw("./03/js_validation.txt");

const lessons = [
  {
    blockElements: [
      {
        blockClass: '.button',
        blockPosition: 54
      },
    ],
    html: lesson_01_html,
    css: lesson_01_css,
    js: lesson_01_js,
    js_validation: lesson_01_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
  },
  {
    blockElements: [
      {
        blockClass: '.button',
        blockPosition: 20
      },
      {
        blockClass: '.div',
        blockPosition: 21
      },
    ],
    html: lesson_02_html,
    css: lesson_02_css,
    js: lesson_02_js,
    js_validation: lesson_02_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
  },
  {
    html: lesson_03_html,
    css: lesson_03_css,
    js: lesson_03_js,
    js_validation: lesson_03_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
  },
];

export default lessons;
