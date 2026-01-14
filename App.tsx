
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
  User
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <Database className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 font-oswald uppercase italic">Vecht<span className="text-blue-600">Data</span></span>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center font-bold text-xs uppercase tracking-widest">
            <a href="#expertise" className="text-slate-600 hover:text-blue-600 transition">Expertise</a>
            <a href="#over-stef" className="text-slate-600 hover:text-blue-600 transition">Over Stef</a>
            <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition shadow-lg">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
          <a href="#expertise" className="block text-slate-600 font-bold uppercase text-xs" onClick={() => setIsOpen(false)}>Expertise</a>
          <a href="#over-stef" className="block text-slate-600 font-bold uppercase text-xs" onClick={() => setIsOpen(false)}>Over Stef</a>
          <a href="#contact" className="block text-blue-600 font-bold uppercase text-xs" onClick={() => setIsOpen(false)}>Contact</a>
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
            <span>8-12 uur p/w beschikbaar</span>
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter font-oswald uppercase italic">
            Data naar <br />
            <span className="gradient-text">Waarde.</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
            Ik ben <strong>Stef Lennips</strong>. Met ervaring bij <span className="text-slate-900 font-bold">Achmea</span> help ik organisaties van handmatige processen af naar een moderne data-stack met echte stuurinformatie.
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
              <span>Power BI Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>SQL & Azure</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>Python Automation</span>
            </div>
          </div>
        </div>

        <div className="relative lg:block hidden">
          <div className="absolute -inset-10 bg-blue-500/5 blur-3xl rounded-full"></div>
          <div className="relative glass p-8 rounded-[3rem] shadow-2xl border border-white/50">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Terminal className="text-white w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">System_Status</p>
                    <p className="text-slate-900 font-bold">Pipeline: Live</p>
                 </div>
              </div>
              <div className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-bold uppercase tracking-widest border border-emerald-100">
                SQL Connected
              </div>
            </div>
            
            <div className="space-y-4 mb-10 font-mono text-sm text-slate-500 bg-slate-900/5 p-6 rounded-2xl border border-slate-200">
               <p className="text-blue-600"># Exit Legacy Excel</p>
               <p><span className="text-blue-600 font-bold">import</span> azure.sql <span className="text-blue-600 font-bold">as</span> db</p>
               <p><span className="text-blue-600 font-bold">def</span> automate_reporting():</p>
               <p className="pl-4">data = db.fetch_all()</p>
               <p className="pl-4">pbi.refresh_dashboard(data)</p>
               <p className="pl-4 text-emerald-600">print("Dashboard updated automatically")</p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
               <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                  <User className="w-7 h-7" />
               </div>
               <div>
                  <p className="font-bold text-slate-900">Stef Lennips</p>
                  <p className="text-xs text-slate-500 font-medium italic">Data Consultant @ VechtData</p>
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
      title: "Data Engineering", 
      desc: "Bouwen van robuuste fundamenten in Azure en SQL. Geen losse bestandjes meer, maar één centrale 'single source of truth'.", 
      icon: <Database className="w-6 h-6" />,
      tools: ["T-SQL", "Azure SQL", "ETL Pipelines"]
    },
    { 
      title: "Power BI Dashboards", 
      desc: "Transformeer ruwe data naar visuele stuurinformatie. Dashboards die automatisch verversen en echt antwoord geven op business vragen.", 
      icon: <BarChart3 className="w-6 h-6" />,
      tools: ["DAX", "Power Query", "Data Modeling"]
    },
    { 
      title: "Python Automation", 
      desc: "Vervang repeterende handelingen door slimme scripts. Van data-extracties tot complexe transformaties die voorheen uren kostten.", 
      icon: <Code2 className="w-6 h-6" />,
      tools: ["Pandas", "Automation", "API's"]
    },
    { 
      title: "Modernisering", 
      desc: "Afscheid nemen van foutgevoelige Excel-processen. We migreren legacy werkwijzen naar een schaalbare en auditeerbare data-omgeving.", 
      icon: <RefreshCcw className="w-6 h-6" />,
      tools: ["Legacy Migration", "Scalability", "Audit Trails"]
    },
  ];

  return (
    <section id="expertise" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">Focusgebieden</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-oswald uppercase italic tracking-tighter">Professionaliseer uw <span className="text-blue-600">Data</span></h3>
            <p className="text-lg text-slate-600 font-medium">Data is pas waardevol als het betrouwbaar is. Ik help organisaties om de overstap te maken van handmatige Excel-lijstjes naar een volwassen en geautomatiseerd data-landschap.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition duration-500 flex flex-col group">
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
              Met mijn achtergrond bij Achmea ben ik gewend om te werken in complexe omgevingen waar data-integriteit cruciaal is. Ik geloof niet in pleisters plakken op bestaande Excel-spreadsheets; ik bouw liever aan structurele oplossingen.
            </p>
            <p>
              Door <strong>Azure SQL</strong>, <strong>Python</strong> en <strong>Power BI</strong> slim in te zetten, zorg ik dat uw team stopt met het 'verzamelen' van data en start met het 'analyseren' ervan. 
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 pt-10">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                    <Clock className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold">8-12 uur p/w</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Freelance inzet</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400">Directe inzetbaarheid voor gerichte data-projecten of consultancy op uurbasis.</p>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                    <TrendingUp className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Modernisering</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Mijn Focus</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400">Het vervangen van legacy-systemen en spreadsheets door schaalbare architecturen.</p>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10">
               <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Gevestigd in Nederland | KVK 92048592</p>
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
              Geïnteresseerd in een structurele oplossing voor uw data? Ik hoor graag wat uw uitdagingen zijn.
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

              <a href="https://linkedin.com" target="_blank" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#0077B5] group-hover:text-white transition-all">
                  <Linkedin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">LinkedIn</p>
                  <p className="text-xl font-bold text-slate-900 group-hover:text-[#0077B5] transition-colors">Verbind met Stef</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-slate-100 relative overflow-hidden flex flex-col justify-center">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Klaar voor de volgende stap?</h4>
            <p className="text-slate-600 mb-10 font-medium leading-relaxed">
              Voor een snelle reactie kunt u het beste direct mailen of bellen. Ik reageer doorgaans binnen één werkdag op nieuwe aanvragen.
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
              "Ik geloof in korte lijnen en directe communicatie. Laten we bespreken hoe we uw data echt voor u kunnen laten werken."
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
          © {new Date().getFullYear()} VechtData.ai | KVK 92048592
        </div>

        <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
          <a href="#expertise" className="hover:text-blue-600 transition">Expertise</a>
          <a href="#over-stef" className="hover:text-blue-600 transition">Over Stef</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
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
