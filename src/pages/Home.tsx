import { useState, useEffect } from "react";
import {
  Code,
  BookOpen,
  Rocket,
  ChevronRight,
  Star,
  Coffee,
  Terminal,
  Zap,
  Sparkles,
  Trophy,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

// Function Utama
const DevJourneyLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
// Variable array learning tips
  const learningTips = [
    "Building projects while learning",
    "Documenting every breakthrough",
    "Sharing knowledge with others",
    "Embracing the debugging journey",
  ];
// variable States
  const stats = [
    {
      value: "50+",
      label: "Hours Coded",
      color: "text-purple-600",
      icon: Code,
    },
    {
      value: "12",
      label: "Projects Built",
      color: "text-blue-600",
      icon: Rocket,
    },
    { value: "8", label: "Technologies", color: "text-green-600", icon: Zap },
    { value: "∞", label: "Bugs Fixed", color: "text-orange-600", icon: Trophy },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % learningTips.length);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [learningTips.length]);

  return (
    <div className="home min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden transition-colors duration-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Cursor Follower */}
      <motion.div
        className="fixed w-4 h-4 bg-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Background Animation Elements */}
      <BackgroundElements backgroundY={backgroundY} />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Floating Icons */}
      <FloatingIcons />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <HeaderSection isVisible={isVisible} />

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <LeftContent
            isVisible={isVisible}
            currentTip={currentTip}
            learningTips={learningTips}
          />

          {/* Right Illustration */}
          <RightIllustration isVisible={isVisible} />
        </div>

        {/* Stats Section */}
        <StatsSection isVisible={isVisible} stats={stats} />
      </div>
    </div>
  );
};

