export function Button({ className = '', children, ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
