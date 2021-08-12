import { useEffect, useState } from "react";
import axios from 'axios';

const options = {
	method: 'GET',
	url: 'https://youtube-v31.p.rapidapi.com/search',
	params: { channelId: 'UCw05fUBPwmpu-ehXFMqfdMw', part: 'snippet,id', maxResults: '3' },
	headers: {
		'x-rapidapi-key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

const useGetVideos = () => {
	const [videos, setVideos] = useState([]);

	useEffect(async () => {
		const response = await axios.request(options);
		setVideos(response.data);
	}, []);

	return videos;
}

export default useGetVideos;
