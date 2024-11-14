// import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
// import { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet-geosearch/dist/geosearch.css';
// import { Input } from 'rizzui';
// import { IoSearchSharp } from 'react-icons/io5';
// import { MdCancel } from 'react-icons/md';

// const Step2 = (props) => {
//     delete L.Icon.Default.prototype._getIconUrl;
//     L.Icon.Default.mergeOptions({
//         iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//         iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//         shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//     });

//     const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 }); // Default coordinates (London)
//     const [zoom, setZoom] = useState(13);
//     const [searchQuery, setSearchQuery] = useState('');

//     // A component that listens for map clicks and stores latitude and longitude
//     const LocationMarker = ({ setLocation }) => {
//         const map = useMapEvents({
//             click(e) {
//                 const { lat, lng } = e.latlng;
//                 setLocation({ lat, lng });
//                 map.flyTo(e.latlng, map.getZoom());
//             },
//         });
//         return null;
//     };

//     // Component to fly the map to new location when search is performed
//     const FlyToLocation = ({ location }) => {
//         const map = useMap();
//         useEffect(() => {
//             if (location) {
//                 map.flyTo([location.lat, location.lng], zoom);
//             }
//         }, [location, map, zoom]);
//         return null;
//     };

//     // Use GeoSearch for location search functionality
//     useEffect(() => {
//         const provider = new OpenStreetMapProvider();

//         const searchControl = new GeoSearchControl({
//             provider,
//             style: 'bar',
//             autoComplete: true,
//             autoCompleteDelay: 250,
//             showMarker: true,
//             keepResult: true,
//         });

//         const map = document.querySelector('.leaflet-container');
//         const mapInstance = map._leaflet_map;

//         mapInstance?.addControl(searchControl);
//         return () => mapInstance.removeControl(searchControl);
//     }, []);

//     // Function to handle search submission
//     const handleSearch = async (e) => {
//         e.preventDefault();
//         const provider = new OpenStreetMapProvider();
//         const results = await provider.search({ query: searchQuery });

//         if (results.length > 0) {
//             const { y, x } = results[0]; // Get the first result
//             setLocation({ lat: y, lng: x });
//             setZoom(13); // You can adjust the zoom level as needed
//         }
//     };

//     return (
//         <>
//         <div className='w-full'>
//             <form className="relative flex-grow" onSubmit={handleSearch} style={{ marginBottom: '10px' }}>

//                 <Input
//                     type="text"
//                     rounded='pill'
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search for a location"
//                 />
//                 {!searchQuery ? <IoSearchSharp onClick={handleSearch} className="absolute top-1/2 right-4 transform -translate-y-1/2" /> : <MdCancel onClick={(e) => setSearchQuery('')} className="absolute top-1/2 right-4 transform -translate-y-1/2" />}
//             </form>
//             <MapContainer
//                 center={[location.lat, location.lng]}
//                 zoom={zoom}
//                 scrollWheelZoom={false}
//                 style={{ height: '500px', width: '100%', borderRadius: '5px' }}
//             >
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={[location.lat, location.lng]}></Marker>
//                 <LocationMarker setLocation={setLocation} />
//                 <FlyToLocation location={location} />
//             </MapContainer>
//         </div>
//           {/* <div className="mt-4 p-2 bg-white shadow-md">
//                 <p>Selected Location:</p>
//                 <p>Latitude: {location.lat}</p>
//                 <p>Longitude: {location.lng}</p>
//             </div> */}
//              </>
//     );
// };

// export default Step2;




// import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
// import { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet-geosearch/dist/geosearch.css';
// import { IoSearchSharp } from 'react-icons/io5';
// import { MdCancel } from 'react-icons/md';
// import { Input } from 'rizzui';

// const Step2 = (props) => {
//     delete L.Icon.Default.prototype._getIconUrl;
//     L.Icon.Default.mergeOptions({
//         iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//         iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//         shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//     });

//     const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 }); // Default coordinates (London)
//     const [zoom, setZoom] = useState(13);
//     const [searchQuery, setSearchQuery] = useState('');

//     // A component that listens for map clicks and stores latitude and longitude
//     const LocationMarker = ({ setLocation }) => {
//         const map = useMapEvents({
//             click(e) {
//                 const { lat, lng } = e.latlng;
//                 setLocation({ lat, lng });
//                 map.flyTo(e.latlng, map.getZoom());
//             },
//         });
//         return null;
//     };

//     // Use GeoSearch for location search functionality
//     useEffect(() => {
//         const provider = new OpenStreetMapProvider();

//         const searchControl = new GeoSearchControl({
//             provider,
//             style: 'bar',
//             autoComplete: true,
//             autoCompleteDelay: 250,
//             showMarker: true,
//             keepResult: true,
//         });

//         const mapContainer = document.querySelector('.leaflet-container');
//         const mapInstance = mapContainer?._leaflet_map; // Safely check for map instance

//         if (mapInstance) {
//             mapInstance.addControl(searchControl);
//         }

