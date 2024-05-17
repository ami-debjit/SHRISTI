// pages/AppointmentSuccess.tsx

import Link from 'next/link';
import Head from 'next/head';
import { CircleCheckBig } from 'lucide-react';



const AppointmentSuccess: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Appointment Booked Successfully</title>
        <meta name="description" content="Your appointment has been booked successfully" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto py-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Appointment Booked Successfully!</h1>

          <div className=' flex items-center justify-center'>
          <CircleCheckBig  size={48} strokeWidth={3} />
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Thank you for booking an appointment with us. We look forward to seeing you!
          </p>
          <Link href="/">
            <span className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200">Go back to homepage</span>
          </Link>
        
        </div>
      </main>
    </div>
  );
};

export default AppointmentSuccess;
