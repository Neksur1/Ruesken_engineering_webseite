import portraitImage from "@/assets/fabian-portrait.jpg";

const Portrait = () => {
  return (
    <div className="relative group">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-luxury-border shadow-2xl relative z-10 glow-effect transition-transform duration-700 ease-out group-hover:scale-[1.02] bg-luxury-base">
        <img
          src={portraitImage}
          alt="Portrait"
          className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/150/1a1a1a/555555?text=RUESKEN";
          }}
        />
      </div>
      {/* Decorative Ring */}
      <div className="absolute inset-0 rounded-full border border-white/5 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
    </div>
  );
};

export default Portrait;
