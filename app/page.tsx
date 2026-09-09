import { ArrowDown, ArrowRight, MapPin } from 'lucide-react';

const focusAreas = [
  'Anxiety & chronic worry',
  'Panic',
  'Trauma recovery',
  'Professional burnout',
  'Perfectionism',
  'High internal pressure',
  'Chronic stress',
  'Sleep difficulties',
  'Relationship patterns',
  'Emotional regulation',
];

const services = [
  {
    number: '01',
    title: 'Anxiety & Panic Therapy',
    image: '/anxiety-therapy.png',
    alt: 'A woman taking a calm breath beside a sunlit window overlooking the coast',
    copy: 'When worry, physical tension, or the fear of something going wrong keeps you on edge, therapy can help you understand the pattern and build practical ways to feel steadier in daily life.',
  },
  {
    number: '02',
    title: 'Trauma Therapy',
    image: '/trauma-therapy.png',
    alt: 'Hands holding a smooth grounding stone at the Santa Monica shoreline',
    copy: 'For single-incident trauma or long-standing experiences, our work moves at a careful pace. We begin with safety and stabilization, then use approaches such as EMDR and body-oriented techniques when they fit.',
  },
  {
    number: '03',
    title: 'Burnout & Perfectionism',
    image: '/burnout-therapy.png',
    alt: 'A creative professional pausing to journal at a warm, uncluttered desk',
    copy: 'For professionals, entrepreneurs, and creatives who look capable on the outside but feel depleted within, therapy offers room to slow down, reconnect, and find more sustainable ways to live and work.',
  },
];

