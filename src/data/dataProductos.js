// src/data/dataProductos.js

// ✅ Imágenes DESAYUNOS
import desayuno1 from "@/assets/desayunos/desayuno1.png";
import desayuno2 from "@/assets/desayunos/desayuno2.png";
import desayuno3 from "@/assets/desayunos/desayuno3.png";
import desayuno4 from "@/assets/desayunos/desayuno4.png";
import desayuno5 from "@/assets/desayunos/desayuno5.png";
import desayuno6 from "@/assets/desayunos/desayuno6.png";

// ✅ Imágenes POSTRES
import postres1 from "@/assets/postres/postres1.png";
import postres2 from "@/assets/postres/postres2.png";
import postres3 from "@/assets/postres/postres3.png";
import postres4 from "@/assets/postres/postres4.png";
import postres5 from "@/assets/postres/postres5.png";
import postres6 from "@/assets/postres/postres6.png";

// ✅ Imágenes SNACKS
import snacks1 from "@/assets/snacks/snacks1.png";
import snacks2 from "@/assets/snacks/snacks2.png";
import snacks3 from "@/assets/snacks/snacks3.png";
import snacks4 from "@/assets/snacks/snacks4.png";
import snacks5 from "@/assets/snacks/snacks5.png";
import snacks6 from "@/assets/snacks/snacks6.png";
import snacks7 from "@/assets/snacks/snacks7.png";
import snacks8 from "@/assets/snacks/snacks8.png";
import snacks9 from "@/assets/snacks/snacks9.png";
import snacks10 from "@/assets/snacks/snacks10.png";
import snacks11 from "@/assets/snacks/snacks11.png";
import snacks12 from "@/assets/snacks/snacks12.png";

// ✅ Imágenes RÁPIDAS
import rapidas1 from "@/assets/rapidas/rapidas1.png";
import rapidas2 from "@/assets/rapidas/rapidas2.png";
import rapidas3 from "@/assets/rapidas/rapidas3.png";
import rapidas4 from "@/assets/rapidas/rapidas4.png";
import rapidas5 from "@/assets/rapidas/rapidas5.png";
import rapidas6 from "@/assets/rapidas/rapidas6.png";
import rapidas7 from "@/assets/rapidas/rapidas7.png";
import rapidas8 from "@/assets/rapidas/rapidas8.png";
import rapidas9 from "@/assets/rapidas/rapidas9.png";

// ✅ Imágenes TÍPICA
import tipica1 from "@/assets/tipica/tipica1.png";
import tipica2 from "@/assets/tipica/tipica2.png";
import tipica3 from "@/assets/tipica/tipica3.png";
import tipica4 from "@/assets/tipica/tipica4.png";
import tipica5 from "@/assets/tipica/tipica5.png";
import tipica6 from "@/assets/tipica/tipica6.png";
import tipica7 from "@/assets/tipica/tipica7.png";
import tipica8 from "@/assets/tipica/tipica8.png";
import tipica9 from "@/assets/tipica/tipica9.png";

// ✅ Imágenes GOURMET
import gourmet1 from "@/assets/gourmet/gourmet1.png";
import gourmet2 from "@/assets/gourmet/gourmet2.png";
import gourmet3 from "@/assets/gourmet/gourmet3.png";
import gourmet4 from "@/assets/gourmet/gourmet4.png";
import gourmet5 from "@/assets/gourmet/gourmet5.png";
import gourmet6 from "@/assets/gourmet/gourmet6.png";
import gourmet7 from "@/assets/gourmet/gourmet7.png";
import gourmet8 from "@/assets/gourmet/gourmet8.png";
import gourmet9 from "@/assets/gourmet/gourmet9.png";

