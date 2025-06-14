import React from 'react';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-2xl">Dashboard</h1>
            </header>
            <main className="flex-grow p-4">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; {new Date().getFullYear()} Your Company</p>
            </footer>
        </div>
    );
};

export default DashboardLayout;