const faqs = [
  {
    question: 'Who do you work with?',
    answer:
      'I work with adults in California, including thoughtful, high-achieving professionals, entrepreneurs, and creatives who are navigating anxiety, panic, trauma, burnout, perfectionism, or chronic stress.',
  },
  {
    question: 'Do you offer in-person and online therapy?',
    answer:
      'Yes. In-person sessions are available from my private Santa Monica office, and secure telehealth sessions are available to clients located anywhere in California.',
  },
  {
    question: 'What is your approach to therapy?',
    answer:
      'My approach is warm, collaborative, and grounded. Sessions have enough structure to feel supportive while leaving space for reflection and depth. I may integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques based on your needs.',
  },
  {
    question: 'What can I expect from trauma work?',
    answer:
      'Trauma therapy is paced carefully. We prioritize safety, stabilization, and helping you feel more regulated in daily life before moving into deeper processing. You remain actively involved in deciding the pace and direction of our work.',
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="Maya Reynolds Psychology home">
      <span className="brand-name">Maya Reynolds</span>
      <span className="brand-subtitle">Psychology</span>
    </a>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="text-link" href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={16} strokeWidth={1.6} />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#approach">Approach</a>
          <a href="#services">Services</a>
          <a href="#office">Office</a>
          <a href="#faqs">FAQs</a>
        </nav>
        <a className="outline-button header-cta" href="#contact">Get started</a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#about">About</a><a href="#approach">Approach</a><a href="#services">Services</a>
            <a href="#office">Office</a><a href="#faqs">FAQs</a><a href="#contact">Get started</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image hero-image-left">
          <img src="/office-window.jpg" alt="Dr. Maya Reynolds' calm Santa Monica therapy office filled with natural light" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">In-person therapy in Santa Monica & telehealth across California</p>
          <h1 id="hero-title">Therapy for anxiety, trauma, and burnout in Santa Monica</h1>
          <p className="hero-intro">A grounded space for thoughtful, high-achieving adults to feel less on edge, reconnect with themselves, and move toward a more sustainable life.</p>
          <a className="primary-button" href="#services">Explore therapy options <ArrowRight aria-hidden="true" size={17} /></a>
        </div>
        <div className="hero-image hero-image-right">
          <img src="/maya-reynolds.png" alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica" />
        </div>
        <a className="scroll-cue" href="#about" aria-label="Continue to introduction"><ArrowDown aria-hidden="true" size={18} /></a>
      </section>

      <section className="intro-section" id="about" aria-labelledby="intro-title">
        <div className="section-shell intro-grid">
          <h2 id="intro-title">You can be capable and still feel like you are carrying too much.</h2>
          <div className="intro-lead">
            <p className="eyebrow">Support for the part of you that is tired of pushing through</p>
            <p>Many of the adults I work with appear composed and successful while privately managing constant worry, tension, difficulty sleeping, or the sense that they are always bracing for what comes next.</p>
          </div>
          <div className="intro-photo"><img src="/anxiety-therapy.png" alt="A reflective moment of calm near the Santa Monica coast" /></div>
          <p className="intro-closing">What you are experiencing has both emotional and physical layers. Together, we can understand the patterns beneath the symptoms, strengthen your ability to regulate, and make room for a steadier relationship with yourself.</p>
        </div>
      </section>

      <section className="who-section" aria-labelledby="who-title">
        <div className="section-shell">
          <div className="section-heading-row">
            <p className="eyebrow">Who I help</p>
            <h2 id="who-title">For adults who are functioning on the outside—and feeling overwhelmed within.</h2>
          </div>
          <div className="who-grid">
            <article><span>01</span><h3>Professionals</h3><p>Support for chronic stress, perfectionism, high internal pressure, and the exhaustion that comes from always needing to keep up.</p></article>
            <article><span>02</span><h3>Entrepreneurs & creatives</h3><p>A place to slow down, hear yourself more clearly, and reconnect with what matters after years of pushing through.</p></article>
            <article><span>03</span><h3>Adults healing from trauma</h3><p>Carefully paced support for experiences that continue to shape your relationships, confidence, body, or sense of safety.</p></article>
          </div>
        </div>
      </section>

      <section className="statement-band" aria-label="Therapy philosophy">
        <div className="section-shell"><p>Therapy can be practical and deeply reflective—helping you find relief now while building resilience that lasts.</p></div>
      </section>

      <section className="expertise-section" aria-labelledby="expertise-title">
        <div className="section-shell expertise-grid">
          <div>
            <p className="eyebrow">Areas of focus</p>
            <h2 id="expertise-title">Support that sees the whole pattern.</h2>
            <p className="section-copy">We will look beyond isolated symptoms to understand how thoughts, emotions, body responses, past experiences, and daily pressures work together.</p>
          </div>
          <div className="focus-list">
            {focusAreas.map((area, index) => <div key={area}><span>{String(index + 1).padStart(2, '0')}</span><p>{area}</p></div>)}
          </div>
        </div>
      </section>

      <section className="approach-section" id="approach" aria-labelledby="approach-title">
        <div className="section-shell">
          <div className="approach-top">
            <div><p className="eyebrow light">How we work</p><h2 id="approach-title">Warm, collaborative, and grounded.</h2></div>
            <p>Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. You are respected, understood, and actively involved in the process.</p>
          </div>
          <div className="approach-collage">
            <img className="approach-main-image" src="/maya-reynolds.png" alt="Dr. Maya Reynolds, PsyD" />
            <div className="approach-note">
              <p className="eyebrow light">Dr. Maya Reynolds, PsyD</p>
              <p>I am a licensed clinical psychologist offering therapy to adults in Santa Monica and across California. I combine practical tools with depth-oriented work and understand the realities of living and working in a fast-paced environment.</p>
              <TextLink href="#services">See how I can help</TextLink>
            </div>
            <img className="approach-secondary-image" src="/office-library.jpg" alt="A comfortable seating area in Dr. Reynolds' Santa Monica office" />
          </div>
          <div className="methods-row" aria-label="Therapeutic methods"><span>CBT</span><span>EMDR</span><span>Mindfulness</span><span>Body-oriented techniques</span></div>
        </div>
      </section>

      <section className="transition-section" aria-label="Therapy goal">
        <div className="transition-photo"><img src="/trauma-therapy.png" alt="A grounding stone held at the shoreline" /></div>
        <div className="transition-copy"><p className="eyebrow">Beyond symptom relief</p><p className="display-quote">Develop insight, resilience, and a stronger relationship with yourself over time.</p></div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="section-shell">
          <div className="services-heading"><p className="eyebrow">Therapy services in Santa Monica</p><h2 id="services-title">Care shaped around what you are carrying.</h2></div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-image"><img src={service.image} alt={service.alt} /><span>{service.number}</span></div>
                <h3>{service.title}</h3><p>{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="office-section" id="office" aria-labelledby="office-title">
        <div className="section-shell">
          <div className="office-heading">
            <div><p className="eyebrow">Our office</p><h2 id="office-title">A calm space to arrive as you are.</h2></div>
            <div><p>The Santa Monica office is quiet, private, and designed to feel grounding. Natural light, comfortable seating, and an uncluttered environment help create a softer landing for meaningful work.</p><p className="address"><MapPin aria-hidden="true" size={18} /> 123th Street 45 W, Santa Monica, CA 90401</p></div>
          </div>
          <div className="office-gallery">
            <figure className="office-large"><img src="/office-window.jpg" alt="Sunlit therapy office with a sofa and armchair" /><figcaption>Natural light and room to breathe</figcaption></figure>
            <figure className="office-small"><img src="/office-library.jpg" alt="Private therapy office with comfortable seating and a bookshelf" /><figcaption>Private, comfortable, and uncluttered</figcaption></figure>
          </div>
          <p className="office-note">Prefer to meet from home? Secure telehealth is available to adults located throughout California.</p>
        </div>
      </section>

      <section className="faq-section" id="faqs" aria-labelledby="faq-title">
        <div className="section-shell faq-grid">
          <div><p className="eyebrow">Common questions</p><h2 id="faq-title">A little clarity before we begin.</h2></div>
          <div className="faq-list">
            {faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-image"><img src="/burnout-therapy.png" alt="A quiet journaling moment near the California coast" /></div>
        <div className="contact-copy">
          <p className="eyebrow light">Take the next step</p><h2 id="contact-title">You do not have to keep pushing through alone.</h2>
          <p>A first conversation is a chance to share what has been weighing on you, ask questions, and see whether working together feels like the right fit.</p>
          <div className="contact-options"><a href="#office">In-person in Santa Monica <ArrowRight aria-hidden="true" size={16} /></a><a href="#faqs">Telehealth across California <ArrowRight aria-hidden="true" size={16} /></a></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div><BrandMark /><p>Thoughtful therapy for anxiety, trauma, and burnout—offered in Santa Monica and online across California.</p></div>
          <div><p className="footer-label">Navigate</p><a href="#about">About</a><a href="#approach">Approach</a><a href="#services">Services</a><a href="#office">Office</a><a href="#faqs">FAQs</a></div>
          <div><p className="footer-label">Visit</p><address>123th Street 45 W<br />Santa Monica, CA 90401</address><p>In-person & secure telehealth</p></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Maya Reynolds Psychology</span><span>Licensed Clinical Psychologist · PsyD</span></div>
      </footer>
    </main>
  );
}
