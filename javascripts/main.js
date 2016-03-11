
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header.js";

(function() {
	'use strict';

	class Main extends React.Component {
		constructor(props) {
			super(props);
		}

		render() {
			return (
				<Header />
			);
		}
	}

	ReactDOM.render(
		React.createElement(Main, null),
		document.getElementById('main')
	);
})();