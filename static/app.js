class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false; 
        this.messages = [];
    } 

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })

        // Automatically open chatbox and show welcome message
        this.toggleState(chatBox);
        this.showWelcomeMessage(chatBox);
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hide the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox, predefinedMessage = null) {
        var textField = chatbox.querySelector('input');
        let text1 = predefinedMessage || textField.value
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);

        fetch($SCRIPT_ROOT + '/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(r => r.json())
          .then(r => {
            let msg2 = { name: "Blox Buddy", message: r.answer };
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textField.value = ''

        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.value = ''
          });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Blox Buddy") {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            } else {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
        });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }

    showWelcomeMessage(chatbox) {
        let welcomeMessage = { name: "Blox Buddy", message: "Hey there, Thank you for visiting us, what can I help you with" };
        this.messages.push(welcomeMessage);
    
        let optionsMessage = {
            name: "Blox Buddy",
            message: '<div class="welcome-options">' +
                '<button class="welcome-options button" onclick="sendMessage(\'Get to know us better\')">Get to know us better</button>' +
                '<button class="welcome-options button" onclick="sendMessage(\'Get in touch with us\')">Get in touch with us</button>' +
                '</div>'
            };
        this.messages.push(optionsMessage);
        this.updateChatText(chatbox);
    }

    handleOptionClick(option) {
        const chatbox = document.querySelector('.chatbox__support');
        if (option === 'Get to know us better') {
            let msg = { name: "Blox Buddy", message: "Here's more about us. Choose an option to learn more:" };
            this.messages.push(msg);
    
            let moreOptionsMessage = {
                name: "Blox Buddy",
                message: '<div class="welcome-options">' +
                    '<button class="welcome-options button" onclick="sendMessage(\'About Infoblox\')">About Infoblox</button>' +
                    '<button class="welcome-options button" onclick="sendMessage(\'About Our Products\')">About Our Products</button>' +
                    '<button class="welcome-options button" onclick="sendMessage(\'Help us get to know you better\')">Help us get to know you better</button>' +
                    '</div>'
                };
            this.messages.push(moreOptionsMessage);
            this.updateChatText(chatbox);
        } else if (option === 'Help us get to know you better') {
            this.showForm(chatbox);
        } else {
            this.onSendButton(chatbox, option);
        }
    }

    showForm(chatbox) {
        let formMessage = {
            name: "Blox Buddy",
            message: `
                <div class="form">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" class="form-input">
                    </div>
                    <button class="send__form__button" onclick="submitForm()">Submit</button>
                </div>
            `
        };
        this.messages.push(formMessage);
        this.updateChatText(chatbox);
    }
    
    submitForm() {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;

        if (name && email) {
            let thankYouMessage = { name: "Blox Buddy", message: `Thank you, ${name}! We have received your contact information.` };
            this.messages.push(thankYouMessage);
            this.updateChatText(document.querySelector('.chatbox__support'));
        } else {
            alert('Please fill out all fields.');
        }
    }
}

function sendMessage(message) {
    chatbox.handleOptionClick(message);
}

function submitForm() {
    chatbox.submitForm();
}

const chatbox = new Chatbox();
chatbox.display();
