// X1. Create an input field in your DOM. Give it an id of message.
// X2. Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// X3. Give each article a different border color.
// 4. Write an event listener that listens for the keyup event on the input field.
// 5. The event handler function should update the textContent property of both sections.


const text = document.getElementById("message")

text.addEventListener("keyup", function (event) {
   document.article.textContent = text
})