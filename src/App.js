import './App.css';
import Profile from './Components/Profile';

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('');
	const [searchResult, setSearchResults] = useState('');

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
			setData(response.data);
		});
	}, []);

	const dataFilter = (e) => {
		setSearch(e.target.value);
		if (search !== '') {
			const filterSearch = data.filter((item) => {
				return Object.values(item)
					.join('')
					.toLowerCase()
					.includes(search.toLowerCase());
			});
			setSearchResults(filterSearch);
		} else {
			setSearchResults(data);
		}
	};

	return (
		<div className="App">
			<h1 className="App-logo">ROBO APP CENTER</h1>

			<input
				class="search"
				value={search}
				placeholder="Search..."
				onChange={dataFilter}
			></input>

			<div className="Card-Container">
				{search.length > 1
					? searchResult.map((item) => {
							return (
								<Profile
									picture={'https://robohash.org/' + item.id}
									name={item.name}
									email={item.email}
								/>
							);
					  })
					: data.map((item) => {
							return (
								<Profile
									picture={'https://robohash.org/' + item.id}
									name={item.name}
									email={item.email}
								/>
							);
					  })}
			</div>
		</div>
	);
}

export default App;
