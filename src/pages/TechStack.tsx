// Import Logo
import html5Logo from "../assets/TechIcon/html.jpeg";
import Css3Logo from "../assets/TechIcon/CSS.jpeg";
import GitLogo from "../assets/TechIcon/git.png";
import JavaScriptLogo from "../assets/TechIcon/js.jpeg";
import ReactIcon from "../assets/TechIcon/react.jpeg";
import TypeScriptLogo from "../assets/TechIcon/typeScript.png";
import figmaLogo from "../assets/TechIcon/figma.jpeg";
import nextJsLogo from "../assets/TechIcon/nextJS.png";
import TailwindLogo from "../assets/TechIcon/Tailwind.png";

// TYPES
type TechItem = {
  name: string;
  color?: string;
  image?: string;
}


const TechStackPage = () => {
  // Data Teknologi yang akan ditampilkan
  const techItems: TechItem[] = [
    { name: "HTML5", color: "bg-orange-500", image: html5Logo },
    { name: "CSS3", color: "bg-blue-500", image: Css3Logo },
    { name: "JavaScript", color: "bg-yellow-500", image: JavaScriptLogo  },
    { name: "React",image: ReactIcon },
    { name: "Git", image: GitLogo },
    { name: "TypeScript", image: TypeScriptLogo },
    { name: "Tailwind", image: TailwindLogo },
    { name: "Figma", image: figmaLogo },
    { name: "Next.js", image: nextJsLogo },
  ];

  // Komponen untuk menampilkan setiap item teknologi
  const TechItem = ({ name, color, image }: TechItem) => (
    <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md whitespace-nowrap min-w-fit">
      {image ? (
        <img
        src={image}
        alt={name}
        className={`w-6 h-6 rounded mr-2 object-contain ${color}`}
      />
      ) : (
        <div className={`w-7 h-7 rounded mr-2 ${color}`}></div>
      )}
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );

  return (
    <div className="mb-8">
      <h2 className="text-center mb-4 font-bold text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        My {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          Tech Stack
        </span>
      </h2>

      {/* Container utama dengan overflow hidden untuk menyembunyikan elemen yang keluar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-50 to-coral-50 rounded-2xl p-4">
        {/* Container untuk animasi scroll */}
        <div className="flex animate-scroll-right space-x-4">
          {/* Render tech items dua kali untuk efek infinite scroll */}
          {techItems.map((item, index) => (
            <TechItem
              key={`first-${index}`}
              name={item.name}
              color={item.color}
              image={item.image}
            />
          ))}
          {/* Duplikat untuk seamless loop */}
          {techItems.map((item, index) => (
            <TechItem
              key={`second-${index}`}
              name={item.name}
              color={item.color}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS untuk animasi - dimasukkan dalam style tag */}
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Geser sebesar setengah lebar total (karena kita duplikat item) */
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 8s linear infinite;
        }

        /* Pause animasi saat hover untuk interaktivitas */
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TechStackPage;