//         return () => {
//             if (mapInstance && mapInstance.hasControl(searchControl)) {
//                 mapInstance.removeControl(searchControl);
//             }
//         };
//     }, []);

//     // Function to handle search submission
//     const handleSearch = async (e) => {
//         e.preventDefault();
//         const provider = new OpenStreetMapProvider();
//         const results = await provider.search({ query: searchQuery });

//         if (results.length > 0) {
//             const { y, x } = results[0]; // Get the first result
//             setLocation({ lat: y, lng: x });
//             setZoom(13); // Adjust zoom level as needed

//             // Move the map to the searched location
//             const map = useMap(); // Use useMap to get the current map instance
//             map.flyTo([y, x], 13); // Fly to the new location with the specified zoom level
//         }
//     };

//     return (
//         <div className='w-full  '>
//             <form className="relative flex-grow" onSubmit={handleSearch} style={{ marginBottom: '10px' }}>

//                 <Input
//                     type="text"
//                     rounded='pill'
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search for a location"
//                 />
//                 {!searchQuery ? <IoSearchSharp onClick={handleSearch} className="absolute top-1/2 right-4 transform -translate-y-1/2" /> : <MdCancel onClick={(e) => setSearchQuery('')} className="absolute top-1/2 right-4 transform -translate-y-1/2" />}
//             </form>
//             <MapContainer center={[location.lat, location.lng]} zoom={zoom} scrollWheelZoom={false} style={{ height: '500px', width: '100%', borderRadius: '5px' }} className='shadow-2xl bg-transparent'>
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={[location.lat, location.lng]}></Marker>
//                 <LocationMarker setLocation={setLocation} />
//             </MapContainer>
//             {/* Uncomment below to show selected location coordinates */}
//             {/* <div className="mt-4 p-2 bg-white shadow-md">
//                 <p>Selected Location:</p>
//                 <p>Latitude: {location.lat}</p>
//                 <p>Longitude: {location.lng}</p>
//             </div> */}
//         </div>
//     );
// };

// export default Step2;


// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
// import { useEffect, useState, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet-geosearch/dist/geosearch.css';
// import { IoSearchSharp } from 'react-icons/io5';
// import { MdCancel } from 'react-icons/md';
// import { Input } from 'rizzui';

// const Step2 = (props) => {
//     delete L.Icon.Default.prototype._getIconUrl;
//     L.Icon.Default.mergeOptions({
//         iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//         iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//         shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//     });

//     const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 }); // Default coordinates (London)
//     const [zoom, setZoom] = useState(13);
//     const [searchQuery, setSearchQuery] = useState('');
//     const mapRef = useRef(null); // Use ref to store map instance

//     // A component that listens for map clicks and stores latitude and longitude
//     const LocationMarker = ({ setLocation }) => {
//         const map = useMapEvents({
//             click(e) {
//                 const { lat, lng } = e.latlng;
//                 setLocation({ lat, lng });
//                 map.flyTo(e.latlng, map.getZoom());
//             },
//         });
//         return null;
//     };

//     // Use GeoSearch for location search functionality
//     useEffect(() => {
//         const provider = new OpenStreetMapProvider();

//         const searchControl = new GeoSearchControl({
//             provider,
//             style: 'bar',
//             autoComplete: true,
//             autoCompleteDelay: 250,
//             showMarker: true,
//             keepResult: true,
//         });

//         const mapInstance = mapRef.current; // Get the map instance from the ref

//         if (mapInstance) {
//             mapInstance.addControl(searchControl);
//         }

//         return () => {
//             if (mapInstance && mapInstance.hasControl(searchControl)) {
//                 mapInstance.removeControl(searchControl);
//             }
//         };
//     }, []);

//     // Function to handle search submission
//     const handleSearch = async (e) => {
//         e.preventDefault();
//         const provider = new OpenStreetMapProvider();
//         const results = await provider.search({ query: searchQuery });

//         if (results.length > 0) {
//             const { y, x } = results[0]; // Get the first result
//             setLocation({ lat: y, lng: x });
//             setZoom(13); // Adjust zoom level as needed

//             const mapInstance = mapRef.current; // Get the map instance from the ref
//             if (mapInstance) {
//                 mapInstance.flyTo([y, x], 13); // Fly to the new location with the specified zoom level
//             }
//         }
//     };

//     // Function to get live current location
//     const getCurrentLocation = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 const { latitude, longitude } = position.coords;
//                 setLocation({ lat: latitude, lng: longitude });
//                 setZoom(13);

//                 const mapInstance = mapRef.current;
//                 if (mapInstance) {
//                     mapInstance.flyTo([latitude, longitude], 13); // Fly to the current location
//                 }
//             });
//         } else {
//             alert("Geolocation is not supported by this browser.");
//         }
//     };

//     return (
//         <div className='w-full'>
//             <form className="relative flex-grow" onSubmit={handleSearch} style={{ marginBottom: '10px' }}>
//                 <Input
//                     type="text"
//                     rounded='pill'
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search for a location"
//                 />
//                 {!searchQuery ? <IoSearchSharp onClick={handleSearch} className="absolute top-1/2 right-4 transform -translate-y-1/2" /> : <MdCancel onClick={(e) => setSearchQuery('')} className="absolute top-1/2 right-4 transform -translate-y-1/2" />}
//             </form>
           