// Enhanced Background Animation Component
const BackgroundElements = ({
  backgroundY,
}: {
  backgroundY: MotionValue<number>;
}) => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ y: backgroundY }}
    />
    <motion.div
      className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      animate={{
        scale: [1.2, 1, 1.2],
        rotate: [360, 180, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ y: backgroundY }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"
      animate={{
        scale: [1, 1.5, 1],
        rotate: [0, -180, -360],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </div>
);

// Floating Particles Component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-purple-300 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          y: [null, -20, null],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

// Enhanced Floating Icons Component
const FloatingIcons = () => (
  <>
    <motion.div
      className="absolute top-20 left-10 text-purple-300"
      animate={{
        y: [0, -15, 0],
        rotate: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <Code size={24} />
    </motion.div>

    <motion.div
      className="absolute top-40 right-20 text-blue-300"
      animate={{
        y: [0, -10, 0],
        x: [0, 5, 0],
        rotate: [0, -15, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3.5,
        ease: "easeInOut",
        delay: 1,
      }}
    >
      <Terminal size={20} />
    </motion.div>

    <motion.div
      className="absolute bottom-40 left-20 text-green-300"
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
        delay: 2,
      }}
    >
      <Sparkles size={18} />
    </motion.div>
  </>
);

// Enhanced Header Section Component
const HeaderSection = ({ isVisible }: { isVisible: boolean }) => (
  <motion.div
    className="text-center mb-4"
    initial={{ opacity: 0, y: 60, scale: 0.8 }}
    animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
    }}
  >
    <motion.div
      className="inline-flex items-center gap-3 mb-6 mt-6 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-lg"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="w-3 h-3 bg-green-400 rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <span className="title text-gray-600 text-sm font-medium">
        Currently Learning
      </span>
    </motion.div>

    <div className="text-center">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Documenting My Dev Journey
        <br />
        <motion.span
          className="inline-block ml-3"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          🚀
        </motion.span>
      </motion.h1>
    </div>
  </motion.div>
);

// Enhanced Left Content Component
const LeftContent = ({
  isVisible,
  currentTip,
  learningTips,
}: {
  isVisible: boolean;
  currentTip: number;
  learningTips: string[];
}) => (
  <motion.div
    className="space-y-8"
    initial={{ opacity: 0, x: -60 }}
    animate={isVisible ? { opacity: 1, x: 0 } : {}}
    transition={{
      duration: 1,
      delay: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
  >
    {/* Welcome Section */}
    <WelcomeSection />

    {/* Learning Tip Carousel */}
    <LearningTipCarousel currentTip={currentTip} learningTips={learningTips} />

    {/* CTA Buttons */}
    <CTAButtons />

    {/* Follow Button */}
    <FollowButton />
  </motion.div>
);

// Enhanced Welcome Section Component
const WelcomeSection = () => (
  <motion.div
    className="space-y-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.8 }}
  >
    <motion.h2
      className="title text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed dark:text-white"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      Selamat Datang!
    </motion.h2>
    <motion.h3
      className="title font-semibold text-gray-800 leading-relaxed dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      Ini adalah Web portofolio sekaligus blog saya untuk membagikan pelajaran
      coding saya
    </motion.h3>
    <motion.p
      className="desc text-lg text-gray-600 leading-relaxed dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      Di sini gue bakal share perjalanan belajar gue sebagai seorang Front End
      Developer. Gue akan bagikan materi yang terstruktur, pake bahasa Indonesia
      yang gampang dipahami dan nggak ribet — biar belajar coding jadi lebih
      santai tapi tetap ngena!
    </motion.p>
  </motion.div>
);

// Enhanced Learning Tip Carousel Component
const LearningTipCarousel = ({
  currentTip,
  learningTips,
}: {
  currentTip: number;
  learningTips: string[];
}) => (
  <motion.div
    className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
    whileHover={{
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  >
    <div className="flex items-center gap-3 mb-3">
      <motion.div
        className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Star className="w-4 h-4 text-white" />
      </motion.div>
      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
        Currently Focused On
      </span>
    </div>
    <AnimatePresence mode="wait">
      <motion.p
        key={currentTip}
        className="text-gray-800 font-medium text-lg"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.8 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {learningTips[currentTip]}
      </motion.p>
    </AnimatePresence>
  </motion.div>
);

// Enhanced CTA Buttons Component
const CTAButtons = () => (
  <motion.div
    className="flex flex-col sm:flex-row gap-4 pt-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
  >
    <motion.a
      href="#about"
      className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg flex items-center justify-center gap-2 relative overflow-hidden"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="relative z-10 flex items-center gap-2"
        whileHover={{ x: 2 }}
      >
        <motion.div
          animate={{ rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Rocket className="w-5 h-5" />
        </motion.div>
        Start Exploring
        <motion.div
          className="group-hover:translate-x-1 transition-transform"
          whileHover={{ x: 3 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </motion.a>

    <motion.a
      href="#projects"
      className="group bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg border border-white/20 flex items-center justify-center gap-2 relative overflow-hidden"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        borderColor: "rgba(147, 51, 234, 0.3)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <BookOpen className="w-5 h-5" />
      See My Projects
    </motion.a>
  </motion.div>
);

// Enhanced Follow Button Component
const FollowButton = () => (
  <motion.div
    className="pt-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.4, duration: 0.6 }}
  >
    <motion.button
      className="group bg-gray-800 text-white px-6 py-3 rounded-2xl font-medium shadow-lg flex items-center gap-2 relative overflow-hidden"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Coffee className="w-4 h-4" />
      </motion.div>
      Follow My Learning
      <motion.div
        className="w-2 h-2 bg-green-400 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.button>
  </motion.div>
);

// Enhanced Right Illustration Component
const RightIllustration = ({ isVisible }: { isVisible: boolean }) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, x: 60, scale: 0.8 }}
    animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
    transition={{
      duration: 1.2,
      delay: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
  >
    <div className="relative">
      <motion.div
        className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <DeveloperIllustration />
      </motion.div>
      <FloatingActionIcons />
    </div>
  </motion.div>
);

// Enhanced Developer Illustration Component
const DeveloperIllustration = () => (
  <div className="relative">
    {/* Desk */}
    <motion.div
      className="w-full h-4 bg-gradient-to-r from-amber-200 to-amber-300 rounded-lg mb-4 shadow-sm"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
    />

    {/* Monitor */}
    <motion.div
      className="bg-gray-800 rounded-lg p-4 mb-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <MonitorScreen />
    </motion.div>

    {/* Character */}
    <Character />
  </div>
);

// Enhanced Monitor Screen Component
const MonitorScreen = () => (
  <div className="bg-gray-900 rounded-md p-3 h-32 relative overflow-hidden">
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <motion.div
          className="w-2 h-2 bg-red-400 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.div
          className="w-2 h-2 bg-yellow-400 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
        />
        <motion.div
          className="w-2 h-2 bg-green-400 rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
        />
      </div>
      <div className="space-y-1 mt-3">
        <motion.div
          className="w-3/4 h-2 bg-blue-400 rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />
        <motion.div
          className="w-1/2 h-2 bg-purple-400 rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        />
        <motion.div
          className="w-5/6 h-2 bg-green-400 rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.9, duration: 0.8 }}
        />
        <motion.div
          className="w-2/3 h-2 bg-yellow-400 rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.1, duration: 0.8 }}
        />
      </div>
    </div>
    <motion.div
      className="absolute bottom-2 left-6 w-0.5 h-4 bg-white"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
    />
  </div>
);

// Enhanced Character Component
const Character = () => (
  <motion.div
    className="flex justify-center mb-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.4, duration: 0.6 }}
  >
    <motion.div
      className="relative"
      animate={{
        y: [0, -2, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      }}
    >
      {/* Head */}
      <motion.div
        className="w-12 h-12 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full mb-2 shadow-sm relative"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-gray-700 rounded-full" />
        <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-gray-700 rounded-full" />
        <motion.div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gray-700 rounded-full"
          animate={{ scaleX: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </motion.div>
      {/* Body */}
      <div className="w-16 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-sm" />
    </motion.div>
  </motion.div>
);

// Enhanced Floating Action Icons Component
const FloatingActionIcons = () => (
  <>
    <motion.div
      className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
      animate={{
        y: [0, -8, 0],
        rotate: [0, 10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.2 }}
    >
      <Code className="w-6 h-6 text-white" />
    </motion.div>

    <motion.div
      className="absolute -bottom-4 -left-4 w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg"
      animate={{
        y: [0, -6, 0],
        x: [0, 3, 0],
        rotate: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
        delay: 1,
      }}
      whileHover={{ scale: 1.2 }}
    >
      <Terminal className="w-5 h-5 text-white" />
    </motion.div>

    <motion.div
      className="absolute top-1/2 -right-6 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shadow-lg"
      animate={{
        scale: [1, 1.3, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
        delay: 0.5,
      }}
      whileHover={{ scale: 1.4 }}
    >
      <div className="w-3 h-3 bg-white rounded-full" />
    </motion.div>
  </>
);

// Stats Section Component
const StatsSection = ({
  isVisible,
  stats,
}: {
  isVisible: boolean;
  stats: {
    value: string;
    label: string;
    color: string;
    icon: React.ElementType;
  }[];
}) => (
  <motion.div
    className="mt-24 max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1, delay: 1.5 }}
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.7 + index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <StatCard stat={stat} index={index} />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Stat Card Component
const StatCard = ({
  stat,
  index,
}: {
  stat: {
    value: string;
    label: string;
    color: string;
    icon: React.ElementType;
  };
  index: number;
}) => {
  const Icon = stat.icon;

  return (
    <motion.div
      className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 relative overflow-hidden flex flex-col items-center justify-center h-full"
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 1 + index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        y: -8,
        borderColor: "rgba(147, 51, 234, 0.3)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Hover background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-blue-100/30 to-indigo-100/50 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0"
        whileHover={{
          opacity: 1,
          x: ["100%", "200%"],
        }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Icon */}
        <motion.div
          className="mb-3"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{
            scale: 1.2,
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            // Menggabungkan delay dari transisi pertama
            delay: 1.2 + index * 0.1,
            // Menggunakan pengaturan spesifik dari transisi kedua
            rotate: { duration: 0.5 },
            scale: { type: "spring", stiffness: 300, damping: 20 },
          }}
        >
          <Icon className={`w-8 h-8 ${stat.color}`} />
        </motion.div>

        {/* Animated Value */}
        <motion.div
          className={`text-2xl font-bold ${stat.color} mb-2`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1.4 + index * 0.1,
            duration: 0.6,
            type: "spring",
            stiffness: 150,
          }}
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 8px rgba(147, 51, 234, 0.3)",
          }}
        >
          {stat.value}
        </motion.div>

        {/* Animated Label */}
        <motion.div
          className="text-gray-600 text-sm font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.6 + index * 0.1,
            duration: 0.5,
          }}
          whileHover={{
            color: "#6366f1",
            scale: 1.05,
          }}
        >
          {stat.label}
        </motion.div>
      </div>

      {/* Floating particles effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        whileHover="hover"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{
              x: "50%",
              y: "50%",
              opacity: 0,
              scale: 0,
            }}
            variants={{
              hover: {
                x: `${50 + (Math.random() - 0.5) * 100}%`,
                y: `${50 + (Math.random() - 0.5) * 100}%`,
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                transition: {
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                },
              },
            }}
          />
        ))}
      </motion.div>

      {/* Pulsing border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-purple-300 opacity-0"
        whileHover={{
          opacity: [0, 0.6, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default DevJourneyLanding;
