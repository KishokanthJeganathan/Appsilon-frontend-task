import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import GraphTitle from '../graph-title/GraphTitle';
import * as S from './styles';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const markers = [
	{ markerOffset: -15, name: 'La Paz', coordinates: [ -68.1193, -16.4897 ] },
	{ markerOffset: 25, name: 'Brasilia', coordinates: [ -47.8825, -15.7942 ] },
	{ markerOffset: 25, name: 'Bogota', coordinates: [ -74.0721, 4.711 ] },
	{ markerOffset: -15, name: 'Lima', coordinates: [ -77.0428, -12.0464 ] }
];

const MapChart = () => {
	return (
		<S.Section>
			<GraphTitle title="OVERVIEW" />
			<ComposableMap
				style={{ width: '100%', height: '90%' }}
				projection="geoAzimuthalEqualArea"
				projectionConfig={{
					rotate: [ 58, 20, 0 ],
					scale: 400
				}}
			>
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies
							.filter((d) => d.properties.REGION_UN === 'Americas')
							.map((geo) => (
								<Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />
							))}
				</Geographies>
				{markers.map(({ name, coordinates, markerOffset }) => (
					<Marker key={name} coordinates={coordinates}>
						<circle r={10} fill="#F00" stroke="#fff" strokeWidth={5} />
						<text textAnchor="middle" y={markerOffset} style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}>
							{name}
						</text>
					</Marker>
				))}
			</ComposableMap>{' '}
		</S.Section>
	);
};

export default MapChart;
