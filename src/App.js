import "./App.css";
import "antd/dist/antd.css";
import { Component } from "react";
import Navbar from "./containers/navbar";
import ResultsContainer from "./containers/ResultsContainer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cart: [],
			songs: [],
		};
	}
	addSongs = (title) => {
		this.setState({
			songs: title,
		});
	};
	addToCart = (title, price, image) => {
		console.log("Adding to cart from App.js", title, price);
		this.setState({
			cart: [...this.state.cart, { name: title, price: price, image: image }],
		});
	};
	removeFromCart = (deleted) => {
		this.setState({
			cart: this.state.cart.filter(function (object) {
				return object !== deleted;
			}),
		});
	};
	render() {
		console.log("cart", this.state.cart);
		return (
			<div className="App">
				<Navbar cart={this.state.cart} data={this.addSongs} />
				<ResultsContainer
					removeCart={this.removeFromCart}
					addCart={this.addToCart}
					data={this.state.songs}
				/>
			</div>
		);
	}
}

export default App;
