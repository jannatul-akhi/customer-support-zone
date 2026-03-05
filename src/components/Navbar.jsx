import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-slate-50">
            <header className="shadow-2xl bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2 text-base font-semibold tracking-tight text-slate-900">
                        <span>CS</span>
                        <span className="text-slate-400">—</span>
                        <span>Ticket System</span>
                    </div>

                    {/* Center nav links */}
                    <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
                        <li>
                            <a href="#" className="transition-colors hover:text-slate-900">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-slate-900">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-slate-900">
                                Changelog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-slate-900">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-slate-900">
                                Download
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-slate-900">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* New Ticket button */}
                    <div className="flex items-center">
                        <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-violet-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-purple-200 transition hover:brightness-110">
                            <span className="flex h-4 w-4 items-center justify-center rounded bg-white/20 text-xs font-bold">
                                +
                            </span>
                            <span>New Ticket</span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Placeholder content area */}
            {/* <main className="mx-auto max-w-6xl px-6 py-16 text-center text-slate-400">
                <p>Navbar demo &mdash; replace this area with your page content.</p>
            </main> */}
        </div>
    );
};

export default Navbar;