// FriendList.js
import { useFriends } from './FriendProvider.js'

const contentTarget = document.querySelector(".friends")

const FriendList = () => {
    const appStateFriends = useFriends()

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
