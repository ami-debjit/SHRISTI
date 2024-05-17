// data/dummyDoctors.ts


import Doctor from "../types/doctor";

const dummyDoctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. John Smith',
    specialty: 'Cardiologist',
    description: 'Dr. John Smith is a highly experienced cardiologist with over 20 years of practice.',
    photourl:"/image/doc2.jpg"
  },
  {
    id: 2,
    name: 'Dr. Emily Johnson',
    specialty: 'Pediatrician',
    description: 'Dr. Emily Johnson specializes in pediatrics and has a compassionate approach to children\'s healthcare.'
    ,photourl:"/image/doc3.jpg"
},
  {
    id: 3,
    name: 'Dr. Michael Brown',
    specialty: 'Orthopedic Surgeon',
    description: 'Dr. Michael Brown is an orthopedic surgeon known for his expertise in joint replacement surgeries.'
    ,photourl:"/image/doc1.jpg"},
  // Add more dummy doctors as needed
];

export default dummyDoctors;
