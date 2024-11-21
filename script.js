function toggleMode() {

    const html = document.documentElement
    html.classList.toggle('light')
    
    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Rayssa de boné verde e camisa do cruzeiro em uma corrida noturna')
    }else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Rayssa sorrindo, usando oculos e brincos de argola, piercing no nariz')

    }

}