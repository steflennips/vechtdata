
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Database, 
  Mail, 
  Phone, 
  Linkedin,
  Clock,
  Menu,
  X,
  Code2,
  ArrowRight,
  ShieldCheck,
  Terminal,
  TrendingUp,
  RefreshCcw,
  User,
  BrainCircuit
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['expertise', 'over-stef', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
      else if (window.scrollY < 100) setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinkClass = (section: string) => `
    transition-all duration-300 font-bold text-xs uppercase tracking-widest
    ${activeSection === section ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}
  `;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <Database className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 font-oswald uppercase italic">Vecht<span className="text-blue-600">Data</span></span>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            <a href="#expertise" className={navLinkClass('expertise')}>Expertise</a>
            <a href="#over-stef" className={navLinkClass('over-stef')}>Over Stef</a>
            <a href="#contact" className={`
              px-6 py-2.5 rounded-full transition shadow-lg font-bold text-xs uppercase tracking-widest
              ${activeSection === 'contact' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white hover:bg-blue-600'}
            `}>Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4 shadow-xl">
          <a href="#expertise" className="block p-2 text-slate-600 font-bold uppercase text-xs" onClick={() => setIsOpen(false)}>Expertise</a>
          <a href="#over-stef" className="block p-2 text-slate-600 font-bold uppercase text-xs" onClick={() => setIsOpen(false)}>Over Stef</a>
          <a href="#contact" className="block p-2 bg-slate-900 text-white rounded-lg text-center font-bold uppercase text-xs" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-40 pb-32 px-4 hero-bg">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold border border-blue-100 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Freelance beschikbaar</span>
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter font-oswald uppercase italic">
            Data & AI <br />
            <span className="gradient-text">Waarde.</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
            Ik ben <strong>Stef Lennips</strong>. Ik help bedrijven niet alleen met data-inzichten, maar zorg ook dat hun fundament <span className="text-blue-600 font-bold">AI Ready</span> is voor de toekomst.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center hover:bg-blue-700 transition shadow-2xl shadow-blue-200 group text-center">
              Start een project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition hidden sm:block" />
            </a>
            <a href="#expertise" className="bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold flex items-center justify-center hover:bg-slate-50 transition text-center">
              Mijn expertise
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-slate-400 font-bold text-xs uppercase tracking-widest">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>AI Readiness Check</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>SQL & Azure</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>Power BI Expert</span>
            </div>
          </div>
        </div>

        <div className="relative lg:block hidden">
          <div className="absolute -inset-10 bg-blue-500/5 blur-3xl rounded-full"></div>
          <div className="relative glass p-8 rounded-[3rem] shadow-2xl border border-white/50">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <BrainCircuit className="text-white w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Status_Check</p>
                    <p className="text-slate-900 font-bold">Org: AI-Ready</p>
                 </div>
              </div>
              <div className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-bold uppercase tracking-widest border border-emerald-100">
                Data Verified
              </div>
            </div>
            
            <div className="space-y-4 mb-10 font-mono text-sm text-slate-500 bg-slate-900/5 p-6 rounded-2xl border border-slate-200">
               <p className="text-blue-600"># AI Preparedness Audit</p>
               <p><span className="text-blue-600 font-bold">check</span> data_quality.score <span className="text-slate-900">&gt; 0.85</span></p>
               <p><span className="text-blue-600 font-bold">identify</span> automation_potential()</p>
               <p className="pl-4">infrastructure = azure.assess()</p>
               <p className="pl-4 text-emerald-600">result = "Ready for LLM deployment"</p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
               <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                  <User className="w-7 h-7" />
               </div>
               <div>
                  <p className="font-bold text-slate-900">Stef Lennips</p>
                  <p className="text-xs text-slate-500 font-medium italic">Data & AI Specialist @ VechtData</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  const skills = [
    { 
      title: "AI Readiness Check", 
      desc: "Is uw data klaar voor AI? Ik beoordeel uw huidige architectuur, datakwaliteit en processen om een realistische AI-roadmap op te stellen.", 
      icon: <BrainCircuit className="w-6 h-6" />,
      tools: ["Audit", "Roadmap", "Data Quality"]
    },
    { 
      title: "Data Engineering", 
      desc: "Bouwen van robuuste fundamenten in Azure en SQL. Geen losse bestandjes meer, maar één centrale 'single source of truth'.", 
      icon: <Database className="w-6 h-6" />,
      tools: ["T-SQL", "Azure SQL", "Pipelines"]
    },
    { 
      title: "Power BI Dashboards", 
      desc: "Transformeer ruwe data naar visuele stuurinformatie. Dashboards die automatisch verversen en echt antwoord geven op business vragen.", 
      icon: <BarChart3 className="w-6 h-6" />,
      tools: ["DAX", "Power Query", "Modeling"]
    },
    { 
      title: "Python Automation", 
      desc: "Vervang repeterende handelingen door slimme scripts. Van data-extracties tot complexe transformaties die voorheen uren kostten.", 
      icon: <Code2 className="w-6 h-6" />,
      tools: ["Pandas", "Scripts", "API's"]
    },
    { 
      title: "Modernisering", 
      desc: "Afscheid nemen van foutgevoelige Excel-processen. We migreren legacy werkwijzen naar schaalbare en auditeerbare data-omgevingen.", 
      icon: <RefreshCcw className="w-6 h-6" />,
      tools: ["Migration", "Scalability", "Audit"]
    },
  ];

  return (
    <section id="expertise" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">Focusgebieden</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-oswald uppercase italic tracking-tighter">Professionaliseer uw <span className="text-blue-600">Data & AI</span></h3>
            <p className="text-lg text-slate-600 font-medium">Betrouwbare data is de brandstof voor AI. Ik zorg dat uw organisatie klaar is om de vruchten te plukken van de nieuwste technologieën.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className={`p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition duration-500 flex flex-col group ${idx === 4 ? 'lg:col-span-2' : ''}`}>
              <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{skill.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow font-medium">{skill.desc}</p>
              <div className="flex flex-wrap gap-2">
                 {skill.tools.map(tool => (
                   <span key={tool} className="px-3 py-1 bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 rounded-lg">{tool}</span>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BioSection = () => {
  return (
    <section id="over-stef" className="py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6">Expertise & Ervaring</h2>
          <h3 className="text-4xl md:text-6xl font-black mb-10 font-oswald uppercase italic tracking-tighter leading-none">
            Nuchtere aanpak met <br /><span className="text-blue-500">Achmea</span> ervaring.
          </h3>
          <div className="space-y-8 text-lg text-slate-300 leading-relaxed font-medium">
            <p>
              Met mijn achtergrond bij Achmea ben ik gewend om te werken in complexe omgevingen waar data-integriteit cruciaal is. Ik help organisaties om de stap te zetten van 'ad-hoc spreadsheets' naar een volwassen data-landschap dat klaar is voor <strong>AI-implementatie</strong>.
            </p>
            <p>
              Door <strong>Azure SQL</strong>, <strong>Python</strong> en <strong>Power BI</strong> slim in te zetten, zorg ik dat uw team stopt met het 'verzamelen' van data en start met het 'analyseren' ervan. 
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 pt-10">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                    <BrainCircuit className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold">AI Preparedness</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Mijn Specialisme</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400">Ik check of uw fundament sterk genoeg is voor de inzet van LLM's en voorspellende modellen.</p>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                    <TrendingUp className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Business Waarde</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Het Doel</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400">Geen techniek om de techniek, maar data die direct bijdraagt aan betere besluitvorming.</p>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10">
               <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Gevestigd in Nederland | KVK 98240951</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 font-oswald uppercase italic tracking-tighter leading-none">Laten we <span className="text-blue-600">Kennismaken.</span></h3>
            <p className="text-xl text-slate-600 mb-12 font-medium">
              Geïnteresseerd in een AI-readiness scan of een structurele data-oplossing? Ik hoor graag van u.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:stef.lennips@vechtdata.nl" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">E-mail</p>
                  <p className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">stef.lennips@vechtdata.nl</p>
                </div>
              </a>
              
              <a href="tel:0642504044" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Telefoon</p>
                  <p className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">06-42504044</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/stef-lennips-38a19271/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#0077B5] group-hover:text-white transition-all">
                  <Linkedin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">LinkedIn</p>
                  <p className="text-xl font-bold text-slate-900 group-hover:text-[#0077B5] transition-colors">stef-lennips-38a19271</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-slate-100 relative overflow-hidden flex flex-col justify-center">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Uw data AI-ready maken?</h4>
            <p className="text-slate-600 mb-10 font-medium leading-relaxed">
              Ik help ZZP'ers en MKB'ers om de sprong te maken naar een professioneel databeheer. Geen ingewikkelde rapporten, maar directe impact.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:stef.lennips@vechtdata.nl" 
                className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 transition shadow-xl shadow-blue-100 flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                <span>Stuur direct een mail</span>
              </a>
              
              <a 
                href="tel:0642504044" 
                className="w-full border-2 border-slate-900 text-slate-900 font-bold py-5 rounded-xl hover:bg-slate-900 hover:text-white transition flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>Bel 06-42504044</span>
              </a>
            </div>

            <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-sm text-slate-500 text-center">
              "Kwaliteit boven kwantiteit. Ik focus op structurele verbeteringen waar uw organisatie jarenlang plezier van heeft."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Database className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 font-oswald uppercase italic">Vecht<span className="text-blue-600">Data</span></span>
        </div>
        
        <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} VechtData | KVK 98240951
        </div>

        <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
          <a href="#expertise" className="hover:text-blue-600 transition">Expertise</a>
          <a href="#over-stef" className="hover:text-blue-600 transition">Over Stef</a>
          <a href="https://www.linkedin.com/in/stef-lennips-38a19271/" target="_blank" className="hover:text-[#0077B5] transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <ExpertiseSection />
      <BioSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
