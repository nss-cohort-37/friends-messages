// FriendList.js
import { useFriends } from './FriendProvider.js'

const eventHub = document.querySelector("#appContainer")
const contentTarget = document.querySelector(".friends")

const FriendList = () => {
    const appStateFriends = useFriends()

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("friend")) {
            const selectedFriend = changeEvent.target.value

            const message = new CustomEvent("friendSelected", {
                detail: {
                    friend: selectedFriend
                }
            })

            eventHub.dispatchEvent(message)
        }
    })


    const render = friendCollection => {
        contentTarget.innerHTML = `
            ${
                friendCollection.map(friend => {
                    return `
                        <div>
                            <input class="friend" name="friend" type="radio" value="${friend.name}">
                            ${friend.name}
                        </div>
                    `
                }).join("")
            }
        `
    }

    render(appStateFriends)
}

export default FriendList
