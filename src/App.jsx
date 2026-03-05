import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Transaction from './components/Transaction'
import Banner from './components/Banner'

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

function App() {
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
    // Update the ticket status locally for the grid if needed (though requirement says grid shows all tickets until resolved)
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
    <>
      <Navbar />
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
      <Transaction 
        tickets={tickets} 
        taskStatus={taskStatus} 
        resolvedTickets={resolvedTickets} 
        handleSelectTicket={handleSelectTicket} 
        handleComplete={handleComplete}
        selectedIds={selectedIds}
      />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
