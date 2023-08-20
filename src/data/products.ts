import { Product } from "../types/Product";

export const products: Array<Product> = [
    {
        id: 1, 
        name: "Notebook I7 16GB Ram SSD 512GB Intel Iris", 
        image: "/logo192.png",
        description: "",
        category: "Notebooks", 
        price: 4570.90, 
        rating: 4.9, 
        indicated: false, 
        discount: 0
    },
    {
        id: 2, 
        name: "Desktop I9 32GB Ram SSD 1TB RTX 4090", 
        image: "/logo192.png",
        description: "",
        category: "Desktops", 
        price: 12989.90, 
        rating: 4.0, 
        indicated: true, 
        discount: 0.2
    },
    {
        id: 3, 
        name: "Mouse Gamer", 
        image: "/logo192.png",
        description: "",
        category: "Mouses", 
        price: 4570.90, 
        rating: 4.9, 
        indicated: true, 
        discount: 0
    },
    {
        id: 4, 
        name: "Motorola Edge 50 Ultra", 
        image: "/logo192.png",
        description: "",
        category: "Notebooks", 
        price: 3899.90, 
        rating: 4.6, 
        indicated: false, 
        discount: 0.1
    },
    {
        id: 5, 
        name: "Fones de Ouvido Gamer", 
        image: "/logo192.png",
        description: "",
        category: "Fones de Ouvido", 
        price: 459.90, 
        rating: 3.7, 
        indicated: false, 
        discount: 0
    },
    {
        id: 6, 
        name: "Teclado Mecânico Gamer", 
        image: "/logo192.png",
        description: "",
        category: "Teclados", 
        price: 789.90, 
        rating: 5, 
        indicated: true, 
        discount: 0.4
    }
]