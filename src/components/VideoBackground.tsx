import { motion } from "framer-motion";

type VideoBackgroundProps = {
  image: string;
  alt: string;
  className?: string;
};

export function VideoBackground({ image, alt, className = "" }: VideoBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.img
        src={image}
        alt={alt}
        className="h-full w-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <div className="noise-overlay absolute inset-0 opacity-[0.55]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/70" />
      <div className="hero-radial absolute inset-0" />
    </div>
  );
}
