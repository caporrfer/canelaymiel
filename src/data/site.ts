export const business = {
  name: 'Canela y Miel',
  locationName: 'La Monacilla',
  description: 'Cafetería de desayunos, brunch y comida en La Monacilla, Huelva.',
  phoneLabel: '613 99 69 16',
  phoneHref: 'tel:+34613996916',
  address: 'CC. La Monacilla, Av. de Montes de León, locales 13–14–15, 21110, Huelva',
  hours: 'Lunes a domingo · 8:00–20:00',
  mapsUrl: 'https://maps.app.goo.gl/Yxa3BbrGTRFca2QS6',
  instagramUrl: 'https://www.instagram.com/canelaymiel.lamonacilla/',
}

export type Product = {
  name: string
  price?: string
  note?: string
}

export const menuSections: Array<{
  id: string
  eyebrow: string
  title: string
  intro: string
  products: Product[]
}> = [
  {
    id: 'panes',
    eyebrow: 'Empieza por aquí',
    title: 'Panes y toppings',
    intro: 'Elige el pan y monta tu desayuno a tu manera.',
    products: [
      { name: 'Mollete', price: '1,80 €' },
      { name: 'Cereales', price: '1,80 €' },
      { name: 'Blanco', price: '1,50 €' },
      { name: 'Integral', price: '1,50 €' },
      { name: 'Sin gluten', price: '2 €' },
      { name: 'Rebanada', price: '1,50 €' },
      { name: 'Pan de molde', price: '1,50 €' },
      { name: 'AOVE', price: '+0,50 €', note: 'suplemento' },
      { name: 'AOVE aromatizado', price: '+1 €', note: 'suplemento' },
      { name: 'Tomate', price: '+1,20 €', note: 'suplemento' },
      { name: 'Mantequilla', price: '+1,20 €', note: 'suplemento' },
      { name: 'Mermelada', price: '+0,50 €', note: 'suplemento' },
      { name: 'Miel', price: '+0,50 €', note: 'suplemento' },
      { name: 'Paté', price: '+1 €', note: 'suplemento' },
      { name: 'Nutella', price: '+2 €', note: 'suplemento' },
      { name: 'Crema de cacahuete', price: '+2 €', note: 'suplemento' },
      { name: 'Jamón', price: '+3 €', note: 'suplemento' },
      { name: 'Pavo', price: '+2,50 €', note: 'suplemento' },
      { name: 'Pollo', price: '+2,50 €', note: 'suplemento' },
      { name: 'Salmón', price: '+3,50 €', note: 'suplemento' },
      { name: 'Queso fresco', price: '+2 €', note: 'suplemento' },
      { name: 'Aguacate', price: '+2,50 €', note: 'suplemento' },
      { name: 'Bacon', price: '+1,50 €', note: 'suplemento' },
      { name: 'Setas', price: '+1,50 €', note: 'suplemento' },
      { name: 'Atún', price: '+1,50 €', note: 'suplemento' },
      { name: 'Espinacas', price: '+0,50 €', note: 'suplemento' },
    ],
  },
  {
    id: 'especiales',
    eyebrow: 'A bocados grandes',
    title: 'Tostas y bowls',
    intro: 'Combinaciones dulces, saladas y healthy para desayunos sin prisa.',
    products: [
      { name: 'Tosta de semillas, aguacate, revuelto y salmón', price: '8 €' },
      { name: 'Tosta de masa madre, queso crema, revuelto y jamón ibérico', price: '8 €' },
      { name: 'Tostada francesa con chantilly, arce y frutos rojos', price: '8 €' },
      { name: 'Muesli, yogur y frutos rojos', price: '6,50 €' },
      { name: 'Chía y frutos rojos', price: '6,50 €' },
      { name: 'Yogur griego, nueces y miel', price: '6,50 €' },
      { name: 'Espinacas, cebolla, feta, pepino y cherry asado', price: '6,50 €' },
      { name: 'Yogur griego, pitahaya y fruta', price: '6 €' },
    ],
  },
  {
    id: 'huevos',
    eyebrow: 'Poached & happy',
    title: 'Huevos, huevitos',
    intro: 'Del clásico de siempre a los favoritos del brunch.',
    products: [
      { name: 'Revueltos, tortilla, fritos, cocidos o poché', price: '2 €/ud.' },
      { name: 'Benedict con salmón', price: '8 €' },
      { name: 'Inglés con bacon', price: '7,50 €' },
      { name: 'Turcos con hummus y queso', price: '7,50 €' },
      { name: 'Cazuela florentina', price: '6,50 €' },
      { name: 'Cazuela andaluza', price: '6,50 €' },
      { name: 'Cazuela carbonara', price: '6,50 €' },
    ],
  },
  {
    id: 'dulce',
    eyebrow: 'Modo dulce: on',
    title: 'Dulces',
    intro: 'Recién horneados y caprichos para alargar la sobremesa.',
    products: [
      { name: 'Gofre, crêpe o pancake', price: '5 €' },
      { name: 'Nata', price: '+1,50 €', note: 'topping' },
      { name: 'Chocolate', price: '+1,50 €', note: 'topping' },
      { name: 'Caramelo', price: '+1,50 €', note: 'topping' },
      { name: 'Fruta fresca', price: '+2 €', note: 'topping' },
      { name: 'Fruta caramelizada', price: '+2,50 €', note: 'topping' },
      { name: 'Frutos secos', price: '+1,50 €', note: 'topping' },
      { name: 'Crumble', price: '+1,50 €', note: 'topping' },
      { name: 'Jarabe de arce', price: '+1 €', note: 'topping' },
      { name: 'Miel', price: '+1 €', note: 'topping' },
      { name: 'Croissants, cookies, bizcochos y donuts', note: 'Consulta la vitrina' },
      { name: 'Cinnamon rolls, palmeras, muffins y napolitanas', note: 'Consulta la vitrina' },
    ],
  },
  {
    id: 'bebidas',
    eyebrow: 'Cafecito first',
    title: 'Café y bebidas',
    intro: 'Café, zumos, smoothies y algo bien fresquito.',
    products: [
      { name: 'Espresso', price: '2 €' },
      { name: 'Cortado', price: '2 €' },
      { name: 'Café con leche', price: '2 €' },
      { name: 'Cappuccino', price: '2,50 €' },
      { name: 'Flat white', price: '3,50 €' },
      { name: 'Americano', price: '2 €' },
      { name: 'Latte macchiato', price: '2,50 €' },
      { name: 'Bombón', price: '3,50 €' },
      { name: 'Frappé', price: '4 €' },
      { name: 'Cold brew', price: '4 €' },
      { name: 'Iced latte', price: '3,50 €' },
      { name: 'Zumo de naranja', price: '2,50 €' },
      { name: 'Naranja, zanahoria y jengibre', price: '3 €' },
      { name: 'Sandía, pepino y hierbabuena', price: '2,50 €' },
      { name: 'Melón, pomelo y menta', price: '2,50 €' },
      { name: 'Zumo de piña, melocotón o manzana', price: '2 €' },
      { name: 'Milkshakes', price: '6 €', note: 'varios sabores' },
      { name: 'Smoothies', price: '5 €', note: 'varios sabores' },
    ],
  },
]

