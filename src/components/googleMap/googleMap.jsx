import React from 'react'
import GoogleMapReact from 'google-map-react';
import s from './googlemap.module.scss'
import locator from '../../images/location.png'

export const Marker = () => {
    return (
        <div className={s.marker}>
            <img src={locator} alt="icon"/>
        </div>
    )
}

const GoogleMap = () => {
    return (
        <section className={s.google_map}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{
                    lat: 34.020350,
                    lng: -118.486676
                }}
                defaultZoom={17}
            >
                <Marker
                    lat={34.020183}
                    lng={-118.487023}
                />
            </GoogleMapReact>
        </section>
    )
}
export default React.memo(GoogleMap)