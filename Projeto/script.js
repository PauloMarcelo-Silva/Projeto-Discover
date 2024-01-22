function togglemode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    //terei duas condições: se tiver ligh mode,adicionar imagem light
    if(html.classList.contains('light')){
        img.setAttribute("src","./assets/avatar_Paulo.png")
    }else{
        img.setAttribute("src","./assets/avatar_Paulo.png")
    }

    

}