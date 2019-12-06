// MessageList.js
import { getMessagesByFriend } from "./MessageProvider.js"

/*
    CHANGE: The event target is now the `<main class=".appContainer">`
            element. That element is now the Event Hub.
*/
const eventHub = document.querySelector("#appContainer")
const contentTarget = document.querySelector(".messages")

const MessageList = () => {
    /*
        CHANGE: The message list component is listening for a very
                specific event that it cares about. It can then extract
                the data in the payload and use it however it wants.
    */
    eventHub.addEventListener("friendSelected", event => {
        const friendName = event.detail.friend
        const messages = getMessagesByFriend(friendName)
        render(messages)
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