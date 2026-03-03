import Image from 'next/image';

export default function About() {
    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Welcome to Moon Guest House Skardu, where comfort meets affordability.
                    </p>
                </div>

                {/* Our Story */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/about-image.jpg"
                            alt="Moon Guest House Skardu"
                            layout="fill"
                            objectFit="contain"
                            className="bg-white"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Moon Guest House Skardu, a cozy haven nestled in the heart of Skardu's business district, offers a warm welcome to travelers. As you step into this charming guesthouse, free in-room WiFi, setting the tone for a comfortable stay. The 24-hour front desk assistance and tour/ticket help ensure that your needs are taken care of, allowing you to focus on exploring the breathtaking beauty of Skardu.
                        </p>
                    </div>
                </div>

                {/* Our Values */}
                <div className="bg-gray-50 rounded-xl p-12 mb-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Hospitality</h3>
                            <p className="text-gray-600">We believe in treating every guest like family.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">✨</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality</h3>
                            <p className="text-gray-600">We maintain the highest standards of cleanliness and comfort.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌍</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Sustainability</h3>
                            <p className="text-gray-600">We are committed to eco-friendly practices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
