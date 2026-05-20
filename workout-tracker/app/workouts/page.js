// app/workouts/page.js
import Link from 'next/link';
import AddWorkoutForm from '../components/AddWorkoutForm';

async function getWorkouts() {
  // Let op: volledige URL nodig in Server Components
  const res = await fetch('http://localhost:3000/api/workouts', {
    cache: 'no-store', // Altijd verse data ophalen
  });

  if (!res.ok) {
    throw new Error('Ophalen workouts mislukt');
  }

  return res.json();
}

export default async function WorkoutsPage() {
  const workouts = await getWorkouts();

  return (
    <main>
      <h1>Mijn Workouts</h1>

      <AddWorkoutForm />

      {workouts.length === 0 ? (
        <p>Nog geen workouts. Voeg er een toe!</p>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <li key={workout._id}>
              <Link href={`/workouts/${workout._id}`}>
                <strong>{workout.title}</strong>
              </Link>
               — {workout.reps} reps @ {workout.load}kg
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}