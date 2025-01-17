import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Contacts() {
  return (
    <div className="min-h-[100vh] w-full py-10 px-4">
      <div className="w-full mx-auto lg:w-[90%]">
        <div className="h-[20%] text-[35px] font-bold w-full flex items-center justify-center">
          <h1>CONTACT US</h1>
        </div>

        <div className="h-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="w-full flex flex-col space-y-6">
            <input
              type="text"
              className="p-3 placeholder:text-slate-800 shadow-lg shadow-slate-300"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="p-3 placeholder:text-slate-800 shadow-lg shadow-slate-300"
              placeholder="Phone Number"
            />
            <input
              type="text"
              className="p-3 placeholder:text-slate-800 shadow-lg shadow-slate-300"
              placeholder="Email"
            />
            <textarea
              className="p-3 placeholder:text-slate-800 shadow-lg shadow-slate-300"
              placeholder="Message"
              rows={5}
            ></textarea>

            <div className="flex justify-center">
              <button className="p-3 px-14 bg-[#0a97b0] rounded-md text-white">
                SEND
              </button>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full lg:h-[60%] min-h-[350px] lg:min-h-[400px]">
            <MapContainer
              center={[51.505, -0.09]} // Latitude and Longitude for the map center
              zoom={13} // Zoom level
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>A sample popup showing this location.</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
