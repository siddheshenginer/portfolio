  import React, { useState } from 'react';
  import { FaGithub, FaLinkedin } from 'react-icons/fa';
  import { MdEmail } from 'react-icons/md';
  import { IoIosArrowDown } from 'react-icons/io';
  import SkillsSection from './SkillsSection';

  const App = () => {
    const [activeSection, setActiveSection] = useState('about');

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <span className="text-4xl font-bold text-gray-800 font-Quintessential">Siddhesh Nikam</span>
              <div className="flex space-x-4">
                <button onClick={() => scrollToSection('about')} 
                        className={`px-3 py-2 f rounded-md ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600'}`}>
                  About
                </button>
                <button onClick={() => scrollToSection('experience')} 
                        className={`px-3 py-2 rounded-md ${activeSection === 'experience' ? 'text-blue-600' : 'text-gray-600'}`}>
                  Experience
                </button>
                <button onClick={() => scrollToSection('skills')} 
                        className={`px-3 py-2 rounded-md ${activeSection === 'skills' ? 'text-blue-600' : 'text-gray-600'}`}>
                  Skills
                </button>
                <button onClick={() => scrollToSection('projects')} 
                        className={`px-3 py-2 rounded-md ${activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600'}`}>
                  Projects
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-indigo-100 shadow-lg rounded-3xl">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                DevOps Engineer & Cloud Developer
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Building and automating resilient, scalable cloud solutions
              </p>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/siddhesh-its" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/siddhesh-sn/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-gray-900">
                <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="mailto:siddheshnikam8@gmail.com" 
                  className="text-gray-600 hover:text-gray-900">
                  <MdEmail className="w-6 h-6" />
                </a>
              </div>
              <button onClick={() => scrollToSection('about')}  className="mt-12 animate-bounce">
                <IoIosArrowDown className="w-6 h-6 mx-auto text-gray-500" />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div class="max-w-3xl mx-auto p-6 bg-gradient-to-b from-white to-gray-50 rounded-b-lg shadow-md">
                  <p class="text-gray-700 mb-4 text-justify">
                    I am a dedicated <span class="font-semibold">DevOps Engineer</span> with expertise in
                    <span class="font-semibold"> CI/CD pipeline development</span>, <span class="font-semibold">automation</span>, and
                    <span class="font-semibold"> scalable solutions</span>. I specialize in streamlining workflows, enhancing
                    observability, and optimizing infrastructure for performance, availability and scalability.
                  </p>
                  <h2 class="font-semibold text-gray-800 mb-2">Key Achievements</h2>
                  <ul class="list-disc list-inside text-gray-700 space-y-1">
                    <li>Cut deployment times by and boosted system efficiency.</li>
                    <li>Maintained high availability for microservices infrastructure.</li>
                    <li>Automated workflows, with custom scripts and tools.</li>
                    <li>Scaled platforms to serve over thousands of users.</li>
                  </ul>
                  <p className="text-gray-700 mt-1 text-justify"><br></br>
                    My mission is to simplify workflows and build resilient systems that empower teams and drive innovation.
                  </p>
                </div>
                {/*  */}
              </div>
              <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Post Graduate Degree, Information Technology Solutions</p>
                      <p className="text-gray-600">Humber College, Toronto</p>
                      <p className="text-gray-500">Graduation: 2024</p>
                    </div>
                    <div>
                      <p className="font-medium">Bachelor of Engineering, Electronics and Telecommunication Engineering</p>
                      <p className="text-gray-600">University of Mumbai</p>
                      <p className="text-gray-500">Graduation: 2019</p>
                    </div>

                </div>
                <h3 className="text-xl font-semibold mt-2 mb-4">Certifications</h3>
                <div className="flex space-x-3">
                  <div className="flex-1 p-4 bg-white rounded-lg shadow-sm">
                    <p className="font-medium">Solutions Architect - Associate</p>
                    <p className="text-gray-600">Amazon Web Services</p>
                  </div>
                  <div className="flex-1 p-4 bg-white rounded-lg shadow-sm">
                    <p className="font-medium">Google Cloud Professional Cloud Architect</p>
                    <p className="text-gray-600">Google Cloud</p>
                  </div>
                  <div className="flex-1 p-4 bg-white rounded-lg shadow-sm">
                    <p className="font-medium">PagerDuty DevOps Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-3 bg-gray-50 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
            <div className="space-y-8">
              {/* Experience 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">DevOps Developer – Graduate Intern</h3>
                    <p className="text-gray-600">FundEvolve</p>
                  </div>
                  <p className="text-gray-500">Dec 2023 - Apr 2024</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Engineered a streamlined deployment process using GitHub Actions and Docker, achieving faster releases.</li>
                  <li>Contributed to building a financial goals application, enhancing user experience and data tracking capabilities.</li>
                  <li>Designed clear documentation and diagrams for CI/CD workflows to facilitate seamless developer onboarding.</li>
                  <li>Collaborated across global teams to improve the scalability of microservices on the platform.</li>
                </ul>
              </div>
              {/* Experience 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">DevOps Engineer</h3>
                    <p className="text-gray-600">Tata Consultancy Services</p>
                  </div>
                  <p className="text-gray-500">Aug 2020 - Aug 2022</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Redesigned CI/CD pipelines to support rapid deployment cycles and increased release frequency.</li>
                  <li>Maintained and monitored a robust infrastructure, ensuring service availability and reliability for users across Europe.</li>
                  <li>Automated workflows for configuration and provisioning, simplifying deployments in distributed environments.</li>
                  <li>Led a support team to address critical issues, reducing incident response time and ensuring SLA compliance.</li>
                </ul>
              </div>
              {/* Experience 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Software Engineer (Cloud and DevOps Focus)</h3>
                    <p className="text-gray-600">Tata Consultancy Services</p>
                  </div>
                  <p className="text-gray-500">Aug 2019 - Aug 2020</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Improved platform security by implementing role-based access controls aligned with least privilege principles.</li>
                  <li>Refactored legacy systems to align with modern cloud-native standards, reducing error rates significantly.</li>
                  <li>Supported seamless migrations and upgrades, ensuring operational continuity across projects.</li>
                  <li>Participated in on-call rotations to resolve critical incidents, ensuring system reliability and reducing downtime.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SkillsSection />

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Helm Charts Vulnerability Scanner</h3>
                <p className="text-gray-600 mb-4">
                  Developed a Bash script to extract Docker images from Helm charts and scan them for
                  vulnerabilities using Trivy, outputting results in a structured CSV format.
                </p>
                <p className="text-gray-600">
                  Enhanced skills in container security automation & scripting.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">OMCS to AWS Migration</h3>
                <p className="text-gray-600 mb-4">
                  Migrated a critical Oracle EBS suite application to AWS, reducing operational costs by 20%
                  and improving system performance by 15%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p>© 2025 Siddhesh Nikam. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="mailto:siddheshnikam8@gmail.com" className="hover:text-gray-300">siddheshnikam8@gmail.com</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  export default App;