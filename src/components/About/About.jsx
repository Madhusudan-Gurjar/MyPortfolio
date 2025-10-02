// import React from 'react';
// import ReactTypingEffect from 'react-typing-effect';
// import Tilt from 'react-parallax-tilt';
// import profileImage from '../../assets/profile2.png';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
//     >
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center">
//         {/* Left Side */}
//         <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
//           {/* Greeting */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
//             Hi, I am
//           </h1>
//           {/* Name */}
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
//             Madhusudan Gurjar
//           </h2>
//           {/* Skills Heading with Typing Effect */}
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
//             <span className="text-white">I am a </span>
//             <ReactTypingEffect
//               text={[
//                 'Fullstack Developer',
//                 'Mern Stack Developer',
//                 'Software Engineer',
//                 'Coder',
//               ]}
//               speed={100}
//               eraseSpeed={50}
//               typingDelay={500}
//               eraseDelay={2000}
//               cursorRenderer={(cursor) => (
//                 <span className="text-[#8245ec]">{cursor}</span>
//               )}
//             />
//           </h3>
//           {/* About Me Paragraph */}
//           <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
//             Dedicated Computer Science undergraduate with expertise in full-stack development, cloud solutions, and enterprise platforms.
//             Currently seeking internship and job opportunities to apply technical skills and contribute to innovative organizational goals.
//           </p>
//           {/* Resume Button */}
//           <a
//             href="https://drive.google.com/file/d/1nFDIzC5v-mIPay3qNS9MOaF7gE9IsDCL/view?usp=sharing
// "
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
//             style={{
//               background: 'linear-gradient(90deg, #8245ec, #a855f7)',
//               boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
//             }}
//           >
//             Download Resume
//           </a>
          
//         </div>
//         {/* Right Side */}
//         {/* <div className="md:w-1/2 flex justify-center md:justify-end">
//           <Tilt
//             className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             scale={1.05}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <img
//               src={profileImage}
//               alt="Madhusudan Gurjar"
//               className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//             />
//           </Tilt>
//         </div> */}
//         {/* new code */}
//         {/* Right Side */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <Tilt
//             className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 border-4 border-purple-600 rounded-full transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(130,69,236,0.6)]"
//             tiltMaxAngleX={50}
//             tiltMaxAngleY={50}
//             perspective={1000}
//             scale={1}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <img
//               src={profileImage}
//               alt="Madhusudan Gurjar"
//               className="w-full h-full rounded-full object-cover border-2 border-purple-400 shadow-lg"
//             />
//           </Tilt>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;


// // new code
import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profile1 from '../../assets/Profile1.jpg';
import profile2 from '../../assets/Profile2.png';
import profile3 from '../../assets/Profile3.jpg';
import profile4 from '../../assets/Profile4.jpg';

const images = [profile1, profile2, profile3, profile4];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Madhusudan Gurjar
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Mern Stack Developer',
                'Software Engineer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Dedicated Computer Science undergraduate with expertise in full-stack development, cloud solutions, and enterprise platforms.
            Currently seeking internship and job opportunities to apply technical skills and contribute to innovative organizational goals.
          </p>
          <a
            href="https://drive.google.com/file/d/1nFDIzC5v-mIPay3qNS9MOaF7gE9IsDCL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            Download Resume
          </a>
        </div>

        {/* Right Side*/}
       <div className="md:w-1/2 flex justify-center md:justify-end relative">
  {/* Glowing animated ring */}
  <div className="absolute w-[75%] max-w-[320px] aspect-square rounded-full border-4 border-purple-500 animate-pulse-slow"></div>

  <Tilt
    className="w-[75%] max-w-[320px] aspect-square border-4 border-purple-700 rounded-full transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(130,69,236,0.7)] relative z-10"
    tiltMaxAngleX={50}
    tiltMaxAngleY={50}
    perspective={1000}
    scale={1}
    transitionSpeed={1000}
    gyroscope={true}
  >
    <img
      src={images[currentIndex]}
      alt="Madhusudan Gurjar"
      className="w-full h-full rounded-full object-cover border-2 border-purple-400 shadow-lg transition-opacity duration-1000"
    />
  </Tilt>
</div>


      </div>
    </section>
  );
};

export default About;

