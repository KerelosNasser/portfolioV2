import { motion, useScroll, useTransform } from "motion/react";

function ParallelBackground() {
  const { scrollYProgress } = useScroll();

  const mountain3y = useTransform(scrollYProgress, [0, 0.5], ["0%", "70%"]);
  const mountain2y = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  const mountain1y = useTransform(scrollYProgress, [0, 0.5], ["0%", "0%"]);
  const planet = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* skybackground */}
        <div
          className="absolute inset-0 h-screen w-full -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />

        {/* layer 3 mountain */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3y,
          }}
        />

        {/* planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planet,
          }}
        />

        {/* layer 2 mountain */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2y,
          }}
        />

        {/* layer 1 mountain */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1y,
          }}
        />
      </div>
    </section>
  );
}

export default ParallelBackground;