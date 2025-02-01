import React from 'react';
import {
  Linkedin,
  Mail,
  Terminal,
  TestTube2,
  Gamepad2,
  Layout,
  Brain,
  MapPin,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-black text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-90"></div>
  <div className="container mx-auto px-6 py-20 relative">
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <img
          src="https://i.ibb.co/CmgLxhd/image.png"
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-300 object-cover"
        />
      </div>
      <h1 className="name-title text-5xl md:text-6xl font-bold mb-6 transition-all duration-300">Abdul Wahab</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-gray-300 transition-colors">Software Engineer</h2>
      <div className="flex items-center justify-center mb-8 text-gray-300">
        <MapPin className="w-5 h-5 mr-2" />
        <span className="hover:text-white transition-colors">Karachi, Pakistan</span>
      </div>
      <p className="text-xl text-gray-300 mb-8">Ensuring Quality Through Innovative Testing Solutions</p>
      <div className="flex justify-center space-x-4">
        <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1">
          Contact Me
        </a>
        <a href="#experience" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1">
          View Experience
        </a>
      </div>
    </div>
  </div>
</header>
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 hover:text-black transition-colors">About Me</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a highly motivated Software Quality Assurance (SQA) Engineer with 6+ months of hands-on experience in ensuring software quality and usability. As a BS-Software Engineering student in my final year, I bring a strong foundation in software development principles and methodologies. My passion lies in crafting seamless user experiences, designing intuitive UIs, and delivering reliable software solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                  <TestTube2 className="w-5 h-5 text-gray-700 mr-2" />
                  <span className="text-gray-700 font-medium">QA Engineering</span>
                </div>
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                  <Terminal className="w-5 h-5 text-gray-700 mr-2" />
                  <span className="text-gray-700 font-medium">Software Development</span>
                </div>
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                  <Gamepad2 className="w-5 h-5 text-gray-700 mr-2" />
                  <span className="text-gray-700 font-medium">Game Development</span>
                </div>
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                  <Layout className="w-5 h-5 text-gray-700 mr-2" />
                  <span className="text-gray-700 font-medium">UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 hover:text-black transition-colors">Education</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-2">BS-SOFTWARE ENGINEERING</h3>
                <p className="text-lg text-gray-600 mb-2">Sindh Madressatul Islam University</p>
                <p className="text-gray-500 italic">Final Year</p>
                <div className="mt-4 inline-block bg-gray-100 px-4 py-2 rounded-full text-gray-600">
                  Current
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-2">INTERMEDIATE</h3>
                <p className="text-lg text-gray-600 mb-2">E-Complex College</p>
                <p className="text-gray-500">2019-2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 hover:text-gray-300 transition-colors">Projects & Testing Experience</h2>
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">OSquare - SQA Testing</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Conducted comprehensive functional testing of e-commerce platform</li>
                  <li>Implemented automated test scripts using Selenium for critical user journeys</li>
                  <li>Reduced bug escape rate by 40% through improved test coverage</li>
                  <li>Collaborated with development team to optimize user experience</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">iSchool - Quality Assurance</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Led end-to-end testing of educational management system</li>
                  <li>Created and maintained test documentation for complex workflows</li>
                  <li>Performed cross-browser compatibility testing</li>
                  <li>Identified and tracked critical UI/UX issues</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Additional Testing Projects</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Mobile app testing for fitness tracking application</li>
                  <li>Performance testing of cloud-based storage solution</li>
                  <li>Security testing and vulnerability assessment of web applications</li>
                  <li>API testing and integration validation for microservices architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 hover:text-black transition-colors">Experience & Achievements</h2>
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">SQA Engineer</h3>
                <p className="text-gray-600 mb-4">6+ months of specialized experience in:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="hover:text-black transition-colors">Manual, functional, and non-functional testing</li>
                  <li className="hover:text-black transition-colors">BlackBox Testing and UI testing</li>
                  <li className="hover:text-black transition-colors">Test case development and execution</li>
                  <li className="hover:text-black transition-colors">Bug reporting and tracking</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Manager & QA Lead</h3>
                <p className="text-gray-600 mb-4">University Project Leadership:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li className="hover:text-black transition-colors">Led QA process and team coordination</li>
                  <li className="hover:text-black transition-colors">Developed comprehensive test cases</li>
                  <li className="hover:text-black transition-colors">Managed bug reporting and resolution</li>
                  <li className="hover:text-black transition-colors">Designed user-friendly interfaces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 hover:text-gray-300 transition-colors">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <TestTube2 className="w-6 h-6 text-gray-300 mr-3" />
                  <h3 className="text-xl font-semibold">Testing & QA</h3>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-white transition-colors">Manual Testing</li>
                  <li className="hover:text-white transition-colors">Functional & Non-Functional Testing</li>
                  <li className="hover:text-white transition-colors">BlackBox Testing</li>
                  <li className="hover:text-white transition-colors">Bug Reporting</li>
                  <li className="hover:text-white transition-colors">Test Plan Creation</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Terminal className="w-6 h-6 text-gray-300 mr-3" />
                  <h3 className="text-xl font-semibold">Tools & Technologies</h3>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-white transition-colors">PlayWright</li>
                  <li className="hover:text-white transition-colors">Selenium</li>
                  <li className="hover:text-white transition-colors">Extensions For Manual Testing (Check My Links, Load Focus, WhatFont, Fake Filler, Page Ruler, TestCase Studio)</li>
                  <li className="hover:text-white transition-colors">Jira</li>
                  <li className="hover:text-white transition-colors">Notion</li>
                  <li className="hover:text-white transition-colors">Python</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Gamepad2 className="w-6 h-6 text-gray-300 mr-3" />
                  <h3 className="text-xl font-semibold">Game Development</h3>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-white transition-colors">Unity Engine</li>
                  <li className="hover:text-white transition-colors">Level Design</li>
                  <li className="hover:text-white transition-colors">Physics & Colliders</li>
                  <li className="hover:text-white transition-colors">Animations</li>
                  <li className="hover:text-white transition-colors">Sound Integration</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-gray-300 mr-3" />
                  <h3 className="text-xl font-semibold">Learning & Goals</h3>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-white transition-colors">Final Year Project Development</li>
                  <li className="hover:text-white transition-colors">Advanced Testing Methodologies</li>
                  <li className="hover:text-white transition-colors">UI/UX Design Principles</li>
                  <li className="hover:text-white transition-colors">Continuous Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 hover:text-black transition-colors">Let's Connect</h2>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/abdul-wahab-69981921b/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:abdulwahabstd@gmail.com" 
                className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="hover:text-gray-300 transition-colors">&copy; {new Date().getFullYear()} Abdul Wahab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
