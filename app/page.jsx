import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16 items-center justify-center min-h-screen">
            {/* Top Section with Logo and Company Name */}
            <header className="flex items-center justify-between w-full p-6">
                <div className="flex items-center">
                    {/* Company Name and Logo */}
                    <div className="text-3xl font-bold">
                        PrinceinSats
                    </div>
                    {/* Bitcoin Fraction */}
                    <div className="ml-4 text-lg font-medium">
                        ∞ / 21M
                    </div>
                </div>
                {/* Explanation of Bitcoin Price */}
                <div className="text-sm italic">
                    The price of one Bitcoin is everything in the world divided by 21 million.
                </div>
            </header>

            {/* Center Section with Tagline and Graphic */}
            <section className="flex flex-col items-center text-center">
                {/* Tagline */}
                <h1 className="text-6xl font-bold mb-4">
                    The World in Bitcoin
                </h1>
                {/* Minimal Globe and Bitcoin Graphic (use a placeholder for now) */}
                <div className="w-32 h-32 mb-6">
                    <img 
                        src="https://via.placeholder.com/150?text=Globe+with+Bitcoin" 
                        alt="Globe with Bitcoin symbol"
                        className="w-full h-full object-contain"
                    />
                </div>
            </section>

            {/* Placeholder for TradingView Widget */}
            <section className="flex items-center justify-center w-full">
                <div className="border border-gray-300 w-full h-64" id="tradingview-widget">
                    {/* This is where you'll embed the TradingView widget */}
                </div>
            </section>
        </main>
    );
}
