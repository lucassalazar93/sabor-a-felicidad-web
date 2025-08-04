// src/data/dataProductos.js

// ✅ Imágenes DESAYUNOS
import desayuno1 from "@/assets/desayunos/desayuno1.png";
import desayuno2 from "@/assets/desayunos/desayuno2.png";
import desayuno3 from "@/assets/desayunos/desayuno3.png";
import desayuno4 from "@/assets/desayunos/desayuno4.png";
import desayuno5 from "@/assets/desayunos/desayuno5.png";
import desayuno6 from "@/assets/desayunos/desayuno6.png";
import desayuno7 from "@/assets/desayunos/arepa-de-huevo.png";

// ✅ Imágenes POSTRES
import postres1 from "@/assets/postres/limon.png";
import postres2 from "@/assets/postres/pannacotta.png";
import postres3 from "@/assets/postres/tarta-vazca.png";
import postres4 from "@/assets/postres/tres-leches.png";
import postres5 from "@/assets/postres/pastel-horneado.png";
import postres6 from "@/assets/postres/fresas.png";

// ✅ Imágenes SNACKS
import snacks1 from "@/assets/snacks/snacks1.png";
import snacks2 from "@/assets/snacks/arepa-de-huevo.png";
import snacks3 from "@/assets/snacks/pastel-de-pollo.png";
import snacks4 from "@/assets/snacks/almohabanas.png";
import snacks5 from "@/assets/snacks/empanadas-queso.png";
import snacks6 from "@/assets/snacks/empanadas-tradicionales.png";
import snacks7 from "@/assets/snacks/horneado.png";
import snacks8 from "@/assets/snacks/chorizo.png";
import snacks9 from "@/assets/snacks/chicharron.png";
import snacks10 from "@/assets/snacks/albondigas.png";
import snacks11 from "@/assets/snacks/mini.png";
import snacks13 from "@/assets/snacks/palito-de-queso.png";

