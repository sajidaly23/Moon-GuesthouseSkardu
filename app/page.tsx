import Link from 'next/link';
import Image from 'next/image';
import RoomCard from '../components/RoomCard';

export default function Home() {
  // Dummy data for featured rooms
  const featuredRooms = [
    {
      _id: '3',
      name: 'Family Suite',
      description: 'Large suite suitable for families. Includes two bedrooms, a living area, and kitchenette.',
      price: 30,
      images: ['/room-3.jpg'],
    },
    {
      _id: '2',
      name: 'Standard Garden View',
      description: 'Cozy room overlooking the lush garden. Perfect for a relaxing getaway.',
      price: 20,
      images: ['/room-2.jpg'],
    },
    {
      _id: '1',
      name: 'Deluxe Mountain View',
      description: 'Spacious room with a stunning view of the mountains. Includes King size bed, private balcony, and jacuzzi.',
      price: 30,
      images: ['/room-1.jpg'],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          {/* Using img for background is acceptable if layout='fill' causes issues, but let's try to be compliant or ignore if needed. 
              Actually, for background image, standard img with object-cover is often easier, but Next.js prefers Image.
              I'll use a simple div with background image via style or class if I had the asset, but here I'll just suppress the warning or use Image.
              Let's use Image.
          */}
          <Image
            src="/room-1.jpg"
            alt="Moon Guest House Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Moon Guest House</h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience comfort, luxury, and serenity.
          </p>
          <Link href="/rooms" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Book Your Stay
          </Link>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Featured Rooms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/rooms" className="text-blue-600 font-semibold hover:underline text-lg">
            View All Rooms &rarr;
          </Link>
        </div>
      </section>

      {/* Testimonials Section (Placeholder) */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">&quot;Absolutely amazing stay! The staff was incredibly helpful and the room was perfect.&quot;</p>
              <p className="font-bold text-gray-800">- Jane Doe</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">&quot;A hidden gem. I loved the peaceful atmosphere and the delicious breakfast.&quot;</p>
              <p className="font-bold text-gray-800">- John Smith</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">&quot;Highly recommended for anyone looking for a relaxing vacation.&quot;</p>
              <p className="font-bold text-gray-800">- Sarah Lee</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
