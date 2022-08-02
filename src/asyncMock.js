const products = [
    { 
        id: '0', 
        name: 'Print 155.2', 
        price: 10, 
        category: 'cuadros', 
        img:'https://drive.google.com/uc?export=view&id=1fULrY1RLkVD-3Npg0RBzFXWEzkbRjrAC',
        stock: 100, 
        montaje: 'Cuadro Impresión sobre Bastidor de Madera', 
        medidas: 'Medidas: 30cm x 40cm ',
        description:'Diseñado a través de Inteligencia Artificial. Prompt:"Beautiful cymatic mandala eyes with lotus crystal flowers and mushrooms"'
    },
    { 
        id: '1', 
        name: 'Print 108.1',  
        price: 12, 
        category: 'cuadros', 
        img:'https://drive.google.com/uc?export=view&id=1pGsiDB9c6coLZkk7PF6OwV9YtEJjslTl', 
        stock: 100, 
        montaje: 'Cuadro Impresión sobre Bastidor de Madera', 
        medidas: 'Medidas: 30cm x 40cm ',
        description:'Diseñado a través de Inteligencia Artificial. Prompt:"Beautiful mandala eyes with lotus flowers"'
    },
    { 
        id: '2', 
        name: 'Print 96',  
        price: 11, 
        category: 'cuadros', 
        img:'https://drive.google.com/uc?export=view&id=1lF025nCdsreS04Qq6Xm-nAkAHpLdbWUf', 
        stock: 100, 
        montaje: 'Cuadro Impresión sobre Bastidor de Madera', 
        medidas: 'Medidas: 30cm x 40cm ',
        description:`Diseñado a través de Inteligencia Artificial. \n Prompt:"Beautiful fractal eyes tree in nebula galaxy"`
    },

    {
        id: '3', 
        name: 'Joya Fungi',  
        price: 14, 
        category: 'joyas',
        img:'https://drive.google.com/uc?export=view&id=1aVBTcEvOfGuKamkTLA67iIRjyNUrVWsx', 
        stock: 5, 
        montaje: 'Anillo de Plata 925', 
        medidas: 'Talle n°17',
        description:'Anillo Abierto Ajustable modelado en Blender 3D.'

    },

    {
        id: '4', 
        name: 'Diseño A/V',  
        price: 15, 
        category: 'servicios',
        img:'https://drive.google.com/uc?export=view&id=1jy-lI-mG220kYnh5uH3PMh4r-yfDJCXv', 
        stock: 1, 
        montaje: 'Animacion Web Audiovisual/Video Animado y VR/Diseño de Imagen', 
        medidas: 'Pedir Cotizacion',
        description:'Servicio de diseño Audiovisual'
    }
]

export const  getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const  getProductsByID = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 500)
    })
}