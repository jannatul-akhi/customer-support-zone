import React from 'react';
import { Ticket, HeadphonesIcon } from 'lucide-react';

const Banner = () => {
    return (
        <section className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <div className="flex justify-center mb-4">
                    <div className="bg-white/20 rounded-full p-3">
                        <HeadphonesIcon className="w-8 h-8 text-white" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Customer Support Zone
                </h1>
                <p className="text-violet-200 text-lg max-w-xl mx-auto mb-2">
                    Manage, track, and resolve customer tickets efficiently — all in one place.
                </p>
                <div className="flex justify-center items-center gap-2 mt-4 text-violet-200 text-sm">
                    <Ticket className="w-4 h-4" />
                    <span>Click any ticket card to start working on it</span>
                </div>
            </div>
        </section>
    );
};

export default Banner;