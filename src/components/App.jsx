import React from 'react';
import useGetVideos from '../hooks/useGetVideos';
import '../styles/components/App.styl';

const App = () => {
	const data = useGetVideos();
	return (
		<div className="Wrapper">
			<div className="Header">
				<figure>
					<img src="https://arepa.s3.amazonaws.com/oscar-barajas-tavares.png" alt="oscar" />
				</figure>
				<div className="Header_bio">
					<h1>Oscar Barajas Tavares</h1>
					<span>Foundation Layer at @platzi - Microsoft MVP - Lead at Developer Circles from Facebook, I teach React & Svelte - #Twitch Partner #EStreamerCoders - 🇲🇽 🇨🇴</span>
				</div>
			</div>
			<div className="Videos">
				{data?.items?.map(video => (
					<div className="Videos_item">
						<img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
						<h2>{video.snippet.title}</h2>
						<span>{video.snippet.description}</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
