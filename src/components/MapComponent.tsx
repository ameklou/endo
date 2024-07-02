'use client'
import React, { useEffect, useState } from 'react'
import { Project, User } from '@/payload-types'
import { CircleMarker, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { el } from 'date-fns/locale'

const MapComponent =  () => {


    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('http://localhost:3000/api/projects')
        .then((res) => {
          console.log(res)
          return res.json();
        })
        .then((data) => {

          setData(data.docs);
        });
    }, []);

  // const payload = await getPayload({
  //   config: configPromise,
  // })
  //
  // const data = await payload.find({
  //   collection: 'users',
  //   overrideAccess:false,
  //
  //
  // })
  //const data = fetc

  return (
    <div>

      <MapContainer style={{height:`900px`}} center={[7.32, 11.34]} zoom={4} scrollWheelZoom={false}>
        <TileLayer

          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((elt:Project)=>(
          <CircleMarker key={elt.id} center={elt.location!} radius={5} color={'red'} >

          </CircleMarker>
        ))}

      </MapContainer>

    </div>
      )
}

export default MapComponent