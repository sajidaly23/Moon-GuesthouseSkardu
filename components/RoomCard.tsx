import Link from 'next/link';
import Image from 'next/image';

interface Room {
    _id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
}

interface RoomCardProps {
    room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
                <Image
                    src={room.images[0] || '/placeholder-room.jpg'}
                    alt={room.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{room.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">${room.price} / night</span>
                    <Link href={`/rooms/${room._id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
