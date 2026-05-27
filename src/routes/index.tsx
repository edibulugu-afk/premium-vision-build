import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Zap,
  Wrench,
  Award,
  CheckCircle2,
  Star,
  Sparkles,
  Building2,
  Home,
  Layers,
  DoorOpen,
  MoveHorizontal,
  Boxes,
  Hammer,
  ClipboardCheck,
  Ruler,
  PencilRuler,
  Factory,
  Truck,
  Wrench as Install,
  ShieldCheck,
  ChevronDown,
  Send,
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Counter } from "@/components/Counter";
import heroImg from "@/assets/hero.jpg";
import modularImg from "@/assets/modular.jpg";
import pvcWindow from "@/assets/pvc-window.jpg";
import aluWindow from "@/assets/alu-window.jpg";
import pvcDoor from "@/assets/pvc-door.jpg";
import aluDoor from "@/assets/alu-door.jpg";
import sliding from "@/assets/sliding.jpg";
import curtain from "@/assets/curtain.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const services = [
  { icon: Home, title: "Ferestre PVC", img: pvcWindow, desc: "Sisteme cu 5–7 camere de izolare, geam tripan, eficiență energetică superioară.", benefits: ["Izolație termică", "Insonorizare", "Durabilitate 30+ ani"] },
  { icon: Building2, title: "Ferestre Aluminiu", img: aluWindow, desc: "Profile cu rupere de punte termică pentru fațade moderne și deschideri mari.", benefits: ["Rezistență superioară", "Design minimalist", "Profile slim"] },
  { icon: DoorOpen, title: "Uși PVC", img: pvcDoor, desc: "Uși de intrare PVC cu armătură de oțel și sisteme de siguranță multipoint.", benefits: ["Sisteme antiefracție", "Izolație premium", "Garnituri triple"] },
  { icon: DoorOpen, title: "Uși Aluminiu", img: aluDoor, desc: "Uși de intrare din Aluminiu, panouri rezistente, design contemporan.", benefits: ["Aspect arhitectural", "Rezistență mecanică", "Personalizare"] },
  { icon: MoveHorizontal, title: "Sisteme Glisante", img: sliding, desc: "Glisante panoramice tip lift & slide pentru terase și deschideri mari.", benefits: ["Praguri minime", "Vedere panoramică", "Mecanism premium"] },
  { icon: Layers, title: "Pereți Cortină", img: curtain, desc: "Fațade vitrate pentru clădiri comerciale și proiecte arhitecturale ambițioase.", benefits: ["Structuri custom", "Performanță termică", "Calcul static"] },
  { icon: Boxes, title: "Tâmplărie pentru Clădiri Modulare și Containere", img: modularImg, desc: "Soluții complete de ferestre și uși integrate în containere și case modulare.", benefits: ["Montaj rapid", "Integrare structurală", "Soluții pe măsură"] },
  { icon: Hammer, title: "Montaj și Mentenanță", img: p2, desc: "Echipă specializată cu montaj certificat și service post-instalare.", benefits: ["Garanție extinsă", "Service rapid", "Standarde europene"] },
];

const reasons = [
  { icon: Zap, title: "Eficiență Energetică", desc: "Reduci factura cu până la 40% prin profile cu Uw ≤ 0.8 W/m²K." },
  { icon: Shield, title: "Materiale Durabile", desc: "Profiluri premium europene și feronerie certificată." },
  { icon: Sparkles, title: "Design Modern", desc: "Linii curate, profile slim, soluții arhitecturale contemporane." },
  { icon: Wrench, title: "Montaj Rapid", desc: "Echipă proprie, planificare exactă, intervenții fără surprize." },
  { icon: Award, title: "Standarde Europene", desc: "Conformitate CE, garanție extinsă, controlul calității în fiecare etapă." },
  { icon: PencilRuler, title: "Soluții Personalizate", desc: "Proiectare 3D și consultanță tehnică pentru fiecare proiect." },
];

const projects = [
  { img: p1, label: "Rezidențial", title: "Vilă contemporană" },
  { img: p2, label: "Comercial", title: "Clădire de birouri" },
  { img: p3, label: "Modular", title: "Container office" },
  { img: p4, label: "Rezidențial", title: "Vilă cu piscină" },
];

