// X1. Create an input field in your DOM. Give it an id of message.
// X2. Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// X3. Give each article a different border color.
// X4. Write an event listener that listens for the keyup event on the input field.
// 5. The event handler function should update the textContent property of both sections.

// Searching the HTML for tags with an id of "message" and assigning it to "text" variable
const text = document.getElementById("message")
// console.log(text)

// text variable is being watched for a keyup event. When the event happens it triggers
// the function.
text.addEventListener("keyup", function (event) {
    // console.log(event)
    // console.log(event.target.value)

    // The HTML document is being searched for all article tags and assigns them to 
    // variable "mirrors"
    const mirrors = document.querySelectorAll("article")
    // console.log(mirrors)

    // forEach method is called on "mirrors", which is an array of article tags. Argument 
    // "mirror" refers to the individual article tags. The value inside of event.target 
    // is assigned to the textContent property of each "mirror", or article tag. Think 
    // of the event as an object and target and value as keys on that object.
    mirrors.forEach((mirror) => {
// console.log(mirror.textContent)
mirror.textContent = event.target.value
    })
//    document.article.textContent = text
})