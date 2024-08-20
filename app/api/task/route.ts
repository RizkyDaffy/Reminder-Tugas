// app/api/task/route.ts
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('main-db');

    // Log untuk debugging
    console.log('Connected to MongoDB');

    // Query MongoDB dengan ObjectId
    const result = await db.collection('all-db').findOne({
      _id: new ObjectId("66b43a652f119c6210cb115e")
    });

    console.log('Result from MongoDB:', result);

    if (result && result.all) {
      return NextResponse.json(result.all);
    } else {
      return NextResponse.json({ message: 'Data not found' }, { status: 404 });
    }
  } catch (e) {
    console.error('Error fetching data:', e);
    return NextResponse.json({ message: 'Failed to fetch tasks' }, { status: 500 });
  }
}
