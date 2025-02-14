import stockImage from "../../assets/MockupStockManager.png";
import deliveryAPP from "../../assets/MockupDeliveryAPP.png"

export const projects = [
  {
    id: 1,
    image: stockImage,
    videoURL: "https://www.dailymotion.com/embed/video/kNvMPUnTQ9vH60AVgzI",
    title: "Gerenciador de estoque",
    link:"https://stock-managerr.vercel.app/login",
    description: {
      content: "Simples, para gerenciar estoque de produtos.",
      fullContent:
        "Projeto feito para estudos,no princípio foi pedido um gerenciador simples, com os dados sendo persistidos no localstorage e sem autenticação. Mas resolvi ir além, então usei mongoDB como banco e NodeJs no backend, usei também JWT para autenticação via token. Nunca tinha usado essas tecnologias, mas posso dizer que valeu a pena toda pesquisa e esforços feitos para concluir esse desafio com sucesso! Para acessar, utilize o e-mail: kinig72782@kvegg.com e senha: Manager12! ",
      technologies: {
        frontend: ["TypeScript", "React com Vite"],
        backend: ["NodeJS", "MongoDB", "Prisma"],
      },
    },
  },
  {
    id: 2,
    image: deliveryAPP,
    videoURL: "https://player.vimeo.com/video/1056747239",
    title: "App Delivery açaiteria (Desenvolvimento)",
    link:"https://delivery-appv1.vercel.app/",
    description: {
      content: "Vendas de produtos.",
      fullContent:
        "Projeto feito para uma açaiteria local, mas ainda em desenvolvimento.  Para acessar, utilize o e-mail: kinig72782@kvegg.com e senha: deliveryapp12",
      technologies: {
        frontend: ["TypeScript", "React com Vite","TailwindCSS","Mapbox API"],
      },
    },
  }
];
