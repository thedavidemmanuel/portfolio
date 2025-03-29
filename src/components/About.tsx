'use client'

import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-[#0a192f] px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 relative inline-block">
          About Me
          <div className="h-1 w-16 bg-[#64ffda] mt-2"></div>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 mt-12">
          {/* Left Side - Image with Blob */}
          <div className="relative flex-shrink-0 w-full md:w-2/5 max-w-sm mx-auto md:mx-0">
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <svg viewBox="-50 -60 100 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fillOpacity="0.1" 
                  fill="#64ffda"
                  stroke="#64ffda" 
                  strokeOpacity="0.4" 
                  strokeWidth="1" 
                  d="M37.92399978637695,-26.416000366210938 C37.92399978637695,-26.416000366210938 36.61600112915039,-7.061999797821045 34.52399826049805,-0.26100000739097595 C32.43199920654297,6.539000034332275 29.55500030517578,27.461999893188477 23.277999877929688,36.61600112915039 C17,45.77000045776367 8.892999649047852,53.617000579833984 -0.2619999945163727,54.138999938964844 C-9.414999961853027,54.66299819946289 -21.70800018310547,38.446998596191406 -28.768999099731445,27.985000610351562 C-35.83100128173828,17.523000717163086 -36.61600112915039,7.061999797821045 -38.970001220703125,-3.138000011444092 C-41.32400131225586,-13.338000297546387 -41.84700012207031,-25.107999801635742 -38.185001373291016,-34.262001037597656 C-34.52299880981445,-43.41600036621094 -16.215999603271484,-54.66299819946289 -0.7839999794960022,-53.354000091552734 C14.647000312805176,-52.047000885009766 34.000999450683594,-43.93899917602539 37.92399978637695,-37.92399978637695 C41.84700012207031,-31.908000946044922 37.92399978637695,-26.416000366210938 37.92399978637695,-26.416000366210938z"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <Image
                src="/about-david.png"
                alt="David Emmanuel coding"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 text-slate-300">
            <p className="mb-6 text-lg leading-relaxed text-justify">
              Hey there 👋! I&apos;m David Emmanuel, a Software Engineering student at African Leadership University with a passion for all things tech. I dabble in Web development, mobile apps, Web3, and blockchain. But what really gets my circuits buzzing is machine learning and AI, and their application in cybersecurity.
            </p>
            
            <p className="mb-6 text-lg leading-relaxed text-justify">
              I enjoy tackling problems at the intersection of technology and entrepreneurship, and I&apos;m always up for sharing what I&apos;ve learned along the way like an obsessed nerd 😁.
            </p>
            
            <p className="mb-6 text-lg leading-relaxed text-justify">
              When I&apos;m not busy coding, you might catch me diving into the latest tech news (because who doesn&apos;t want to know when their smart fridge starts tweeting? 🙄), or binge-watching my favorite series like <span className="italic">The Boys</span> or <span className="italic">House of the Dragon</span>. I also love playing video games; I&apos;ve got a soft spot for zombie games—they&apos;re like debugging, but with more adrenaline!
            </p>
            
            <p className="mb-6 text-lg leading-relaxed text-justify">
              I&apos;m also a music hobbyist: I play the keyboard, sing occasionally, and produce beats on my laptop. And yes, I&apos;m surprisingly good at it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;