// ✅ Imágenes RÁPIDAS
import rapidas1 from "@/assets/rapidas/perro-caliente-artesanal.png";
import rapidas2 from "@/assets/rapidas/wrap-pollo-crujiente.png";
import rapidas3 from "@/assets/rapidas/fajitas.png";
import rapidas4 from "@/assets/rapidas/sandwich-cubano-clasico.png";
import rapidas5 from "@/assets/rapidas/hamburguesa.png";
import rapidas6 from "@/assets/rapidas/tacos.png";
import rapidas7 from "@/assets/rapidas/arepas-rellenas.png";
import rapidas8 from "@/assets/rapidas/pollo.png";

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
    slug: "desayuno-arepa-de-huevo",
    nombre: " Combo Tradición Caribeña",
    descripcion: "Arepa de huevo crujiente + Gaseosa Colombiana 400ml.",
    descripcion_larga:
      "Disfruta de una arepa de huevo costeña, dorada y crocante, con su relleno jugoso y recién hecha, acompañada de una Colombiana bien fría. Ideal para compartir una pausa sabrosa o empezar el día con lo mejor del Caribe en tus manos. Incluye salsas de eleccion.",
    imagen: desayuno7,
    categoria: "desayunos",
    precio: 12000,
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
  {
    slug: "wrap-pollo",
    nombre: "Wrap de Pollo",
    descripcion: "Wrap fresco, jugo natural y snack dulce.",
    imagen: desayuno4,
    categoria: "desayunos",
  },
  {
    slug: "tazon-energetico",
    nombre: "Tazón Energético",
    descripcion: "Granola, yogurt y frutos del bosque.",
    imagen: desayuno2,
    categoria: "desayunos",
  },

  // 🍰 POSTRES
  {
    slug: "limon",
    nombre: "Cheesecake de Limón",
    descripcion:
      "Suave, cítrica y con base crocante. Un postre que acaricia el paladar con frescura y dulzura.",
    descripcion_larga:
      "Nuestra Tarta de Limón Refrescante es el equilibrio perfecto entre lo dulce y lo cítrico. Con una base crujiente de galleta artesanal, una capa cremosa de limón suave y un topping brillante con toque natural de limón fresco, este postre es ideal para cerrar cualquier comida con una sonrisa. Decorada con rodaja de limón y hojita de menta, su presentación es tan elegante como su sabor. ",
    imagen: postres1,
    categoria: "postres",
    precio: 9000,
  },
  {
    slug: "pannacotta",
    nombre: "Panna Cotta Artesanal",
    descripcion: "Cremosa, elegante y llena de frescura en cada cucharada.",
    descripcion_larga:
      "Nuestra Panna Cotta Artesanal es un postre suave y delicado, elaborado con crema fresca infusionada con vainilla natural. Su textura sedosa se complementa con una cobertura de sabores frutales a elección: desde frutos rojos vibrantes, durazno jugoso, mango tropical o maracuyá refrescante. Se decora con frutas naturales y toques de menta para una presentación irresistible. Ideal para cerrar tu experiencia con un toque dulce y sofisticado. ",
    imagen: postres2,
    categoria: "postres",
    precio: 9000,
  },
  {
    slug: "tarta vasca",
    nombre: "Tarta Vasca de Queso",
    descripcion: "Una tarta cremosa, caramelizada y sencillamente adictiva.",
    descripcion_larga:
      "Nuestra Tarta Vasca de Queso es un homenaje a la tradición europea con el toque amoroso de Sabor a Felicidad. Su centro suave y untuoso contrasta con una capa exterior dorada y caramelizada, lograda por horneado a alta temperatura. Cada bocado es una explosión de sabor intenso y textura delicada, perfecta para los amantes del queso. Elaborada artesanalmente y sin base de galleta, es el postre ideal para cerrar con elegancia cualquier ocasión. ",
    imagen: postres3,
    categoria: "postres",
    precio: 9000,
  },
  {
    slug: "tres leches",
    nombre: "Torta Tres Leches",
    descripcion:
      "Esponjosa, húmeda y coronada con crema. Un clásico que enamora.",
    descripcion_larga:
      "Nuestra Torta Tres Leches está elaborada con bizcochuelo artesanal bañado en una mezcla perfecta de leche condensada, evaporada y crema de leche. Cada porción se deshace en la boca gracias a su textura suave y esponjosa. Se corona con crema chantilly, lluvia de chocolate y una cereza brillante como toque final. Es el postre ideal para consentirse con dulzura y tradición en cada cucharada.",
    imagen: postres4,
    categoria: "postres",
    precio: 9000,
  },
  {
    slug: "pastel-horneado",
    nombre: "Pastel Horneado Artesanal",
    descripcion:
      "Crujiente, dorado y con el corazón suave de guayaba o arequipe.",
    descripcion_larga:
      "Nuestros Pasteles Horneados Artesanales son una delicia de masa hojaldrada, horneada hasta lograr un dorado perfecto y un crujido adictivo. Están rellenos con dos sabores tradicionales que evocan momentos felices: dulce guayaba o cremoso arequipe. Son ideales para acompañar un café, sorprender con un detalle o simplemente consentirse. Cada mordisco es un abrazo cálido al alma.",
    imagen: postres5,
    categoria: "postres",
    precio: 9000,
  },
  {
    slug: "fresas-con-crema",
    nombre: "Fresas con Crema Artesanales",
    descripcion:
      "Fresas frescas y dulces, bañadas en crema suave como un abrazo.",
    descripcion_larga:
      "Nuestro postre de Fresas con Crema es una explosión de frescura y dulzura. Preparado con fresas seleccionadas, maduras y jugosas, combinadas con crema artesanal ligera y aireada, que realza su sabor sin opacarlo. Cada capa es un equilibrio perfecto entre lo natural, lo cremoso y lo reconfortante. Ideal para cerrar el día con dulzura o para regalar un momento especial.",
    imagen: postres6,
    categoria: "postres",
    precio: 9000,
  },
  {
    slug: "fresas-con-crema",
    nombre: "Fresas con Crema Artesanales",
    descripcion:
      "Fresas frescas y dulces, bañadas en crema suave como un abrazo.",
    descripcion_larga:
      "Nuestro postre de Fresas con Crema es una explosión de frescura y dulzura. Preparado con fresas seleccionadas, maduras y jugosas, combinadas con crema artesanal ligera y aireada, que realza su sabor sin opacarlo. Cada capa es un equilibrio perfecto entre lo natural, lo cremoso y lo reconfortante. Ideal para cerrar el día con dulzura o para regalar un momento especial.",
    imagen: postres6,
    categoria: "postres",
    precio: 9000,
  },
  {
    slug: "fresas-con-crema",
    nombre: "Fresas con Crema Artesanales",
    descripcion:
      "Fresas frescas y dulces, bañadas en crema suave como un abrazo.",
    descripcion_larga:
      "Nuestro postre de Fresas con Crema es una explosión de frescura y dulzura. Preparado con fresas seleccionadas, maduras y jugosas, combinadas con crema artesanal ligera y aireada, que realza su sabor sin opacarlo. Cada capa es un equilibrio perfecto entre lo natural, lo cremoso y lo reconfortante. Ideal para cerrar el día con dulzura o para regalar un momento especial.",
    imagen: postres6,
    categoria: "postres",
    precio: 9000,
  },
  {
    slug: "fresas-con-crema",
    nombre: "Fresas con Crema Artesanales",
    descripcion:
      "Fresas frescas y dulces, bañadas en crema suave como un abrazo.",
    descripcion_larga:
      "Nuestro postre de Fresas con Crema es una explosión de frescura y dulzura. Preparado con fresas seleccionadas, maduras y jugosas, combinadas con crema artesanal ligera y aireada, que realza su sabor sin opacarlo. Cada capa es un equilibrio perfecto entre lo natural, lo cremoso y lo reconfortante. Ideal para cerrar el día con dulzura o para regalar un momento especial.",
    imagen: postres6,
    categoria: "postres",
    precio: 9000,
  },

  // 🌮 SNACKS

  {
    slug: "palito-de-queso",
    nombre: "Palito de queso",
    descripcion: "Crujientes por fuera, suaves por dentro..",
    descripcion_larga:
      "Nuestros palito de queso son una receta artesanal horneada con amor. Están hechos con masa de hojaldre delicadamente enrollada, rellenos y espolvoreados con queso costeño rallado que se funde con cada bocado. ",
    imagen: snacks13,
    categoria: "snacks",
    precio: 5000,
  },
  {
    slug: "buñuelos",
    nombre: "Buñuelos",
    descripcion: "Dorados, esponjosos y llenos de sabor.",
    descripcion_larga:
      "Nuestras bolitas de queso son el snack perfecto para alegrar cualquier momento. Preparadas con una mezcla especial de almidón y queso costeño, se fríen hasta alcanzar un dorado ideal y una textura crocante por fuera, suave por dentro. ",
    imagen: snacks1,
    categoria: "snacks",
    precio: 1000,
  },
  {
    slug: "arepa-de-huevo",
    nombre: "Arepa de Huevo Tradicional",
    descripcion: "Una joya de la costa que enamora desde la primera mordida.",
    descripcion_larga:
      "Nuestra arepa de huevo es un homenaje a la cocina costeña. Preparada con masa de maíz amarillo molido a mano, rellena con huevo fresco que se cocina suavemente en el interior, logrando una textura jugosa, dorada y crujiente a la vez. ",
    imagen: snacks2,
    categoria: "snacks",
    precio: 6000,
  },
  {
    slug: "pasteles-de-pollo",
    nombre: "Pasteles de Pollo",
    descripcion: "Rellenos de pollo jugoso y masa dorada al punto.",
    descripcion_larga:
      "Nuestros pasteles de pollo son una explosión de sabor tradicional. Preparados con masa de maíz crocante, rellenos de pollo desmechado sazonado con especias naturales y frito hasta alcanzar un dorado perfecto. ",
    imagen: snacks3,
    categoria: "snacks",
    precio: 7000,
  },
  {
    slug: "almojabanas",
    nombre: "Almojábanas Recién Horneadas",
    descripcion: "Horneadas con amor, suaves y doraditas.",
    descripcion_larga:
      "Nuestras almojábanas son suaves por dentro, ligeramente crocantes por fuera y con ese toque característico del queso costeño que las hace inolvidables.Horneadas artesanalmente en el punto justo, son ideales para acompañar tu café, chocolate caliente o simplemente disfrutar como merienda saludable y reconfortante. ",
    imagen: snacks4,
    categoria: "snacks",
    precio: 4000,
  },
  {
    slug: "empanadas-de-queso",
    nombre: "Empanadas de Queso",
    descripcion: "Delicadamente doradas y rellenas de puro amor (y queso).",
    descripcion_larga:
      "Nuestras empanadas de queso están hechas con masa de maíz blanco, crocante al primer bocado, y un relleno de queso mozarella cremoso que se derrite lentamente en tu boca.Son un clásico irresistible de la cocina colombiana. ",
    imagen: snacks5,
    categoria: "snacks",
    precio: 4000,
  },

  {
    slug: "empanadas-tradicionales",
    nombre: "Empanadas Tradicionales",
    descripcion:
      "Auténticas empanadas colombianas con masa dorada, rellenas de sabor y tradición en cada bocado.",
    descripcion_larga:
      "Nuestras Empanadas Tradicionales son una deliciosa representación del sabor casero colombiano. Elaboradas con masa de maíz perfectamente crocante y rellenas con generosas porciones de pollo desmechado, carne sazonada o queso fundido, son una explosión de sabor al primer mordisco. ",
    imagen: snacks6,
    categoria: "snacks",
    precio: 4000,
  },
  {
    slug: "Horneados",
    nombre: "Horneados Dorados de la Casa",
    descripcion:
      "Crujientes por fuera, suaves por dentro. Nuestros horneados son ese abrazo cálido que necesitas en el día.",
    descripcion_larga:
      "Nuestros Horneados Dorados de la Casa están hechos con masa de hojaldre artesanal, horneada lentamente hasta lograr una textura crujiente y ligera. Cada pieza está rellena con amor y sabores que reconfortan. ",
    imagen: snacks7,
    categoria: "snacks",
    precio: 4000,
  },
  {
    slug: "chorizo",
    nombre: "Chorizos Cocteleros Parrilleros",
    descripcion:
      "Pequeños en tamaño, gigantes en sabor. Nuestros chorizos cocteleros son ese bocado parrillero que enamora al instante. ",
    descripcion_larga:
      "Nuestros Chorizos Cocteleros Parrilleros son ideales para quienes disfrutan el sabor auténtico en formato práctico y delicioso. ",
    imagen: snacks8,
    categoria: "snacks",
    precio: 1000,
  },
  {
    slug: "chicharron",
    nombre: "Chicharrón Crocante Tradicional",
    descripcion:
      "Doradito, crujiente y sabroso. Un clásico irresistible que sabe a tradición y hogar. ",
    descripcion_larga:
      "Nuestro Chicharrón Crocante Tradicional está preparado con panceta seleccionada y cocinado lentamente hasta lograr ese equilibrio perfecto entre crocancia y jugosidad. ",
    imagen: snacks9,
    categoria: "snacks",
    precio: 20000,
  },
  {
    slug: "albondigas",
    nombre: "Albóndigas BBQ Cocteleras",
    descripcion:
      "Tiernas, jugosas y bañadas en una irresistible salsa BBQ. ¡El toque gourmet que transforma cualquier momento! ",
    descripcion_larga:
      "Nuestras Albóndigas BBQ Cocteleras están hechas con carne molida seleccionada, sazonadas con un toque artesanal y cocinadas al punto perfecto.Lo que las hace únicas es su generosa capa de salsa BBQ ligeramente dulce, ahumada y caramelizada que despierta todos tus sentidos. ",
    imagen: snacks10,
    categoria: "snacks",
    precio: 20000,
  },
  {
    slug: "mini-sandwiches-gourmet",
    nombre: " Mini Sándwiches Gourmet",
    descripcion:
      "Pequeños, frescos y perfectos. Un bocado elegante que combina suavidad, color y sabor. ",
    descripcion_larga:
      "Nuestros Mini Sándwiches Gourmet son ideales para reuniones especiales, desayunos ejecutivos, brunch o celebraciones delicadas.Cada uno está preparado con pan suave, vegetales frescos, queso fundente, jamón artesanal y un toque de salsas suaves que no invaden, sino complementan. ",
    imagen: snacks11,
    categoria: "snacks",
    precio: 20000,
  },

  // 🍔 RÁPIDAS

  {
    slug: "perro-caliente",
    nombre: " Perro Caliente Artesanal",
    descripcion:
      "Pan suave, salchicha dorada y toppings explosivos de sabor. El clásico que siempre conquista. ",
    descripcion_larga:
      "Nuestro Perro Caliente Artesanal es mucho más que una comida rápida: es una experiencia reconfortante y deliciosa. ",
    imagen: rapidas1,
    categoria: "rapidas",
    precio: 10000,
  },
  {
    slug: "wrap-pollo-crujiente",
    nombre: " Wrap de Pollo Crunchy & Cremoso",
    descripcion:
      "Crujiente por dentro, fresco por fuera. Un wrap que combina sabor, textura y felicidad en cada bocado.  ",
    descripcion_larga:
      "Nuestro Wrap de Pollo Crunchy & Cremoso está hecho con tortilla artesanal, dorada a la plancha y rellena con trozos de pollo empanizado crujiente, lechuga fresca, tomate jugoso y nuestra salsa secreta cremosa a base de ajo y especias suaves. ",
    imagen: rapidas2,
    categoria: "rapidas",
    precio: 10000,
  },
  {
    slug: "fajita-de-res",
    nombre: " Fajitas de Res",
    descripcion:
      "Sazonadas con alma y servidas con color. Nuestras fajitas de res son puro sabor latino que se disfruta con las manos.  ",
    descripcion_larga:
      "Las Fajitas de Res Artesanales son un clásico que nunca falla. Preparadas con carne de res marinada, salteada al punto justo con pimientos tricolor y cebolla morada, todo envuelto en tortillas suaves de harina.Se sirven calientes, con gajos de limón fresco y salsa especial de la casa ",
    imagen: rapidas3,
    categoria: "rapidas",
    precio: 10000,
  },
  {
    slug: "fajita-de-res",
    nombre: " Fajitas de Res",
    descripcion:
      "Sazonadas con alma y servidas con color. Nuestras fajitas de res son puro sabor latino que se disfruta con las manos.  ",
    descripcion_larga:
      "Las Fajitas de Res Artesanales son un clásico que nunca falla. Preparadas con carne de res marinada, salteada al punto justo con pimientos tricolor y cebolla morada, todo envuelto en tortillas suaves de harina.Se sirven calientes, con gajos de limón fresco y salsa especial de la casa ",
    imagen: rapidas3,
    categoria: "rapidas",
    precio: 10000,
  },
  {
    slug: "sandwich-cubano-clasico",
    nombre: " Sándwich Cubano",
    descripcion:
      "Pan dorado, relleno irresistible y sabor con carácter. Así se vive un verdadero sándwich cubano  ",
    descripcion_larga:
      "Nuestro Sándwich Cubano con pan de orégano es una delicia que conquista desde el primer mordisco: el pan artesanal es suave, ligeramente crujiente y está infusionado con orégano natural, lo que aporta un aroma cálido y un sabor herbal que eleva cada ingrediente. Esta combinación única realza el pollo asado, el queso fundido y los vegetales frescos, creando un contraste perfecto entre lo clásico y lo gourmet. ",
    imagen: rapidas4,
    categoria: "rapidas",
    precio: 10000,
  },
  {
    slug: "Hamburguesa-Artesanal ",
    nombre: " Hamburguesa Artesanal ",
    descripcion:
      "Jugosa, dorada y servida con papas crocantes. Una hamburguesa que no necesita presentación. ",
    descripcion_larga:
      "Nuestra Hamburguesa Artesanal está elaborada con pan brioche de cebolla horneado en casa, carne 100% res a la parrilla, queso fundido, vegetales frescos (lechuga, tomate, cebolla morada) y un toque de salsas cremosas de la casa.",
    imagen: rapidas5,
    categoria: "rapidas",
    precio: 30000,
  },
  {
    slug: "tacos-dorados-carne",
    nombre: "Tacos Dorados de Carne",
    descripcion:
      "Tortillas crocantes rellenas de carne jugosa, bañadas en salsas frescas que despiertan el alma.",
    descripcion_larga:
      "Nuestros Tacos Dorados están preparados con tortillas de maíz ligeramente fritas hasta lograr una textura crujiente y dorada. Van rellenos de carne desmechada cocinada a fuego lento con especias tradicionales, y se sirven con cebolla picada, cilantro fresco, guacamole suave, salsa verde cremosa y toques de picante al gusto. Son una fusión entre lo clásico y lo festivo, perfectos para compartir y disfrutar sin prisas.",
    imagen: rapidas6,
    categoria: "rapidas",
    precio: 30000,
  },
  {
    slug: "arepas-rellenas-artesanales",
    nombre: "Arepas Rellenas Artesanales",
    descripcion:
      "Repletas de sabor, hechas con amor y rellenas al estilo tradicional. ¡Una mordida no es suficiente!",
    descripcion_larga:
      "Nuestras Arepas Rellenas Artesanales son el abrazo perfecto entre lo clásico y lo sabroso. Preparadas con masa de maíz blanca dorada a la plancha, y rellenas con opciones como pollo desmechado, carne mechada, caraotas con queso o mixtas, cada una está pensada para consentir el alma. Se sirven calientes, con el relleno generoso y jugoso, perfectas para desayunar, almorzar o disfrutar en cualquier momento del día.",
    imagen: rapidas7,
    categoria: "rapidas",
    precio: 30000,
  },
  {
    slug: "brochetas-de-pollo",
    nombre: "Brochetas de Pollo a la Parrilla",
    descripcion:
      "Jugosas, doraditas y con ese sabor casero que enamora. Perfectas para picar o acompañar.",
    descripcion_larga:
      "Nuestras Brochetas de Pollo a la Parrilla están marinadas con especias suaves y cocinadas al punto justo para lograr una textura tierna por dentro y dorada por fuera. Servidas con salsas artesanales (mayonesa, tártara o BBQ), son perfectas como entrada, picada ligera o acompañamiento. Su presentación práctica y su sabor auténtico las convierten en una opción irresistible para quienes aman lo clásico pero bien hecho.",
    imagen: rapidas8,
    categoria: "rapidas",
    precio: 30000,
  },

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
