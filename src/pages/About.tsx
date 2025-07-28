import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
import TechStackPage from "./TechStack";
import { motion } from "framer-motion";

// ==== TYPES ====

type SocialMediaItem = {
  name: string;
  url: string;
  icon: React.ComponentType<{ className: string }>;
  gradient: string;
  hoverGradient: string;
  textColor: string;
};

type PersonalInfo = {
  name: string;
  role: string;
  email: string;
  profileImage: string;
  socialMedia: SocialMediaItem[];
};

type AboutCardProps = {
  isVisible: boolean;
  personalInfo: PersonalInfo;
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
};

type ContentSectionProps = {
  isVisible: boolean;
  personalInfo: PersonalInfo;
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
};

type PhotoSectionProps = {
  profileImage: string;
};

type ContactInfoProps = {
  email: string;
  socialMedia: SocialMediaItem[];
};

type SocialMediaIconProps = {
  social: SocialMediaItem;
};

type AdditionalSectionsProps = {
  isVisible: boolean;
};

// ==== MAIN COMPONENT ====

const AboutMePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const personalInfo: PersonalInfo = {
    name: "Naufal",
    role: "Front End Developer",
    email: "naufalyuu62@gmail.com",
    profileImage: "/src/assets/nopal.jpeg",
    socialMedia: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/naufaru_kun?igsh=MWF1Znd6M3NicnNkDA==",
        icon: SiInstagram,
        gradient:
          "from-purple-100 to-blue-100 dark:from-purple-800 dark:to-blue-800",
        hoverGradient: "hover:from-purple-600 hover:to-blue-600",
        textColor: "text-purple-600 dark:text-purple-300",
      },
      {
        name: "LinkedIn",
        url: "www.linkedin.com/in/muhammad-naufal-dzaky-ba77942a1",
        icon: SiLinkedin,
        gradient:
          "from-blue-100 to-indigo-100 dark:from-blue-800 dark:to-indigo-800",
        hoverGradient: "hover:from-blue-600 hover:to-indigo-600",
        textColor: "text-blue-600 dark:text-blue-300",
      },
      {
        name: "GitHub",
        url: "https://github.com/naufalyuu1234",
        icon: SiGithub,
        gradient:
          "from-pink-100 to-purple-100 dark:from-pink-800 dark:to-purple-800",
        hoverGradient: "hover:from-pink-500 hover:to-purple-500",
        textColor: "text-pink-600 dark:text-pink-300",
      },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="about min-h-screen bg-white dark:bg-gray-900 p-4 relative overflow-hidden"
    >
      <PageHeader />
      <BackgroundShapes />

      <div className="relative z-10 max-w-6xl mx-auto">
        <AboutCard
          isVisible={isVisible}
          personalInfo={personalInfo}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
        <AdditionalSections isVisible={isVisible} />
        <TechStackPage />
      </div>
    </motion.div>
  );
};

// ==== COMPONENTS ====

const PageHeader = () => (
  <div className="text-center py-12 md:py-16">
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
      About Me
    </h1>
  </div>
);

const BackgroundShapes = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-60 animate-pulse" />
    <div className="absolute top-40 right-20 w-24 h-24 bg-coral-300 rounded-full opacity-40" />
    <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full opacity-50" />
    <div className="absolute bottom-20 right-10 w-28 h-28 bg-pink-300 rounded-full opacity-30" />
    <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-200 to-coral-200 rounded-full opacity-20 transform rotate-45" />
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l from-blue-200 to-purple-200 rounded-full opacity-25 transform -rotate-12" />
  </div>
);

const AboutCard = ({
  isVisible,
  personalInfo,
  isHovered,
  setIsHovered,
}: AboutCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden w-full transform hover:scale-[1.02] transition-all duration-1000 ease-in-out"
  >
    <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
      <PhotoSection profileImage={personalInfo.profileImage} />
      <ContentSection
        isVisible={isVisible}
        personalInfo={personalInfo}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
    </div>
  </motion.div>
);

const PhotoSection = ({ profileImage }: PhotoSectionProps) => (
  <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-blue-600/90" />
    <BackgroundDecorations />
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      className="relative z-10 w-80 h-80 bg-gradient-to-br from-navy-600 to-navy-800 rounded-2xl flex items-center justify-center shadow-2xl"
    >
      <div className="w-72 h-72 rounded-xl overflow-hidden">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/300x300?text=Profile";
          }}
        />
      </div>
    </motion.div>
  </div>
);

const BackgroundDecorations = () => (
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full" />
    <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/5 rounded-full" />
    <div className="absolute top-1/2 left-5 w-12 h-12 bg-white/5 rounded-full" />
  </div>
);

const ContentSection = ({
  isVisible,
  personalInfo,
  isHovered,
  setIsHovered,
}: ContentSectionProps) => (
  <div
    className={`p-12 flex flex-col justify-center relative transition-all duration-1000 ease-in-out delay-300 ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
    }`}
  >
    <ProfileHeader name={personalInfo.name} role={personalInfo.role} />
    <Introduction />
    <CTAButton isHovered={isHovered} setIsHovered={setIsHovered} />
    <ContactInfo
      email={personalInfo.email}
      socialMedia={personalInfo.socialMedia}
    />
  </div>
);

const ProfileHeader = ({ name, role }: { name: string; role: string }) => (
  <div className="mb-8 text-gray-900 dark:text-white">
    <h1 className="text-5xl font-bold mb-3">
      Hello, I'm{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
        {name}
      </span>
    </h1>
    <p className="text-2xl text-gray-600 dark:text-gray-300 font-medium">
      {role}
    </p>
  </div>
);

const Introduction = () => (
  <div className="mb-10">
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
      Gue adalah seorang front-end developer yang passionate banget soal desain
      dan teknologi. Gue suka banget bikin tampilan web yang gak cuma keren,
      tapi juga responsif dan enak banget dipake.
    </p>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
      Selain coding, gue juga aktif eksplorasi tools dan teknologi baru biar
      skill gue terus berkembang. Gue percaya kalau kolaborasi dan komunikasi
      itu kunci utama buat bikin proyek yang impactful.
    </p>
  </div>
);

const CTAButton = ({
  isHovered,
  setIsHovered,
}: {
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
}) => (
  <div className="mb-8">
    <a
      href="https://wa.me/6281285750876" // Ganti dengan nomor WhatsApp Anda jika berbeda
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 no-underline w-fit "
    >
      <span>Let's Work Together</span>
      <ChevronRight
        className={`w-5 h-5 transition-transform duration-300 ${
          isHovered ? "translate-x-1" : ""
        }`}
      />
    </a>
  </div>
);

const ContactInfo = ({ email, socialMedia }: ContactInfoProps) => (
  <div className="space-y-4">
    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
      <span className="text-lg">{email}</span>
    </div>
    <div className="flex space-x-4 pt-2">
      {socialMedia.map((social, index) => (
        <SocialMediaIcon key={index} social={social} />
      ))}
    </div>
  </div>
);

const SocialMediaIcon = ({ social }: SocialMediaIconProps) => {
  const IconComponent = social.icon;
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-full flex items-center justify-center ${social.textColor} hover:bg-gradient-to-br ${social.hoverGradient} hover:text-white transition-all duration-300 transform hover:scale-110`}
    >
      <IconComponent className="w-6 h-6" />
    </a>
  );
};

const AdditionalSections = ({ isVisible }: AdditionalSectionsProps) => (
  <div
    className={`mt-16 w-full transition-all duration-1000 ease-in-out delay-500 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  ></div>
);

export default AboutMePage;
