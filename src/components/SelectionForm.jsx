import React, { useState } from "react";
import paperData from "../data/paperData";

const SelectionForm = () => {
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [year, setYear] = useState("");

  // Get the downloadable question papers based on user selection
  const getPaperLinks = () => {
    if (university && course && semester && year) {
      return paperData[university]?.[course]?.[semester]?.[year] || [];
    }
    return [];
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">Download Question Papers</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
        {/* University selection */}
        <select
          onChange={(e) => setUniversity(e.target.value)}
          className="border p-2 rounded-xl mb-4 w-full"
          value={university}
          aria-label="Select University"
        >
          <option>---Select University---</option>
          <option value="gulbargaUniversity">Gulbarga University</option>
          <option value="bidarUniversity"> Bidar University</option>
        </select>

        {/* Course selection */}
        <select
          onChange={(e) => setCourse(e.target.value)}
          className="border p-2 rounded-xl mb-4 w-full"
          value={course}
          aria-label="Select Course"
        >
          <option>---Select Course---</option>
          <option value="BSc">B.Sc</option>
          <option value="BA">B.A</option>
          <option value="BCom">B.Com</option>
          <option value="BEd">B.Ed</option>
        </select>

        {/* Semester selection */}
        <select
          onChange={(e) => setSemester(e.target.value)}
          className="border p-2 rounded-xl mb-4 w-full"
          value={semester}
          aria-label="Select Semester"
        >
          <option>---Select Semester---</option>
          <option value="Semester1">I Semester</option>
          <option value="Semester2">II Semester</option>
          <option value="Semester3">III Semester</option>
          <option value="Semester4">IV Semester</option>
          <option value="Semester5">V Semester</option>
          <option value="Semester6">VI Semester</option>
        </select>

        {/* Year selection */}
        <select
          onChange={(e) => setYear(e.target.value)}
          className="border p-2 rounded-xl mb-4 w-full"
          value={year}
          aria-label="Select Year"
        >
          <option value="">---Select Year---</option>
          <option value="2024">2024</option>
        </select>
      </div>

      <div className="mt-8">
        {getPaperLinks().length > 0 ? (
          <div>
            <h2 className="text-lg mb-3 text-center">Available Papers:</h2>
            <ul className="text-justify ">
              {getPaperLinks().map((paper, index) => (
                <li key={index} className="mb-2">
                  <span className="mr-2">{index + 1}.</span>
                  <a
                    href={paper.link}
                    download={paper.name}
                    className="text-blue-600 hover:text-[#A3248F]"
                  >
                    {paper.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-red-500">
            No papers available for the selected options.
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectionForm;