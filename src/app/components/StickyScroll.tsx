"use client";
import React, { useRef, useState, useEffect } from 'react';

const content = [
    {
        title: "Built for students, by students",
        description: "Aedura was created by learners who experienced firsthand the challenges of traditional education systems and expensive tutoring solutions. As part of Schoolpad's educational technology ecosystem, we recognized the need for an intelligent, accessible learning platform that truly understands student needs."
    },
    {
        title: "Student-Validated Design",
        description: "Our mission is simple: democratize quality education through AI and psychological insights. <span>Every feature is designed, tested, and validated by actual students</span> who know what works in real academic situations, not theoretical assumptions."
    },
    {
        title: "Adaptive Learning Environment",
        description: "Aedura combines cutting-edge artificial intelligence with proven educational methodologies, creating a learning environment that adapts to each student's unique pace and style. We're not just another educational app - we're a comprehensive ecosystem <span>built with genuine student insight and experience</span>."
    },
    {
        title: "Practical and Relevant Solutions",
        description: "<span>Our student-centric development ensures practical, relevant solutions</span> that address real classroom challenges. Through our dual B2B and D2C approach, we serve both schools and individual learners with tools that are <span>5 times more affordable than existing alternatives</span>."
    },
    {
        title: "Continuous Innovation",
        description: "At Aedura, we stay ahead of educational trends through continuous innovation, always ensuring our <span>peer-developed platform</span> delivers the most effective learning tools available."
    }
];

const StickyScroll = () => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const cardLength = content.length;

    useEffect(() => {
        const onScroll = () => {
            if (ref.current) {
                const { top } = ref.current.getBoundingClientRect();
                const scrollY = window.scrollY;
                const triggerPosition = top + scrollY;
                const cardHeight = ref.current.offsetHeight / cardLength;
                const currentCard = Math.min(cardLength - 1, Math.floor((scrollY - triggerPosition) / cardHeight));
                setActiveCard(currentCard < 0 ? 0 : currentCard);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [cardLength]);

    return (
        <div ref={ref} className="h-[300vh] relative font-inter tracking-tight bg-gradient-to-b from-primary-content from-50% to-accent-content">
            <div className="sticky top-1/2 -translate-y-1/2 flex justify-center items-center h-screen">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/2 space-y-8 p-4 md:p-0">
                        {content.map((item, index) => (
                            <div key={item.title} className={`transition-opacity duration-500 py-8 ${activeCard === index ? 'opacity-100' : 'opacity-20'}`}>
                                <h2 className="text-3xl font-bold text-primary mb-2">{item.title}</h2>
                                <p className="text-lg leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full md:w-1/2 h-auto md:h-[50vh] flex items-center justify-center p-4 md:p-0">
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
                                    <progress className="progress progress-primary w-56" value={((activeCard + 1) / cardLength) * 100} max="100"></progress>
                                    <p className="text-xs text-primary/60 mt-2 uppercase -tracking-tighter">{Math.round(((activeCard + 1) / cardLength) * 100)}% Complete</p>
                                </div>
                            </div>

                            {/* Decorative corner accent */}
                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StickyScroll;