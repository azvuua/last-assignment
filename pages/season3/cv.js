import { useRouter } from 'next/router'
import React from 'react'

// import { IoIosArrowBack } from "react-icons/io";

const Index = () => {
  const router = useRouter();
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white">
       <button className="p-3 text-black rounded-md" onClick={() => router.push("/")}>
      {/* <IoIosArrowBack /> */}
      </button>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900">Azzaya</h1>
        <p className="text-xl text-gray-600">Full Stack Developer</p>
        <p className="text-md text-gray-500">
          Email: azua@gmail.com | Phone: +8888888888 | Website: azuadeveloper.com
        </p>
      </header>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          I am a passionate Full Stack Developer with over 5 years of experience in building modern web
          applications. I enjoy problem-solving and working on projects that have a real-world impact. My skill set
          spans both front-end and back-end technologies, making me a versatile contributor to any project.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Skills</h2>
        <ul className="space-y-2 text-lg text-gray-700">
          <li>Frontend: Next.js, HTML, JavaScript, Css</li>
          <li>Backend: Node.js, MySQL</li>
          <li>Other: Graphic Design</li>
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Experience</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">Senior Full Stack Developer</h3>
          <p className="text-lg text-gray-600 italic">Company xyz</p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Worked closely with a team of developers to build and maintain Frontend Figma.</li>
            <li>I invented Figma (sigma)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Junior Web Developer</h3>
          <p className="text-lg text-gray-600 italic">Sigma Corporation</p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Collaborated on the development of e-commerce websites using MySQL and Next.js.</li>
            <li>Improving performance.</li>
          </ul>
        </div>
      </section>
      <section className="mb-12">
       
      </section>
      <footer className="text-center text-gray-600 mt-12">
        <p>2024 Sigma boy. All rights reserved.</p>

      </footer>
    </div>
  )
}

export default Index