export type WeeklyMenu = {
  id: string
  label: string
  start: string
  end: string
  price: string
  days: Array<{ day: string; first: string; second: string; dessert: string }>
}

export const weeklyMenus: WeeklyMenu[] = [
  {
    id: 'semana-1', label: 'Semana 1 · 7 al 11 de septiembre', start: '2026-09-07', end: '2026-09-11', price: '14 €',
    days: [
      { day: 'Lunes', first: 'Crema de calabacín y queso crema', second: 'Salmón en salsa de limón con ensalada de hinojo', dessert: 'Fruta fresca o vasito de tarta de galleta' },
      { day: 'Martes', first: 'Ensalada de hojas verdes, manzana y frutos secos', second: 'Estofado de garbanzo con choco', dessert: 'Fruta fresca o mousse de yogur y frutos rojos' },
      { day: 'Miércoles', first: 'Salmorejo con guarnición clásica', second: 'Cabecero de lomo a la sal con boniato asado', dessert: 'Fruta fresca o tarta tres leches' },
      { day: 'Jueves', first: 'Bruschetta de cherry asado, mozzarella y albahaca', second: 'Albóndigas en salsa de amontillado', dessert: 'Fruta fresca o pan perdido de croissant y caramelo' },
      { day: 'Viernes', first: 'Vermicelli con verduritas al wok', second: 'Pan bao de pulled pork y salsa barbacoa', dessert: 'Fruta fresca o compota de mango con yogur griego' },
    ],
  },
  {
    id: 'semana-2', label: 'Semana 2 · 14 al 18 de septiembre', start: '2026-09-14', end: '2026-09-18', price: '14 €',
    days: [
      { day: 'Lunes', first: 'Salmón en salsa de limón con ensalada de hinojo', second: 'Rigatoni al pomodoro y parmesano', dessert: 'Fruta fresca o dados de cheesecake' },
      { day: 'Martes', first: 'Estofado de garbanzo con choco', second: 'Quiche Lorraine de espinacas y queso de cabra', dessert: 'Fruta fresca o compota de manzana, chantilly y crumble' },
      { day: 'Miércoles', first: 'Cabecero de lomo a la sal con boniato asado', second: 'Brandada de bacalao', dessert: 'Fruta fresca o mousse de yogur y frutos rojos' },
      { day: 'Jueves', first: 'Albóndigas en salsa de amontillado', second: 'Dados de pollo al curry y arroz basmati', dessert: 'Fruta fresca o pop dot de pistacho' },
      { day: 'Viernes', first: 'Huevos estrellados con chistorra', second: 'Musaka griega', dessert: 'Fruta fresca o vasito de tarta de galleta' },
    ],
  },
  {
    id: 'semana-3', label: 'Semana 3 · 21 al 25 de septiembre', start: '2026-09-21', end: '2026-09-25', price: '14 €',
    days: [
      { day: 'Lunes', first: 'Ñoquis en salsa de tres quesos y nueces', second: 'Lasaña de carne y bechamel de queso', dessert: 'Fruta fresca o vasito de tiramisú' },
      { day: 'Martes', first: 'Patatas estofadas a la riojana', second: 'Pescado al horno con patatitas', dessert: 'Fruta fresca o pistacho y yogur griego' },
      { day: 'Miércoles', first: 'Poké bowl de verduras y salmón marinado', second: 'Jamoncitos de pollo en salsa con verdura asada', dessert: 'Fruta fresca o compota de manzana, chantilly y crumble' },
      { day: 'Jueves', first: 'Dúo de cogollos al estilo César', second: 'Brioche relleno de ensalada de atún y chips de tubérculo', dessert: 'Fruta fresca o lima curd' },
      { day: 'Viernes', first: 'Gratén de patata trufado', second: 'Fajita de pollo con cheddar', dessert: 'Fruta fresca o pop de pistacho' },
    ],
  },
]

export const reviews = [
  {
    author: 'Abraham Gómez',
    quote: 'Excelente lugar, excelente atención, excelente atmósfera. Todo buenísimo.',
    url: 'https://maps.app.goo.gl/1cBWxa9RUayQpnmt7',
  },
  {
    author: 'Marta Castillo',
    quote: 'Muy agradable desayunar en Canela y Miel.',
    url: 'https://maps.app.goo.gl/vEYdsWSvsbfwMwKt8',
  },
]
