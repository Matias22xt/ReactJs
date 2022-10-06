const products = [
{
    id : '1',
    name : 'Johnnie Walker Red Label',
    price : 4100,
    category : 'Whisky',
    img : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/red-label-750-ml1-2cc5c0a70f3e86311016262835929050-480-0.jpg',
    stock : '5',
    description: 'La mezcla es en parte arte y en parte ciencia. Es una habilidad de la Familia Walker desarrollada a lo largo de muchas generaciones. Etiqueta roja, con su combinación de whiskies claros de la oscura costa este de Escocia y whiskies de la punta de la costa oeste, creó una mezcla con una extraordinaria profundidad de sabor. El sabor viaja en toda su paladar para ofrecer una experiencia que ni siquiera otros whiskies no ordinarios pueden igualar. El carácter del whisky se define por una intensa, picante y marcada sensación de sabores. Una ráfaga de etiqueta roja golpea el paladar con la frescura del agua de una ola al estrellarse, seguido por el sabor de las especias aromáticas y, finalmente, un largo y persistente, acabado humeante. La sensación en la boca es compleja - "picante dulce" es una buena descripción de este gusto y la sensación de hormigueo en la lengua.'
           },
{ id : '2',name : 'Rutini Malbec',price :  6555,category : 'Vinos',img : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/rutini-malbec-de-rutini1-39345406e8fa50366815918075880142-1024-1024.jpg',stock : '6',description: 'Rojo violáceo muy profundo. Los intensos aromas frutados se presentan entremezclados con otros propios de la crianza en roble nuevo (vainilla, ahumados, tostados). En boca, su estructura concentrada deja la evocación de sus taninos suaves y sucrosos.'
},
{ id : '3',name : 'Champagne Baron B Brut Nature',price : 5568,category : 'Espumantes',img : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/brutnaturebaron-bbb1-e303a685bed37cc6c216137556855797-480-0.jpg',stock : '12',
description: 'Un gran espumante, fruto exclusivo de una vendimia antológica. Un largo y sereno reposo en la penumbra de nuestra bodega aporta a Baron B Brut Nature su riqueza y su brillo, lo que da como resultado un producto de altísima calidad. Su atractivo color amarillo brillante y tonalidades a?mbar, con delicadas y persistentes burbujas, son características distintivas de Baron B. La combinación de Pinot Noir y Chardonnay potencia su complejidad y elegancia aromática de frutas confitadas con expresivas notas de brioche y almendras. Su final de boca es sensual, cremoso y de gran persistencia.',
}


]

export const getProducts = (categoryId) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve (categoryId ? products.filter(prod=>prod.category === categoryId) : products)
        },1000)

    })
}

export const getProduct = (id) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve (products.find(prod=> prod.id === id))
        },1000)

    })
}