import raw from "raw.macro"; // raw.macro used for bringing in file data as string

// lesson 1
const lesson_01_js = raw("./01/js.txt");
const lesson_01_js_validation = raw("./01/js_validation.txt");
const lesson_01_md_0 = raw("./01/md/0.md");
const lesson_01_md_1 = raw("./01/md/1.md");
const lesson_01_md_2 = raw("./01/md/2.md");
const lesson_01_md_3 = raw("./01/md/3.md");

// lesson 2
const lesson_02_js = raw("./02/js.txt");
const lesson_02_js_validation = raw("./02/js_validation.txt");
const lesson_02_md_0 = raw("./02/md/0.md");
const lesson_02_md_1 = raw("./02/md/1.md");

// lesson 3
const lesson_03_js = raw("./03/js.txt");
const lesson_03_js_validation = raw("./03/js_validation.txt");
const lesson_03_md_0 = raw("./03/md/0.md");
const lesson_03_md_1 = raw("./03/md/1.md");
const lesson_03_md_2 = raw("./03/md/2.md");

// lesson 4
const lesson_04_js = raw("./04/js.txt");
const lesson_04_js_validation = raw("./04/js_validation.txt");
const lesson_04_md_0 = raw("./04/md/0.md");
const lesson_04_md_1 = raw("./04/md/1.md");

// lesson 5
const lesson_05_js = raw("./05/js.txt");
const lesson_05_js_validation = raw("./05/js_validation.txt");
const lesson_05_md_0 = raw("./05/md/0.md");
const lesson_05_md_1 = raw("./05/md/1.md");
const lesson_05_md_2 = raw("./05/md/2.md");
const lesson_05_md_3 = raw("./05/md/3.md");

// lesson 6
const lesson_06_js = raw("./06/js.txt");
const lesson_06_js_validation = raw("./06/js_validation.txt");
const lesson_06_md_0 = raw("./06/md/0.md");
const lesson_06_md_1 = raw("./06/md/1.md");
const lesson_06_md_2 = raw("./06/md/2.md");
const lesson_06_md_3 = raw("./06/md/3.md");

// lesson 7
const lesson_07_js = raw("./07/js.txt");
const lesson_07_js_validation = raw("./07/js_validation.txt");
const lesson_07_md_0 = raw("./07/md/0.md");
const lesson_07_md_1 = raw("./07/md/1.md");

// lesson 8
const lesson_08_js = raw("./08/js.txt");
const lesson_08_js_validation = raw("./08/js_validation.txt");
const lesson_08_md_0 = raw("./08/md/0.md");
const lesson_08_md_1 = raw("./08/md/1.md");
const lesson_08_md_2 = raw("./08/md/2.md");

// lesson 9
const lesson_09_js = raw("./09/js.txt");
const lesson_09_js_validation = raw("./09/js_validation.txt");
const lesson_09_md_0 = raw("./09/md/0.md");
const lesson_09_md_1 = raw("./09/md/1.md");
const lesson_09_md_2 = raw("./09/md/2.md");

