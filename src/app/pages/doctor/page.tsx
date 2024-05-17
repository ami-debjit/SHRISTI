// pages/doctors.tsx
"use client"
import Head from 'next/head';
import Doctor from '@/app/types/doctor';
import DoctorList from'@/components/DoctorList'
import dummyDoctors from '@/app/data/doctor';


  
const DoctorsPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Select a Doctor</title>
        <meta name="description" content="List of doctors and their details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <div className="grid h-16 place-items-center"> Select a Doctor</div>

      <main className="max-w-4xl mx-auto py-8">
        <DoctorList doctors={dummyDoctors} />
        {/* <Button onClick={async () => {
      window.location.href ="https://www.apollohospitals.com/" || "";
      }}>Satrt Session</Button> */}
      </main>
    </div>
  );
};

export default DoctorsPage;
