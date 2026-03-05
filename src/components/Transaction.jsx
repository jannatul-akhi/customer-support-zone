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
        date: '1/15/2024',
    },
    {
        id: '#1002',
        title: 'Payment Failed - Card Declined',
        description:
            'Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.',
        status: 'Open',
        priority: 'High',
        customer: 'Sarah Johnson',
        date: '1/16/2024',
    },
    {
        id: '#1003',
        title: 'Unable to Download Invoice',
        description:
            'Customer cannot download their January invoice from the billing section. The download button is unresponsive.',
        status: 'In-Progress',
        priority: 'Medium',
        customer: 'Michael Brown',
        date: '1/17/2024',
    },
    {
        id: '#1004',
        title: 'Incorrect Billing Address',
        description:
            "Customer's billing address shows a different city. They updated it but it still displays the old one.",
        status: 'Open',
        priority: 'Low',
        customer: 'Emily Davis',
        date: '1/18/2024',
    },
    {
        id: '#1005',
        title: 'App Crash on Launch',
        description:
            'Customer reports that the mobile app crashes immediately upon opening on Android 13.',
        status: 'Open',
        priority: 'High',
        customer: 'David Wilson',
        date: '1/19/2024',
    },
    {
        id: '#1006',
        title: 'Refund Not Processed',
        description:
            'Customer requested a refund two weeks ago but has not received the amount yet.',
        status: 'In-Progress',
        priority: 'Medium',
        customer: 'Sophia Taylor',
        date: '1/20/2024',
    },
    {
        id: '#1007',
        title: 'Two-Factor Authentication Issue',
        description:
            'Customer is not receiving 2FA codes on their registered phone number.',
        status: 'Open',
        priority: 'High',
        customer: 'James Anderson',
        date: '1/21/2024',
    },
    {
        id: '#1008',
        title: 'Unable to Update Profile Picture',
        description:
            "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
        status: 'Open',
        priority: 'Low',
        customer: 'Olivia Martinez',
        date: '1/22/2024',
    },
    {
        id: '#1009',
        title: 'Subscription Auto-Renewal',
        description:
            'Customer wants to enable auto-renewal for their subscription but the toggle is greyed out.',
        status: 'In-Progress',
        priority: 'Medium',
        customer: 'Liam Thomas',
        date: '1/23/2024',
    },
    {
        id: '#1010',
        title: 'Missing Order Confirmation Email',
        description:
            "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
        status: 'Open',
        priority: 'Medium',
        customer: 'Isabella Garcia',
        date: '1/24/2024',
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
                    <span>{ticket.date}</span>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, count, gradient }) {
    return (
        <div className={`rounded-xl p-6 text-white ${gradient} relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                        <pattern id={`grid-${title}`} width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${title})`} />
                    <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                    <path d="M0,120 Q100,70 200,120 T400,120" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                </svg>
            </div>
            <div className="relative z-10 text-center">
                <p className="text-lg font-medium mb-2">{title}</p>
                <p className="text-5xl font-bold">{count}</p>
            </div>
        </div>
    );
}

const Transaction = () => {
    const [tickets, setTickets] = useState(initialTickets);
    const [taskStatus, setTaskStatus] = useState([]);
    const [resolvedTickets, setResolvedTickets] = useState([]);
    const [selectedIds, setSelectedIds] = useState(new Set());

    const inProgressCount = taskStatus.length;
    const resolvedCount = resolvedTickets.length;

    const handleSelectTicket = (ticket) => {
        if (selectedIds.has(ticket.id)) {
            toast.info(`"${ticket.title}" is already in Task Status.`);
            return;
        }
        setTaskStatus(prev => [...prev, ticket]);
        setSelectedIds(prev => new Set([...prev, ticket.id]));
        toast.success(`Ticket "${ticket.title}" added to Task Status!`);
    };

    const handleComplete = (ticket) => {
        // Remove from task status
        setTaskStatus(prev => prev.filter(t => t.id !== ticket.id));
        // Remove from customer tickets
        setTickets(prev => prev.filter(t => t.id !== ticket.id));
        // Add to resolved
        setResolvedTickets(prev => [...prev, { ...ticket, status: 'Resolved' }]);
        // Remove from selected set
        setSelectedIds(prev => {
            const next = new Set(prev);
            next.delete(ticket.id);
            return next;
        });
        toast.success(`Ticket "${ticket.title}" has been resolved! 🎉`);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Banner / Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Customer Tickets */}
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Customer Tickets
                            <span className="ml-2 text-sm font-normal text-gray-500">({tickets.length} open)</span>
                        </h2>
                        {tickets.length === 0 ? (
                            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center text-gray-400">
                                <CheckCircle2 className="w-10 h-10 mx-auto mb-2 text-emerald-400" />
                                <p>All tickets have been resolved!</p>
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
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Task Status</h2>
                        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                            <p className="text-gray-400 text-sm mb-4">
                                Click any ticket card to add it here
                            </p>

                            {/* In-Progress Tasks */}
                            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                                In-Progress ({taskStatus.length})
                            </h3>
                            {taskStatus.length === 0 ? (
                                <div className="flex items-center gap-2 text-gray-400 mb-4 p-3 bg-gray-50 rounded-lg">
                                    <AlertCircle className="w-4 h-4" />
                                    <span className="text-sm">No tasks in progress.</span>
                                </div>
                            ) : (
                                <div className="space-y-2 mb-4">
                                    {taskStatus.map((ticket) => (
                                        <div key={ticket.id} className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                                            <p className="text-sm font-medium text-gray-800 mb-1 line-clamp-1">{ticket.title}</p>
                                            <p className="text-xs text-gray-500 mb-2">{ticket.customer} · {ticket.id}</p>
                                            <button
                                                onClick={() => handleComplete(ticket)}
                                                className="w-full py-1.5 px-3 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white text-xs font-semibold rounded-md hover:brightness-110 transition flex items-center justify-center gap-1"
                                            >
                                                <CheckCircle2 className="w-3.5 h-3.5" />
                                                Mark Complete
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Resolved Tasks */}
                            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                Resolved ({resolvedTickets.length})
                            </h3>
                            {resolvedTickets.length === 0 ? (
                                <div className="flex items-center gap-2 text-gray-400 p-3 bg-gray-50 rounded-lg">
                                    <AlertCircle className="w-4 h-4" />
                                    <span className="text-sm">No resolved tasks yet.</span>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {resolvedTickets.map((ticket) => (
                                        <div key={ticket.id} className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium text-gray-700 line-clamp-1">{ticket.title}</p>
                                                <p className="text-xs text-gray-400">{ticket.customer}</p>
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
    );
};

export default Transaction;