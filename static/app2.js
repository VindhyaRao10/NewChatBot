// // original code

// // class Chatbox {
// //     constructor() {
// //         this.args = {
// //             openButton: document.querySelector('.chatbox__button'),
// //             chatBox: document.querySelector('.chatbox__support'),
// //             sendButton: document.querySelector('.send__button')
// //         }

// //         this.state = false;
// //         this.messages = [];
// //     } 

// //     display() {
// //         const {openButton, chatBox, sendButton} = this.args;

// //         openButton.addEventListener('click', () => this.toggleState(chatBox))

// //         sendButton.addEventListener('click', () => this.onSendButton(chatBox))

// //         const node = chatBox.querySelector('input');
// //         node.addEventListener("keyup", ({key}) => {
// //             if (key === "Enter") {
// //                 this.onSendButton(chatBox)
// //             }
// //         })
// //     }

// //     toggleState(chatbox) {
// //         this.state = !this.state;

// //         // show or hides the box
// //         if(this.state) {
// //             chatbox.classList.add('chatbox--active')
// //         } else {
// //             chatbox.classList.remove('chatbox--active')
// //         }
// //     }

// //     onSendButton(chatbox) {
// //         var textField = chatbox.querySelector('input');
// //         let text1 = textField.value
// //         if (text1 === "") {
// //             return;
// //         }

// //         let msg1 = { name: "User", message: text1 }
// //         this.messages.push(msg1);

// //         fetch($SCRIPT_ROOT + '/predict', {
// //             method: 'POST',
// //             body: JSON.stringify({ message: text1 }),
// //             mode: 'cors',
// //             headers: {
// //               'Content-Type': 'application/json'
// //             },
// //           })
// //           .then(r => r.json())
// //           .then(r => {
// //             let msg2 = { name: "Blox Buddy", message: r.answer };
// //             this.messages.push(msg2);
// //             this.updateChatText(chatbox)
// //             textField.value = ''

// //         }).catch((error) => {
// //             console.error('Error:', error);
// //             this.updateChatText(chatbox)
// //             textField.value = ''
// //           });
// //     }

// //     updateChatText(chatbox) {
// //         var html = '';
// //         this.messages.slice().reverse().forEach(function(item, index) {
// //             if (item.name === "Blox Buddy")
// //             {
// //                 html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
// //             }
// //             else
// //             {
// //                 html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
// //             }
// //           });

// //         const chatmessage = chatbox.querySelector('.chatbox__messages');
// //         chatmessage.innerHTML = html;
// //     }
// // }


// // const chatbox = new Chatbox();
// // chatbox.display();


// class Chatbox {
//     constructor() {
//         this.args = {
//             openButton: document.querySelector('.chatbox__button'),
//             chatBox: document.querySelector('.chatbox__support'),
//             sendButton: document.querySelector('.send__button')
//         }

//         this.state = true; // Set initial state to open
//         this.messages = [];
//     } 

//     display() {
//         const {openButton, chatBox, sendButton} = this.args;

//         openButton.addEventListener('click', () => this.toggleState(chatBox))

//         sendButton.addEventListener('click', () => this.onSendButton(chatBox))

//         const node = chatBox.querySelector('input');
//         node.addEventListener("keyup", ({key}) => {
//             if (key === "Enter") {
//                 this.onSendButton(chatBox)
//             }
//         })

//         // Automatically open chatbox and show welcome message
//         this.toggleState(chatBox);
//         this.showWelcomeMessage(chatBox);
//     }

//     toggleState(chatbox) {
//         this.state = !this.state;

//         // show or hide the box
//         if(this.state) {
//             chatbox.classList.add('chatbox--active')
//         } else {
//             chatbox.classList.remove('chatbox--active')
//         }
//     }

//     onSendButton(chatbox) {
//         var textField = chatbox.querySelector('input');
//         let text1 = textField.value
//         if (text1 === "") {
//             return;
//         }

//         let msg1 = { name: "User", message: text1 }
//         this.messages.push(msg1);

//         fetch($SCRIPT_ROOT + '/predict', {
//             method: 'POST',
//             body: JSON.stringify({ message: text1 }),
//             mode: 'cors',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//           })
//           .then(r => r.json())
//           .then(r => {
//             let msg2 = { name: "Blox Buddy", message: r.answer };
//             this.messages.push(msg2);
//             this.updateChatText(chatbox)
//             textField.value = ''

