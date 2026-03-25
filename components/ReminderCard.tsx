"use client";
import { Bell } from 'lucide-react';

export default function ReminderCard({ country, reminderEmail, setReminderEmail, handleSetReminder, showReminderToast }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Bell className="w-5 h-5 text-red-500" />
        Don't Miss a Deadline
      </h3>
      <p className="text-xs text-gray-600 mb-4">
        Get free email reminders 1 week before {country} quarterly tax due dates. Avoid penalties!
      </p>
      <form onSubmit={handleSetReminder} className="flex gap-2">
        <input 
          type="email" 
          required
          value={reminderEmail}
          onChange={(e) => setReminderEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors">
          Set
        </button>
      </form>
      {showReminderToast && (
        <p className="text-xs text-green-600 mt-2 font-medium animate-in fade-in">
          ✓ Reminder set! We'll notify you.
        </p>
      )}
    </div>
  );
}
