const products = [
    { 
       
        name: 'Print 155.2', 
        price: 10, 
        category: 'cuadros', 
        img:'https://drive.google.com/uc?export=view&id=1fULrY1RLkVD-3Npg0RBzFXWEzkbRjrAC',
        stock: 10, 
        montaje: 'Cuadro Impresión sobre Bastidor de Madera', 
        medidas: 'Medidas: 30cm x 40cm ',
        description:'Diseñado a través de Inteligencia Artificial. Prompt:"Beautiful cymatic mandala eyes with lotus crystal flowers and mushrooms"'
    },
    { 
       
        name: 'Print 108.1',  
        price: 12, 
        category: 'cuadros', 
        img:'https://drive.google.com/uc?export=view&id=1pGsiDB9c6coLZkk7PF6OwV9YtEJjslTl', 
        stock: 5, 
        montaje: 'Cuadro Impresión sobre Bastidor de Madera', 
        medidas: 'Medidas: 30cm x 40cm ',
        description:'Diseñado a través de Inteligencia Artificial. Prompt:"Beautiful mandala eyes with lotus flowers"'
    },
    { 
       
        name: 'Print 96',  
        price: 11, 
        category: 'cuadros', 
        img:'https://drive.google.com/uc?export=view&id=1lF025nCdsreS04Qq6Xm-nAkAHpLdbWUf', 
        stock: 3, 
        montaje: 'Cuadro Impresión sobre Bastidor de Madera', 
        medidas: 'Medidas: 30cm x 40cm ',
        description:`Diseñado a través de Inteligencia Artificial. \n Prompt:"Beautiful fractal eyes tree in nebula galaxy"`
    },

    {
        
        name: 'Anillo Abrazo',  
        price: 15, 
        category: 'joyas',
        img:'https://drive.google.com/uc?export=view&id=1aVBTcEvOfGuKamkTLA67iIRjyNUrVWsx', 
        stock: 5, 
        montaje: 'Anillo de Plata 925', 
        medidas: 'Talle n°17',
        description:'Anillo Abierto Ajustable modelado en Blender 3D.'

    },
    
    {
        
        name: 'Teseractor',  
        price: 12, 
        category: 'joyas',
        img:'https://drive.google.com/uc?export=view&id=1ip2nFw7kGVEIqdb37e0WIxXz0XPQc0UA', 
        stock: 2, 
        montaje: 'Plata con Diamante Sintético', 
        medidas: 'Unica',
        description:'Joya modelada en Blender 3D'

    },
    
    {
        
        name: 'Anillo Diamante',  
        price: 11, 
        category: 'joyas',
        img:'https://drive.google.com/uc?export=view&id=1OdaS5ykpVdKtv-biBAlVKyeIertGSZtJ', 
        stock: 5, 
        montaje: 'Anillo de Plata 925', 
        medidas: 'Talle n°24',
        description:'Anillo modelado en Blender 3D.'

    },

    {
        
        name: 'Diseño A/V',  
        price: '100', 
        category: 'servicios',
        img:'https://drive.google.com/uc?export=view&id=1jy-lI-mG220kYnh5uH3PMh4r-yfDJCXv', 
        stock: 1, 
        montaje: 'Programación Web Audiovisual/Video Animado y VR/Diseño de Imagen', 
        medidas: 'Pedir Cotizacion',
        description:'Servicio de Diseño Audiovisual'
    },
    {
        
        name: 'Diseño 3D',  
        price: '20', 
        category: 'servicios',
        img:'https://drive.google.com/uc?export=view&id=1LVNdsZPYAcX-gX73wdAF5sKeezdX0qyy', 
        stock: 1, 
        montaje: 'Diseño 3D, Character Rigged, Enviroments', 
        medidas: 'Pedir Cotizacion',
        description:'Servicio de Diseño 3D'
    }
]

export const  getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 10)
    })
}

export const  getProductsByID = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 10)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 10)
    })
}