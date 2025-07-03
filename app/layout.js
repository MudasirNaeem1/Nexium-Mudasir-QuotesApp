import './globals.css';

export const metadata = {
  title: 'Quote Generator',
  description: 'Inspiring quotes on any topic!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