// ✅ Datos centralizados
export const productosData = [
  // 🥐 DESAYUNOS
  {
    slug: "desayuno-clasico",
    nombre: "Desayuno Clásico",
    descripcion: "Huevos, pan artesanal y fruta fresca.",
    descripcion_larga:
      "Desayuno completo con huevos al gusto, pan artesanal recién horneado, porción de fruta fresca de temporada y bebida caliente.",
    imagen: desayuno1,
    categoria: "desayunos",
    precio: 18000,
  },
  {
    slug: "tazon-energetico",
    nombre: "Tazón Energético",
    descripcion: "Granola, yogurt y frutos del bosque.",
    imagen: desayuno2,
    categoria: "desayunos",
  },
  {
    slug: "croissant-jamon",
    nombre: "Croissant de Jamón",
    descripcion: "Croissant relleno, fruta y chocolatina.",
    imagen: desayuno3,
    categoria: "desayunos",
  },
  {
    slug: "wrap-pollo",
    nombre: "Wrap de Pollo",
    descripcion: "Wrap fresco, jugo natural y snack dulce.",
    imagen: desayuno4,
    categoria: "desayunos",
  },
  {
    slug: "huevos-ingleses",
    nombre: "Huevos Ingleses",
    descripcion: "Huevos, salchicha, beans y pan tostado.",
    imagen: desayuno5,
    categoria: "desayunos",
  },
  {
    slug: "mini-almohabana",
    nombre: "Mini Almohábana",
    descripcion: "Con fruta, bebida y galletas dulces.",
    imagen: desayuno6,
    categoria: "desayunos",
  },

  // 🍰 POSTRES
  {
    slug: "panna-cotta-frutos-rojos",
    nombre: "Panna Cotta de Frutos Rojos",
    descripcion: "Postre suave con frutos rojos frescos.",
    imagen: postres1,
    categoria: "postres",
  },
  {
    slug: "tarta-chocolate",
    nombre: "Tarta de Chocolate",
    descripcion: "Delicioso y perfecto para compartir.",
    imagen: postres2,
    categoria: "postres",
  },
  {
    slug: "mousse-maracuya",
    nombre: "Mousse de Maracuyá",
    descripcion: "Frescura tropical en cada bocado.",
    imagen: postres3,
    categoria: "postres",
  },
  {
    slug: "brownie-helado",
    nombre: "Brownie con Helado",
    descripcion: "Caliente y frío en una misma experiencia.",
    imagen: postres4,
    categoria: "postres",
  },
  {
    slug: "flan-coco",
    nombre: "Flan de Coco",
    descripcion: "Dulce, cremoso y tropical.",
    imagen: postres5,
    categoria: "postres",
  },
  {
    slug: "trufas-artesanales",
    nombre: "Trufas Artesanales",
    descripcion: "Para regalar y deleitar.",
    imagen: postres6,
    categoria: "postres",
  },

  // 🌮 SNACKS
  ...[
    snacks1,
    snacks2,
    snacks3,
    snacks4,
    snacks5,
    snacks6,
    snacks7,
    snacks8,
    snacks9,
    snacks10,
    snacks11,
    snacks12,
  ].map((img, i) => ({
    slug: `bandeja-snack-${i + 1}`,
    nombre: "Bandeja Mini Salados",
    descripcion: "Variedad de bocados gourmet.",
    imagen: img,
    categoria: "snacks",
  })),

  // 🍔 RÁPIDAS
  ...[
    rapidas1,
    rapidas2,
    rapidas3,
    rapidas4,
    rapidas5,
    rapidas6,
    rapidas7,
    rapidas8,
    rapidas9,
  ].map((img, i) => ({
    slug: `wrap-express-${i + 1}`,
    nombre: "Wrap Express",
    descripcion: "Soluciones rápidas y sabrosas.",
    imagen: img,
    categoria: "rapidas",
  })),

  // 🍛 TÍPICA
  ...[
    tipica1,
    tipica2,
    tipica3,
    tipica4,
    tipica5,
    tipica6,
    tipica7,
    tipica8,
    tipica9,
  ].map((img, i) => ({
    slug: `bandeja-paisa-mini-${i + 1}`,
    nombre: "Bandeja Paisa Mini",
    descripcion: "Versiones pequeñas de nuestra comida típica.",
    imagen: img,
    categoria: "tipica",
  })),

  // 🥩 GOURMET
  ...[
    gourmet1,
    gourmet2,
    gourmet3,
    gourmet4,
    gourmet5,
    gourmet6,
    gourmet7,
    gourmet8,
    gourmet9,
  ].map((img, i) => ({
    slug: `lomo-vino-${i + 1}`,
    nombre: "Lomo en salsa de vino",
    descripcion: "Un plato refinado para eventos especiales.",
    imagen: img,
    categoria: "gourmet",
  })),
];
