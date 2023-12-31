import GoogleMapReact from "google-map-react";


const AnyReactComponent = ({ text }) => <div>{text}</div>

export const Map = () => {

  const defaultProps = {
    center: {
      lat: 27.7244,
      lng: 68.8228
    },
    zoom: 12
  };

  return (
    <div className="w-full h-[100vh] max-md:mt-16 px-7 rounded-md overflow-hidden">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
};