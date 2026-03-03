import Link from 'next/link';
import { FaTachometerAlt, FaBed, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-6">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    <Link href="/admin" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors">
                        <FaTachometerAlt className="mr-3" />
                        Dashboard
                    </Link>
                    <Link href="/admin/rooms" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors">
                        <FaBed className="mr-3" />
                        Rooms
                    </Link>
                    <Link href="/admin/bookings" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors">
                        <FaCalendarAlt className="mr-3" />
                        Bookings
                    </Link>
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <Link href="/" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors">
                        <FaSignOutAlt className="mr-3" />
                        Back to Site
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
