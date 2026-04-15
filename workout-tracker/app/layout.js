// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Workout Tracker',
  description: 'Bijhouden van je workouts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        {children}
      </body>
    </html>
  );
}