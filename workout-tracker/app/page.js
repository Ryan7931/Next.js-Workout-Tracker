// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-hero">
      <p className="eyebrow">Track. Log. Progress.</p>
      <h1>
        Workout<br />
        <span className="accent">Tracker</span>
      </h1>
      <p>
        Log je sets, reps en gewichten. Simpel, snel, zonder rompslomp.
      </p>
      <Link href="/workouts" className="btn-cta">
        Bekijk workouts →
      </Link>
    </div>
  );
}
