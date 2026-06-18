// app/workouts/[id]/page.js
import { notFound } from 'next/navigation';
import Link from 'next/link';
import DeleteButton from '../../components/DeleteButton';

async function getWorkout(id) {
  const res = await fetch(`http://localhost:3000/api/workouts/${id}`, {
    cache: 'no-store',
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('Ophalen workout mislukt');
  }

  return res.json();
}

export default async function WorkoutDetailPage({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);

  return (
    <>
      <Link href="/workouts" className="detail-back">
        ← Terug naar overzicht
      </Link>

      <h1>{workout.title}</h1>

      <div className="detail-stats">
        <div className="detail-stat">
          <div className="detail-stat-label">Reps</div>
          <div className="detail-stat-value">{workout.reps}</div>
          <div className="detail-stat-unit">herhalingen</div>
        </div>
        <div className="detail-stat">
          <div className="detail-stat-label">Gewicht</div>
          <div className="detail-stat-value">{workout.load}</div>
          <div className="detail-stat-unit">kilogram</div>
        </div>
        <div className="detail-stat">
          <div className="detail-stat-label">Datum</div>
          <div className="detail-stat-value" style={{ fontSize: '1.1rem', paddingTop: '0.5rem' }}>
            {new Date(workout.createdAt).toLocaleDateString('nl-NL', {
              day: 'numeric',
              month: 'short',
            })}
          </div>
          <div className="detail-stat-unit">
            {new Date(workout.createdAt).getFullYear()}
          </div>
        </div>
      </div>

      <DeleteButton id={workout._id} />
    </>
  );
}
