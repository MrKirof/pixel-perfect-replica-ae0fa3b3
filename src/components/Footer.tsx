import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { Suspense } from "react";
import FooterWatch from "./FooterWatch";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => (
  <footer className="relative" style={{ backgroundColor: '#f5f5f5', color: '#1a1a1a' }}>
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-16 md:py-20">
      {/* Main content: Watch left, Info right */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-14">
        {/* LEFT: 3D Watch */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Suspense fallback={
            <div className="w-full h-[350px] flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: '#ccc', borderTopColor: 'transparent' }} />
            </div>
          }>
            <FooterWatch />
          </Suspense>
        </div>

        {/* RIGHT: Navigation + Connect + Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: '#999' }}>
              Navigation
            </h4>
            <nav className="flex flex-wrap gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="font-body text-sm px-4 py-2 rounded-full transition-all duration-200"
                  style={{ color: '#555', backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e8e8e8'; e.currentTarget.style.color = '#1a1a1a'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#555'; }}
                  data-cursor-hover
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: '#999' }}>
              Connect
            </h4>
            <div className="flex items-center gap-2">
              <a
                href="https://www.behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm px-5 py-2 rounded-full transition-all duration-200"
                style={{ color: '#555', border: '1px solid #d0d0d0' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1a1a1a'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#555'; e.currentTarget.style.borderColor = '#d0d0d0'; }}
                data-cursor-hover
              >
                Behance
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm px-5 py-2 rounded-full transition-all duration-200"
                style={{ color: '#555', border: '1px solid #d0d0d0' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1a1a1a'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#555'; e.currentTarget.style.borderColor = '#d0d0d0'; }}
                data-cursor-hover
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Email */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: '#999' }}>
              Email
            </h4>
            <a
              href="mailto:hello@mrkirof.com"
              className="font-body text-base transition-colors duration-200"
              style={{ color: '#333' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'hsl(217, 92%, 60%)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#333'; }}
              data-cursor-hover
            >
              hello@mrkirof.com
            </a>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#22c55e' }}></span>
              <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: '#22c55e' }}></span>
            </span>
            <span className="font-body text-sm" style={{ color: '#555' }}>
              Currently accepting projects
            </span>
          </div>

          {/* Start a Project CTA */}
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-display font-bold text-sm pl-8 pr-4 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg group"
              style={{ backgroundColor: 'hsl(217, 92%, 60%)', color: '#fff' }}
              data-cursor-hover
            >
              Start a Project
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: '1px solid #e0e0e0' }}>
        <p className="text-xs font-mono" style={{ color: '#999' }}>
          © {new Date().getFullYear()} All rights reserved. Crafted with obsession.
        </p>
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: '#bbb' }}>
            REMOTE-FIRST · EST. 2013
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{ border: '1px solid #d0d0d0', color: '#888' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1a1a1a'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#888'; e.currentTarget.style.borderColor = '#d0d0d0'; }}
            data-cursor-hover
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