const testimonials = [
  { name: "Andrei P.", role: "Proprietar casă, Galați", text: "Echipa TrainiQ a livrat exact la termen. Ferestrele Aluminiu arată impecabil, iar diferența de temperatură s-a simțit imediat." },
  { name: "Mihaela D.", role: "Arhitect, București", text: "Profesioniști în adevăratul sens. Au înțeles cerințele tehnice ale proiectului și ne-au propus soluții mai bune decât specificațiile inițiale." },
  { name: "Cristian V.", role: "Dezvoltator imobiliar", text: "Colaborare excelentă pe un proiect de 14 unități. Calitate constantă, comunicare clară, montaj rapid." },
];

const steps = [
  { icon: Phone, title: "Consultanță", desc: "Discutăm despre proiect și opțiunile potrivite." },
  { icon: Ruler, title: "Măsurători", desc: "Echipa noastră vine la fața locului, gratuit." },
  { icon: PencilRuler, title: "Proiectare", desc: "Proiect tehnic și ofertă transparentă." },
  { icon: Factory, title: "Producție", desc: "Profile premium, producție la comandă." },
  { icon: Truck, title: "Livrare", desc: "Logistică proprie, livrare planificată." },
  { icon: Install, title: "Montaj", desc: "Echipă certificată, montaj curat și rapid." },
  { icon: ShieldCheck, title: "Verificare Finală", desc: "Control de calitate și predare oficială." },
];

const faqs = [
  { q: "În cât timp livrați și montați?", a: "Termenul standard este de 1–3 săptămâni pentru PVC și 3–5 săptămâni pentru Aluminiu, cu posibilitate de livrare expres în situații speciale." },
  { q: "Ce garanție oferiți?", a: "Oferim garanție extinsă: 5 ani pentru profile și feronerie, 2 ani pentru montaj." },
  { q: "Lucrați și cu firme de construcții modulare?", a: "Da. Avem expertiză specifică în integrarea tâmplăriei în containere și case modulare." },
  { q: "Oferta este gratuită?", a: "Da. Consultanța, măsurătorile și oferta tehnică sunt complet gratuite și fără obligații." },
];

function Landing() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Portfolio />
      <WhyUs />
      <Modular />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* HERO */
