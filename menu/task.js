const getMenuLinks = Array.from(document.querySelectorAll('.menu__link'))

// console.log(getMenuLinks)

for (let link of getMenuLinks) {
    // console.log(link)
    // console.log(link.parentElement)
    link.onclick = () => {
        // console.log(link.parentElement)
        const linkParent = link.parentElement

        if (linkParent.querySelector('.menu_sub').className === 'menu menu_sub') {
            linkParent.querySelector('.menu_sub').className = 'menu menu_sub menu_active'
        } else {
            linkParent.querySelector('.menu_sub').className = 'menu menu_sub'
        }

        if (link.closest('.menu_main')) {
            return false
        }
    }
}

