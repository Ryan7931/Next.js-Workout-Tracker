// app/components/AddWorkoutForm.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddWorkoutForm() {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const workout = { title, reps: Number(reps), load: Number(load) };

    const res = await fetch('/api/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workout),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error);
      setLoading(false);
      return;
    }

    setTitle('');
    setReps('');
    setLoad('');
    setLoading(false);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <input
        type="text"
        placeholder="Oefening (bijv. Push Day)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <input
          type="number"
          placeholder="Gewicht (kg)"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Toevoegen...' : 'Toevoegen'}
      </button>

      {error && <p className="error-msg">{error}</p>}
    </form>
  );
}
