// app/workouts/loading.js
export default function Loading() {
  return (
    <>
      <h1>Mijn <span className="accent">Workouts</span></h1>
      <div className="loading-state">
        <span className="loading-dot" />
        <span className="loading-dot" />
        <span className="loading-dot" />
        <span style={{ marginLeft: '0.25rem' }}>Laden...</span>
      </div>
    </>
  );
}
