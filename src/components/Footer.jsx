import React from 'react';
import { Mail } from 'lucide-react';
import { FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 lg:gap-10">
                    {/* বামের বড় অংশ */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">CS — Ticket System</h3>
                        <p className="text-gray-400 leading-relaxed max-w-prose">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold mb-3 text-lg">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Saled</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold mb-3 text-lg">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="font-bold mb-3 text-lg">Information</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
                        </ul>
                    </div>

                    {/* Social Links – এটা শেষ কলামে থাকবে */}
                    <div>
                        <h4 className="font-bold mb-3 text-lg">Social Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center gap-2.5">
                                <FaXTwitter className="w-5 h-5 flex-shrink-0" /> @CS — Ticket System
                            </li>
                            <li className="flex items-center gap-2.5">
                                <FaInstagram className="w-5 h-5 flex-shrink-0" /> @CS — Ticket System
                            </li>
                            <li className="flex items-center gap-2.5">
                                <FaFacebook className="w-5 h-5 flex-shrink-0" /> @CS — Ticket System
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-5 h-5 flex-shrink-0" /> support@cst.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                    <p>© 2025 CS — Ticket System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;