const lessons = [
  // LESSON 1
  {
    blockElements: [
      {
        blockClasses: 'pink',
        blockPosition: 40
      },
    ],
    textPanelsMd: [lesson_01_md_0, lesson_01_md_1, lesson_01_md_2, lesson_01_md_3],
    js: lesson_01_js,
    js_validation: lesson_01_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
    lessonCompleted: false,
  },

  // LESSON 2
  {
    blockElements: [
      {
        blockClasses: 'pink on',
        blockPosition: 40
      },
      {
        blockClasses: 'blue',
        blockPosition: 41
      },
      {
        blockClasses: 'blue',
        blockPosition: 39
      },
    ],
    textPanelsMd: [lesson_02_md_0, lesson_02_md_1],
    js: lesson_02_js,
    js_validation: lesson_02_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
    lessonCompleted: false,
  },

  // lESSON 3
  {
    blockElements: [
      {
        blockClasses: 'pink on',
        blockPosition: 40
      },
      {
        blockClasses: 'blue on',
        blockPosition: 41
      },
      {
        blockClasses: 'blue on',
        blockPosition: 39
      },
      {
        blockClasses: 'orange',
        blockPosition: 49
      },
      {
        blockClasses: 'orange',
        blockPosition: 50
      },
      {
        blockClasses: 'orange',
        blockPosition: 58
      },
      {
        blockClasses: 'orange',
        blockPosition: 59
      },
      
    ],
    textPanelsMd: [lesson_03_md_0, lesson_03_md_1, lesson_03_md_2],
    js: lesson_03_js,
    js_validation: lesson_03_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
    lessonCompleted: false,
  },

  // lESSON 4
  {
    blockElements: [
      {
        blockClasses: 'pink on',
        blockPosition: 40
      },
      {
        blockClasses: 'blue on',
        blockPosition: 41
      },
      {
        blockClasses: 'blue on',
        blockPosition: 39
      },
      {
        blockClasses: 'orange on',
        blockPosition: 49
      },
      {
        blockClasses: 'orange on',
        blockPosition: 50
      },
      {
        blockClasses: 'orange on',
        blockPosition: 58
      },
      {
        blockClasses: 'green',
        blockPosition: 42
      },
      {
        blockClasses: 'green',
        blockPosition: 51
      },
      {
        blockClasses: 'green',
        blockPosition: 60
      },
      {
        blockClasses: 'green',
        blockPosition: 69
      },
      {
        blockClasses: 'green',
        blockPosition: 78
      },
      
      
    ],
    textPanelsMd: [lesson_04_md_0, lesson_04_md_1],
    js: lesson_04_js,
    js_validation: lesson_04_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
    lessonCompleted: false,
  },

  // lESSON 5
  {
    blockElements: [
      {
        blockClasses: 'pink on',
        blockPosition: 40
      },
      {
        blockClasses: 'blue on',
        blockPosition: 41
      },
      {
        blockClasses: 'blue on',
        blockPosition: 39
      },
      {
        blockClasses: 'orange on',
        blockPosition: 49
      },
      {
        blockClasses: 'orange on',
        blockPosition: 50
      },
      {
        blockClasses: 'orange on',
        blockPosition: 58
      },
      {
        blockClasses: 'green on',
        blockPosition: 42
      },
      {
        blockClasses: 'green on',
        blockPosition: 51
      },
      {
        blockClasses: 'green on',
        blockPosition: 60
      },
      {
        blockClasses: 'green on',
        blockPosition: 69
      },
      {
        blockClasses: 'green on',
        blockPosition: 78
      },
      {
        blockClasses: 'red',
        blockPosition: 59
      },
      
      
    ],
    textPanelsMd: [lesson_05_md_0, lesson_05_md_1, lesson_05_md_2, lesson_05_md_3],
    js: lesson_05_js,
    js_validation: lesson_05_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
    lessonCompleted: false,
  },

  // lESSON 6
  {
    blockElements: [
      {
        blockClasses: 'pink on',
        blockPosition: 40
      },
      {
        blockClasses: 'blue on',
        blockPosition: 41
      },
      {
        blockClasses: 'blue on',
        blockPosition: 39
      },
      {
        blockClasses: 'orange on',
        blockPosition: 49
      },
      {
        blockClasses: 'orange on',
        blockPosition: 50
      },
      {
        blockClasses: 'orange on',
        blockPosition: 58
      },
      {
        blockClasses: 'green on',
        blockPosition: 42
      },
      {
        blockClasses: 'green on',
        blockPosition: 51
      },
      {
        blockClasses: 'green on',
        blockPosition: 60
      },
      {
        blockClasses: 'green on',
        blockPosition: 69
      },
      {
        blockClasses: 'green on',
        blockPosition: 78
      },
      {
        blockClasses: 'red',
        blockPosition: 59
      },
      {
        blockClasses: 'red',
        blockPosition: 68
      },
      
      
    ],
    textPanelsMd: [lesson_06_md_0, lesson_06_md_1, lesson_06_md_2, lesson_06_md_3],
    js: lesson_06_js,
    js_validation: lesson_06_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
    lessonCompleted: false,
  },

  // lESSON 7
  {
    blockElements: [
      {
        blockClasses: 'pink on',
        blockPosition: 40
      },
      {
        blockClasses: 'blue on',
        blockPosition: 41
      },
      {
        blockClasses: 'blue on',
        blockPosition: 39
      },
      {
        blockClasses: 'orange on',
        blockPosition: 49
      },
      {
        blockClasses: 'orange on',
        blockPosition: 50
      },
      {
        blockClasses: 'orange on',
        blockPosition: 58
      },
      {
        blockClasses: 'green on',
        blockPosition: 42
      },
      {
        blockClasses: 'green on',
        blockPosition: 51
      },
      {
        blockClasses: 'green on',
        blockPosition: 60
      },
      {
        blockClasses: 'green on',
        blockPosition: 69
      },
      {
        blockClasses: 'green on',
        blockPosition: 78
      },
      {
        blockClasses: 'red',
        blockPosition: 59
      },
      {
        blockClasses: 'red',
        blockPosition: 68
      },
      
      
    ],
    textPanelsMd: [lesson_07_md_0, lesson_07_md_1],
    js: lesson_07_js,
    js_validation: lesson_07_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
    lessonCompleted: false,
  },

  // lESSON 8
  {
    blockElements: [
      {
        blockClasses: 'pink on',
        blockPosition: 40
      },
      {
        blockClasses: 'blue on',
        blockPosition: 41
      },
      {
        blockClasses: 'blue on',
        blockPosition: 39
      },
      {
        blockClasses: 'orange on',
        blockPosition: 49
      },
      {
        blockClasses: 'orange on',
        blockPosition: 50
      },
      {
        blockClasses: 'orange on',
        blockPosition: 58
      },
      {
        blockClasses: 'green on',
        blockPosition: 42
      },
      {
        blockClasses: 'green on',
        blockPosition: 51
      },
      {
        blockClasses: 'green on',
        blockPosition: 60
      },
      {
        blockClasses: 'green on',
        blockPosition: 69
      },
      {
        blockClasses: 'green on',
        blockPosition: 78
      },
      {
        blockClasses: 'red',
        blockPosition: 59
      },
      {
        blockClasses: 'red',
        blockPosition: 68
      },
      {
        blockClasses: 'red',
        blockPosition: 77
      },
    ],
    textPanelsMd: [lesson_08_md_0, lesson_08_md_1, lesson_08_md_2],
    js: lesson_08_js,
    js_validation: lesson_08_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
    lessonCompleted: false,
  },

  // lESSON 9
  {
    blockElements: [
      {
        blockClasses: 'pink on',
        blockPosition: 40
      },
      {
        blockClasses: 'blue on',
        blockPosition: 41
      },
      {
        blockClasses: 'blue on',
        blockPosition: 39
      },
      {
        blockClasses: 'orange on',
        blockPosition: 49
      },
      {
        blockClasses: 'orange on',
        blockPosition: 50
      },
      {
        blockClasses: 'orange on',
        blockPosition: 58
      },
      {
        blockClasses: 'green on',
        blockPosition: 42
      },
      {
        blockClasses: 'green on',
        blockPosition: 51
      },
      {
        blockClasses: 'green on',
        blockPosition: 60
      },
      {
        blockClasses: 'green on',
        blockPosition: 69
      },
      {
        blockClasses: 'green on',
        blockPosition: 78
      },
      {
        blockClasses: 'red',
        blockPosition: 59
      },
      {
        blockClasses: 'red',
        blockPosition: 68
      },
      {
        blockClasses: 'red',
        blockPosition: 77
      },
    ],
    textPanelsMd: [lesson_09_md_0, lesson_09_md_1, lesson_09_md_2],
    js: lesson_09_js,
    js_validation: lesson_09_js_validation,
    lessonSubmitted: false,
    lessonPassed: false,
    lessonCompleted: false,
  },
];

export default lessons;
