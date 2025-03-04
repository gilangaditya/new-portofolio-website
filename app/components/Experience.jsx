import React, { useState } from "react";
import { experienceData, jobDescription } from "@/assets/assets";
import { useMemo } from "react";

const Experience = () => {
    const [selectedExp, setSelectedExp] = useState(null);

    // Urutkan experienceData secara DESCENDING berdasarkan id
    const sortedExperience = useMemo(() => {
        return [...experienceData].sort((a, b) => b.id - a.id);
      }, [experienceData]);

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Carrer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Career Journey</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl mx-w-one">
          <h4 className="text-center mb-2 text-lg font-Ovo">Work Experience & Contributions</h4>
          <p className="mb-10 max-w-2xp font-Ovo text-center">
          An insight into my professional background, showcasing my skills, achievements, and responsibilities in different roles.
          </p>
        </div>
        <div>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
             {sortedExperience.map((exp) => (
              <ExperienceItem
                key={exp.id}
                exp={exp}
                selectedExp={selectedExp}
                setSelectedExp={setSelectedExp}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

// Komponen untuk menampilkan pengalaman kerja
const ExperienceItem = ({ exp }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const relatedJobs = jobDescription.filter((job) => job.experienceId === exp.id);
  const displayedJobs = relatedJobs.slice(0, 4); // Hanya menampilkan 2 deskripsi pertama

  return (
    <>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 dark:bg-white rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {exp.dateFrom} - {exp.dateTo}
        </time>
        <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {exp.location}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {exp.title} ({exp.jobs})
        </h3>
        <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
          {exp.description}
        </p>
        <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
          {displayedJobs.map((job, index) => (
            <li key={index}>{job.description}</li>
          ))}
        </ul>

        {/* Tampilkan tombol jika deskripsi lebih dari 2 */}
        {relatedJobs.length > 4 && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg 
              cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 dark:text-white/80"
          >
            Learn more
            <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        )}
      </li>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg w-100">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {exp.title} ({exp.jobs})
            </h3>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              {exp.description}
            </p>
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
              {relatedJobs.map((job, index) => (
                <li key={index}>{job.description}</li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full text-center px-4 py-2text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white dark:hover:bg-darkHover/50 dark:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
