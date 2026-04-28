"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const especialidades = [
  { label: "Facetas & Lentes",    href: "/facetas" },
  { label: "Implantes",           href: "/implantes" },
  { label: "Clareamento",         href: "/clareamento" },
  { label: "Alinhador Invisível", href: "/alinhador" },
  { label: "Endodontia",          href: "/endodontia" },
  { label: "Cirurgia Oral",       href: "/cirurgia" },
];

const navLinks = [
  { label: "Contato", href: "/contato" },
];

interface NavbarProps {
  ctaHref?: string;
  /**
   * "dark"  → hero com fundo escuro (padrão — landing pages existentes)
   * "light" → hero com fundo claro (páginas educativas)
   */
  theme?: "dark" | "light";
}

export function Navbar({ ctaHref = "/contato?source=geral", theme = "dark" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileEspOpen, setMobileEspOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  const isLight = theme === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Estilos adaptativos ──────────────────────────────────
  // Antes do scroll: claro = links escuros sobre fundo transparente
  //                  escuro = links brancos sobre fundo transparente
  // Depois do scroll: sempre fundo verde escuro + links brancos
  const linkColor = scrolled
    ? "rgba(255,255,255,0.85)"
    : isLight
    ? "#0E2A26"        // verde escuro legível sobre fundo creme
    : "rgba(255,255,255,0.8)";

  const linkHoverColor = scrolled || !isLight ? "white" : "#8E6F3A";

  const headerBg = scrolled
    ? "rgba(14, 42, 38, 0.95)"
    : "transparent";

  const headerBorder = scrolled ? "1px solid rgba(203, 178, 122, 0.25)" : "none";
  const headerPad    = scrolled ? "0.6rem 0" : "1.2rem 0";

  // Logo: antes do scroll em página clara → versão verde; depois do scroll → dourada; páginas escuras → dourada sempre
  const logoSrc = scrolled || !isLight ? "/Logos/logo-gold.png" : "/Logos/logo-green.png";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: headerBg,
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: headerBorder,
          padding: headerPad,
          transition: "all 0.4s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="select-none">
            <Image
              src={logoSrc}
              alt="Elysium Odontologia"
              width={160}
              height={37}
              style={{ display: "block", transition: "opacity 0.3s" }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Especialidades dropdown */}
            <div ref={dropRef} className="relative">
              <button
                id="nav-especialidades"
                onClick={() => setDropOpen((v) => !v)}
                className="flex items-center gap-1.5 text-sm font-body font-medium transition-colors duration-200 relative group"
                style={{ color: linkColor }}
              >
                Especialidades
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{ transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "linear-gradient(90deg, #8E6F3A, #F3E6C2)" }}
                />
              </button>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    key="dropdown"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-3 w-52 rounded-2xl overflow-hidden"
                    style={{
                      background: "rgba(14, 42, 38, 0.97)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(203, 178, 122, 0.2)",
                      boxShadow: "0 24px 48px rgba(0,0,0,0.4)",
                    }}
                  >
                    {especialidades.map((esp, i) => (
                      <a
                        key={esp.href}
                        href={esp.href}
                        id={`nav-esp-${i}`}
                        onClick={() => setDropOpen(false)}
                        className="block px-5 py-3 font-body text-sm text-white/75 hover:text-white hover:bg-white/5 transition-colors"
                        style={{ borderBottom: i < especialidades.length - 1 ? "1px solid rgba(203, 178, 122, 0.08)" : "none" }}
                      >
                        {esp.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other links */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-body font-medium transition-colors duration-200 relative group"
                style={{ color: linkColor }}
                onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: "linear-gradient(90deg, #8E6F3A, #F3E6C2)" }}
                />
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              id="nav-cta"
              href={ctaHref}
              className="btn-gold px-7 py-2.5 text-sm font-bold inline-block"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            className="lg:hidden p-1"
            style={{ color: linkColor }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer — sempre fundo escuro */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-10 overflow-y-auto"
            style={{ background: "rgba(14, 42, 38, 0.98)", backdropFilter: "blur(24px)" }}
          >
            {/* Logo mobile */}
            <div className="absolute top-5 left-6">
              <Image
                src="/Logos/logo-gold.png"
                alt="Elysium Odontologia"
                width={130}
                height={30}
                style={{ display: "block" }}
              />
            </div>

            {/* Especialidades accordion */}
            <div className="border-b py-4" style={{ borderColor: "rgba(203, 178, 122, 0.2)" }}>
              <button
                onClick={() => setMobileEspOpen((v) => !v)}
                className="flex items-center justify-between w-full text-3xl font-heading text-white"
              >
                Especialidades
                <ChevronDown
                  className="w-6 h-6 transition-transform"
                  style={{ transform: mobileEspOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              <AnimatePresence>
                {mobileEspOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-1 mt-4 pl-2">
                      {especialidades.map((esp) => (
                        <a
                          key={esp.href}
                          href={esp.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-lg font-body text-white/70 hover:text-white py-2 transition-colors"
                          style={{ borderBottom: "1px solid rgba(203, 178, 122, 0.08)" }}
                        >
                          {esp.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-heading text-white border-b py-4"
                style={{ borderColor: "rgba(203, 178, 122, 0.2)" }}
              >
                {link.label}
              </motion.a>
            ))}

            <a
              href={ctaHref}
              id="mobile-nav-cta"
              onClick={() => setMobileOpen(false)}
              className="btn-gold mt-6 py-4 text-center text-lg font-bold"
            >
              Agendar Consulta
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
