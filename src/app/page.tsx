import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-[#111827] text-[#E5E7EB]">
      <Navbar />

      {/* Scroll container */}
      <div className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-hide">
        {/* Section 1 */}
        <div
          id="home"
          className="h-screen flex flex-col justify-center items-center snap-start bg-[linear-gradient(135deg,rgba(59,130,246,0.35),rgba(17,24,39,0.95),rgba(16,185,129,0.35))]"
        >
          <p className="uppercase font-inter font-extralight text-2xl tracking-[6px] text-[#6EE7B7]">
            introducing
          </p>
          <h1 className="font-heading text-9xl  text-[#93C5FD] -my-4 drop-shadow-[0_12px_40px_rgba(59,130,246,0.35)]">
            Aedura
          </h1>
          <p className="text-center mt-20 text-[#9CA3AF] -tracking-tighter max-w-5xl">
            Your AI study coach for schools and students alike. We gamify
            learning, generate smart notes, and create personalized quizzes from
            your school's papers. B2B and D2C solutions at revolutionary prices.
          </p>
        </div>

        {/* Section 2 */}
        <div
          id="about-us"
          className="h-screen flex justify-center items-center snap-start gap-20 bg-[linear-gradient(155deg,#111827_0%,rgba(59,130,246,0.12)_45%,rgba(16,185,129,0.18)_100%)]"
        >
          <div className="flex flex-col lg:flex-row mx-auto max-w-6xl w-full gap-10 lg:gap-20 items-center lg:items-center">
            <div className="relative bg-[linear-gradient(150deg,rgba(59,130,246,0.12),rgba(17,24,39,0.9),rgba(16,185,129,0.12))] border-2 border-[#3B82F6]/40 p-12 rounded-3xl shadow-2xl shadow-[#3B82F6]/20 backdrop-blur-sm group hover:border-[#3B82F6]/60 transition-all duration-300 hover:shadow-[#10B981]/20">
              {/* Animated background elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-[#3B82F6]/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 bg-[#10B981]/20 rounded-full animate-bounce delay-300"></div>
              {/* Main content */}
              <div className="relative z-10 text-center space-y-6 font-inter font-semibold">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3B82F6]/15 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-[#3B82F6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h2 className="font-inter text-3xl font-bold tracking-tight text-[#3B82F6] mb-2">
                  Mock-Ups
                </h2>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 rounded-full border border-[#3B82F6]/30">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full animate-ping"></div>
                  <span className="text-sm font-medium text-[#93C5FD] uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>

                <p className="text-[#9CA3AF] text-sm max-w-xs mx-auto leading-relaxed tracking-tight">
                  Interactive previews and visual demonstrations are currently
                  in development
                </p>

                {/* Progress indicator */}
                <div className="mt-6">
                  {/* <div className="w-full bg-primary/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-primary/60 h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div> */}
                  <progress
                    className="progress w-56"
                    value="70"
                    max="100"
                    style={{ accentColor: "#3B82F6" }}
                  ></progress>
                  <p className="text-xs text-[#93C5FD] mt-2 uppercase -tracking-tighter">
                    70% Complete
                  </p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#3B82F6]/50 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#3B82F6]/50 rounded-br-3xl"></div>
            </div>

            <div className="flex flex-col flex-1 w-full p-6 sm:p-10 gap-8 sm:gap-10 font-inter tracking-tight">
              <p>
                Built for Students, by Students Aedura was created by learners
                who experienced the real challenges of traditional education and
                costly tutoring. Backed by Schoolpad’s edtech ecosystem, we
                built an AI-powered platform that understands how students truly
                learn.
              </p>
              <p>
                Our mission is to make quality education accessible through
                intelligent, personalized learning — blending artificial
                intelligence with proven psychological methods to help students
                study smarter, not harder.
              </p>
              <p>
                Aedura bridges the gap between schools, teachers, and learners —
                offering efficient management for institutions and adaptive
                learning for students, all at a fraction of the cost of existing
                solutions.
              </p>
              <p>Aedura — Education that learns with you.</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div
          id="offerings"
          className="h-screen flex flex-col justify-center items-center snap-start bg-[linear-gradient(135deg,rgba(59,130,246,0.22),rgba(17,24,39,0.92),rgba(16,185,129,0.22))]"
        >
          <p className="uppercase font-inter font-extralight text-2xl tracking-[6px] text-[#6EE7B7]">
            our
          </p>
          <h1 className="font-heading text-9xl text-[#93C5FD] -my-1 uppercase max-w-5xl text-center leading-26">
            flagship features
          </h1>
        </div>

        {/* Section 4 */}
        <div className="h-full flex flex-col justify-center items-center snap-start bg-[#0B1120]">
          <ul className="timeline timeline-vertical font-semibold font-inter">
            <li>
              <div className="timeline-start timeline-box bg-[#111827] border border-[#1F2937] text-[#E5E7EB]">
                AI-Powered Personal Coach
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-[#10B981] h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-[#1F2937] border-0 h-px" />
            </li>
            <li>
              <hr className="bg-[#1F2937] border-0 h-px" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-[#10B981] h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box bg-[#111827] border border-[#1F2937] text-[#E5E7EB]">
                Smart Resource Manager
              </div>
              <hr className="bg-[#1F2937] border-0 h-px" />
            </li>
            <li>
              <hr className="bg-[#1F2937] border-0 h-px" />
              <div className="timeline-start timeline-box bg-[#111827] border border-[#1F2937] text-[#E5E7EB]">
                Advanced Summarization Engine
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-[#10B981] h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-[#1F2937] border-0 h-px" />
            </li>
            <li>
              <hr className="bg-[#1F2937] border-0 h-px" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-[#10B981] h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box bg-[#111827] border border-[#1F2937] text-[#E5E7EB]">
                Intelligent Notes Generator
              </div>
              <hr className="bg-[#1F2937] border-0 h-px" />
            </li>
            <li>
              <hr className="bg-[#1F2937] border-0 h-px" />
              <div className="timeline-start timeline-box bg-[#111827] border border-[#1F2937] text-[#E5E7EB]">
                Gamified Learning Experience
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-[#10B981] h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-[#1F2937] border-0 h-px" />
            </li>
            <li>
              <hr className="bg-[#1F2937] border-0 h-px" />
              <div className="timeline-end timeline-box bg-[#111827] border border-[#1F2937] text-[#E5E7EB]">
                Adaptive Quiz Generation
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-[#10B981] h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-[#1F2937] border-0 h-px" />
            </li>
            <li>
              <hr className="bg-[#1F2937] border-0 h-px" />
              <div className="timeline-start timeline-box bg-[#111827] border border-[#1F2937] text-[#E5E7EB]">
                Psychological Learning Optimization
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-[#10B981] h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-[#1F2937] border-0 h-px" />
            </li>
            <li>
              <hr className="bg-[#1F2937] border-0 h-px" />
              <div className="timeline-end timeline-box bg-[#111827] border border-[#1F2937] text-[#E5E7EB]">
                Smart Calendar & Timetable Management
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-[#10B981] h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-[#1F2937] border-0 h-px" />
            </li>
            <li>
              <hr className="bg-[#1F2937] border-0 h-px" />
              <div className="timeline-start timeline-box bg-[#111827] border border-[#1F2937] text-[#E5E7EB]">
                Comprehensive Student Analytics
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-[#10B981] h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-[#1F2937] border-0 h-px" />
            </li>
            <li>
              <hr className="bg-[#1F2937] border-0 h-px" />
              <div className="timeline-end timeline-box bg-[#111827] border border-[#1F2937] text-[#E5E7EB]">
                Affordable Dual-Model Access
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-[#10B981] h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-[#1F2937] border-0 h-px" />
            </li>
            <li>
              <hr className="bg-[#1F2937] border-0 h-px" />
              <div className="timeline-start timeline-box bg-[#111827] border border-[#1F2937] text-[#E5E7EB]">
                Peer-Driven Development
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-[#10B981] h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>

        <footer className="footer sm:footer-horizontal footer-center bg-[#0F172A] text-[#E5E7EB] border-t border-[#1F2937] p-4 font-inter font-semibold">
          <aside>
            <p>
              Copyright <span>&copy;</span> {new Date().getFullYear()} - All
              right reserved by Aeudra Inc.
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
}
