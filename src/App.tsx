import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Coffee, Heart, MapPin, Menu as MenuIcon, Clock3, Phone, Wheat, X } from 'lucide-react'

type BakeryItem = { id: string; name: string; price: number; currency: 'MMK'; image: string; alt: string; description: string }

const bakeryItems: BakeryItem[] = [
  { id: 'hokkaido-bun', name: 'Hokkaido Bun', price: 4500, currency: 'MMK', image: 'https://images.unsplash.com/photo-1754099596370-1197af218207?auto=format&fit=crop&w=900&q=85', alt: 'Fresh golden milk bread rolls arranged in a basket', description: 'Freshly baked and soft.' },
  { id: 'korea-bun', name: 'Korea Bun', price: 5000, currency: 'MMK', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85', alt: 'Fresh golden bakery buns arranged on a tray', description: 'Freshly baked and soft.' },
  { id: 'red-bean-bun', name: 'Red Bean Bun', price: 4000, currency: 'MMK', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85', alt: 'Warm, freshly baked sweet bun', description: 'Freshly baked and soft.' },
]

// Add CafeHub coffee products here when the official coffee menu is available.
const coffeeItems: { id: string; name: string; price: number; currency: 'MMK' }[] = []
const formatPrice = (price: number) => `${price.toLocaleString('en-US')} Ks`

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Home', '#home'], ['Bakery', '#bakery'], ['Coffee', '#coffee'], ['Menu', '#menu'], ['Visit Us', '#visit']]
  return <header className="header"><div className="nav-wrap">
    <a className="brand" href="#home" aria-label="CafeHub home"><span className="brand-name">Cafe<span>Hub</span><i>.</i></span><span className="brand-tag">BAKERY · COFFEE · GOOD MOMENTS</span></a>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">{links.map(([name, href]) => <a key={name} href={href} onClick={() => setOpen(false)}>{name}</a>)}</nav>
    <a className="nav-cta" href="#menu">View Menu <ArrowUpRight size={15}/></a>
    <button className="mobile-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <MenuIcon/>}</button>
  </div></header>
}

function Hero() {
  return <section className="hero" id="home"><div className="hero-copy">
    <div className="eyebrow"><span className="eyebrow-line"/> YOUR NEIGHBORHOOD BAKERY CAFÉ</div>
    <h1>Freshly baked.<br/><em>Made with love.</em></h1>
    <p className="hero-lede">Fresh buns, comforting coffee, and simple moments at CafeHub.</p>
    <div className="hero-actions"><a className="button button-dark" href="#bakery">Explore our menu <ArrowRight size={17}/></a><a className="text-link" href="#visit">Visit CafeHub <ArrowDown size={15}/></a></div>
    <div className="hero-note"><span className="note-icon"><Wheat size={18}/></span><span><b>Freshly baked daily</b><small>A little warmth in every bite</small></span><span className="note-spark">✳</span></div>
  </div><div className="hero-visual"><img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1500&q=90" alt="Fresh golden bread in a warm neighborhood bakery" fetchPriority="high"/><div className="image-stamp"><span>BAKED</span><span>WITH</span><Heart size={19} fill="currentColor"/><span>CARE</span></div><div className="hero-photo-caption"><span>GOOD THINGS ARE</span><span>MADE FROM SCRATCH.</span></div></div><a href="#bakery" className="scroll-cue" aria-label="Scroll to bakery"><span>SCROLL A LITTLE</span><ArrowDown size={15}/></a></section>
}

function SectionLabel({ children }: { children: React.ReactNode }) { return <div className="section-label"><span/>{children}<span/></div> }

function FeaturedBakery() {
  return <section className="bakery section-pad" id="bakery"><div className="section-heading"><div><SectionLabel>THE GOOD STUFF</SectionLabel><h2>Fresh from<br/><em>the oven.</em></h2></div><div className="section-aside"><p>Our little selection of freshly baked favorites. Made to brighten an ordinary day.</p><a className="under-link" href="#menu">See the menu <ArrowRight size={16}/></a></div></div>
    <div className="product-grid">{bakeryItems.map((item, index) => <article className="product-card" key={item.id}><div className="product-image"><img src={item.image} alt={item.alt} loading={index === 0 ? 'eager' : 'lazy'}/><span className="fresh-tag"><span/> FRESH TODAY</span><span className="product-number">0{index + 1}</span></div><div className="product-info"><div><h3>{item.name}</h3><p>{item.description}</p></div><span className="price">{formatPrice(item.price)}</span></div></article>)}</div>
    <div className="bakery-foot"><span>BAKED IN SMALL BATCHES, SHARED WITH LOVE</span><Wheat size={18}/></div>
  </section>
}

function CoffeeSection() {
  return <section className="coffee-section" id="coffee"><div className="coffee-photo"><img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85" alt="A warm cup of coffee in a cozy café" loading="lazy"/><span className="photo-caption">SLOW MORNINGS, WARM CUPS</span></div><div className="coffee-copy"><SectionLabel>A MOMENT TO YOURSELF</SectionLabel><h2>Coffee<br/>&amp; <em>comfort.</em></h2><p className="coffee-lede">Good coffee deserves good company.</p>{coffeeItems.length ? <div>{coffeeItems.map(item => <p key={item.id}>{item.name} · {formatPrice(item.price)}</p>)}</div> : <div className="coming-soon"><Coffee size={18}/><span><b>Coffee menu coming soon.</b><small>Something lovely is brewing.</small></span></div>}<span className="coffee-doodle">☕</span></div></section>
}

function MenuSection() {
  return <section className="menu-section section-pad" id="menu"><div className="menu-title"><SectionLabel>SHORT &amp; SWEET</SectionLabel><h2>Our <em>menu.</em></h2><p>Good things, baked fresh.</p></div><div className="menu-list">{bakeryItems.map((item, index) => <div className="menu-row" key={item.id}><span className="menu-index">0{index + 1}</span><span className="menu-name">{item.name}</span><span className="menu-dots"/><span className="menu-price">{formatPrice(item.price)}</span></div>)}<div className="menu-note"><Wheat size={15}/> Freshly baked daily at CafeHub</div></div><div className="menu-mark">C<span>H</span></div></section>
}

function AboutCafe() {
  return <section className="about-section"><div className="about-image"><img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85" alt="Sunlit, welcoming neighborhood café interior" loading="lazy"/><span className="about-image-label">A PLACE TO PAUSE</span></div><div className="about-copy"><SectionLabel>A LITTLE ABOUT US</SectionLabel><h2>A little place<br/>for <em>good moments.</em></h2><p>At CafeHub, we believe that simple things can make a day better — freshly baked bread, a good cup of coffee, and a little time to slow down.</p><div className="about-signoff"><span>Come as you are.</span><Heart size={17}/></div></div></section>
}

function VisitUs() {
  return <section className="visit-section" id="visit"><div className="visit-top"><SectionLabel>WE SAVED YOU A SEAT</SectionLabel><h2>Come visit<br/><em>CafeHub.</em></h2><p>Freshly baked treats are waiting for you.</p></div><div className="visit-bottom"><div className="visit-details"><div className="visit-detail"><MapPin/><span><small>FIND OUR LITTLE CORNER</small><b>[CafeHub Address]</b></span></div><div className="visit-detail"><Clock3/><span><small>WHEN WE'RE OPEN</small><b>[Opening Hours]</b></span></div><div className="visit-detail"><Phone/><span><small>SAY HELLO</small><b>[Phone Number]</b></span></div></div><div className="visit-actions"><a className="button button-cream" href="#visit" aria-label="Get directions — address to be added">Get directions <ArrowUpRight size={16}/></a><a className="button button-outline" href="#visit" aria-label="Call CafeHub — phone number to be added">Call CafeHub <Phone size={15}/></a></div></div></section>
}

function Footer() {
  return <footer className="footer"><div className="footer-main"><a className="brand footer-brand" href="#home"><span className="brand-name">Cafe<span>Hub</span><i>.</i></span><span className="brand-tag">BAKERY · COFFEE · GOOD MOMENTS</span></a><span className="footer-note">A little warmth, baked fresh.</span><div className="social-links"><a href="#visit" aria-label="CafeHub Facebook — link to be added">Facebook <ArrowUpRight size={13}/></a><a href="#visit" aria-label="CafeHub Instagram — link to be added">Instagram <ArrowUpRight size={13}/></a></div></div><div className="footer-bottom"><span>© 2026 CafeHub. All rights reserved.</span><a href="#home">BACK TO TOP ↑</a><span>MADE WITH A LITTLE EXTRA LOVE <Heart size={12}/></span></div></footer>
}

export default function App() {
  return <><Header/><main><Hero/><FeaturedBakery/><CoffeeSection/><MenuSection/><AboutCafe/><VisitUs/></main><Footer/></>
}
