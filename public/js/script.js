const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-ser-cards-container]")
const searchInput = document.querySelector("[data-search]")


let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible =
        user.name.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data =>{
    users = data.map(user =>{
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        header.textContent = user.name 
        userCardContainer.append(card)
        return { name: user.name, element: card }
    })
})