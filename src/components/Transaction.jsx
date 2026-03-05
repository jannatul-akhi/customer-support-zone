/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Calendar, AlertCircle, CheckCircle2, X } from 'lucide-react';
import { toast } from 'react-toastify';

const initialTickets = [
    {
        id: '#1001',
        title: "Login Issues - Can't Access Account",
        description:
            "Customer is unable to log in to their account. They've tried resetting their password multiple times but still cannot access.",
        status: 'Open',
        priority: 'High',
        customer: 'John Smith',
        createdAt: '1/15/2024',
    },
    {
        id: '#1002',
        title: 'Payment Failed - Card Declined',
        description:
            'Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.',
        status: 'Open',
        priority: 'High',
        customer: 'Sarah Johnson',
        createdAt: '1/16/2024',
    },
    {
        id: '#1003',
        title: 'Unable to Download Invoice',
        description:
            'Customer cannot download their January invoice from the billing section. The download button is unresponsive.',
        status: 'In-Progress',
        priority: 'Medium',
        customer: 'Michael Brown',
        createdAt: '1/17/2024',
    },
    {
        id: '#1004',
        title: 'Incorrect Billing Address',
        description:
            "Customer's billing address shows a different city. They updated it but it still displays the old one.",
        status: 'Open',
        priority: 'Low',
        customer: 'Emily Davis',
        createdAt: '1/18/2024',
    },
    {
        id: '#1005',
        title: 'App Crash on Launch',
        description:
            'Customer reports that the mobile app crashes immediately upon opening on Android 13.',
        status: 'Open',
        priority: 'High',
        customer: 'David Wilson',
        createdAt: '1/19/2024',
    },
    {
        id: '#1006',
        title: 'Refund Not Processed',
        description:
            'Customer requested a refund two weeks ago but has not received the amount yet.',
        status: 'In-Progress',
        priority: 'Medium',
        customer: 'Sophia Taylor',
        createdAt: '1/20/2024',
    },
    {
        id: '#1007',
        title: 'Two-Factor Authentication Issue',
        description:
            'Customer is not receiving 2FA codes on their registered phone number.',
        status: 'Open',
        priority: 'High',
        customer: 'James Anderson',
        createdAt: '1/21/2024',
    },
    {
        id: '#1008',
        title: 'Unable to Update Profile Picture',
        description:
            "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
        status: 'Open',
        priority: 'Low',
        customer: 'Olivia Martinez',
        createdAt: '1/22/2024',
    },
    {
        id: '#1009',
        title: 'Subscription Auto-Renewal',
        description:
            'Customer wants to enable auto-renewal for their subscription but the toggle is greyed out.',
        status: 'In-Progress',
        priority: 'Medium',
        customer: 'Liam Thomas',
        createdAt: '1/23/2024',
    },
    {
        id: '#1010',
        title: 'Missing Order Confirmation Email',
        description:
            "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
        status: 'Open',
        priority: 'Medium',
        customer: 'Isabella Garcia',
        createdAt: '1/24/2024',
    },
    {
        id: '#1011',
        title: 'Slow Website Performance',
        description: 'Customer reports that the dashboard takes more than 10 seconds to load on Chrome.',
        status: 'Open',
        priority: 'Medium',
        customer: 'Noah Wilson',
        createdAt: '1/25/2024',
    },
    {
        id: '#1012',
        title: 'Account Settings Not Saving',
        description: 'Changes to email notification preferences are not being saved after clicking update.',
        status: 'Open',
        priority: 'Low',
        customer: 'Emma Thompson',
        createdAt: '1/26/2024',
    },
    {
        id: '#1013',
        title: 'API Integration Failure',
        description: 'Webhook notifications are failing with a 500 error for the production environment.',
        status: 'Open',
        priority: 'High',
        customer: 'Lucas Miller',
        createdAt: '1/27/2024',
    },
    {
        id: '#1014',
        title: 'Promo Code Not Applying',
        description: 'The code "WELCOME2024" is showing as expired but should be valid until March.',
        status: 'Open',
        priority: 'Medium',
        customer: 'Mia White',
        createdAt: '1/28/2024',
    },
    {
        id: '#1015',
        title: 'Duplicate Charges Found',
        description: 'Customer was charged twice for their monthly professional subscription.',
        status: 'Open',
        priority: 'High',
        customer: 'Ethan Harris',
        createdAt: '1/29/2024',
    },
];

