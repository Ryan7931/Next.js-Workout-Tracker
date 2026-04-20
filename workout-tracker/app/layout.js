// app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Workout Tracker',
  description: 'Bijhouden van je workouts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/workouts">Workouts</Link>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}