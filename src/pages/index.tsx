import Head from "next/head";
import {
  MoveUpRight,
} from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiGoodreads
} from '@icons-pack/react-simple-icons'
import styles from "@/styles/home.module.css";

import image1 from '../../public/image1.jpeg';
// import DateToCare from '../../public/DataToCare.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Akinwale Habib</title>
        <meta name="description" content="Portfolio of Akinwale Folorunsho Habib" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={`font-sans h-screen w-screen grid grid-cols-1 md:grid-cols-12 grid-flow-row auto-rows-auto ${styles.radialGradient}`}>

        <div className="h-[300px] md:h-[400px] w-[300px] md:w-[400px] md:shadow-lg md:shadow-cyan-500/50 row-start-2 row-end-3 col-start-3 lg:col-start-5 col-end-11 self-center rounded-2xl"
          style={{
            backgroundImage: `url(${image1.src})`,
            backgroundSize: 'cover'
        }}></div>

        <p className="row-start-3 row-end-4 col-start-1 md:col-start-6 lg:col-start-7 col-end-12 mr-5 md:mr-0 md:self-start justify-self-end md:justify-self-start text-8xl md:text-[160px] text-sky-200">Habib</p>
        <p className={`${styles.middleName} hidden md:block md:row-start-2 md:row-end-3 md:col-start-9 lg:col-start-8 self-center text-5xl text-slate-300`}>Folorunsho</p>
        <p className="mt-5 row-start-1 row-end-2 col-start-1 md:col-start-2 lg:col-start-3 ml-5 md:ml-0 text-5xl md:text-[128px] self-end text-slate-300">Akinwale</p>

        <p className="row-start-4 row-end-5 col-start-2 lg:col-start-4 col-end-12 lg:col-end-10 text-justify md:text-center font-extralight self-center md:self-start px-5 md:px-0 text-lg lg:text-2xl text-slate-300">
          I build functional and engaging digital products for startups, enterpreneurs and every day people. Previously at <a href="https://www.savics.org" target="_blank" className='underline text-slate-100'>Savics</a>, <a href="https://www.andela.com" target="_blank" className='underline text-slate-100'>Andela</a>, and the <a href="https://www.aun.edu.ng" target="_blank" className='underline text-slate-100'>American University of Nigeria.</a>
        </p>

        <ul className="row-start-5 row-end-6 col-start-6 col-end-8 flex flex-row justify-center items-center md:items-start">
          <li className="mr-10">
            <a href="https://github.com/akinwale-habibullah" target='_blank'><SiGithub color='#61DAFB' size={25} /></a>
          </li>
          <li className="mr-10">
            <a href="https://linkedin.com/in/akinwalehabib" target='_blank'>
              <SiLinkedin color='#61DAFB' size={25} />
            </a>
          </li>
          <li className="mr-10">
            <a href="https://x.com/akinwale_habib">
              <SiX color='#61DAFB' size={25} />
            </a>
          </li>
          <li className="">
            <SiGoodreads color='#61DAFB' size={25} />
          </li>
        </ul>

        {/* <div className="row-start-6 row-end-7 col-start-6 col-end-8 flex flex-row justify-center items-center md:items-start">
          <SquareChevronDown />
        </div> */}
      </section>

      <section className='bg-[#1c1c4892] px-16 pt-16 pb-8'>
        <header className='mb-8'>
          <h3 className='text-2xl'>Experience</h3>
        </header>

        <div className='mb-8 flex flex-col md:flex-row '>
          <p className='uppercase text-sm text-slate-400 md:basis-2/6'>Nov 2023 - Dec 2023</p>

          <div className='md:basis-4/6'>
            <p className='text-lg text-sla2e-100'>Java Developer - <a href="https://www.brilloconnetz.com/" target='_blank' className='underline decoration-dotted'>BrilloConnetz <MoveUpRight size={14} className='inline'/></a></p>
            <p className='text-wrap mb-2 text-slate-400'>Serverless based microservice development using AWS Lambda and related technologies.</p>
            
            <ul className='flex flex-wrap text-wrap gap-4'>
              <li className='text-sm text-slate-300 border rounded px-2'>Java</li>
              <li className='text-sm text-slate-300 border rounded px-2'>Spring Boot</li>
              <li className='text-sm text-slate-300 border rounded px-2'>JUnit</li>
              <li className='text-sm text-slate-300 border rounded px-2'>AWS</li>
              <li className='text-sm text-slate-300 border rounded px-2'>TestContainers</li>
            </ul>
          </div>
        </div>

        <div className='mb-8 flex flex-col md:flex-row'>
          <p className='uppercase text-sm text-slate-400 md:basis-2/6'>Apr 2020 - Apr 2023</p>

          <div className='md:basis-4/6'>
            <p className='text-lg text-slate-100' >Senior Software Engineer - <a href="https://savics.org" target='_blank' className='underline decoration-dotted'>Savics <MoveUpRight size={14} className='inline'/></a></p>
            <p className='text-wrap mb-2 text-slate-400'>Led project based software development teams to build eHealth and laboratory connectivity solutions for several ministries of health in low and middle income earning countries in Africa and south-east Asia.</p>
            <ul className='flex flex-wrap gap-4'>
              <li className='text-sm text-slate-300 border rounded px-2'>Java</li>
              <li className='text-sm text-slate-300 border rounded px-2'>JUnit</li>
              <li className='text-sm text-slate-300 border rounded px-2'>JavaFx</li>
              <li className='text-sm text-slate-300 border rounded px-2'>JavaScript</li>
              <li className='text-sm text-slate-300 border rounded px-2'>TypeScript</li>
              <li className='text-sm text-slate-300 border rounded px-2'>Node.js</li>
              <li className='text-sm text-slate-300 border rounded px-2'>Cypress</li>
              <li className='text-sm text-slate-300 border rounded px-2'>Jest</li>
              <li className='text-sm text-slate-300 border rounded px-2'>React</li>
            </ul>
          </div>
        </div>

        <div className='mb-8 flex flex-col md:flex-row'>
          <p className='uppercase text-sm text-slate-400 md:basis-2/6'>June 2022 - Sep 2022</p>

          <div className='md:basis-4/6'>
            <p className='text-lg text-slate-200'>Fullstack Developer - <a href="https://datafi.thepalladiumgroup.com" target='_blank' className='underline decoration-dotted'>Data.FI < MoveUpRight size={14} className='inline'/></a></p>

            <p className='text-wrap mb-2 text-slate-400'>Part time health information system software development, which helps global ministries of health track and rapidly respond to the HIV epidemic and emerging health threats.</p>
            <ul className='flex flex-wrap gap-4'>
              <li className='text-sm text-slate-300 border rounded px-2'>Java</li>
              <li className='text-sm text-slate-300 border rounded px-2'>Spring Boot</li>
              <li className='text-sm text-slate-300 border rounded px-2'>JUnit</li>
              <li className='text-sm text-slate-300 border rounded px-2'>JavaScript</li>
              <li className='text-sm text-slate-300 border rounded px-2'>React</li>
            </ul>
          </div>
        </div>

        <div className='mb-8 flex flex-col md:flex-row'>
          <p className='uppercase text-sm text-slate-400 md:basis-2/6'>Feb 2018 - Apr 2020</p>

          <div className='md:basis-4/6'>
            <p className='text-lg text-slate-200'>Bootcamp Learning Facilitator - <a href="https://andela.com" target='_blank' className='underline decoration-dotted'>Andela <MoveUpRight size={14} className='inline'/></a></p>

            <p className='text-wrap mb-2 text-slate-400'>Led the prestigious Andela coding Bootcamps, helping aspiring software engineers learn professional software development and practices.</p>
            <ul className='flex flex-wrap gap-4'>
              <li className='text-sm text-slate-300 border rounded px-2'>JavaScript</li>
              <li className='text-sm text-slate-300 border rounded px-2'>React</li>
              <li className='text-sm text-slate-300 border rounded px-2'>Node.js</li>
              <li className='text-sm text-slate-300 border rounded px-2'>TypeScript</li>
              <li className='text-sm text-slate-300 border rounded px-2'>Heroku</li>
              <li className='text-sm text-slate-300 border rounded px-2'>Supertest</li>
            </ul>
          </div>
        </div>

        <div className='mb-8 flex flex-col md:flex-row'>
          <p className='uppercase text-sm text-slate-400 md:basis-2/6'>Apr 2017 - Aug 2018</p>

          <div className='md:basis-4/6'>
            <p className='text-lg text-slate-200'>Software Developer - <a href="https://aun.edu.ng" className='underline decoration-dotted'>American University of Nigeria <MoveUpRight size={14} className='inline'/></a></p>
            <p className='text-wrap mb-2 text-slate-400'>Develop custom modules for Odoo ERP as well as fullstack development for ancillary applications.</p>
            <ul className='flex flex-wrap gap-4'>
              <li className='text-sm text-slate-300 border rounded px-2'>Python</li>
              <li className='text-sm text-slate-300 border rounded px-2'>Flask</li>
              <li className='text-sm text-slate-300 border rounded px-2'>JavaScript</li>
              <li className='text-sm text-slate-300 border rounded px-2'>Odoo</li>
              <li className='text-sm text-slate-300 border rounded px-2'>Linux</li>
              <li className='text-sm text-slate-300 border rounded px-2'>GitLab</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='bg-[#1c1c4892] px-16 py-16'>
        <header className='mb-8'>
          <h3 className='text-2xl'>Get In Touch</h3>
        </header>

          <a href="mailto:akinwalehabib@hotmail.com">
            <p className='bg-cyan-300 text-slate-900 font-medium w-48 py-4 px-4 text-center text-2xl shadow-lg shadow-cyan-50'>
              Say Hello
            </p>
          </a>
      </section>

      {/* <section className='hidden mb-6'>
        <header>
          <h3 className="text-6xl font-light mt-16 mb-4 text-center">Projects</h3>
          <p className="w-[90%] text-sm md:text-lg text-center mx-auto mb-16 text-slate-200 font-light">Here are a some projects I have either worked on or currently working on.</p>
        </header>

        <div className="md:grid md:grid-cols-2 px-10 gap-4">
          <div className="bg-slate-50 w-[80%] md:w-full md:row-span-2 h-auto mx-auto md:mx-0 p-3 flex flex-col justify-between rounded mb-12 md:mb-0">
              <img
                src={DateToCare.src}
                alt="DataToCare product icon"
                className="mb-2" />
              <p className="text-slate-800 font-thin mb-2">
                DataToCare is a fully customizable suite of integrated applications that connects national laboratory networks by collecting diagnostic and patient data at the facility level, displaying real-time information on a dashboard to facilitate decision-making at the central level, and notifying test results to medical teams and patients.
              </p>
              <a className="border border-[#32325e] rounded-full p-1 mt-2 text-gray-700 text-center w-2/5 self-center" href="https://datatocare.org" target='_blank'>Visit</a>
          </div>

          <div className="bg-slate-50 w-[80%] md:w-full h-auto mx-auto md:mx-0 p-3 flex flex-col justify-between rounded mb-12 md:mb-0">
              <h3 className="text-slate-800 text-center mb-2">Elderly care platform</h3>
              <p className="text-slate-800 font-thin mb-2">
                On-demand care provider for the elderly members of society.
              </p>
              <a className="border border-[#32325e] rounded-full p-1 mt-2 text-gray-700 text-center w-2/5 self-center" href="#">Visit</a>
          </div>

          <div className="bg-slate-50 w-[80%] md:w-full h-auto mx-auto md:mx-0 p-3 flex flex-col justify-between rounded mb-12 md:mb-0">
              <h3 className="text-slate-800 text-center mb-2">CV Maker</h3>
              <p className="text-slate-800 font-thin mb-2">
                Resume and cover letter generator for professionals.
              </p>
              <a className="border border-[#32325e] rounded-full p-1 mt-2 text-gray-700 text-center w-2/5 self-center" href="#">Visit</a>
          </div>

          <div className="bg-slate-50 w-[80%] md:w-full h-auto mx-auto md:mx-0 p-3 flex flex-col justify-between rounded mb-12 md:mb-0">
              <h3 className="text-slate-800 text-center mb-2">Crash Courses</h3>
              <p className="text-slate-800 font-thin mb-2">
                Succinct software development and engineering tutorials.
              </p>
              <a className="border border-[#32325e] rounded-full p-1 mt-2 text-gray-700 text-center w-2/5 self-center" href="https://crashcours.es" target='_blank'>Visit</a>
          </div>

          <div className="bg-slate-50 w-[80%] md:w-full  md:row-span-2 h-auto mx-auto md:mx-0 p-3 flex flex-col justify-between rounded mb-12 md:mb-0">
              <h3 className="text-slate-800 text-center mb-2">ThriftBox</h3>
              <p className="text-slate-800 font-thin mb-2">
                Core banking application service for cooperative societies and credit unions.
              </p>
              <a className="border border-[#32325e] rounded-full p-1 mt-2 text-gray-700 text-center w-2/5 self-center" href="#">Visit</a>
          </div>

          <div className="bg-slate-50 w-[80%] md:w-full h-auto mx-auto md:mx-0 p-3 flex flex-col justify-between align rounded">
              <h3 className="text-slate-800 text-center mb-2">Fund Pool</h3>
              <p className="text-slate-800 font-thin mb-2">
                Group shopping app for individuals.
              </p>
              <a className="border border-[#32325e] rounded-full p-1 mt-2 text-gray-700 text-center w-2/5 self-center" href="#">Visit</a>
          </div>
        </div>

      </section> */}
    </>
  );
}
