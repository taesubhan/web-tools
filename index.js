function addDropdownEffect() {
    // const allDropdownBtn = document.querySelectorAll('.dropdown-button');
    // const allDropdownMenu = document.querySelectorAll('.dropdown-menu');
    const allDropdown = document.querySelectorAll('.dropdown');

    allDropdown.forEach((dropdown) => {
        const btn = dropdown.querySelector('.dropdown-button');
        const menu = dropdown.querySelector('.dropdown-menu')

        if (Boolean(btn) && Boolean(menu)) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            })
        }

        window.addEventListener('click', (e) => {
            if (e.target.parentNode !== dropdown) {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (!menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                }
            }
        })
    })

    
}

addDropdownEffect();