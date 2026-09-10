import Image from "next/image";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";

const focusAreas = [
  "Anxiety & chronic worry",
  "Panic",
  "Trauma recovery",
  "Professional burnout",
  "Perfectionism",
  "High internal pressure",
  "Chronic stress",
  "Sleep difficulties",
  "Relationship patterns",
  "Emotional regulation",
];

const people = [
  {
    number: "01",
    title: "Professionals",
    image: "/anxiety-therapy.png",
    alt: "A woman taking a calm breath beside a sunlit coastal window",
    copy: "Support for chronic stress, perfectionism, high internal pressure, and the exhaustion that comes from always needing to keep up.",
  },
  {
    number: "02",
    title: "Entrepreneurs & creatives",
    image: "/burnout-therapy.png",
    alt: "A creative professional pausing to journal at a warm, uncluttered desk",
    copy: "A place to slow down, hear yourself more clearly, and reconnect with what matters after years of pushing through.",
  },
  {
    number: "03",
    title: "Adults healing from trauma",
    image: "/trauma-therapy.png",
    alt: "Hands holding a smooth grounding stone at the Santa Monica shoreline",
    copy: "Carefully paced support for experiences that continue to shape your relationships, confidence, body, or sense of safety.",
  },
];

const services = [
  {
    number: "01",
    title: "Anxiety & Panic Therapy",
    copy: "When worry, physical tension, or the fear of something going wrong keeps you on edge, therapy can help you understand the pattern and build practical ways to feel steadier in daily life.",
  },
  {
    number: "02",
    title: "Trauma Therapy",
    copy: "For single-incident trauma or long-standing experiences, our work moves at a careful pace. We begin with safety and stabilization, then use EMDR and body-oriented techniques when they fit.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    copy: "For professionals, entrepreneurs, and creatives who look capable on the outside but feel depleted within, therapy offers room to reconnect and find more sustainable ways to live and work.",
  },
];

const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "I work with adults in California, including thoughtful, high-achieving professionals, entrepreneurs, and creatives navigating anxiety, panic, trauma, burnout, perfectionism, or chronic stress.",
  },
  {
    question: "Do you offer in-person and online therapy?",
    answer:
      "Yes. In-person sessions are available from my private Santa Monica office, and secure telehealth sessions are available to clients located anywhere in California.",
  },
  {
    question: "What is your approach to therapy?",
    answer:
      "My approach is warm, collaborative, and grounded. Sessions have enough structure to feel supportive while leaving space for reflection and depth. I may integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques based on your needs.",
  },
  {
    question: "What can I expect from trauma work?",
    answer:
      "Trauma therapy is paced carefully. We prioritize safety, stabilization, and helping you feel more regulated in daily life before moving into deeper processing. You remain actively involved in deciding the pace and direction of our work.",
  },
];

const displayHeading =
  "font-display font-normal leading-[0.98] tracking-[-0.04em]";
const eyebrow =
  "mb-6 text-[0.69rem] font-bold uppercase leading-6 tracking-[0.18em] text-ink-soft";
