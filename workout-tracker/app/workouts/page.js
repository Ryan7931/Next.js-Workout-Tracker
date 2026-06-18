// app/workouts/page.js
import Link from 'next/link';
import AddWorkoutForm from '../components/AddWorkoutForm';

async function getWorkouts() {
  const res = await fetch('http://localhost:3000/api/workouts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Ophalen workouts mislukt');
  }

  return res.json();
}

export default async function WorkoutsPage() {
  const workouts = await getWorkouts();

  return (
    <>
      <h1>Mijn <span className="accent">Workouts</span></h1>

      <div className="form-card">
        <h3>Workout toevoegen</h3>
        <AddWorkoutForm />
      </div>

      {workouts.length === 0 ? (
        <div className="empty-state">
          <h2>Nog geen workouts</h2>
          <p>Voeg je eerste workout toe hierboven.</p>
        </div>
      ) : (
        <ul className="workout-list">
          {workouts.map((workout) => (
            <li key={workout._id} className="workout-item">
              <Link href={`/workouts/${workout._id}`}>
                <span className="workout-item-name">{workout.title}</span>
                <span className="workout-item-stats">
                  <span className="stat-pill"><strong>{workout.reps}</strong> reps</span>
                  <span className="stat-pill"><strong>{workout.load}</strong> kg</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