//         }).catch((error) => {
//             console.error('Error:', error);
//             this.updateChatText(chatbox)
//             textField.value = ''
//           });
//     }

//     updateChatText(chatbox) {
//         var html = '';
//         this.messages.slice().reverse().forEach(function(item, index) {
//             if (item.name === "Blox Buddy") {
//                 html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
//             } else {
//                 html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
//             }
//         });

//         const chatmessage = chatbox.querySelector('.chatbox__messages');
//         chatmessage.innerHTML = html;
//     }

    // showWelcomeMessage(chatbox) {
    //     const welcomeMessage = "Hey there, Thank you for visiting us, what can I help you with";
    //     const options = [
    //         "Know more about us",
    //         "Contact us",
    //         "Help us get to know you better"
    //     ];

    //     this.messages.push({ name: "Blox Buddy", message: welcomeMessage });
    //     this.updateChatText(chatbox);

    //     const optionsHtml = options.map(option => `<button onclick="chatbox.handleOptionClick('${option}')">${option}</button>`).join('');
    //     const optionsContainer = document.createElement('div');
    //     optionsContainer.classList.add('welcome-options');
    //     optionsContainer.innerHTML = optionsHtml;
    //     chatbox.querySelector('.chatbox__messages').appendChild(optionsContainer);
    // }

//     handleOptionClick(option) {
//         let response;
//         switch(option) {
//             case "Know more about us":
//                 response = "We are Infoblox, a leader in network automation and security.";
//                 break;
//             case "Contact us":
//                 response = "You can reach us at contact@infoblox.com.";
//                 break;
//             case "Help us get to know you better":
//                 response = "Please provide your name and email address.";
//                 break;
//         }

//         this.updateChatText(this.args.chatBox);
//         this.messages.push({ name: "Blox Buddy", message: response });
        
//     }
// }

// const chatbox = new Chatbox();
// chatbox.display();

// class Chatbox {
//     constructor() {
//         this.args = {
//             openButton: document.querySelector('.chatbox__button'),
//             chatBox: document.querySelector('.chatbox__support'),
//             sendButton: document.querySelector('.send__button')
//         }

//         this.state = false;
//         this.messages = [];
//     } 

//     display() {
//         const {openButton, chatBox, sendButton} = this.args;

//         openButton.addEventListener('click', () => this.toggleState(chatBox))

//         sendButton.addEventListener('click', () => this.onSendButton(chatBox))

//         const node = chatBox.querySelector('input');
//         node.addEventListener("keyup", ({key}) => {
//             if (key === "Enter") {
//                 this.onSendButton(chatBox)
//             }
//         })
        
//         // Open the chatbox on page load
//         this.toggleState(chatBox);
        
//         // Show welcome message with options
//         this.showWelcomeMessage(chatBox);
//     }

//     toggleState(chatbox) {
//         this.state = !this.state;

//         // show or hides the box
//         if(this.state) {
//             chatbox.classList.add('chatbox--active')
//         } else {
//             chatbox.classList.remove('chatbox--active')
//         }
//     }

//     onSendButton(chatbox, predefinedMessage = null) {
//         var textField = chatbox.querySelector('input');
//         let text1 = predefinedMessage || textField.value;
//         if (text1 === "") {
//             return;
//         }

//         let msg1 = { name: "User", message: text1 }
//         this.messages.push(msg1);

//         fetch($SCRIPT_ROOT + '/predict', {
//             method: 'POST',
//             body: JSON.stringify({ message: text1 }),
//             mode: 'cors',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//           })
//           .then(r => r.json())
//           .then(r => {
//             let msg2 = { name: "Blox Buddy", message: r.answer };
//             this.messages.push(msg2);
//             this.updateChatText(chatbox)
//             textField.value = ''

//         }).catch((error) => {
//             console.error('Error:', error);
//             this.updateChatText(chatbox)
//             textField.value = ''
//           });
//     }

//     updateChatText(chatbox) {
//         var html = '';
//         this.messages.slice().reverse().forEach(function(item, index) {
//             if (item.name === "Blox Buddy")
//             {
//                 html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
//             }
//             else
//             {
//                 html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
//             }
//           });

