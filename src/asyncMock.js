const products = [
    { 
        id: '1', 
        name: 'Print Id 1', 
        price: 1200, 
        category: 'cuadros', 
        img:'https://drive.google.com/uc?export=view&id=1fULrY1RLkVD-3Npg0RBzFXWEzkbRjrAC',
        stock: 100, 
        description:''
    },
    { 
        id: '2', 
        name: 'Print Id 2',  
        price: 1000, 
        category: 'cuadros', 
        img:'https://drive.google.com/uc?export=view&id=1pGsiDB9c6coLZkk7PF6OwV9YtEJjslTl', 
        stock: 100, 
        description:''
    },
    { 
        id: '3', 
        name: 'Print Id 3',  
        price: 1400, 
        category: 'cuadros', 
        img:'https://drive.google.com/uc?export=view&id=1lF025nCdsreS04Qq6Xm-nAkAHpLdbWUf', 
        stock: 100, 
        description:''
    }
   
]

export const  getProducts = () => {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

