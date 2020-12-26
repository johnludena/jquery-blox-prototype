import raw from "raw.macro"; // raw.macro used for bringing in file data as string

// lesson 1
const lesson_01_js = raw("./01/js.txt");
const lesson_01_js_validation = raw("./01/js_validation.txt");
const lesson_01_md_0 = raw("./01/md/0.md");
const lesson_01_md_1 = raw("./01/md/1.md");

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
    textPanelsMd: [lesson_01_md_0, lesson_01_md_1],
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
        blockClasses: 'pink',
        blockPosition: 54
      },
      {
        blockClasses: 'purple-light',
        blockPosition: 55
      },
      {
        blockClasses: 'orange on',
        blockPosition: 56
      },
      {
        blockClasses: 'green',
        blockPosition: 57
      },
      {
        blockClasses: 'green-lime',
        blockPosition: 58
      },
      {
        blockClasses: 'yellow',
        blockPosition: 59
      },
      {
        blockClasses: 'blue',
        blockPosition: 60
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
