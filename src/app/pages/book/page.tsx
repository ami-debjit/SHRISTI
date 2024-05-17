// pages/book-appointment.js

import BookingForm from '@/components/BookingForm';


import Head from 'next/head';

export default function BookAppointment() {
  return (
    <div>
      <Head>
        <title>Book Appointment</title>
        <meta name="description" content="Book an appointment with our doctors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="max-w-md bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl text-black font-bold mb-4">Book an Appointment</h1>
          {/* Add your appointment booking form or content here */}
          <BookingForm></BookingForm>
        </div>
      </main>
    </div>
  );
}
