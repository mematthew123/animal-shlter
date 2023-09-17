import React from 'react'

interface AnimalCardProps {
    image?: string;
    name: string;
    description?: string;
    type: 'dog' | 'cat';
    temperament?: string[];
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ image, name, description, type, temperament }) => {
    console.log(temperament);
    return (
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {image && <img src={image} alt={name} className="w-full h-48 object-contain rounded-t-lg" />}
            <div className="p-2">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-600 mt-2 line-clamp-1">{description}</p>
                {/* <div className=" grid grid-cols-2 gap-2 mt-4">
                    {temperament?.map(temp => (
                        <span key={temp} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                            {temp}
                        </span>
                    ))}
                </div>

                <span className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-medium ${type === 'dog' ? 'bg-blue-200 text-blue-800' : 'bg-pink-200 text-pink-800'}`}>
                    {type}
                </span> */}
            </div>
        </div>
    )
}
