'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Header />
            <main className="grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
}
