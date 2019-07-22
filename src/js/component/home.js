import React from "react";
import { Nav } from "./Nav"; //Nav's file uses "export class Nav extends React.Component", so we need the "{}"
import Jumbotron from "./Jumbotron"; //Jumbotron's file uses "export default class Jumbotron extends React.Component", so we don't need the "{ }"
import CardDeck from "./CardDeck"; //Jumbotron's file uses "export default class Jumbotron extends React.Component", so we don't need the "{ }"
import Footer from "./Footer"; //Jumbotron's file uses "export default class Jumbotron extends React.Component", so we don't need the "{ }"

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Nav />
				<div className="container">
					<Jumbotron />
				</div>
				<div className="container">
					<CardDeck />
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