//         const chatmessage = chatbox.querySelector('.chatbox__messages');
//         chatmessage.innerHTML = html;
//     }

    // showWelcomeMessage(chatbox) {
    //     let welcomeMessage = { name: "Blox Buddy", message: "Hey there, Thank you for visiting us, what can I help you with" };
    //     this.messages.push(welcomeMessage);

    //     let optionsMessage = {
    //         name: "Blox Buddy",
    //         message: '<div class="chat-options">' +
    //             '<button class="option-button" onclick="sendMessage(\'Know more about us\')">Know more about us</button>' +
    //             '<button class="option-button" onclick="sendMessage(\'Contact us\')">Contact us</button>' +
    //             '<button class="option-button" onclick="sendMessage(\'Help us get to know you better\')">Help us get to know you better</button>' +
    //             '</div>'
    //     };
    //     this.messages.push(optionsMessage);
    //     this.updateChatText(chatbox);
    // }
// }

// // Helper function to send a message
// function sendMessage(message) {
//     const chatbox = document.querySelector('.chatbox__support');
//     const chatboxInstance = new Chatbox();
//     chatboxInstance.onSendButton(chatbox, message);
// }

// const chatbox = new Chatbox();
// chatbox.display();

//last updated one 
// class Chatbox {
//     constructor() {
//         this.args = {
//             openButton: document.querySelector('.chatbox__button'),
//             chatBox: document.querySelector('.chatbox__support'),
//             sendButton: document.querySelector('.send__button')
//         }

//         this.state = false; 
//         this.messages = [];
//     } 

//     display() {
//         const {openButton, chatBox, sendButton} = this.args;

//         openButton.addEventListener('click', () => this.toggleState(chatBox))

//         sendButton.addEventListener('click', () => this.onSendButton(chatBox))

//         const node = chatBox.querySelector('input');
//         node.addEventListener("keyup", ({key}) => {
//             if (key === "Enter") {
//                 this.onSendButton(chatBox)
//             }
//         })

//         // Automatically open chatbox and show welcome message
//         this.toggleState(chatBox);
//         this.showWelcomeMessage(chatBox);
//     }

//     toggleState(chatbox) {
//         this.state = !this.state;

//         // show or hide the box
//         if(this.state) {
//             chatbox.classList.add('chatbox--active')
//         } else {
//             chatbox.classList.remove('chatbox--active')
//         }
//     }

//     onSendButton(chatbox, predefinedMessage = null) {
//         var textField = chatbox.querySelector('input');
//         let text1 = predefinedMessage || textField.value
//         if (text1 === "") {
//             return;
//         }

//         let msg1 = { name: "User", message: text1 }
//         this.messages.push(msg1);

//         fetch($SCRIPT_ROOT + '/predict', {
//             method: 'POST',
//             body: JSON.stringify({ message: text1 }),
//             mode: 'cors',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//           })
//           .then(r => r.json())
//           .then(r => {
//             let msg2 = { name: "Blox Buddy", message: r.answer };
//             this.messages.push(msg2);
//             this.updateChatText(chatbox)
//             textField.value = ''

//         }).catch((error) => {
//             console.error('Error:', error);
//             this.updateChatText(chatbox)
//             textField.value = ''
//           });
//     }

//     updateChatText(chatbox) {
//         var html = '';
//         this.messages.slice().reverse().forEach(function(item, index) {
//             if (item.name === "Blox Buddy") {
//                 html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
//             } else {
//                 html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
//             }
//         });

//         const chatmessage = chatbox.querySelector('.chatbox__messages');
//         chatmessage.innerHTML = html;
//     }

//     showWelcomeMessage(chatbox) {
//         let welcomeMessage = { name: "Blox Buddy", message: "Hey there, Thank you for visiting us, what can I help you with" };
//         this.messages.push(welcomeMessage);
    
//         let optionsMessage = {
//             name: "Blox Buddy",
//             message: '<div class="welcome-options">' +
//                 '<button class="welcome-options button" onclick="sendMessage(\'Know more about us\')">Know more about us</button>' +
//                 '<button class="welcome-options button" onclick="sendMessage(\'Contact us\')">Contact us</button>' +
//                 '<button class="welcome-options button" onclick="sendMessage(\'Help us get to know you better\')">Help us get to know you better</button>' +
//                 '</div>'
//             };
//         this.messages.push(optionsMessage);
//         this.updateChatText(chatbox);
//     }
// }

// function sendMessage(message) {
//         const chatbox = document.querySelector('.chatbox__support');
//         const chatboxInstance = new Chatbox();
//         chatboxInstance.onSendButton(chatbox, message);
//     }

// const chatbox = new Chatbox();
// chatbox.display();