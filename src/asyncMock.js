const products = [
    { 
        id: '1', 
        name: 'Print 155.2', 
        price: 10, 
        category: 'cuadros', 
        img:'https://drive.google.com/uc?export=view&id=1fULrY1RLkVD-3Npg0RBzFXWEzkbRjrAC',
        stock: 100, 
        description:'Beautiful cymatic mandala eyes with lotus crystal flowers and mushrooms'
    },
    { 
        id: '2', 
        name: 'Print 108.1',  
        price: 12, 
        category: 'cuadros', 
        img:'https://drive.google.com/uc?export=view&id=1pGsiDB9c6coLZkk7PF6OwV9YtEJjslTl', 
        stock: 100, 
        description:'"Beautiful mandala eyes with lotus flowers"'
    },
    { 
        id: '3', 
        name: 'Print 96',  
        price: 11, 
        category: 'cuadros', 
        img:'https://drive.google.com/uc?export=view&id=1lF025nCdsreS04Qq6Xm-nAkAHpLdbWUf', 
        stock: 100, 
        description:`Cuadro Impresion sobre Bastidor de Madera. \n Diseñado a traves de Inteligencia Artificial. \n Prompt:"Beautiful fractal eyes tree in nebula galaxy"`
    }
   
]

export const  getProducts = () => {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const  getProductsByID = (index) => {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve(products[index])
        }, 2000)
    })
}