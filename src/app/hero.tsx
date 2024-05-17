"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to SHRISTI <br /> 
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            We&apos;have a train team of professional psychiatrist at your assistance &apos;or you can chat with our state of the art Chatbot
          </Typography>
          <div className="grid">
        
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Button onClick={()=>{
                window.location.href ="https://huggingface.co/spaces/Rohan246/Grok-Mistral?logs=build" || "";
              }} color="gray" className="w-full px-4 md:w-[12rem]">
                 chat to us
              </Button>
              <Button onClick={()=>{
              window.location.href ="/pages/doctor" || "";
              }} color="gray" className="w-full px-4 md:w-[12rem]">
                 appointment
              </Button>
             


            </div>
          </div>
          <Typography variant="small" className="font-normal mt-8
           !text-gray-500">
            
            
            <a href="/pages/term" className="font-medium underline transition-colors">
             Read Terms and Conditions
            </a>
          </Typography>
        </div>
        <Image
          width={800}
          height={800}
          alt="team work"
          src="/image/avatar1.jpg"
          className="h-[36rem]  w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