//             <MapContainer
//                 center={[location.lat, location.lng]}
//                 zoom={zoom}
//                 scrollWheelZoom={false}
//                 style={{ height: '500px', width: '100%', borderRadius: '5px' }}
//                 className='shadow-2xl bg-transparent'
//                 whenCreated={(mapInstance) => (mapRef.current = mapInstance)} // Store map instance in ref
//             >
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                  <button
//                 onClick={getCurrentLocation}
//                 className="bg-blue-500 z-50 text-white py-2 px-4 rounded-md mb-4"
//             >
//                 Use Current Location
//             </button>
//                 <Marker position={[location.lat, location.lng]}></Marker>
//                 <LocationMarker setLocation={setLocation} />
//             </MapContainer>
//             {/* Uncomment below to show selected location coordinates */}
//             {/* <div className="mt-4 p-2 bg-white shadow-md">
//                 <p>Selected Location:</p>
//                 <p>Latitude: {location.lat}</p>
//                 <p>Longitude: {location.lng}</p>
//             </div> */}
//         </div>
//     );
// };

// export default Step2;



import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet-geosearch/dist/geosearch.css';
import { IoSearchSharp } from 'react-icons/io5';
import { MdCancel, MdOutlineLocationSearching } from 'react-icons/md';
import { Input } from 'rizzui';

const Step2 = (props) => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });

    const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 }); // Default coordinates (London)
    const [zoom, setZoom] = useState(13);
    const [searchQuery, setSearchQuery] = useState('');
    const mapRef = useRef(null); // Use ref to store map instance

    // A component that listens for map clicks and stores latitude and longitude
    const LocationMarker = ({ setLocation }) => {
        const map = useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setLocation({ lat, lng });
                map.flyTo(e.latlng, map.getZoom());
            },
        });
        return null;
    };

    // Use GeoSearch for location search functionality
    useEffect(() => {
        const provider = new OpenStreetMapProvider();

        const searchControl = new GeoSearchControl({
            provider,
            style: 'bar',
            autoComplete: true,
            autoCompleteDelay: 250,
            showMarker: true,
            keepResult: true,
        });

        const mapInstance = mapRef.current; // Get the map instance from the ref

        if (mapInstance) {
            mapInstance.addControl(searchControl);
        }

        return () => {
            if (mapInstance && mapInstance.hasControl(searchControl)) {
                mapInstance.removeControl(searchControl);
            }
        };
    }, []);

    // Function to handle search submission
    const handleSearch = async (e) => {
        e.preventDefault();
        const provider = new OpenStreetMapProvider();
        const results = await provider.search({ query: searchQuery });

        if (results.length > 0) {
            const { y, x } = results[0]; // Get the first result
            setLocation({ lat: y, lng: x });
            setZoom(13); // Adjust zoom level as needed

            const mapInstance = mapRef.current; // Get the map instance from the ref
            if (mapInstance) {
                mapInstance.flyTo([y, x], 13); // Fly to the new location with the specified zoom level
            }
        }
    };

    // Function to get live current location
    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ lat: latitude, lng: longitude });
                setZoom(13);

                const mapInstance = mapRef.current;
                if (mapInstance) {
                    mapInstance.flyTo([latitude, longitude], 13); // Fly to the current location
                }
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    return (
        <div className='w-full'>
            <form className="relative flex-grow" onSubmit={handleSearch} style={{ marginBottom: '10px' }}>
                <Input
                    type="text"
                    rounded='pill'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='text-white'
                    placeholder="Search for a location"
                />
                {!searchQuery && <MdOutlineLocationSearching  onClick={getCurrentLocation} className="absolute top-1/2 right-10 transform -translate-y-1/2" />}
                {!searchQuery ? <IoSearchSharp onClick={handleSearch} className="absolute top-1/2 right-4 transform -translate-y-1/2" /> : <MdCancel onClick={(e) => setSearchQuery('')} className="absolute top-1/2 right-4 transform -translate-y-1/2" />}
            </form>
            
            <MapContainer
                center={[location.lat, location.lng]}
                zoom={zoom}
                scrollWheelZoom={true}
                ref={mapRef}
                style={{ height: '500px', width: '100%', borderRadius: '5px' }}
                className='shadow-2xl bg-transparent'
                whenCreated={(mapInstance) => (mapRef.current = mapInstance)} // Store map instance in ref
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[location.lat, location.lng]}></Marker>
                <LocationMarker setLocation={setLocation} />
            </MapContainer>
            {/* Uncomment below to show selected location coordinates */}
            {/* <div className="mt-4 p-2 bg-white shadow-md">
                <p>Selected Location:</p>
                <p>Latitude: {location.lat}</p>
                <p>Longitude: {location.lng}</p>
            </div> */}
        </div>
    );
};

export default Step2;
