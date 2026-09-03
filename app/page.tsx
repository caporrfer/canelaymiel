'use client'

import { useState } from 'react'

const photos = [
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85', alt: 'Café servido sobre una mesa de madera' },
  { src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85', alt: 'Pan recién horneado' },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1000&q=85', alt: 'Desayuno servido en una mesa' },
]

function Icon({ name }: { name: 'arrow' | 'pin' | 'clock' | 'instagram' | 'menu' | 'x' }) {
  const paths = { arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>, pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>, clock: <><circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.5 2"/></>, instagram: <><rect width="16" height="16" x="4" y="4" rx="4"/><circle cx="12" cy="12" r="3.5"/><path d="M17.5 6.5h.01"/></>, menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>, x: <><path d="m6 6 12 12M18 6 6 18"/></> }
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

export default function Home() {
  const [open, setOpen] = useState(false)
  const [activePhoto, setActivePhoto] = useState(0)
  const close = () => setOpen(false)
  return <main>
    <header className="nav"><a className="brand" href="#inicio" onClick={close}><span>Canela <i>y</i> Miel</span><small>LA MONACILLA</small></a><nav className={open ? 'navlinks open' : 'navlinks'}><a href="#carta" onClick={close}>La carta</a><a href="#local" onClick={close}>El local</a><a href="#resenas" onClick={close}>Reseñas</a><a href="#visitanos" onClick={close}>Visítanos</a></nav><button className="menubtn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{<Icon name={open ? 'x' : 'menu'} />}</button></header>

    <section className="hero" id="inicio"><div className="heroimage"/><div className="herooverlay"/><div className="hero-content"><p className="eyebrow light">DESAYUNOS · CAFÉ · MOMENTOS</p><h1>Empieza el día<br/><em>con buen sabor.</em></h1><p className="hero-copy">Un rincón acogedor en La Monacilla para desayunar sin prisa, compartir y repetir.</p><div className="actions"><a className="button cream" href="#carta">Ver la carta <Icon name="arrow" /></a><a className="textlink light" href="#visitanos">Cómo llegar <Icon name="arrow" /></a></div></div><div className="rating"><strong>4,7</strong><span>★ ★ ★ ★ ★<small>en Google</small></span></div></section>

    <section className="intro"><div><p className="eyebrow">LA MAÑANA, A TU MANERA</p><h2>Lo sencillo,<br/><em>bien hecho.</em></h2></div><div className="introcopy"><p>Hay desayunos que se disfrutan despacio. Un café recién hecho, algo dulce para compartir y ese lugar al que siempre apetece volver.</p><a className="textlink dark" href="#local">Conoce el local <Icon name="arrow" /></a></div></section>

    <section className="menu-section" id="carta"><div className="section-head"><div><p className="eyebrow">PARA EMPEZAR BIEN</p><h2>De nuestra <em>carta</em></h2></div><span className="section-number">01 / 03</span></div><div className="dish-grid"><article className="dish featured"><div className="dish-image eggs"/><div className="dish-body"><span className="dish-tag">MUY PEDIDOS</span><h3>Huevos Benedictinos</h3><p>Uno de los favoritos de quienes nos visitan.</p></div></article><article className="dish"><div className="dish-image turkish"/><div className="dish-body"><span className="dish-tag">PARA COMPARTIR</span><h3>Huevos turcos</h3><p>Una forma diferente de empezar la mañana.</p></div></article><article className="dish"><div className="dish-image churros"/><div className="dish-body"><span className="dish-tag">EL CLÁSICO</span><h3>Churros & chocolate</h3><p>La excusa perfecta para alargar el desayuno.</p></div></article></div><div className="center"><a className="button darkbutton" href="#contacto">Consultar la carta <Icon name="arrow" /></a></div></section>

    <section className="local" id="local"><div className="local-image"/><div className="local-copy"><p className="eyebrow">UN SITIO PARA QUEDARSE</p><h2>Qué bien se está<br/><em>aquí.</em></h2><p>Un ambiente agradable, atención cercana y platos que llegan a la mesa con ganas de ser disfrutados. Ven a desayunar, a merendar o simplemente a hacer una pausa.</p><a className="textlink dark" href="https://www.instagram.com/canelaymiel.lamonacilla/" target="_blank" rel="noreferrer">Ver Instagram <Icon name="instagram" /></a></div></section>

    <section className="gallery"><div className="gallery-top"><p className="eyebrow">DESDE DENTRO</p><h2>Un vistazo<br/><em>a Canela y Miel.</em></h2><div className="gallery-controls"><button aria-label="Foto anterior" onClick={() => setActivePhoto((activePhoto + photos.length - 1) % photos.length)}>←</button><span>0{activePhoto + 1} <i>/</i> 0{photos.length}</span><button aria-label="Foto siguiente" onClick={() => setActivePhoto((activePhoto + 1) % photos.length)}>→</button></div></div><div className="gallery-photo" style={{backgroundImage:`url(${photos[activePhoto].src})`}} role="img" aria-label={photos[activePhoto].alt}/></section>

    <section className="reviews" id="resenas"><div className="reviews-score"><p className="eyebrow">LO QUE DICEN</p><strong>4,7</strong><div className="stars">★★★★★</div><p>en Google<br/><small>Las reseñas no se verifican</small></p></div><div className="quote"><span>“</span><blockquote>Excelente lugar, excelente atención, excelente atmósfera. Todo buenísimo.</blockquote><cite>— Reseña de Google</cite><a className="textlink dark" href="#visitanos">Ven a conocernos <Icon name="arrow" /></a></div></section>

    <section className="visit" id="visitanos"><div className="visit-copy"><p className="eyebrow">TE ESPERAMOS</p><h2>Ven a vernos<br/><em>en La Monacilla.</em></h2><p className="pending">Encuéntranos en la urbanización La Monacilla, muy cerca de Huelva.</p><div className="details"><div><Icon name="pin"/><span>Av. de los Pirineos, s/n<br/><small>La Monacilla · 21122 Aljaraque, Huelva</small></span></div><div><Icon name="clock"/><span>Abierto desde las 8:00<br/><small>Consulta el horario del día</small></span></div></div><div className="actions"><a className="button darkbutton" href="https://www.google.com/maps/search/?api=1&query=Canela%20y%20Miel%20La%20Monacilla%2C%20Av.%20de%20los%20Pirineos%2C%20Aljaraque%2C%20Huelva" target="_blank" rel="noreferrer">Cómo llegar <Icon name="arrow" /></a><a className="textlink dark" href="https://www.instagram.com/canelaymiel.lamonacilla/" target="_blank" rel="noreferrer">Instagram <Icon name="instagram" /></a></div></div><div className="map-frame"><iframe title="Ubicación de Canela y Miel La Monacilla" src="https://www.google.com/maps?q=Canela%20y%20Miel%20La%20Monacilla%2C%20Av.%20de%20los%20Pirineos%2C%20Aljaraque%2C%20Huelva&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>

    <footer id="contacto"><div className="footer-brand"><a className="brand" href="#inicio"><span>Canela <i>y</i> Miel</span><small>LA MONACILLA</small></a><p>Desayunos para disfrutar<br/>sin prisa.</p></div><div className="footer-links"><a href="#carta">La carta</a><a href="#local">El local</a><a href="#visitanos">Ubicación</a><a href="https://www.instagram.com/canelaymiel.lamonacilla/" target="_blank" rel="noreferrer">Instagram</a></div><div className="legal"><span>© 2025 Canela y Miel La Monacilla</span><span>Aviso legal · Privacidad</span></div></footer>
  </main>
}
