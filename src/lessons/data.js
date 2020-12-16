import raw from "raw.macro"; // raw.macro used for bringing in file data as string

// lesson 1
const lesson_01_js = raw("./01/js.txt");
const lesson_01_js_validation = raw("./01/js_validation.txt");

// lesson 2
const lesson_02_js = raw("./02/js.txt");
const lesson_02_js_validation = raw("./02/js_validation.txt");

// lesson 3
const lesson_03_js = raw("./03/js.txt");
const lesson_03_js_validation = raw("./03/js_validation.txt");

const lessons = [
  {
    blockElements: [
      {
        blockClasses: 'pink',
        blockPosition: 54
      },
    ],
    js: lesson_01_js,
    js_validation: lesson_01_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
    showingFeedback: false,
  },
  {
    blockElements: [
      {
        blockClasses: 'pink on',
        blockPosition: 54
      },
      {
        blockClasses: 'blue',
        blockPosition: 55
      },
      {
        blockClasses: 'blue',
        blockPosition: 56
      },
    ],
    js: lesson_02_js,
    js_validation: lesson_02_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
    showingFeedback: false,
  },
  {
    blockElements: [
      {
        blockClasses: '.button',
        blockPosition: 54
      },
      {
        blockClasses: '.div',
        blockPosition: 55
      },
      {
        blockClasses: '.div',
        blockPosition: 56
      },
    ],
    // html: lesson_03_html,
    // css: lesson_03_css,
    js: lesson_03_js,
    js_validation: lesson_03_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
    showingFeedback: false,
  },
];

export default lessons;
