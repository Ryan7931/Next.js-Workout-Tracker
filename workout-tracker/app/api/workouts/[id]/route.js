import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import connectDB from '../../../../lib/mongodb';
import Workout from '../../../../models/Workout';

export async function GET(request, { params }) {
  await connectDB();
  const { id } = await params;
  const workout = await Workout.findById(id);
  if (!workout) return NextResponse.json({ error: 'Workout niet gevonden' }, { status: 404 });
  return NextResponse.json(workout, { status: 200 });
}

export async function DELETE(request, { params }) {
  await connectDB();
  const { id } = await params;
  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) return NextResponse.json({ error: 'Workout niet gevonden' }, { status: 404 });
  revalidatePath('/workouts');
  return NextResponse.json({ message: 'Workout verwijderd' }, { status: 200 });
}
