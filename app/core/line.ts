import 'leaflet';

export interface Line {
    id: string;
    name: string;
    type: string;
    geometries: L.Polyline;

}