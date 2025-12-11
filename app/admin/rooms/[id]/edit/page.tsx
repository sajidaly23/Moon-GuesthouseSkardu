'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditRoom() {
    const router = useRouter();
    const params = useParams();
    const { id } = params;

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        capacity: '',
        amenities: '',
        images: '',
    });

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const res = await fetch(`/api/rooms/${id}`);
                const data = await res.json();
                if (data.success) {
                    const room = data.data;
                    setFormData({
                        name: room.name,
                        description: room.description,
                        price: room.price,
                        capacity: room.capacity,
                        amenities: room.amenities.join(', '),
                        images: room.images.join(', '),
                    });
                }
            } catch (error) {
                console.error('Failed to fetch room:', error);
            }
        };

        if (id) {
            fetchRoom();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const amenitiesArray = formData.amenities.split(',').map(item => item.trim()).filter(item => item !== '');
        const imagesArray = formData.images.split(',').map(item => item.trim()).filter(item => item !== '');

        const payload = {
            ...formData,
            price: Number(formData.price),
            capacity: Number(formData.capacity),
            amenities: amenitiesArray,
            images: imagesArray,
        };

        try {
            const res = await fetch(`/api/rooms/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (data.success) {
                router.push('/admin/rooms');
            } else {
                alert('Failed to update room: ' + data.error);
            }
        } catch (error) {
            console.error('Failed to update room:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Room</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Room Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        required
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Capacity</label>
                        <input
                            type="number"
                            name="capacity"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            value={formData.capacity}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Amenities (comma separated)</label>
                    <input
                        type="text"
                        name="amenities"
                        placeholder="WiFi, TV, AC"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        value={formData.amenities}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Image URLs (comma separated)</label>
                    <input
                        type="text"
                        name="images"
                        placeholder="/room1.jpg, /room2.jpg"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        value={formData.images}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-4 hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Update Room
                    </button>
                </div>
            </form>
        </div>
    );
}
