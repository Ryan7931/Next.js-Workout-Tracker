// app/workouts/[id]/page.js

// Tijdelijke data (later van API)
const workouts = [
  { id: 1, title: 'Push Day', reps: 10, load: 50 },
  { id: 2, title: 'Pull Day', reps: 8, load: 60 },
  { id: 3, title: 'Leg Day', reps: 12, load: 80 },
];

export default async function WorkoutDetailPage({ params }) {
  const { id } = await params;
  const workout = workouts.find((w) => w.id === Number(id));

  if (!workout) {
    return <p>Workout niet gevonden.</p>;
  }

  return (
    <div>
      <h1>{workout.title}</h1>
      <p>Reps: {workout.reps}</p>
      <p>Load: {workout.load}kg</p>
    </div>
  );
}