function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy">
      <img
        src={heroImg}
        alt="Ferestre Aluminiu premium pe casă modernă"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, oklch(0.18 0.06 265 / 0.6) 100%)" }} />

      <div className="container-x relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-24 pt-32 lg:justify-center lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
            <Sparkles className="h-3.5 w-3.5" /> Ferestre și uși… te țin o viață
          </span>
          <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Ferestre și Uși Premium din{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">PVC și Aluminiu</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-white/80 lg:text-xl">
            Soluții moderne pentru locuințe, spații comerciale și construcții modulare.
            Producție la comandă, montaj certificat, garanție extinsă.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-base font-semibold text-navy shadow-glow transition-transform hover:scale-[1.03]"
            >
              Solicită Ofertă
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:0728232176"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 glass-dark px-7 py-4 text-base font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              <Phone className="h-4 w-4" /> Sună Acum
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/60 lg:block"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Zap, label: "Eficiență Energetică" },
    { icon: Wrench, label: "Montaj Profesional" },
    { icon: Award, label: "Materiale Premium" },
    { icon: PencilRuler, label: "Soluții Personalizate" },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className="container-x mx-auto grid max-w-7xl grid-cols-2 gap-6 py-8 md:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
              <it.icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold">{it.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* DESPRE */
function About() {
  const stats = [
    { v: 15, s: "+", l: "ani experiență" },
    { v: 850, s: "+", l: "proiecte finalizate" },
    { v: 1200, s: "+", l: "clienți mulțumiți" },
    { v: 30, s: "+", l: "zone acoperite" },
  ];
  return (
    <section id="despre" className="py-24 lg:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Despre TrainiQ</span>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-tight lg:text-5xl">
              Precizie tehnică,<br />estetică premium.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Suntem o echipă cu experiență în tâmplărie PVC și Aluminiu, dedicată proiectelor
              rezidențiale, comerciale și modulare. Lucrăm cu profile europene de top și aplicăm
              standarde stricte de montaj — pentru că ferestrele bune se simt zilnic, ani la rând.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Atenție la detalii și control de calitate riguros",
                "Materiale certificate și soluții cu eficiență energetică",
                "Expertiză în construcții rezidențiale și modulare",
                "Suport tehnic înainte, în timpul și după montaj",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={p4} alt="Vilă modernă cu tâmplărie premium" width={1200} height={900} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-4 rounded-2xl bg-navy p-6 text-white shadow-elegant sm:-left-8">
              <div className="text-4xl font-bold text-gold">15+</div>
              <div className="text-sm text-white/70">ani de experiență</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 rounded-3xl bg-navy p-10 text-white lg:grid-cols-4 lg:p-14">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-4xl font-bold text-gold lg:text-5xl">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SERVICII */
function Services() {
  return (
    <section id="servicii" className="bg-muted/40 py-24 lg:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Servicii</span>
          <h2 className="mt-4 text-balance text-4xl font-bold lg:text-5xl">Soluții complete de tâmplărie</h2>
          <p className="mt-4 text-muted-foreground">
            De la ferestre rezidențiale la fațade comerciale și integrare în construcții modulare.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} width={900} height={700} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold text-navy shadow-glow">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold" /> {b}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold">
                  Află mai mult <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PORTOFOLIU */
function Portfolio() {
  return (
    <section id="portofoliu" className="py-24 lg:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Portofoliu</span>
            <h2 className="mt-4 text-balance text-4xl font-bold lg:text-5xl">Proiecte realizate</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Vile contemporane, clădiri comerciale și construcții modulare — fiecare proiect, o referință.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-12">
          {projects.map((p, i) => {
            const span = i === 0 ? "md:col-span-7 md:row-span-2" : i === 1 ? "md:col-span-5" : "md:col-span-5";
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl shadow-card ${span} ${i === 0 ? "aspect-[4/5] md:aspect-auto" : "aspect-[4/3]"}`}
              >
                <img src={p.img} alt={p.title} width={1200} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">{p.label}</span>
                  <h3 className="mt-3 text-xl font-bold lg:text-2xl">{p.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* WHY US */
function WhyUs() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">De ce TrainiQ</span>
          <h2 className="mt-4 text-balance text-4xl font-bold lg:text-5xl">
            Calitate europeană, atenție românească.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-gold/40 hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-navy">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* MODULAR */
function Modular() {
  return (
    <section id="modulare" className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div {...fadeUp} className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={modularImg} alt="Casă modulară modernă cu tâmplărie integrată" width={1600} height={1100} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -top-6 -right-4 rounded-2xl glass border border-border p-5 shadow-card sm:-right-8">
              <Boxes className="h-6 w-6 text-navy" />
              <div className="mt-2 text-sm font-semibold">Module integrate</div>
              <div className="text-xs text-muted-foreground">Containere & case</div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Construcții Modulare</span>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-tight lg:text-5xl">
              Tâmplărie integrată pentru containere și case modulare.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Lucrăm direct cu producătorii de containere modulare, birouri mobile și case modulare —
              inclusiv soluții pentru spații comerciale. Integrăm ferestre și uși PVC sau Aluminiu,
              cu finisaje și performanțe ce respectă standardele scandinave.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Containere birou & ateliere",
                "Case modulare rezidențiale",
                "Spații comerciale modulare",
                "Soluții de izolație termică",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  <span className="text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">
              Discută cu un specialist <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* TESTIMONIALS */
function Testimonials() {
  return (
    <section className="bg-muted/40 py-24 lg:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Testimoniale</span>
          <h2 className="mt-4 text-balance text-4xl font-bold lg:text-5xl">Ce spun clienții noștri</h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-card p-7 shadow-card"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-foreground/90">„{t.text}”</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PROCESS */
function Process() {
  return (
    <section id="proces" className="py-24 lg:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Procesul nostru</span>
          <h2 className="mt-4 text-balance text-4xl font-bold lg:text-5xl">De la consultanță la montaj</h2>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-x-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative rounded-2xl border border-border bg-card p-6 shadow-card ${i % 2 === 1 ? "lg:mt-16" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gold">Pas {i + 1}</div>
                    <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* FAQ */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-muted/40 py-24 lg:py-32">
      <div className="container-x mx-auto max-w-3xl">
        <motion.div {...fadeUp} className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Întrebări frecvente</span>
          <h2 className="mt-4 text-balance text-4xl font-bold lg:text-5xl">Răspunsuri rapide</h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-muted-foreground">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CONTACT */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Contact</span>
          <h2 className="mt-4 text-balance text-4xl font-bold lg:text-5xl">
            Solicită Acum Oferta Gratuită
          </h2>
          <p className="mt-4 text-white/70">Răspundem în maximum 24 de ore lucrătoare.</p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <motion.div {...fadeUp} className="lg:col-span-2">
            <div className="space-y-5">
              <ContactRow icon={Phone} title="Telefon" value="0728 232 176" href="tel:0728232176" />
              <ContactRow icon={MessageIcon} title="WhatsApp" value="Scrie-ne acum" href="https://wa.me/40728232176" />
              <ContactRow icon={Mail} title="Email" value="trainiq@gmail.com" href="mailto:trainiq@gmail.com" />
              <ContactRow icon={MapPin} title="Sediu" value="Str. Semănătorii Nr. 3, Șendreni, 807290" />
              <ContactRow icon={Clock} title="Program" value="Luni – Vineri, 9:00 – 17:00" />
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Hartă TrainiQ"
                src="https://www.google.com/maps?q=Str+Semanatorii+3+Sendreni+Romania&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            {...fadeUp}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:col-span-3 lg:p-10"
          >
            <h3 className="text-2xl font-bold">Cere ofertă personalizată</h3>
            <p className="mt-2 text-sm text-white/70">Completează formularul și un consultant te va contacta.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Nume" name="nume" placeholder="Numele tău" />
              <Field label="Telefon" name="telefon" placeholder="07xx xxx xxx" />
              <Field label="Email" name="email" type="email" placeholder="email@exemplu.ro" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-white/80">Tip proiect</label>
                <select className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold">
                  <option className="bg-navy">Rezidențial</option>
                  <option className="bg-navy">Comercial</option>
                  <option className="bg-navy">Construcții modulare</option>
                  <option className="bg-navy">Altele</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-white/80">Detalii</label>
                <textarea rows={4} placeholder="Spune-ne câte ferestre, dimensiuni aproximative, termen dorit…" className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold" />
              </div>
            </div>

            <button type="submit" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-base font-bold text-navy shadow-glow transition-transform hover:scale-[1.02] sm:w-auto">
              <Send className="h-4 w-4" />
              {sent ? "Mulțumim! Te contactăm." : "Trimite cererea"}
            </button>
            <p className="mt-4 text-xs text-white/50">Datele tale sunt confidențiale și folosite doar pentru a-ți răspunde.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function MessageIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.52 3.48A11.92 11.92 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.42zM12.04 21.4h-.01a9.49 9.49 0 0 1-4.84-1.33l-.35-.21-3.75.98 1-3.65-.23-.37a9.5 9.5 0 1 1 8.18 4.58zm5.42-7.1c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48a8.99 8.99 0 0 1-1.65-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.34.46-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.57-.02s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.1 4.5.71.3 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}

function ContactRow({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) {
  const Inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-gold/40">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-navy">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-white/60">{title}</div>
        <div className="mt-0.5 font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{Inner}</a> : Inner;
}

function Field({ label, name, type = "text", placeholder, className = "" }: any) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium text-white/80">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-gold" />
    </div>
  );
}

/* FOOTER */
function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.05_265)] py-16 text-white/70">
      <div className="container-x mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">trainiQ</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Ferestre și uși premium din PVC și Aluminiu. Soluții pentru locuințe, proiecte comerciale și construcții modulare.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigare</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#despre" className="hover:text-gold">Despre</a></li>
              <li><a href="#servicii" className="hover:text-gold">Servicii</a></li>
              <li><a href="#portofoliu" className="hover:text-gold">Portofoliu</a></li>
              <li><a href="#contact" className="hover:text-gold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Servicii</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Ferestre PVC & Aluminiu</li>
              <li>Uși PVC & Aluminiu</li>
              <li>Sisteme glisante</li>
              <li>Construcții modulare</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="tel:0728232176" className="hover:text-gold">0728 232 176</a></li>
              <li><a href="mailto:trainiq@gmail.com" className="hover:text-gold">trainiq@gmail.com</a></li>
              <li>Str. Semănătorii Nr. 3, Șendreni</li>
              <li>L–V, 9:00 – 17:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} TrainiQ. Toate drepturile rezervate.</p>
          <p>Ferestre și uși… te țin o viață.</p>
        </div>
      </div>
    </footer>
  );
}

/* unused imports kept for tree shaking control */
void ClipboardCheck;
