import { motion } from "motion/react";
import { WifiOff, Phone, RefreshCw, Eye, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function OfflinePage({ onContinueToCached }) {
  const { personal } = portfolioData;

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col justify-between selection:bg-red-900/60 selection:text-red-200">
      {/* Top Red Ambient Bloom */}
      <div
        className="blob-animate absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(220, 38, 38, 0.22) 0%, rgba(153, 27, 27, 0.08) 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-md w-full text-center flex flex-col items-center gap-7">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-red-400 bg-red-950/40 border border-red-900/50 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#EF4444]" />
            <span>OFFLINE MODE • DISCONNECTED</span>
          </motion.div>

          {/* Icon with Glowing Ring */}
          <div className="relative">
            <div
              className="w-24 h-24 rounded-3xl flex items-center justify-center text-white font-extrabold shadow-[0_0_30px_rgba(220,38,38,0.4)] border border-red-900/50 bg-[#070102]"
              style={{ background: "linear-gradient(145deg, #100204, #020001)" }}
            >
              <WifiOff size={42} className="text-red-500" aria-hidden="true" />
            </div>
          </div>

          {/* Heading and Copy */}
          <div className="flex flex-col gap-2.5">
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              You Are Offline
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              No internet connection detected. The portfolio is saved offline, or you can contact Muddasir directly by phone.
            </p>
          </div>

          {/* Direct Contact Card */}
          <div className="w-full p-5 rounded-2xl amoled-card flex items-center justify-between gap-4 text-left">
            <div>
              <p className="font-heading font-bold text-sm text-white">{personal.name}</p>
              <p className="text-xs text-red-400 font-mono">HR Professional</p>
              <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1 font-mono">
                <MapPin size={11} className="text-red-400" />
                <span>G-9, Islamabad</span>
              </div>
            </div>
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-md transition-transform active:scale-95"
              style={{ background: "linear-gradient(135deg, #EF4444, #991B1B)" }}
            >
              <Phone size={13} />
              <span>Call</span>
            </a>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
            <motion.button
              onClick={handleRetry}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-white text-sm font-bold shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all cursor-pointer"
              style={{ background: "linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #991B1B 100%)" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <RefreshCw size={15} />
              <span>Retry Connection</span>
            </motion.button>

            {onContinueToCached && (
              <motion.button
                onClick={onContinueToCached}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold border border-red-900/50 text-red-300 bg-red-950/30 hover:bg-red-900/40 transition-all cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Eye size={15} />
                <span>View Cached Site</span>
              </motion.button>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-5 text-center border-t border-red-950/30 text-xs font-mono text-slate-500">
        <p>© 2026 Muddasir Abbas • G-9, Islamabad, Pakistan</p>
      </footer>
    </div>
  );
}
