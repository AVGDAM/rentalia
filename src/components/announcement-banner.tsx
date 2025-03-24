import Link from 'next/link';

export function AnnouncementBanner() {
  return (
    <div className="w-full max-w-[600px] mx-auto">
      <Link 
        href="/announcements"
        className="bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-700 w-full flex items-center justify-center py-2.5 px-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="text-[#3B82F6] font-medium">New!</span>
        <span className="mx-2 text-gray-900 dark:text-gray-100">Put an announcement here</span>
        <span className="text-xl">🎉</span>
        <span className="ml-1 dark:text-gray-100">›</span>
      </Link>
    </div>
  );
} 