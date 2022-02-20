import React, { Component } from "react";
import SingleResult from "../components/SingleResult";

export default class ResultsContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log("datatatata", this.props.data);
		return (
			<div
				style={{
					width: "100%",
					heigth: "9vh",
					marginTop: "2rem",
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				{this.props.data.map((el) => {
					return (
						<SingleResult
							addToCart={this.props.addCart}
							removeFromCart={this.props.removeCart}
							img={el.artworkUrl100}
							title={el.trackName}
							artist={el.artistName}
							album={el.collectionName}
							price={el.trackPrice}
						/>
					);
				})}
			</div>
		);
	}
}
