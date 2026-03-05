import React from "react";
import { Ticket, HeadphonesIcon } from "lucide-react";

const StatCard = ({ title, count, gradient }) => {
  return (
    <div
      className={`rounded-xl p-6 text-white ${gradient} relative overflow-hidden shadow-lg border border-white/10 group hover:scale-[1.02] transition-transform duration-300`}
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          <defs>
            <pattern
              id={`grid-${title}`}
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${title})`} />
          <path
            d="M0,100 Q100,50 200,100 T400,100"
            fill="none"
            stroke="white"
            strokeWidth="2"
            opacity="0.3"
          />
          <path
            d="M0,120 Q100,70 200,120 T400,120"
            fill="none"
            stroke="white"
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>
      </div>
      <div className="relative z-10 text-center">
        <p className="text-lg font-medium mb-1 opacity-90">{title}</p>
        <p className="text-5xl font-extrabold tracking-tight">{count}</p>
      </div>
    </div>
  );
};

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className=" text-white pt-16 pb-12 px-4 shadow-inner">
      <div className="max-w-6xl mx-auto">
        {/* <div className="text-center mb-10">
                    <div className="flex justify-center mb-6">
                        <div className="bg-white/20 rounded-full p-4 ring-8 ring-white/10">
                            <HeadphonesIcon className="w-10 h-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Customer Support Zone
                    </h1>
                    <p className="text-violet-100 text-lg max-w-xl mx-auto mb-6 leading-relaxed opacity-90">
                        Manage, track, and resolve customer tickets efficiently — all in one place.
                    </p>
                    <div className="flex justify-center items-center gap-2 text-violet-200 text-sm font-medium">
                        <Ticket className="w-4 h-4" />
                        <span>Click any ticket card to start working on it</span>
                    </div>
                </div> */}

        {/* Statistics Cards inside Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto -mb-24 lg:-mb-28 relative z-20">
          <StatCard
            title="In-Progress"
            count={inProgressCount}
            gradient="bg-gradient-to-br from-violet-500 to-violet-700"
          />
          <StatCard
            title="Resolved"
            count={resolvedCount}
            gradient="bg-gradient-to-br from-emerald-400 to-emerald-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
