// app/workouts/page.js
import Link from 'next/link';

const workouts = [
  { id: 1, title: 'Push Day', reps: 10, load: 50 },
  { id: 2, title: 'Pull Day', reps: 8, load: 60 },
  { id: 3, title: 'Leg Day', reps: 12, load: 80 },
];

export default function WorkoutsPage() {
  return (
    <main>
      <h1>Mijn Workouts</h1>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <Link href={`/workouts/${workout.id}`}>
              {workout.title} — {workout.reps} reps @ {workout.load}kg
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}