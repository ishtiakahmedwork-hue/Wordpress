/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { useMotionValue, useTransform, animate, useMotionValueEvent, motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  MapPin, 
  HardHat, 
  Truck, 
  Settings, 
  Construction, 
  Zap, 
  ClipboardCheck, 
  Users, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Certifications", href: "#certifications" },
    { name: "Partners", href: "#partners" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-14 transition-all duration-300 ${isScrolled ? "bg-dark-base/98 backdrop-blur-lg border-b border-green-light/20 shadow-lg" : "bg-dark-base border-b border-white/5"}`}>
      <div className="font-display font-extrabold text-lg tracking-widest uppercase text-white">
        NW <span className="text-green-light">Energy</span> Services
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-display font-semibold text-[10px] tracking-widest uppercase text-green-pale/80">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-white transition-colors relative group">
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-light transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <motion.button 
        whileHover={{ scale: 1.04, x: 2 }}
        whileTap={{ scale: 0.96 }}
        className="bg-green-primary hover:bg-green-dark text-white font-display font-bold text-[10px] tracking-widest uppercase px-5 py-2 transition-all cursor-pointer shadow-md shadow-green-primary/10"
      >
        Request a Quote
      </motion.button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-dark-base flex flex-col justify-center items-center p-8 md:p-20 overflow-hidden text-center">
      <div className="absolute inset-0 hero-grid pointer-events-none" />
      <div className="absolute top-0 right-0 w-full md:w-[45%] h-full bg-gradient-to-br from-transparent to-green-primary/10 border-l border-green-light/15" />
      
      {/* Decorative spinning circle */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-48 h-48 border border-green-light/20 rounded-full hidden lg:block"
      >
        <div className="absolute inset-5 border border-green-light/10 rounded-full" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 bg-green-primary/20 border border-green-primary text-green-light font-display font-semibold text-[11px] tracking-widest uppercase px-3.5 py-1.5 mb-7">
          <MapPin size={12} />
          Kitimat, BC — Northwest British Columbia
        </div>

        <h1 className="font-display font-extrabold text-5xl md:text-8xl leading-[0.95] text-white uppercase tracking-tight mb-8">
          Industrial<br />
          <span className="text-green-light">Services</span> for<br />
          <span className="text-outline">LNG Canada</span><br />
          & Beyond
        </h1>

        <p className="font-sans text-green-pale/80 text-base md:text-lg leading-relaxed max-w-lg mb-10 mx-auto">
          Certified trades, heavy equipment, and site maintenance across Northwest BC's permanent energy corridor. Serving major operators since 2009.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-green-primary hover:bg-green-dark text-white font-display font-bold text-xs tracking-widest uppercase px-8 py-4 transition-colors cursor-pointer"
          >
            Request a Quote
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2, borderColor: "#5DCAA5" }}
            whileTap={{ scale: 0.98 }}
            className="bg-transparent border border-green-light/50 text-green-light hover:text-white font-display font-semibold text-xs tracking-widest uppercase px-8 py-4 transition-colors cursor-pointer"
          >
            View Services
          </motion.button>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {[
            { icon: ShieldCheck, text: "COR Certified" },
            { icon: CheckCircle2, text: "ISNetworld Active" },
            { icon: Users, text: "Indigenous Partnership" },
            { icon: Construction, text: "LNG Canada Vendor" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/5 border border-green-light/30 px-4 py-2 font-display font-semibold text-[10px] tracking-widest uppercase text-green-pale">
              <badge.icon size={12} className="text-green-light" />
              {badge.text}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-10 right-20 hidden lg:flex flex-col items-center gap-2 font-display text-[11px] tracking-[0.2em] uppercase text-green-light/50 [writing-mode:vertical-rl]">
        Scroll
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-16 bg-gradient-to-b from-green-light/40 to-transparent" 
        />
      </div>
    </section>
  );
};

const AnimatedStatItem = ({ target, unit, label }: { target: number; unit: string; label: string }) => {
  const count = useMotionValue(target);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(target);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

  const triggerAnimation = () => {
    count.set(1);
    animate(count, target, { duration: 1.2, ease: "easeOut" });
  };

  return (
    <div 
      className="p-8 md:p-12 border-r border-green-light/15 last:border-r-0 text-center transition-colors hover:bg-white/5"
      onMouseEnter={triggerAnimation}
    >
      <div className="font-display font-extrabold text-4xl md:text-5xl text-green-light leading-none tracking-tighter cursor-default">
        <span>{displayValue}</span>
        <span className="text-2xl md:text-3xl ml-0.5">{unit}</span>
      </div>
      <div className="font-display font-semibold text-[10px] tracking-widest uppercase text-green-pale/60 mt-2">
        {label}
      </div>
    </div>
  );
};

const StatsBar = () => {
  const stats = [
    { num: 15, unit: "+", label: "Years in Northwest BC" },
    { num: 300, unit: "+", label: "Projects Completed" },
    { num: 85, unit: "", label: "Workforce Strong" },
    { num: 5, unit: "★", label: "Vendor Rating" },
  ];

  return (
    <div className="group grid grid-cols-2 lg:grid-cols-4 bg-dark-accent border-y border-green-light/20">
      {stats.map((stat, i) => (
        <AnimatedStatItem key={i} target={stat.num} unit={stat.unit} label={stat.label} />
      ))}
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="grid lg:grid-cols-2 min-h-[600px]">
      <div className="relative bg-dark-surface p-12 md:p-20 flex flex-col justify-center overflow-hidden">
        <div className="absolute bottom-[-20px] right-[-10px] font-display font-extrabold text-[100px] text-green-light/5 leading-[0.9] uppercase pointer-events-none select-none">
          EST<br />2009
        </div>
        <div className="font-display font-semibold text-[11px] tracking-[0.16em] uppercase text-green-light mb-2.5">
          Who We Are
        </div>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[0.95] tracking-tight mb-6">
          Built for<br />Northwest BC
        </h2>
        <div className="space-y-4 text-green-pale/75 text-sm md:text-base leading-relaxed max-w-lg">
          <p>Founded in Kitimat in 2009, NW Energy Services has grown alongside the region's transformation into a globally significant energy corridor. We are not a fly-in, fly-out operation — this is our home.</p>
          <p>With LNG Canada now fully operational and Cedar LNG on the horizon, we are positioned as the region's most trusted local industrial services partner for the long term.</p>
        </div>
      </div>
      <div className="bg-off-white p-12 md:p-20 flex flex-col justify-center gap-6 md:gap-8">
        {[
          { icon: "1", title: "Local Knowledge", desc: "Deep understanding of Northwest BC terrain, climate, logistics, and regulatory environment." },
          { icon: "2", title: "Procurement Ready", desc: "Fully compliant with ISNetworld, COR, and ComplyWorks — meeting standards of Shell and Petronas." },
          { icon: "3", title: "Community First", desc: "Proud member of Kitimat's community. We hire locally and invest in regional growth." },
          { icon: "4", title: "Safety Culture", desc: "Zero-incident mindset built into every operation. Our record is the industry standard." },
        ].map((point, i) => (
          <div key={i} className="flex gap-5">
            <div className="font-display font-extrabold text-4xl text-green-primary leading-none w-12 shrink-0">
              {point.icon}
            </div>
            <div>
              <h4 className="font-display font-bold text-base uppercase tracking-wider mb-1">
                {point.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                {point.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { id: "01", icon: Settings, title: "Mechanical Trades", desc: "Certified pipefitting, welding (CWB), and millwright services for major LNG operators." },
    { id: "02", icon: Truck, text: "02", title: "Heavy Equipment", desc: "Full fleet of excavators and haul trucks with certified operators for civil works." },
    { id: "03", icon: Construction, title: "Site Maintenance", desc: "Facility maintenance contracts covering preventive and emergency services." },
    { id: "04", icon: Zap, title: "Electrical & Instrumentation", desc: "Licensed E&I technicians for industrial control and power distribution systems." },
    { id: "05", icon: ClipboardCheck, title: "Scaffolding & Access", desc: "Engineered scaffold systems and elevated access for turnaround projects." },
    { id: "06", icon: Users, title: "Logistics & Materials", desc: "Warehousing and supply chain management for large capital projects." },
  ];

  return (
    <section id="services" className="bg-warm-white p-12 md:p-20">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14">
        <div>
          <div className="font-display font-semibold text-[11px] tracking-[0.16em] uppercase text-green-primary mb-2.5">
            What We Do
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tight">
            Core Services
          </h2>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-primary hover:bg-green-dark text-white font-display font-bold text-xs tracking-widest uppercase px-8 py-4 transition-all cursor-pointer"
        >
          Get a Custom Quote
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-200 bg-gray-200 gap-[1px]">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            whileHover={{ backgroundColor: "white" }}
            className="group relative bg-warm-white p-10 transition-colors overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-primary transition-all duration-300 group-hover:w-full" />
            <div className="absolute top-6 right-7 font-display font-extrabold text-5xl text-black/5 leading-none pointer-events-none">
              {service.id}
            </div>
            <service.icon className="w-12 h-12 text-green-primary mb-6 transition-transform group-hover:scale-110" />
            <h3 className="font-display font-bold text-xl uppercase tracking-wider mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { year: "2025", title: "LNG Canada — Phase 1 Maintenance", desc: "Ongoing mechanical and civil terminal maintenance", scope: "Mechanical · Civil", status: "Ongoing" },
    { year: "2024", title: "Cedar LNG — Site Preparation", desc: "Earthworks and civil preparation for new terminal site", scope: "Civil · Equipment", status: "Ongoing" },
    { year: "2023", title: "Alcan Smelter — Annual Turnaround", desc: "Full crew deployment for Rio Tinto Alcan's smelter", scope: "Scaffold · Mechanical", status: "Completed" },
    { year: "2022", title: "Northwest BC Transmission Line", desc: "Civil works package for BC Hydro infrastructure", scope: "Civil · Equipment", status: "Completed" },
  ];

  return (
    <section id="projects" className="bg-warm-white p-12 md:p-20">
      <div className="mb-14">
        <div className="font-display font-semibold text-[11px] tracking-[0.16em] uppercase text-green-primary mb-2.5">
          Track Record
        </div>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tight">
          Selected Projects
        </h2>
      </div>

      <div className="flex flex-col border border-gray-200 bg-gray-200 gap-[1px]">
        {projects.map((project, i) => (
          <div key={i} className="grid grid-cols-[80px_1fr_160px] md:grid-cols-[80px_1fr_200px_160px] items-center gap-8 bg-warm-white p-7 md:p-8 hover:bg-white transition-colors">
            <div className="font-display font-extrabold text-3xl text-black/10 leading-none">
              {project.year}
            </div>
            <div>
              <h4 className="font-display font-bold text-lg uppercase tracking-wide">
                {project.title}
              </h4>
              <p className="text-xs text-gray-500">{project.desc}</p>
            </div>
            <div className="hidden md:block font-display font-semibold text-xs tracking-wider uppercase text-gray-400">
              {project.scope}
            </div>
            <div className="justify-self-end flex items-center gap-2 font-display font-bold text-xs tracking-widest uppercase text-green-primary">
              <div className={`w-1.5 h-1.5 rounded-full ${project.status === "Completed" ? "bg-gray-400" : "bg-green-primary animate-pulse"}`} />
              <span className={project.status === "Completed" ? "text-gray-400" : "text-green-primary"}>
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="grid lg:grid-cols-2">
      <div className="bg-dark-base p-12 md:p-20 flex flex-col justify-center">
        <div className="font-display font-semibold text-[11px] tracking-[0.16em] uppercase text-green-light mb-2.5">
          Get In Touch
        </div>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[0.95] tracking-tight mb-10">
          Ready to<br />Work Together?
        </h2>
        
        <div className="space-y-5">
          <div className="flex items-center gap-4 text-green-pale/80 font-display text-sm">
            <MapPin size={18} className="text-green-primary shrink-0" />
            150 Industrial Way, Kitimat, BC V8C 1G9
          </div>
          <div className="flex items-center gap-4 text-green-pale/80 font-display text-sm">
            <Phone size={18} className="text-green-primary shrink-0" />
            +1 (250) 555-0182
          </div>
          <div className="flex items-center gap-4 text-green-pale/80 font-display text-sm">
            <Mail size={18} className="text-green-primary shrink-0" />
            info@nwenergyservices.ca
          </div>
        </div>
      </div>

      <div className="bg-off-white p-12 md:p-20 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block font-display font-semibold text-[10px] uppercase tracking-widest text-gray-500 mb-2">First Name</label>
            <input type="text" className="w-full bg-white border border-gray-200 p-3.5 text-sm outline-none focus:border-green-primary transition-colors" />
          </div>
          <div>
            <label className="block font-display font-semibold text-[10px] uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
            <input type="text" className="w-full bg-white border border-gray-200 p-3.5 text-sm outline-none focus:border-green-primary transition-colors" />
          </div>
        </div>
        <div className="mb-5">
          <label className="block font-display font-semibold text-[10px] uppercase tracking-widest text-gray-500 mb-2">Company</label>
          <input type="text" className="w-full bg-white border border-gray-200 p-3.5 text-sm outline-none focus:border-green-primary transition-colors" />
        </div>
        <div className="mb-5">
          <label className="block font-display font-semibold text-[10px] uppercase tracking-widest text-gray-500 mb-2">Service Required</label>
          <select className="w-full bg-white border border-gray-200 p-3.5 text-sm outline-none focus:border-green-primary transition-colors appearance-none">
            <option>Select a service...</option>
            <option>Mechanical Trades</option>
            <option>Heavy Equipment</option>
            <option>Site Maintenance</option>
          </select>
        </div>
        <div className="mb-7">
          <label className="block font-display font-semibold text-[10px] uppercase tracking-widest text-gray-500 mb-2">Project Details</label>
          <textarea className="w-full bg-white border border-gray-200 p-3.5 h-32 text-sm outline-none focus:border-green-primary transition-colors resize-none" />
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-green-primary hover:bg-green-dark text-white font-display font-bold text-sm tracking-widest uppercase py-4 group flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          Send Request <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark-base border-t border-green-light/15">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-12 md:p-20">
        <div className="lg:col-span-1">
          <div className="font-display font-extrabold text-2xl tracking-widest uppercase text-white mb-6">
            NW <span className="text-green-light">Energy</span>
          </div>
          <p className="text-xs text-green-pale/50 leading-relaxed max-w-xs">
            Certified industrial services for Northwest British Columbia's permanent energy corridor. Proudly based in Kitimat since 2009.
          </p>
        </div>
        
        <div>
          <h5 className="font-display font-bold text-[11px] uppercase tracking-[0.15em] text-green-light/40 mb-6">Services</h5>
          <ul className="space-y-3 font-display font-semibold text-xs tracking-wide text-green-pale/70">
            <li className="hover:text-white cursor-pointer transition-colors">Mechanical Trades</li>
            <li className="hover:text-white cursor-pointer transition-colors">Heavy Equipment</li>
            <li className="hover:text-white cursor-pointer transition-colors">Site Maintenance</li>
            <li className="hover:text-white cursor-pointer transition-colors">Scaffolding</li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-display font-bold text-[11px] uppercase tracking-[0.15em] text-green-light/40 mb-6">Company</h5>
          <ul className="space-y-3 font-display font-semibold text-xs tracking-wide text-green-pale/70">
            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-white cursor-pointer transition-colors">Safety Record</li>
            <li className="hover:text-white cursor-pointer transition-colors">Partnerships</li>
            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-display font-bold text-[11px] uppercase tracking-[0.15em] text-green-light/40 mb-6">Contact</h5>
          <div className="space-y-4 font-display font-semibold text-xs tracking-wide text-green-pale/70">
            <div>Kitimat, BC</div>
            <div>+1 (250) 555-0182</div>
            <div className="text-green-light">info@nwenergyservices.ca</div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-12 md:px-20 py-8 border-t border-white/5 bg-black/20 text-[10px] font-display uppercase tracking-widest text-green-pale/30">
        <div>© 2025 NW Energy Services Ltd. All rights reserved.</div>
        <div className="flex gap-4">
          <span>COR Certified</span>
          <span className="text-white/10">|</span>
          <span>ISNetworld</span>
          <span className="text-white/10">|</span>
          <span>ComplyWorks</span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-green-primary/30 selection:text-green-deeper">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      
      <section id="certifications" className="bg-dark-base p-12 md:p-20">
        <div className="font-display font-semibold text-[11px] tracking-[0.16em] uppercase text-green-light mb-2.5">
          Compliance & Safety
        </div>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[0.95] tracking-tight mb-14">
          Procurement-Ready<br />Credentials
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border border-green-light/10 bg-green-light/10 gap-[1px]">
          {[
            { icon: ShieldCheck, title: "ISNetworld", status: "Active & compliant" },
            { icon: CheckCircle2, title: "COR Certified", status: "BC Certificate" },
            { icon: ClipboardCheck, title: "ComplyWorks", status: "Pre-qualified" },
            { icon: HardHat, title: "WCB Good", status: "WorkSafeBC" },
            { icon: ShieldCheck, title: "Prime Contractor", status: "WSBC Designated" },
          ].map((cert, i) => (
            <div key={i} className="bg-dark-surface p-8 text-center hover:bg-dark-accent transition-colors">
              <cert.icon className="w-8 h-8 text-green-primary mx-auto mb-4" />
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-1">{cert.title}</h4>
              <p className="text-[10px] text-green-pale/40 uppercase">{cert.status}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 md:p-8 bg-green-primary/5 border border-green-light/20 flex gap-5 items-start">
          <div className="bg-green-primary/20 p-2 rounded-full ring-4 ring-green-primary/5">
            <ClipboardCheck className="text-green-light w-5 h-5" />
          </div>
          <p className="font-sans text-sm text-green-pale/80 leading-relaxed italic">
            "All certifications are maintained current and available for vendor pre-qualification with <strong>Shell, Petronas, LNG Canada</strong>, and <strong>Cedar LNG</strong>. Certificates available on request."
          </p>
        </div>
      </section>

      <section id="partners" className="bg-off-white p-12 md:p-20">
        <div className="mb-14">
          <div className="font-display font-semibold text-[11px] tracking-[0.16em] uppercase text-green-primary mb-2.5">
            Community & Collaboration
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-tight">
            Our Partners
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { tag: "Indigenous Partnership", title: "Haisla Nation", desc: "Long-standing partnership supporting Indigenous economic participation across Northwest BC's energy corridor." },
            { tag: "Approved Vendor", title: "LNG Canada", desc: "Registered and pre-qualified vendor for Shell-led export operations. Delivering site maintenance since commissioning." },
            { tag: "Community Member", title: "Kitimat Chamber", desc: "Active member and advocate for local business development as Kitimat enters its 40-year operational era." },
          ].map((partner, i) => (
            <div key={i} className="group bg-white border border-gray-200 p-10 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-green-primary/5">
              <div className="absolute top-0 left-0 w-1 h-full bg-green-primary" />
              <div className="bg-green-primary/10 text-green-dark font-display font-bold text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 w-fit mb-5">
                {partner.tag}
              </div>
              <h3 className="font-display font-bold text-xl uppercase tracking-wider mb-4 group-hover:text-green-primary transition-colors">
                {partner.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {partner.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Projects />

      <section className="bg-dark-surface p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 font-display font-extrabold text-[400px] text-green-light/5 leading-none pointer-events-none select-none">
          "
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-sans italic text-2xl md:text-4xl text-white leading-tight mb-10">
            "NW Energy Services has consistently delivered on quality, safety, and schedule. Their local knowledge and certified workforce make them our first call for Northwest BC operations."
          </p>
          <div className="font-display font-bold text-sm tracking-widest uppercase text-green-light">
            — Procurement Manager
          </div>
          <div className="text-[10px] font-display uppercase tracking-widest text-green-pale/50 mt-1">
            LNG Canada Operations, Kitimat BC
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

