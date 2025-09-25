import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { MongoClient } from 'mongodb';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Store data in MongoDB
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db = client.db();
    const collection = db.collection('contacts');
    const now = new Date();
    await collection.insertOne({
      name,
      email,
      message,
      dateTime: now.toISOString()
    });
    await client.close();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
