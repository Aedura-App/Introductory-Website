import Navbar from './components/Navbar';

export default function Home() {
  return (

    <div className="h-screen flex flex-col">
      <Navbar />

      {/* Scroll container */}
      <div className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-hide">

        {/* Section 1 */}
        <div id='home' className="h-full flex flex-col justify-center items-center snap-start bg-linear-to-b from-secondary-content from-50% to-primary-content">
          <p className="uppercase font-inter font-extralight text-2xl tracking-[6px]">introducing</p>
          <h1 className="font-heading text-9xl text-secondary -my-4">Aedura</h1>
          <p className="text-center mt-20 text-white/50 -tracking-tighter max-w-5xl">Your AI study coach for schools and students alike. We gamify learning, generate smart notes, and create personalized quizzes from your school's papers. B2B and D2C solutions at revolutionary prices.</p>
        </div>

        {/* Section 2 */}
        <div id="about-us" className="h-full flex justify-center items-center snap-start gap-20 bg-gradient-to-b from-primary-content from-50% to-accent-content">
          <div className="flex mx-auto max-w-6xl gap-10 items-center">
            <div className="relative bg-gradient-to-br from-primary/10 via-primary/20 to-primary/30 border-2 border-primary/40 p-12 rounded-3xl shadow-2xl backdrop-blur-sm group hover:border-primary/60 transition-all duration-300 hover:shadow-primary/20">
              {/* Animated background elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 bg-primary/20 rounded-full animate-bounce delay-300"></div>
              {/* Main content */}
              <div className="relative z-10 text-center space-y-6 font-inter font-semibold">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <h2 className="font-inter text-3xl font-bold tracking-tight text-primary mb-2">
                  Mock-Ups
                </h2>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
                  <div className="w-2 h-2 bg-success rounded-full animate-ping"></div>
                  <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>

                <p className="text-primary/70 text-sm max-w-xs mx-auto leading-relaxed tracking-tight">
                  Interactive previews and visual demonstrations are currently in development
                </p>

                {/* Progress indicator */}
                <div className="mt-6">
                  {/* <div className="w-full bg-primary/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-primary/60 h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div> */}
                  <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                  <p className="text-xs text-primary/60 mt-2 uppercase -tracking-tighter">70% Complete</p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-3xl"></div>
            </div>

            <div className="flex flex-col flex-1 p-10 gap-10 font-inter tracking-tight">
              <p><span>Built for students, by students</span> - Aedura was created by learners who experienced firsthand the challenges of traditional education systems and expensive tutoring solutions. As part of Schoolpad's educational technology ecosystem, we recognized the need for an intelligent, accessible learning platform that truly understands student needs.</p>
              <p>Our mission is simple: democratize quality education through AI and psychological insights. <span>Every feature is designed, tested, and validated by actual students</span> who know what works in real academic situations, not theoretical assumptions.</p>
              <p>Aedura combines cutting-edge artificial intelligence with proven educational methodologies, creating a learning environment that adapts to each student's unique pace and style. We're not just another educational app - we're a comprehensive ecosystem <span>built with genuine student insight and experience</span>.</p>
              <p><span>Our student-centric development ensures practical, relevant solutions</span> that address real classroom challenges. Through our dual B2B and D2C approach, we serve both schools and individual learners with tools that are <span>5 times more affordable than existing alternatives</span>.</p>
              <p>At Aedura, we stay ahead of educational trends through continuous innovation, always ensuring our <span>peer-developed platform</span> delivers the most effective learning tools available.</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div id="offerings" className="h-full flex flex-col justify-center items-center snap-start bg-linear-to-b from-accent-content from-50% to-secondary-content">
          <p className="uppercase font-inter font-extralight text-2xl tracking-[6px]">our</p>
          <h1 className="font-heading text-9xl text-accent -my-1 uppercase max-w-5xl text-center leading-26">flagship features</h1>
        </div>

        {/* Section 4 */}
        <div className="h-full flex flex-col justify-center items-center snap-start bg-secondary-content">
          <ul className="timeline timeline-vertical font-semibold font-inter">
            <li>
              <div className="timeline-start timeline-box">AI-Powered Personal Coach</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-secondary h-5 w-5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <hr className="bg-secondary" />
            </li>
            <li>
              <hr className="bg-secondary" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-secondary h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">Smart Resource Manager</div>
              <hr className="bg-secondary" />
            </li>
            <li>
              <hr className="bg-secondary" />
              <div className="timeline-start timeline-box">Advanced Summarization Engine</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-secondary h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">Intelligent Notes Generator</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box">Gamified Learning Experience</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-end timeline-box">Adaptive Quiz Generation</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box">Psychological Learning Optimization</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-end timeline-box">Smart Calendar & Timetable Management</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box">Comprehensive Student Analytics</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-end timeline-box">Affordable Dual-Model Access</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box">Peer-Driven Development</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
                </svg>
              </div>
            </li>

          </ul>
        </div>

      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 font-inter font-semibold">
        <aside>
          <p>Copyright <span>&copy;</span> {new Date().getFullYear()} - All right reserved by Aeudra Inc.</p>
        </aside>
      </footer>
      </div>


    </div>
  );
}
