// MessageList.js
import { getMessagesByFriend } from "./MessageProvider.js"

const friendListSection = document.querySelector(".friends")
const contentTarget = document.querySelector(".messages")

const MessageList = () => {
    // Listen for when a friend is selected
    friendListSection.addEventListener("change", changeEvent => {
        // Make sure it's the change event of the friend checkbox
        if (changeEvent.target.classList.contains("friend")) {

            // Get messages for friend and render the list of messages
            const friendName = changeEvent.target.value
            const messages = getMessagesByFriend(friendName)
            render(messages)
        }
    })

    const render = messageCollection => {
        contentTarget.innerHTML = `
            ${
                messageCollection.map(message => {
                    return `<section class="message">${message.text}</section>`
                }).join("")
            }
        `
    }
}

export default MessageList