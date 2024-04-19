import { MapView } from "./MapView"


export const Map = () => {
  return (
    <div className="container mx-auto">
        <div className="text-center relative mb-16">
            <h1 className="font-bold text-9xl text-blue-900 opacity-20 uppercase">Ubicación</h1>
            <span className="font-bold text-blue-900 text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap">Conoce tu entorno</span>
        </div>

        <MapView />
    </div>
  )
}