function StatusBadge({ status }) {
    const styles = {
        Open: 'bg-green-100 text-green-700 border border-green-200',
        'In-Progress': 'bg-amber-100 text-amber-700 border border-amber-200',
        Resolved: 'bg-blue-100 text-blue-700 border border-blue-200',
    };
    const dotColors = {
        Open: 'bg-green-500',
        'In-Progress': 'bg-amber-500',
        Resolved: 'bg-blue-500',
    };
    return (
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${styles[status] || ''}`}>
            <span className={`w-2 h-2 rounded-full ${dotColors[status] || 'bg-gray-500'}`}></span>
            {status}
        </span>
    );
}

function PriorityBadge({ priority }) {
    const styles = {
        High: 'text-red-500 font-semibold',
        Medium: 'text-amber-500 font-semibold',
        Low: 'text-green-500 font-semibold',
    };
    return (
        <span className={`text-xs uppercase tracking-wider ${styles[priority] || ''}`}>
            {priority} Priority
        </span>
    );
}

function TicketCard({ ticket, onSelect, isSelected }) {
    return (
        <div
            onClick={() => onSelect(ticket)}
            className={`bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-all cursor-pointer ${isSelected ? 'border-violet-400 ring-2 ring-violet-200' : 'border-gray-200'
                }`}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900 text-sm pr-4">{ticket.title}</h3>
                <StatusBadge status={ticket.status} />
            </div>
            <p className="text-gray-500 text-sm mb-3 line-clamp-2">{ticket.description}</p>
            <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                    <span className="text-gray-500">{ticket.id}</span>
                    <PriorityBadge priority={ticket.priority} />
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <span>{ticket.customer}</span>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{ticket.createdAt}</span>
                </div>
            </div>
        </div>
    );
}

const Transaction = ({ tickets, taskStatus, resolvedTickets, handleSelectTicket, handleComplete, selectedIds }) => {
    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Customer Tickets */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-slate-800">
                                Customer Tickets
                            </h2>
                            <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">
                                {tickets.length} OPEN
                            </span>
                        </div>
                        {tickets.length === 0 ? (
                            <div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center">
                                <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-emerald-400 opacity-60" />
                                <p className="text-slate-500 font-medium">All tickets have been resolved!</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {tickets.map((ticket) => (
                                    <TicketCard
                                        key={ticket.id}
                                        ticket={ticket}
                                        onSelect={handleSelectTicket}
                                        isSelected={selectedIds.has(ticket.id)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Task Status Panel */}
                    <div className="lg:col-span-1">
                        {/* <h2 className="text-xl font-bold text-slate-800 mb-4">Task Status</h2> */}
                        <div className="p-5 sticky top-8">
                            {/* In-Progress Tasks */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center justify-between">
                                    <span className="flex items-center gap-2">
                                        
                                        Task Status
                                    </span>
                                    {/* <span className="text-slate-400 text-xs font-normal">({taskStatus.length})</span> */}
                                </h3>
                                {taskStatus.length === 0 ? (
                                    <div className="">
                                        {/* <AlertCircle className="w-6 h-6 text-slate-300 mb-2" /> */}
                                        <span className="text-sm text-slate-400 text-start">Select a ticket from the left to start working on it</span>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        {taskStatus.map((ticket) => (
                                            <div key={ticket.id} className="bg-white border border-amber-100 rounded-xl p-4 transition-all hover:shadow-sm">
                                                <p className="text-lg font-bold text-slate-800 mb-1 line-clamp-1">{ticket.title}</p>
                                                {/* <p className="text-xs text-slate-500 mb-3">{ticket.customer} · {ticket.id}</p> */}
                                                <button
                                                    onClick={() => handleComplete(ticket)}
                                                    className="w-full py-2 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold rounded-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
                                                >
                                                    
                                                    Complete
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Resolved Tasks */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center justify-between">
                                    <span className="flex items-center gap-2">
                                        
                                        Resolved
                                    </span>
                                    {/* <span className="text-slate-400 text-xs font-normal">({resolvedTickets.length})</span> */}
                                </h3>
                                {resolvedTickets.length === 0 ? (
                                    <div className="text-start">
                                        <span className="text-sm text-slate-400">No tickets resolved yet.</span>
                                    </div>
                                ) : (
                                    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 thin-scrollbar">
                                        {resolvedTickets.map((ticket) => (
                                            <div key={ticket.id} className="bg-[#E0E7FF] border border-blue-100/50 rounded-lg p-3 flex items-center gap-3">
                                               
                                                <div className="min-w-0">
                                                    <p className="text-xs font-bold text-slate-700 truncate">{ticket.title}</p>
                                                    {/* <p className="text-[10px] text-slate-400">{ticket.customer}</p> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transaction;