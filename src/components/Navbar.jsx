import React, { useState } from 'react';
import { Menu, X, Plus } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Changelog', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Download', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <div className="bg-slate-50 sticky top-0 z-50">
            <header className="shadow-sm bg-white/80 backdrop-blur-md border-b border-slate-100">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900 group cursor-pointer">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg  text-black ">
                            CS
                        </div>
                        <span className="hidden sm:inline-block"> — </span>
                        <span className="hidden sm:inline-block">Ticket System</span>
                    </div>

                    {/* Desktop nav links */}
                    <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="transition-all hover:text-violet-600 hover:scale-105 inline-block">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop New Ticket button */}
                    <div className="hidden md:flex items-center">
                        <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-200 transition-all hover:brightness-110 hover:scale-105 active:scale-95">
                            <Plus className="h-4 w-4" />
                            <span>New Ticket</span>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile menu, show/hide based on menu state. */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="space-y-1 px-4 pb-6 pt-2 border-t border-slate-50 bg-white">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-violet-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="mt-4 px-3">
                            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-3 text-base font-bold text-white shadow-lg shadow-purple-100 transition-all active:scale-95">
                                <Plus className="h-5 w-5" />
                                <span>New Ticket</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;