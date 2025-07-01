const data = {
  quizzes: [
    {
      id: "html",
      title: "HTML Basics",
      description: "Test your knowledge of HTML fundamentals.",
      questions: [
        {
          question: "What does HTML stand for?",
          choices: [
            "Hyperlinks and Text Markup Language",
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Tag Mark Language"
          ],
          answer: 1
        },
        {
          question: "Which tag is used to create a link?",
          choices: [" <a>", "<link>", "<href>", "<url>"],
          answer: 0
        },
        {
          question: "Which tag defines the largest heading?",
          choices: ["<h6>", "<heading>", "<h1>", "<head>"],
          answer: 2
        },
        {
          question: "What is the correct tag for a line break?",
          choices: ["<break>", "<br>", "<lb>", "<line>"],
          answer: 1
        },
        {
          question: "Which attribute specifies an image source?",
          choices: ["src", "href", "alt", "link"],
          answer: 0
        },
        {
          question: "Which tag is used for lists with bullets?",
          choices: [" <ol> ", "<ul>", "<li>", "<dl>"],
          answer: 1
        },
        {
          question: "Which tag creates a table row?",
          choices: ["<td>", "<th>", "<tr>", "<row>"],
          answer: 2
        },
        {
          question: "Which HTML element is used to define a footer?",
          choices: ["<bottom>", "<footer>", "<foot>", "<section>"],
          answer: 1
        },
        {
          question: "What is the correct HTML for inserting an image?",
          choices: [
            "<img href='image.jpg'>",
            "<image src='image.jpg'>",
            "<img src='image.jpg'>",
            "<img>image.jpg</img>"
          ],
          answer: 2
        },
        {
          question: "Which HTML tag is used to define an internal style sheet?",
          choices: ["<style>", "<css>", "<script>", "<head>"],
          answer: 0
        }
      ]
    },
    {
      id: "css",
      title: "CSS Selectors",
      description: "Check how well you know CSS selectors.",
      questions: [
        {
          question: "What does CSS stand for?",
          choices: [
            "Colorful Style Sheets",
            "Cascading Style Sheets",
            "Creative Styling Syntax",
            "Coded Style Sheets"
          ],
          answer: 1
        },
        {
          question: "Which symbol is used for class selectors?",
          choices: [".", "#", ":", "@class"],
          answer: 0
        },
        {
          question: "What selector targets an element with id='main'?",
          choices: ["#main", ".main", "*main", "main"],
          answer: 0
        },
        {
          question: "Which property is used to change text color?",
          choices: ["background-color", "text-style", "color", "font-color"],
          answer: 2
        },
        {
          question: "Which unit is relative to the root element?",
          choices: ["em", "rem", "%", "px"],
          answer: 1
        },
        {
          question: "Which CSS rule makes text bold?",
          choices: [
            "font-weight: bold",
            "text-style: bold",
            "font: bold",
            "text-weight: strong"
          ],
          answer: 0
        },
        {
          question: "What is the default position value?",
          choices: ["relative", "static", "absolute", "fixed"],
          answer: 1
        },
        {
          question: "How do you center a block element horizontally?",
          choices: [
            "text-align: center",
            "margin: auto",
            "align: center",
            "display: center"
          ],
          answer: 1
        },
        {
          question: "What is the z-index property used for?",
          choices: [
            "Opacity control",
            "Font stacking",
            "Element stacking",
            "Background position"
          ],
          answer: 2
        },
        {
          question: "What pseudo-class selects the first child?",
          choices: [":first", ":first-child", "::first", ":start"],
          answer: 1
        }
      ]
    },
    {
      id: "js",
      title: "JavaScript Logic",
      description: "Challenge your JS logic and syntax skills.",
      questions: [
        {
          question: "Which keyword declares a constant?",
          choices: ["const", "let", "var", "define"],
          answer: 0
        },
        {
          question: "What does `===` mean?",
          choices: [
            "Assignment",
            "Equal in value",
            "Equal in value and type",
            "Not equal"
          ],
          answer: 2
        },
        {
          question: "Which of these is a function declaration?",
          choices: [
            "function myFunc() {}",
            "let myFunc = function",
            "myFunc => {}",
            "def myFunc()"
          ],
          answer: 0
        },
        {
          question: "Which data type is not primitive?",
          choices: ["String", "Object", "Boolean", "Number"],
          answer: 1
        },
        {
          question: "Which method converts JSON to object?",
          choices: [
            "JSON.parse()",
            "JSON.stringify()",
            "toObject()",
            "JSON.convert()"
          ],
          answer: 0
        },
        {
          question: "What is a closure in JS?",
          choices: [
            "An async function",
            "A function inside another with access to parent scope",
            "An arrow function",
            "A function with no name"
          ],
          answer: 1
        },
        {
          question: "What does `typeof null` return?",
          choices: ["null", "undefined", "object", "function"],
          answer: 2
        },
        {
          question: "Which of the following is falsy?",
          choices: ["0", "[]", "true", "{}"],
          answer: 0
        },
        {
          question: "Which method adds to the end of an array?",
          choices: [".push()", ".add()", ".append()", ".insert()"],
          answer: 0
        },
        {
          question: "What does NaN stand for?",
          choices: [
            "Not a Number",
            "No any Number",
            "Negative and Null",
            "Not assigned"
          ],
          answer: 0
        }
      ]
    }
  ]
};