const shell = "mx-auto w-full max-w-[1440px] px-[var(--section-x)]";
const arrowLink =
  "group inline-flex w-fit items-center gap-3 border-b border-current pb-1 text-[0.71rem] font-bold uppercase tracking-[0.13em]";

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a
      className="inline-flex w-fit flex-col leading-none"
      href="#top"
      aria-label="Maya Reynolds Psychology home"
    >
      <span
        className={`font-display text-[clamp(1.55rem,2.2vw,2.25rem)] tracking-[-0.04em] ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        Maya Reynolds
      </span>
      <span className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.34em] text-coral">
        Psychology
      </span>
    </a>
  );
}

function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={`${arrowLink} ${className}`} href={href}>
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
        size={15}
        strokeWidth={1.7}
      />
    </a>
  );
}

function SectionImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      className={`object-cover ${className}`}
      src={src}
      alt={alt}
      fill
      priority={priority}
      loading={priority ? "eager" : undefined}
      sizes={sizes}
    />
  );
}

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <header className="relative z-30 border-b border-ink/15 bg-paper">
        <div className={`${shell} grid min-h-28 grid-cols-[1fr_auto] items-center gap-6 py-6 lg:grid-cols-[minmax(190px,1fr)_auto_minmax(190px,1fr)]`}>
          <BrandMark />
          <nav
            className="hidden items-center gap-[clamp(1.4rem,2.6vw,2.8rem)] lg:flex"
            aria-label="Primary navigation"
          >
            {[
              ["About", "#about"],
              ["Approach", "#approach"],
              ["Services", "#services"],
              ["Office", "#office"],
              ["FAQs", "#faqs"],
            ].map(([label, href]) => (
              <a
                className="border-b border-transparent py-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] transition-colors hover:border-coral"
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            className="hidden min-h-12 items-center justify-center justify-self-end rounded-full border border-ink px-6 text-[0.68rem] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-ocean hover:text-cream lg:inline-flex"
            href="#contact"
          >
            Get started
          </a>

          <details className="relative justify-self-end lg:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-ink px-5 py-3 text-[0.66rem] font-bold uppercase tracking-[0.13em]">
              Menu
            </summary>
            <nav
              className="absolute right-0 top-[calc(100%+0.75rem)] grid w-[min(78vw,18rem)] border border-ink/15 bg-cream p-4 shadow-2xl"
              aria-label="Mobile navigation"
            >
              {[
                ["About", "#about"],
                ["Approach", "#approach"],
                ["Services", "#services"],
                ["Office", "#office"],
                ["FAQs", "#faqs"],
                ["Get started", "#contact"],
              ].map(([label, href]) => (
                <a
                  className="border-b border-ink/15 px-2 py-3 text-sm last:border-0"
                  href={href}
                  key={label}
                >
                  {label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <section
        className="relative flex flex-col bg-paper md:grid md:min-h-[43rem] md:grid-cols-[minmax(15rem,.75fr)_minmax(27rem,1.25fr)] xl:grid-cols-[minmax(16rem,.82fr)_minmax(32rem,1.35fr)_minmax(10rem,.53fr)]"
        aria-labelledby="hero-title"
      >
        <div className="relative order-2 ml-auto h-[27rem] w-[calc(100%-1.25rem)] overflow-hidden md:order-none md:ml-0 md:h-[calc(100%-3rem)] md:w-full md:self-end">
          <SectionImage
            src="/office-window.jpg"
            alt="Dr. Maya Reynolds' calm Santa Monica therapy office filled with natural light"
            sizes="(max-width: 767px) 95vw, (max-width: 1279px) 38vw, 28vw"
            priority
            className="object-[58%_center]"
          />
        </div>

        <div className="order-1 flex flex-col items-start justify-center px-[var(--section-x)] py-16 md:order-none md:px-[clamp(2rem,5vw,5rem)] md:py-24">
          <p className={eyebrow}>
            In-person therapy in Santa Monica & telehealth across California
          </p>
          <h1
            id="hero-title"
            className={`${displayHeading} mb-7 max-w-[800px] text-[clamp(3.55rem,7vw,6.8rem)]`}
          >
            Therapy for anxiety, trauma, and burnout in Santa Monica
          </h1>
          <p className="mb-9 max-w-[650px] text-[clamp(1rem,1.3vw,1.15rem)] leading-8 text-ink-soft">
            A grounded space for thoughtful, high-achieving adults to feel less
            on edge, reconnect with themselves, and move toward a more
            sustainable life.
          </p>
          <a
            className="group inline-flex min-h-13 items-center gap-3 rounded-full bg-ocean px-7 py-3 text-[0.69rem] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-coral"
            href="#services"
          >
            Explore therapy options
            <ArrowRight
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
              size={16}
            />
          </a>
        </div>

        <div className="relative hidden h-[54%] self-end overflow-hidden xl:block">
          <SectionImage
            src="/maya-reynolds.png"
            alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica"
            sizes="18vw"
            priority
            className="object-[50%_18%]"
          />
        </div>

        <a
          className="absolute bottom-6 right-1/2 hidden size-12 place-items-center rounded-full border border-ink/20 bg-paper md:grid"
          href="#about"
          aria-label="Continue to introduction"
        >
          <ArrowDown aria-hidden="true" size={17} />
        </a>
      </section>

      <section
        className="bg-cream py-[var(--section-y)]"
        id="about"
        aria-labelledby="intro-title"
      >
        <div className={`${shell} grid items-start gap-12 md:grid-cols-[1.12fr_.88fr] md:gap-[clamp(3rem,7vw,8rem)]`}>
          <h2
            id="intro-title"
            className={`${displayHeading} max-w-[860px] text-[clamp(3rem,5.4vw,5.9rem)]`}
          >
            You can be capable and still feel like you are carrying too much.
          </h2>
          <div className="max-w-[540px] pt-3 text-[1.05rem] leading-8 text-ink-soft">
            <p className={eyebrow}>
              Support for the part of you that is tired of pushing through
            </p>
            <p>
              Many adults I work with appear composed and successful while
              privately managing constant worry, tension, difficulty sleeping,
              or the sense that they are always bracing for what comes next.
            </p>
          </div>
          <div className="relative h-[clamp(26rem,52vw,45rem)] overflow-hidden md:mt-10">
            <SectionImage
              src="/anxiety-therapy.png"
              alt="A reflective moment of calm near the Santa Monica coast"
              sizes="(max-width: 767px) 92vw, 52vw"
            />
          </div>
          <p className="self-end font-display text-[clamp(1.75rem,2.8vw,3rem)] leading-[1.22] tracking-[-0.025em] text-ink-soft md:mb-16">
            What you are experiencing has emotional and physical layers.
            Together, we can understand the patterns beneath the symptoms,
            strengthen your ability to regulate, and make room for a steadier
            relationship with yourself.
          </p>
        </div>
      </section>

      <section
        className="bg-mist py-[var(--section-y)]"
        aria-labelledby="who-title"
      >
        <div className={shell}>
          <div className="grid items-start gap-8 md:grid-cols-[.45fr_1.55fr]">
            <p className={eyebrow}>Who I help</p>
            <h2
              id="who-title"
              className={`${displayHeading} mb-12 max-w-[980px] text-[clamp(3rem,5.4vw,5.8rem)] md:mb-20`}
            >
              For adults who are functioning on the outside—and feeling
              overwhelmed within.
            </h2>
          </div>

          <div className="grid border-t border-ink/20 md:grid-cols-3">
            {people.map((person) => (
              <article
                className="border-b border-ink/20 py-8 md:border-b-0 md:border-r md:px-[clamp(1.5rem,3vw,3rem)] md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                key={person.title}
              >
                <div className="relative mb-8 aspect-[4/5] overflow-hidden">
                  <SectionImage
                    src={person.image}
                    alt={person.alt}
                    sizes="(max-width: 767px) 92vw, 32vw"
                    className="transition-transform duration-500 hover:scale-[1.025]"
                  />
                  <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-full bg-cream text-[0.69rem] font-bold">
                    {person.number}
                  </span>
                </div>
                <h3 className="mb-4 font-display text-[clamp(2.1rem,3.1vw,3.2rem)] leading-none tracking-[-0.035em]">
                  {person.title}
                </h3>
                <p className="max-w-[400px] leading-7 text-ink-soft">
                  {person.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-coral px-[var(--section-x)] py-[clamp(6rem,11vw,11rem)] text-center text-cream"
        aria-label="Therapy philosophy"
      >
        <p className="mx-auto max-w-[1180px] font-display text-[clamp(3rem,5.5vw,6rem)] leading-[1.06] tracking-[-0.04em]">
          Therapy can be practical and deeply reflective—helping you find
          relief now while building resilience that lasts.
        </p>
      </section>

      <section
        className="bg-paper py-[var(--section-y)]"
        aria-labelledby="expertise-title"
      >
        <div className={`${shell} grid gap-16 md:grid-cols-[.82fr_1.18fr] md:gap-[clamp(4rem,9vw,10rem)]`}>
          <div className="self-start md:sticky md:top-8">
            <p className={eyebrow}>Areas of focus</p>
            <h2
              id="expertise-title"
              className={`${displayHeading} mb-8 max-w-[560px] text-[clamp(3.2rem,5.2vw,5.6rem)]`}
            >
              Support that sees the whole pattern.
            </h2>
            <p className="max-w-[480px] leading-8 text-ink-soft">
              We will look beyond isolated symptoms to understand how thoughts,
              emotions, body responses, past experiences, and daily pressures
              work together.
            </p>
          </div>

          <div className="border-t border-ink/20">
            {focusAreas.map((area, index) => (
              <div
                className="grid min-h-20 grid-cols-[3.5rem_1fr] items-center border-b border-ink/20 md:min-h-24 md:grid-cols-[4.5rem_1fr]"
                key={area}
              >
                <span className="text-[0.69rem] font-bold text-coral">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-[clamp(1.55rem,2.5vw,2.6rem)] leading-none tracking-[-0.025em]">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-ocean py-[var(--section-y)] text-cream"
        id="approach"
        aria-labelledby="approach-title"
      >
        <div className={shell}>
          <div className="grid items-end gap-10 md:grid-cols-[1.15fr_.85fr] md:gap-[clamp(3rem,8vw,9rem)]">
            <div>
              <p className={`${eyebrow} !text-mist`}>How we work</p>
              <h2
                id="approach-title"
                className={`${displayHeading} max-w-[800px] text-[clamp(3.4rem,5.8vw,6.3rem)]`}
              >
                Warm, collaborative, and grounded.
              </h2>
            </div>
            <p className="max-w-[540px] leading-8 text-mist">
              Sessions are structured enough to feel supportive while still
              leaving space for reflection and depth. You are respected,
              understood, and actively involved in the process.
            </p>
          </div>

          <div className="mt-16 grid items-end md:mt-28 md:grid-cols-[.72fr_1fr] xl:grid-cols-[.68fr_1fr_.72fr]">
            <div className="relative h-[31rem] w-[82%] overflow-hidden md:h-[35rem] md:w-full">
              <SectionImage
                src="/maya-reynolds.png"
                alt="Dr. Maya Reynolds, PsyD"
                sizes="(max-width: 767px) 75vw, 30vw"
                className="object-[50%_18%]"
              />
            </div>
            <div className="relative z-10 -mt-14 ml-auto w-[94%] bg-coral p-[clamp(2rem,5vw,5rem)] text-cream md:mt-0 md:w-full">
              <p className={`${eyebrow} !text-cream/80`}>
                Dr. Maya Reynolds, PsyD
              </p>
              <p className="mb-8 font-display text-[clamp(1.55rem,2.35vw,2.45rem)] leading-[1.25] tracking-[-0.02em]">
                I am a licensed clinical psychologist offering therapy to
                adults in Santa Monica and across California. I combine
                practical tools with depth-oriented work and understand the
                realities of living and working in a fast-paced environment.
              </p>
              <ArrowLink href="#services">See how I can help</ArrowLink>
            </div>
            <div className="relative hidden h-[27rem] overflow-hidden xl:block">
              <SectionImage
                src="/office-library.jpg"
                alt="A comfortable seating area in Dr. Reynolds' Santa Monica office"
                sizes="24vw"
              />
            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-4 border-t border-white/25 pt-8 font-display text-[clamp(1.25rem,2vw,1.8rem)] text-mist">
            <span>CBT</span>
            <span>EMDR</span>
            <span>Mindfulness</span>
            <span>Body-oriented techniques</span>
          </div>
        </div>
      </section>

      <section
        className="grid bg-cream md:min-h-[46rem] md:grid-cols-[.9fr_1.1fr]"
        aria-label="Therapy goal"
      >
        <div className="relative h-[28rem] overflow-hidden md:h-auto">
          <SectionImage
            src="/trauma-therapy.png"
            alt="A grounding stone held at the shoreline"
            sizes="(max-width: 767px) 100vw, 45vw"
          />
        </div>
        <div className="flex flex-col justify-center px-[var(--section-x)] py-[var(--section-y)]">
          <p className={eyebrow}>Beyond symptom relief</p>
          <p className="max-w-[780px] font-display text-[clamp(3.1rem,5.3vw,5.8rem)] leading-[1.06] tracking-[-0.04em]">
            Develop insight, resilience, and a stronger relationship with
            yourself over time.
          </p>
        </div>
      </section>

      <section
        className="bg-mist py-[var(--section-y)]"
        id="services"
        aria-labelledby="services-title"
      >
        <div className={shell}>
          <div className="grid gap-8 md:grid-cols-[.5fr_1.5fr]">
            <p className={eyebrow}>Therapy services in Santa Monica</p>
            <h2
              id="services-title"
              className={`${displayHeading} mb-12 max-w-[900px] text-[clamp(3.2rem,5.3vw,5.8rem)] md:mb-20`}
            >
              Care shaped around what you are carrying.
            </h2>
          </div>

          <div className="border-t border-ink/20">
            {services.map((service) => (
              <article
                className="grid gap-5 border-b border-ink/20 py-9 md:grid-cols-[5rem_.8fr_1.2fr] md:items-start md:gap-10 md:py-12"
                key={service.title}
              >
                <span className="text-[0.7rem] font-bold text-coral">
                  {service.number}
                </span>
                <h3 className="font-display text-[clamp(2.15rem,3.5vw,3.7rem)] leading-none tracking-[-0.035em]">
                  {service.title}
                </h3>
                <p className="max-w-[620px] leading-8 text-ink-soft">
                  {service.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-cream py-[var(--section-y)]"
        id="office"
        aria-labelledby="office-title"
      >
        <div className={shell}>
          <div className="mb-16 grid items-end gap-10 md:mb-20 md:grid-cols-[1.15fr_.85fr] md:gap-[clamp(3rem,8vw,9rem)]">
            <div>
              <p className={eyebrow}>Our office</p>
              <h2
                id="office-title"
                className={`${displayHeading} max-w-[800px] text-[clamp(3.4rem,5.6vw,6.1rem)]`}
              >
                A calm space to arrive as you are.
              </h2>
            </div>
            <div className="text-ink-soft">
              <p className="leading-8">
                The Santa Monica office is quiet, private, and designed to feel
                grounding. Natural light, comfortable seating, and an
                uncluttered environment create a softer landing for meaningful
                work.
              </p>
              <p className="mt-6 flex items-start gap-3 text-sm font-bold text-ink">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-coral"
                  size={18}
                />
                123th Street 45 W, Santa Monica, CA 90401
              </p>
            </div>
          </div>

          <div className="grid items-end gap-6 md:grid-cols-[1.35fr_.65fr] md:gap-[clamp(1.5rem,3vw,3rem)]">
            <figure>
              <div className="relative h-[clamp(27rem,52vw,45rem)] overflow-hidden">
                <SectionImage
                  src="/office-window.jpg"
                  alt="Sunlit therapy office with a sofa and armchair"
                  sizes="(max-width: 767px) 92vw, 65vw"
                />
              </div>
              <figcaption className="pt-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
                Natural light and room to breathe
              </figcaption>
            </figure>
            <figure className="ml-auto w-[84%] md:w-full">
              <div className="relative h-[clamp(24rem,36vw,31rem)] overflow-hidden">
                <SectionImage
                  src="/office-library.jpg"
                  alt="Private therapy office with comfortable seating and a bookshelf"
                  sizes="(max-width: 767px) 78vw, 30vw"
                />
              </div>
              <figcaption className="pt-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
                Private, comfortable, and uncluttered
              </figcaption>
            </figure>
          </div>

          <p className="ml-auto mt-14 max-w-[760px] border-l-2 border-coral pl-7 font-display text-[clamp(1.7rem,2.6vw,2.8rem)] leading-[1.22] tracking-[-0.025em]">
            Prefer to meet from home? Secure telehealth is available to adults
            located throughout California.
          </p>
        </div>
      </section>

      <section
        className="bg-paper py-[var(--section-y)]"
        id="faqs"
        aria-labelledby="faq-title"
      >
        <div className={`${shell} grid gap-14 md:grid-cols-[.78fr_1.22fr] md:gap-[clamp(4rem,8vw,9rem)]`}>
          <div>
            <p className={eyebrow}>Common questions</p>
            <h2
              id="faq-title"
              className={`${displayHeading} max-w-[600px] text-[clamp(3.2rem,5.3vw,5.8rem)]`}
            >
              A little clarity before we begin.
            </h2>
          </div>
          <div className="border-t border-ink/20">
            {faqs.map((faq, index) => (
              <details
                className="group border-b border-ink/20"
                key={faq.question}
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 font-display text-[clamp(1.55rem,2.4vw,2.4rem)] leading-tight">
                  <span>{faq.question}</span>
                  <span
                    className="font-body text-2xl font-light text-coral transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[700px] pb-8 leading-8 text-ink-soft">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="grid bg-ocean text-cream md:min-h-[45rem] md:grid-cols-[.72fr_1.05fr_.53fr]"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="relative h-[27rem] overflow-hidden md:h-full">
          <SectionImage
            src="/burnout-therapy.png"
            alt="A quiet journaling moment near the California coast"
            sizes="(max-width: 767px) 100vw, 32vw"
          />
        </div>
        <div className="flex flex-col justify-center px-[var(--section-x)] py-[var(--section-y)]">
          <p className={`${eyebrow} !text-mist`}>Take the next step</p>
          <h2
            id="contact-title"
            className={`${displayHeading} mb-8 max-w-[780px] text-[clamp(3.3rem,5.3vw,5.8rem)]`}
          >
            You do not have to keep pushing through alone.
          </h2>
          <p className="max-w-[610px] leading-8 text-mist">
            A first conversation is a chance to share what has been weighing on
            you, ask questions, and see whether working together feels like the
            right fit.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-5">
            <ArrowLink href="#office" className="text-coral-soft">
              In-person in Santa Monica
            </ArrowLink>
            <ArrowLink href="#faqs" className="text-coral-soft">
              Telehealth across California
            </ArrowLink>
          </div>
        </div>
        <div className="relative hidden h-[56%] self-end overflow-hidden md:block">
          <SectionImage
            src="/office-library.jpg"
            alt="Comfortable seating in Dr. Reynolds' private Santa Monica office"
            sizes="22vw"
          />
        </div>
      </section>

      <footer className="bg-paper px-[var(--section-x)] pb-8 pt-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_.65fr_.85fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandMark />
            <p className="mt-8 max-w-[460px] leading-8 text-ink-soft">
              Thoughtful therapy for anxiety, trauma, and burnout—offered in
              Santa Monica and online across California.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 text-ink-soft">
            <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink">
              Navigate
            </p>
            <a href="#about">About</a>
            <a href="#approach">Approach</a>
            <a href="#services">Services</a>
            <a href="#office">Office</a>
            <a href="#faqs">FAQs</a>
          </div>
          <div className="flex flex-col items-start gap-2 text-ink-soft">
            <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink">
              Visit
            </p>
            <address className="mb-2 not-italic">
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </address>
            <p>In-person & secure telehealth</p>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-[1440px] flex-col gap-2 border-t border-ink/20 pt-6 text-[0.66rem] uppercase tracking-[0.1em] text-ink-soft sm:flex-row sm:justify-between">
          <span>© 2026 Maya Reynolds Psychology</span>
          <span>Licensed Clinical Psychologist · PsyD</span>
        </div>
      </footer>
    </main>
  );
}
