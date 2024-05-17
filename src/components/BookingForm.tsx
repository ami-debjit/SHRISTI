// components/BookingForm.tsx
"use client"
import { useState } from 'react';
import { Input, Button, Typography } from "@material-tailwind/react";

interface FormData {
  fullName: string;
  email: string;
  date: string;
  time: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    date: '',
    time: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData);
//     if (Object.keys(validationErrors).length === 0) {
//       // Submit the form (e.g., send data to backend)
    
//       console.log('Form submitted:', formData);
//       // You can add your form submission logic here
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const validateForm = (data: FormData): Partial<FormData> => {
//     let errors: Partial<FormData> = {};
//     if (!data.fullName.trim()) {
//       errors.fullName = 'Full Name is required';
//     }
//     if (!data.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!data.date.trim()) {
//       errors.date = 'Date is required';
//     }
//     if (!data.time.trim()) {
//       errors.time = 'Time is required';
//     }
//     return errors;
//   };

//   onSubmit={handleSubmit}

  return (
    <form action={"/pages/success"} method='get' className="max-w-md mx-auto">
      <div className="mb-4 text-black">
        <label htmlFor="fullName" className="block text-black font-bold mb-1">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
      </div>
      <div className="mb-4 text-black ">
        <label htmlFor="email" className="block mb-1 font-bold">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4 text-black ">
        <label htmlFor="date" className="block mb-1 font-bold">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.date && <p className="text-red-500">{errors.date}</p>}
      </div>
      <div className="mb-4 text-black ">
        <label htmlFor="time" className="block mb-1 font-bold">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className={`w-full border rounded px-3 py-2 ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.time && <p className="text-red-500">{errors.time}</p>}
      </div>
      {/* <button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200" onClick={async () => {
      if(!validateForm){
        window.location.href ="/pages/success" || "";
      }
      }}>Book Appointment</button> */}
      {/* <button  className="w-full px-4 md:w-[12rem]" type='submit'> Submit</button> */}
      <Button color="gray" type='submit' className="w-full px-4 md:w-[12rem]">
               Submit
              </Button>
      


      {/* <Button  onClick={async () => {
      window.location.href ="/pages/success" || "";
      }} color="gray" type='submit' className="w-full px-4 md:w-[12rem]">
                Submit
              </Button> */}
    </form>
  );
};

export default BookingForm;
