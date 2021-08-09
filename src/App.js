import React from "react";
import Popups from "./components/popups";

function App() {
	return (
		<div className="App">
			<button
				onClick={() => {
					Popups.fire({
						title: "Title",
						danger: false,
						children: <p>Your content ...</p>,
					});
				}}
			>
				Fire
			</button>

			<button
				onClick={() => {
					Popups.showLoading();
				}}
			>
				Loading
			</button>
		</div>
	);
}

export default App;
