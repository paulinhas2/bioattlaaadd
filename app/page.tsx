"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, MessageCircle, CheckCircle2, Gamepad2, Car, DollarSign, Send, AlertTriangle } from "lucide-react"

export default function KCPModsBioPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeCard, setActiveCard] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const floatingIcons = [
    { icon: Car, delay: 0, x: "10%", y: "20%" },
    { icon: DollarSign, delay: 0.5, x: "80%", y: "15%" },
    { icon: Gamepad2, delay: 1, x: "15%", y: "75%" },
    { icon: Car, delay: 1.5, x: "85%", y: "70%" },
    { icon: DollarSign, delay: 2, x: "50%", y: "10%" },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "linear-gradient(135deg, #8b5cf6, #f97316)" }}
          animate={{
            x: ["-50%", "50%", "-50%"],
            y: ["-20%", "30%", "-20%"],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[250px] h-[250px] rounded-full opacity-15 blur-[80px]"
          style={{ background: "linear-gradient(135deg, #22c55e, #8b5cf6)" }}
          animate={{
            x: ["50%", "-30%", "50%"],
            y: ["50%", "-20%", "50%"],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-white/5"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <item.icon size={40} />
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center px-4 py-8 max-w-md mx-auto">
        {/* Logo Section */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="relative mb-6"
        >
          {/* Glowing Ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #f97316, #22c55e)",
              padding: "4px",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-[#0a0a0a]" />
          </motion.div>

          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#8b5cf6]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Logo Image */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#8b5cf6]/50 shadow-lg shadow-[#8b5cf6]/30">
            <img
              src="/images/kcp-logo.jpg"
              alt="KCP MODS Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2"
        >
          <h1 className="text-3xl font-bold text-white flex items-center gap-2 justify-center" style={{ fontFamily: "var(--font-heading)" }}>
            KCP MODS
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <CheckCircle2 className="w-6 h-6 text-[#22c55e]" />
            </motion.span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-[#a1a1aa] text-sm tracking-widest uppercase mb-6 text-center"
        >
           MODS • 100% ATUALIZADOS • PATCH  
        </motion.p>

        {/* Stats Bar */}
        

        {/* Main Action Cards */}
        <div className="w-full space-y-4">
          {/* Buy Card - DESTACADO */}
          <motion.a
            href="https://pay.cakto.com.br/vc6t2bg_725015"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -100, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setActiveCard("buy")}
            onHoverEnd={() => setActiveCard(null)}
            className="relative block w-full rounded-2xl overflow-hidden group shadow-2xl shadow-[#f97316]/40"
          >
            {/* Outer Glow Effect */}
            <motion.div
              className="absolute -inset-1 rounded-2xl opacity-75 blur-sm"
              style={{ background: "linear-gradient(135deg, #f97316, #22c55e, #f97316)" }}
              animate={{
                background: [
                  "linear-gradient(135deg, #f97316, #22c55e, #f97316)",
                  "linear-gradient(135deg, #22c55e, #f97316, #22c55e)",
                  "linear-gradient(135deg, #f97316, #22c55e, #f97316)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Card Background Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f97316] via-[#ea580c] to-[#c2410c]" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("/images/kcp-logo.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Animated Particles */}
            <motion.div
              className="absolute top-2 right-10 w-2 h-2 bg-white/60 rounded-full"
              animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute top-6 right-20 w-1.5 h-1.5 bg-white/50 rounded-full"
              animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
            />
            <motion.div
              className="absolute bottom-4 left-20 w-1 h-1 bg-white/40 rounded-full"
              animate={{ y: [0, -8, 0], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
            />

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2"
              animate={{ borderColor: ["#ffffff50", "#22c55e", "#ffffff50"] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* HOT Badge */}
            <motion.div
              className="absolute -top-1 -right-1 z-20"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              
            </motion.div>

            {/* Content */}
            <div className="relative p-6 flex items-center gap-4">
              <motion.div
                className="w-18 h-18 rounded-xl bg-white/25 backdrop-blur-sm flex items-center justify-center p-4"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <ShoppingCart className="w-10 h-10 text-white drop-shadow-lg" />
              </motion.div>
              <div className="flex-1">
                
                <h3 className="text-white text-2xl font-bold drop-shadow-md" style={{ fontFamily: "var(--font-heading)" }}>
                  ADQUIRA SEUS MODS
                </h3>
                <p className="text-white/90 text-sm font-medium">
                  Adquira o GTA RP no Console AQUI          
                </p>
              </div>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="text-white bg-white/20 rounded-full p-2"
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.div>
            </div>

            {/* Shine Effect - Mais intenso */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
              }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.5 }}
            />
          </motion.a>

          {/* WhatsApp Card - HTML PURO para Deep Link funcionar no TikTok WebView */}
          <a
            href="https://api.whatsapp.com/send/?phone=5521969905171&text=Quero+saber+mais+sobre+o+GTA+RP+no+console&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float-btn relative block w-full rounded-2xl overflow-hidden group transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ 
              opacity: isLoaded ? 1 : 0, 
              transform: isLoaded ? 'translateX(0)' : 'translateX(100px)',
              transition: 'opacity 0.5s ease 0.8s, transform 0.5s ease 0.8s'
            }}
          >
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/90 to-[#16a34a]/90" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("/images/kcp-logo.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#22c55e]/50 group-hover:border-[#22c55e]" />

            {/* Content */}
            <div className="relative p-6 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  FALE CONOSCO
                </h3>
                <p className="text-white/80 text-sm">
                  Suporte rapido via WhatsApp
                </p>
              </div>
              <div className="text-white">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
          </a>

          {/* Telegram Card */}
          <motion.a
            href="https://t.me/kcpmods"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -100, opacity: 0 }}
            animate={isLoaded ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setActiveCard("telegram")}
            onHoverEnd={() => setActiveCard(null)}
            className="relative block w-full rounded-2xl overflow-hidden group"
          >
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0088cc]/90 to-[#229ED9]/90" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("/images/kcp-logo.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              animate={activeCard === "telegram" ? { borderColor: ["#0088cc", "#229ED9", "#0088cc"] } : {}}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Content */}
            <div className="relative p-6 flex items-center gap-4">
              <motion.div
                className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Send className="w-8 h-8 text-white" />
              </motion.div>
              <div className="flex-1">
                
                <h3 className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  {"ATENDIMENTO"}
                </h3>
                <p className="text-white/80 text-sm">
                  Atendimento 24 horas via Telegram   
                </p>
              </div>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="text-white"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.div>
            </div>

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
            />
          </motion.a>

          {/* Alert Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            className="w-full bg-[#fbbf24]/10 border border-[#fbbf24]/30 rounded-xl p-4"
          >
            <div className="flex items-start gap-3">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <AlertTriangle className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-0.5" />
              </motion.div>
              <div className="flex-1">
                <p className="text-[#fbbf24] text-sm font-medium">
                  Suporte via WhatsApp com possivel instabilidade, entre em contato via Telegram
                </p>
                <p className="text-[#a1a1aa] text-xs mt-1">
                  19/01/2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isLoaded ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="w-full mt-8 grid grid-cols-2 gap-3"
        >
          {[
            { icon: "🎮", title: "Mods Premium", desc: "Alta qualidade" },
            { icon: "⚡", title: "Entrega Rápida", desc: "Imediata" },
            { icon: "🛡️", title: "Seguro", desc: "100% confiável" },
            { icon: "💬", title: "Suporte", desc: "24 horas" },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ scale: 0 }}
              animate={isLoaded ? { scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-4 text-center"
            >
              <span className="text-2xl mb-2 block">{feature.icon}</span>
              <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
              <p className="text-[#a1a1aa] text-xs">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-10 text-center"
        >
          <p className="text-[#a1a1aa] text-xs">
            © 2026 KCP MODS - Todos os direitos reservados
          </p>
          
        </motion.footer>
      </div>

      {/* Floating Action Buttons */}
      <AnimatePresence>
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          {/* Telegram Button */}
          <motion.a
            href="https://t.me/kcpmods"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: 0.1 }}
            className="relative w-14 h-14 bg-[#0088cc] rounded-full flex items-center justify-center shadow-lg shadow-[#0088cc]/30"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
            >
              <Send className="w-6 h-6 text-white" />
            </motion.div>

            {/* Pulse Ring */}
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-[#0088cc]"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.a>

          {/* WhatsApp Button - HTML PURO para Deep Link funcionar no TikTok WebView */}
          <a
            href="https://api.whatsapp.com/send/?phone=5521969905171&text=Quero+saber+mais+sobre+o+GTA+RP+no+console&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 bg-[#22c55e] rounded-full flex items-center justify-center shadow-lg shadow-[#22c55e]/30 transition-transform duration-150 hover:scale-110 active:scale-90 whatsapp-float-btn"
          >
            <MessageCircle className="w-7 h-7 text-white" />

            {/* Pulse Ring - CSS Animation */}
            <span className="absolute inset-0 rounded-full border-2 border-[#22c55e] animate-ping opacity-50" />
          </a>
        </div>
      </AnimatePresence>
    </main>
  )
}
