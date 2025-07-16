"use client";

export default function Landing() {
    return (
      <div
        className="flex flex-col justify-center items-center py-16 relative overflow-hidden"
        style={{ background: '#FFFFE3' }}
      >
        {/* Steam effect overlay */}
        <div className="absolute left-[40%] top-[15%] -translate-x-1/2 z-30 w-24 h-32 pointer-events-none">
          <div className="steam-wisp steam-wisp1"></div>
          <div className="steam-wisp steam-wisp2"></div>
          <div className="steam-wisp steam-wisp3"></div>
        </div>
        <img
          src="/images/hero-v1-final.png"
          alt="Iris Bakehouse Hero"
          className="h-[50vh] w-full object-cover relative z-20"
        />
        <div className="w-full flex justify-center mt-8 z-30 relative">
          <button
            className="px-8 py-3 rounded-full text-[var(--background)] mt-8 bg-[var(--foreground)] font-semibold text-lg shadow hover:opacity-90 transition"
          >
            Order Now
          </button>
        </div>
        <style jsx>{`
          .steam-wisp {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 16px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 100%);
            opacity: 0.7;
            filter: blur(1px);
            pointer-events: none;
          }
          .steam-wisp1 {
            animation: steam-rise1 2.5s linear infinite;
            margin-left: -24px;
          }
          .steam-wisp2 {
            animation: steam-rise2 2.8s linear infinite 0.7s;
            margin-left: 0px;
          }
          .steam-wisp3 {
            animation: steam-rise3 2.2s linear infinite 1.2s;
            margin-left: 24px;
          }
          @keyframes steam-rise1 {
            0% { transform: translateY(0) scaleX(1); opacity: 0.7; }
            40% { transform: translateY(-20px) scaleX(1.1); opacity: 0.5; }
            80% { transform: translateY(-50px) scaleX(0.9); opacity: 0.3; }
            100% { transform: translateY(-60px) scaleX(1); opacity: 0; }
          }
          @keyframes steam-rise2 {
            0% { transform: translateY(0) scaleX(1); opacity: 0.7; }
            40% { transform: translateY(-25px) scaleX(0.95); opacity: 0.5; }
            80% { transform: translateY(-55px) scaleX(1.05); opacity: 0.3; }
            100% { transform: translateY(-65px) scaleX(1); opacity: 0; }
          }
          @keyframes steam-rise3 {
            0% { transform: translateY(0) scaleX(1); opacity: 0.7; }
            40% { transform: translateY(-18px) scaleX(1.08); opacity: 0.5; }
            80% { transform: translateY(-48px) scaleX(0.92); opacity: 0.3; }
            100% { transform: translateY(-58px) scaleX(1); opacity: 0; }
          }
        `}</style>
      </div>
    );
}

