const arrayParagraph = [
    {
        desc: `simplement du faux texte employé dans la
               composition et la mise en page avant impression.
               Le Lorem Ipsum est le faux texte standard de
               l'imprimerie depuis les années 1500`
    },
    {
        desc: `quand un imprimeur anonyme assembla ensemble
               des morceaux de texte pour réaliser un livre
               spécimen de polices de texte. Il n'a pas fait
               que survivre cinq siècles`
    },
    {
        desc: `mais s'est aussi adapté à la bureautique
               informatique, sans que son contenu n'en soit modifié.
               Il a été popularisé dans les années 1960 grâce à la
               vente de feuilles Letraset contenant des passages
               du Lorem Ipsum`
    },
    {
        desc: `et, plus récemment, par son inclusion dans
               des applications de mise en page de texte,
               comme Aldus PageMaker.`
    },
    {
        desc: `On sait depuis longtemps que travailler avec du texte
               lisible et contenant du sens est source de distractions,
               et empêche de se concentrer sur la mise en page elle-même`
    },
    {
        desc: `L'avantage du Lorem Ipsum sur un texte générique
               comme 'Du texte. Du texte. Du texte.' est qu'il
               possède une distribution de lettres plus ou moins
               normale, et en tout cas comparable avec celle du français`
    },
    {
        desc: `standard. De nombreuses suites logicielles de mise
               en page ou éditeurs de sites Web ont fait du Lorem
               Ipsum leur faux texte par défaut,`
    },
    {
        desc: `et une recherche pour 'Lorem Ipsum' vous conduira
               vers de nombreux sites qui n'en sont encore qu'à
               leur phase de construction. Plusieurs versions sont
               apparues avec le temps, parfois par accident, souvent
               intentionnellement (histoire d'y rajouter de petits
               clins d'oeil, voire des phrases embarassantes).`
    },
    {
        desc: `L'extrait standard de Lorem Ipsum utilisé depuis
               le XVIè siècle est reproduit ci-dessous pour les curieux.
               Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum
               et Malorum de Cicéron sont aussi reproduites dans leur
               version originale, accompagnée de la traduction
               anglaise de H. Rackham (1914).`
    },
    {
        desc: `sed quia consequuntur magni dolores eos qui ratione
               voluptatem sequi nesciunt. Neque porro quisquam est,
               qui dolorem ipsum quia dolor sit amet, consectetur,
               adipisci velit, sed quia non numquam eius modi tempora
               incidunt ut labore et dolore magnam aliquam quaerat
               voluptatem. Ut enim ad minima veniam,`
    }
]

const inuptNumValue = document.querySelector('form #num_para')
const btnValue = document.querySelector('#btn_generate')
const result = document.querySelector('.result')

console.log(inuptNumValue.value)

window.addEventListener('DOMContentLoaded', () => {
    result.innerHTML = ""
    btnValue.addEventListener('click', (e) => {
        e.preventDefault()
        if(inuptNumValue.value > 0) {
            getAllPara()
        } else {
            addParaRamdom()
        }
    })
})

function addParaRamdom() {
    let current = Math.floor(Math.random() * arrayParagraph.length)
    let item = arrayParagraph[current].desc
    result.innerHTML = `<p class="parag">${item}</p>`
}

function getAllPara() {
// Methode 1:
    let items = ""
    for(let i = 0; i < inuptNumValue.value; i++) {
        //console.log(arrayParagraph[i].desc)
        let item = arrayParagraph[i].desc
        items += `<p class="parag">${item}</p>`
    }

    result.innerHTML = items

// Methode 2:
    /*const newArrayParagraph = arrayParagraph.slice(0, inuptNumValue.value)
    console.log(newArrayParagraph)
    const arrayMap = newArrayParagraph.map(item => {
        console.log(item.desc)
        return `<p class="parag">${item.desc}</p>`
    }).join('')

    result.innerHTML = arrayMap*/
}
