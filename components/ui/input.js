export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition ${className}`}
      {...props}
    />
  );
}
