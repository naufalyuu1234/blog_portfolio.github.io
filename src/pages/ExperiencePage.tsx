import { useState } from "react";
import { ChevronRight, ExternalLink, Calendar, MapPin } from "lucide-react";
import React from "react";

// Interface
interface Experience {
  title: string;
  role: string;
  org: string;
  period: string;
  description: string[];
  tech: string[];
  link: string;
}

// Interface Props
interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {title, role, org, period, description, tech, link} = experience;

  return (
    <div
      className="group bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-indigo-50/30 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
            {title}
          </h3>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                <span className="text-purple-600 dark:text-purple-400 font-semibold text-base">
                  {role}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{org}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-800 dark:to-blue-800 px-4 py-2 rounded-full self-start lg:self-center">
              <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">
                {period}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <ul className="space-y-3">
            {description.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {tech.map((technology, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-xs font-semibold border border-purple-200/50 dark:border-purple-700/50 hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-800/50 dark:hover:to-blue-800/50 transition-all duration-300 transform hover:scale-105"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Link Button */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Lihat Project</span>
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-300 ${
                isHovered ? "translate-x-1" : ""
              }`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

// Komponen ExperienceSection dengan desain yang matching
const ExperienceSection = ({ experiences, }: { experiences: Experience[] }) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 relative overflow-hidden">
      {/* Background Abstract Shapes - Matching AboutMePage */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-40 h-40 bg-pink-200 dark:bg-pink-800/30 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-64 right-24 w-32 h-32 bg-purple-300 dark:bg-purple-700/30 rounded-full opacity-30"></div>
        <div className="absolute bottom-48 left-1/4 w-48 h-48 bg-blue-200 dark:bg-blue-800/30 rounded-full opacity-35"></div>
        <div className="absolute bottom-32 right-16 w-36 h-36 bg-indigo-300 dark:bg-indigo-700/30 rounded-full opacity-25"></div>

        {/* Blob shapes */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-800/20 dark:to-purple-800/20 rounded-full opacity-15 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-l from-blue-200 to-indigo-200 dark:from-blue-800/20 dark:to-indigo-800/20 rounded-full opacity-20 transform -rotate-12"></div>
      </div>

      {/* Container untuk semua konten */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Experience
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Berikut adalah Pengalaman saya dalam dunia coding dan Front End
              Developer.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-4"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div
          className={`grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 transform transition-all duration-1000 ease-in-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ease-in-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <ExperienceCard
                experience={experience}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 ease-in-out delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Tertarik untuk berkolaborasi?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Mari diskusikan project impian kamu dan wujudkan bersama!
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>
                <a
                  href="https://wa.me/6281285750876"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                </a>
              </span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo data untuk preview
// Menambahkan tipe Experience[] secara eksplisit adalah praktik yang baik
const demoExperiences: Experience[] = [
  {
    title: "Joblink Application",
    role: "Frontend Developer",
    org: "GDOC Gunadarma",
    period: "Feb 2025 - March 2025",
    description: [
      "Joblink adalah aplikasi pencarian pekerjaan untuk kaum disabilitas yang dikembangkan untuk memenuhi kebutuhan aksesibilitas dan inklusi, kami merancang aplikasi ini bertujuan untuk membantu kaum disabilitas dalam mencari pekerjaan yang sesuai dengan kemampuan mereka.",
      "Saya mengimplementasikan fitur-fitur seperti pencarian pekerjaan yang mudah diakses, filter berdasarkan jenis disabilitas, dan integrasi dengan platform sosial untuk meningkatkan visibilitas kandidat.",
    ],
    tech: [
      "TypeScript",
      "FireBase",
      "MongoDB",
      "Express.js",
      "Figma",
      "Tailwind CSS",
      "Vercel",
    ],
    link: "https://github.com/naufalyuu1234/Joblink_projek",
  },
  {
    title: "Emotion Detection",
    role: "Frontend Developer",
    org: "Project AI",
    period: "March 2025 - May 2025",
    description: [
      "Emotion Detection adalah aplikasi berbasis android yang menggunakan Teknologi AI untuk mendeteksi emosi pengguna melalui analisis wajah.",
      "Saya sebagai Frontend Developer bertanggung jawab untuk mengembangkan antarmuka pengguna yang intuitif dan responsif, serta mengintegrasikan model AI untuk analisis emosi.",
      "Aplikasi ini dirancang untuk membantu pengguna memahami emosi mereka dan memberikan rekomendasi berdasarkan hasil analisis.",
    ],
    tech: ["React Native", "TypeScript", "Redux", "Python", "TensorFlow"],
    link: "https://github.com/naufalyuu1234/Emotion-Detection",
  },
];

// Membuat komponen "Page" utama yang menggabungkan section dan data
const ExperiencePage = () => {
  // Komponen ini menggunakan data demoExperiences
  return <ExperienceSection experiences={demoExperiences} />;
};

// Mengekspor komponen Page sebagai default, membuatnya konsisten dengan file lain
export default ExperiencePage;
