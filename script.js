const url = 'https://jefersonbluz.github.io/json_ATV/atv.json'

let dados = new XMLHttpRequest()
dados.open('get', url)
dados.responseType = "json"
dados.send()

dados.onload = function () {
    let valores = dados.response;
    let body = document.querySelector('body')

    // Cabeçalho site
    const header = document.querySelector('header')
    let nameStory = document.createElement('h1')
    nameStory.innerHTML = 'Irineu Store'
    let subtitulo = document.createElement('p')
    subtitulo.innerHTML = '<i>Irneu Store</i> rica em acessórios e equipamentos qualificados!'
    header.append(nameStory, subtitulo)

    //Corpo do site
    const section = document.querySelector('section')
    section.style.display = 'flex'
    section.style.justifyContent = 'space-around'
    let articule1 = document.createElement('articule')
    let articule2 = document.createElement('articule')
    let articule3 = document.createElement('articule')
    let linha1 = document.createElement('hr')
    let linha2 = document.createElement('hr')
    articule1.innerHTML = `<h2>Notebook</h2>`
    articule2.innerHTML = `<h2>Celulares</h2>`
    articule3.innerHTML = `<h2>Acessórios</h2>`
    section.append(articule1, linha1, articule2, linha2, articule3)
    let descrition = (element, art, acc = 0) => {
        let modelo = document.createElement('li')
        let valor = document.createElement('li')
        let cores = document.createElement('li')
        let memoria = document.createElement('li')
        let disponibilidade = document.createElement('li')
        let marca = document.createElement('p')
        let ul = document.createElement('ul')
        ul.style.listStyle = 'none'
        ul.style.fontSize = '14px'
        if (acc) {
            marca.innerHTML = `<b>${element.Nome}</b>`
            memoria.innerHTML = `<i>Marca:</i> ${element.Marca}`
        } else {
            marca.innerHTML = `<b>${element.Marca}</b>`
            memoria.innerHTML = `<i>Memoria:</i> ${element.Memoria}`
        }
        modelo.innerHTML = `<i>Modelo:</i> ${element.Modelo}`
        cores.innerHTML = `<i>Cores:</i> ${element.Cores}`
        disponibilidade.innerHTML = `<i>Disponibilidade:</i> ${element.Disponibilidade ? 'Sim' : 'Não'}`
        valor.innerHTML = `<br><b>Por: R$ ${Number(element.Valor).toFixed(2)}`
        ul.append(modelo, cores, disponibilidade, memoria, valor)
        marca.append(ul)
        art.append(marca)
    }
    valores.Notebook.forEach(element => descrition(element, articule1))
    valores.Celular.forEach(element => descrition(element, articule2))
    valores.Acessórios.forEach(element => descrition(element, articule3, 1))
    //Footer
    let footer = document.createElement('footer')
    let nome = document.createElement('span')
    let arquivo = document.createElement('a')
    let github = document.createElement('a')
    nome.innerHTML = `Jeferson Corporation ®`
    arquivo.innerHTML = `Arquivo json`
    arquivo.setAttribute('style', 'text-decoration: none;')
    arquivo.setAttribute('href', 'https://jefersonbluz.github.io/json_ATV/atv.json')
    github.innerHTML = ` <a href="http://github.com/JefersonBLuz">${git}</a>`
    footer.append(nome, arquivo, github)
    body.append(footer)

    let input = document.createElement('input')
    input.setAttribute('type', 'button')
    input.setAttribute('value', 'escuro')

    input.onclick = () => {
        if (input.getAttribute('Value') == 'escuro') {
            body.setAttribute('class', 'black')
            input.setAttribute('value', 'claro')
        } else {
            body.setAttribute('class', '')
            input.setAttribute('value', 'escuro')
        }
    }
    let estilos = document.createElement('style')
    let head = document.querySelector('head')
    estilos.innerHTML = `.black{
          background-color: black;
          color: white;
        & input {
            border-color: white;
            background-color: black;
            color: white;
        }
    }
        input{
            margin: 1px;
            padding: 4px;
            width: 70px;
            border: 2px solid black;
            background-color: white;
            border-radius: 13px;
        }
        footer{
            font-Size: 16px;
            margin-Top: 30px;
            justify-Content: space-between;
            display: flex;
        }
     `
    head.append(estilos)

    header.children[0].before(input)


}
let git = `<svg height="16" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>`

