import React from "react";
import ReactDOM from "react-dom";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<div className="inner">
					<h1>Benri.GitHub.io</h1>
					<h2></h2>
					<a href="https://github.com/benri" className="button"><small>Follow me on</small> GitHub</a>
				</div>
			</header>
		);
	}
}