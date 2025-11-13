import Navbar from './components/Navbar';
import StickyScroll from './components/StickyScroll';

export default function Home() {
  return (

    <div className="h-screen flex flex-col">
      <Navbar />

      {/* Scroll container */}
      <div className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-hide">

        {/* Section 1 */}
        <div id='home' className="h-full flex flex-col justify-center items-center snap-start bg-linear-to-b from-secondary-content from-50% to-primary-content text-center">
          <p className="uppercase font-inter font-extralight text-lg md:text-2xl tracking-[6px]">introducing</p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-secondary -my-2 md:-my-4">Aedura</h1>
          <p className="text-center mt-10 md:mt-20 text-white/50 -tracking-tighter max-w-xs md:max-w-2xl lg:max-w-5xl text-sm md:text-base">Your AI study coach for schools and students alike. We gamify learning, generate smart notes, and create personalized quizzes from your school's papers. B2B and D2C solutions at revolutionary prices.</p>
        </div>
import StickyScroll from './components/StickyScroll';

// ... inside the Home component, replace the #about-us section

        {/* Section 2 */}
        <StickyScroll />

        {/* Section 3 */}
        <div id="offerings" className="h-full flex flex-col justify-center items-center snap-start bg-linear-to-b from-accent-content from-50% to-secondary-content text-center">
          <p className="uppercase font-inter font-extralight text-lg md:text-2xl tracking-[6px]">our</p>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-accent -my-1 uppercase max-w-xs md:max-w-2xl lg:max-w-5xl text-center leading-tight md:leading-26">flagship features</h1>
        </div>

        {/* Section 4 */}
        <div className="h-full flex flex-col justify-center items-center snap-start bg-secondary-content p-4 md:p-0">
          <ul className="timeline timeline-vertical font-semibold font-inter">
            <li>
              <div className="timeline-start timeline-box w-full md:w-auto">AI-Powered Personal Coach</div>
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
