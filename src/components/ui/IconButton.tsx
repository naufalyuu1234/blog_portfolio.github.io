// import forwardRef
import { forwardRef, type Ref } from "react";
import type { ButtonHTMLAttributes } from "react";

type IconButtonProps = {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Membuat component IconButton
const IconButton = forwardRef(function IconButton(
  props: IconButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  // Ambil data dari props yang dikirim dari komponent ini
  const {
    icon: Icon,
    label,
    onClick,
    isLoading = false,
    className = "",
    ...rest
  } = props;

  // Tampilan Komponen
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`relative p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 ${className}`}
      aria-label={label}
      title={label}
      disabled={isLoading}
      {...rest}
    >
      {/* Tampilkan Icon */}
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
      ) : (
        Icon && <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
});

IconButton.displayName = "IconButton";

export default IconButton;