import ReactDOM from "react-dom";

// Import Style
import "./styles.scss";

// Import Popup
import PopupFire from "./contents/PopupFire";
import PopupLoading from "./contents/PopupLoading";

export default {
	close: () => {
		document.body.style.height = "auto";
		document.body.style.overflow = "auto";
		var popup = document.getElementById("pop-up");
		if (popup) popup.remove();
		var loading = document.getElementById("loading");
		if (loading) loading.remove();
	},

	showLoading: () => {
		var div = document.createElement("div");
		div.setAttribute("id", "loading");
		document.body.style.height = "100%";
		document.body.style.overflow = "hidden";
		ReactDOM.render(
            <PopupLoading />, 
            document.body.appendChild(div)
        );
	},

	fire: ({ ...props }) => {
		var div = document.createElement("div");
		div.setAttribute("id", "pop-up");
		document.body.style.height = "100%";
		document.body.style.overflow = "hidden";
		ReactDOM.render(
			<PopupFire {...props}/>,
			document.body.appendChild(div)
		);
	},
};
