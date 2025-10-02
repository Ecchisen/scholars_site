import React from "react";

const AcademicsG3toG10 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Academics: Grade 3 to 10</h1>
      <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
        <p>
          For students in Grade 3 to 10, we offer a comprehensive and challenging curriculum designed to prepare them for higher education and future success. Our academic program focuses on developing critical thinking, problem-solving skills, and a deep understanding of core subjects, while also fostering creativity and independent learning.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Curriculum</h2>
        <p>
          Our curriculum is meticulously designed to meet national and international standards, ensuring a robust and well-rounded education. It covers a broad range of subjects:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>**Mathematics:** Advanced concepts in Algebra, Geometry, and Introduction to Calculus.</li>
          <li>**Science:** In-depth studies in Physics, Chemistry, and Biology with extensive practical lab work.</li>
          <li>**English Language and Literature:** Comprehensive development of reading, writing, speaking, and listening skills, alongside appreciation of diverse literary works.</li>
          <li>**Social Studies:** Engaging exploration of History, Geography, Civics, and Economics, promoting global awareness and civic responsibility.</li>
          <li>**Computer Science:** Programming, digital literacy, and understanding of computational thinking.</li>
          {/* TODO: Update with actual second language options offered by your school */}
          <li>**Second Language:** Options for [e.g., Hindi, French, Spanish] to foster linguistic diversity.</li>
          {/* TODO: Update with actual elective subjects offered by your school */}
          <li>**Elective Subjects:** Various options like Art, Music, Drama, and Physical Education to cater to diverse interests and talents.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Teaching Style</h2>
        <p>
          We employ a student-centered teaching approach that encourages active participation, inquiry-based learning, and collaborative projects. Our highly qualified teachers use innovative methodologies, integrating technology, real-world examples, and interactive discussions to make learning engaging and relevant. We emphasize critical thinking, analytical skills, and independent research, preparing students to ask questions and seek answers.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Evaluation System</h2>
        <p>
          Our evaluation system is continuous and comprehensive, assessing not only academic performance but also holistic development. It includes a mix of formative assessments (quizzes, class participation, projects), summative assessments (mid-term and final examinations), presentations, and practical examinations. Regular and constructive feedback is provided to students and parents through detailed reports and parent-teacher conferences to support continuous improvement and identify areas for growth.
        </p>
      </div>
    </div>
  );
};

export default AcademicsG3toG10;