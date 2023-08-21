import { Product } from "../types/Product";

export const products: Array<Product> = [
    {
        id: 1, 
        name: "Notebook I7 16GB Ram SSD 512GB Intel Iris", 
        image: "/assets/images/notebook-removebg-preview.png",
        description: "Clássico e potente, o Notebook I7 com 16GB de RAM, SSD de 512GB e Intel Iris oferece desempenho de alta velocidade para tarefas exigentes.",
        category: "Notebooks", 
        price: 4570.90, 
        rating: 4.9, 
        indicated: false, 
        discount: 0
    },
    {
        id: 2, 
        name: "Desktop I9 32GB Ram SSD 1TB RTX 4090", 
        image: "/assets/images/desktop-removebg-preview.png",
        description: "O Desktop I9 é uma máquina de elite, com 32GB de RAM, SSD de 1TB e RTX 4090, ideal para jogos e produção de conteúdo de última geração.",
        category: "Desktops", 
        price: 12989.90, 
        rating: 4.0, 
        indicated: true, 
        discount: 0.2
    },
    {
        id: 3, 
        name: "Mouse Gamer", 
        image: "/assets/images/mouse-removebg-preview.png",
        description: "O Mouse Gamer combina design ergonômico e precisão, proporcionando uma experiência de jogo imersiva e confortável.",
        category: "Mouses", 
        price: 340.90, 
        rating: 4.9, 
        indicated: true, 
        discount: 0
    },
    {
        id: 4, 
        name: "Motorola Edge 30 Ultra", 
        image: "/assets/images/smartphone-removebg-preview.png",
        description: "O Motorola Edge 30 Ultra é um smartphone avançado, oferecendo desempenho excepcional, câmera de alta qualidade e uma tela impressionante para uma experiência imersiva.",
        category: "Notebooks", 
        price: 3899.90, 
        rating: 4.6, 
        indicated: false, 
        discount: 0.1
    },
    {
        id: 5, 
        name: "Fones de Ouvido Gamer", 
        image: "/assets/images/headset-removebg-preview.png",
        description: "Os Fones de Ouvido Gamer proporcionam áudio envolvente e comunicação nítida, aprimorando cada detalhe dos seus jogos e permitindo uma experiência auditiva imersiva.",
        category: "Fones de Ouvido", 
        price: 459.90, 
        rating: 3.7, 
        indicated: false, 
        discount: 0
    },
    {
        id: 6, 
        name: "Teclado Mecânico Gamer", 
        image: "/assets/images/teclado-removebg-preview.png",
        description: "Os Fones de Ouvido Gamer proporcionam áudio envolvente e comunicação nítida, aprimorando cada detalhe dos seus jogos e permitindo uma experiência auditiva imersiva.",
        category: "Teclados", 
        price: 789.90, 
        rating: 5, 
        indicated: true, 
        discount: 0.4
    }
]