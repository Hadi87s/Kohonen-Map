import React from 'react';
import { Brain } from 'lucide-react';
import KohonenMap from './components/KohonenMap';
import Controls from './components/Controls';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-gray-100 flex flex-col">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center gap-8">
                <KohonenMap />
                <Controls />
            </main>

            <Footer />
        </div>
    );
}

export default App;