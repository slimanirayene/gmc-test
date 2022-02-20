import React, { Component } from "react";
import myPhoto from "../logo.svg";
import SearchBar from "../components/searchBar";
import { Button, Drawer } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	showDrawer = () => {
		this.setState({ visible: true });
	};
	onClose = () => {
		this.setState({ visible: false });
	};
	render() {
		return (
			<div
				style={{
					width: "100%",
					height: "10vh",
					backgroundColor: "white",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingLeft: "2rem",
					paddingRight: "2rem",
					paddingTop: 5,
					boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
				}}
			>
				<Button onClick={this.showDrawer}>
					<ShoppingCartOutlined />
				</Button>
				<SearchBar data={this.props.data} />
				<h2>GMC-search</h2>
				<div style={{ width: "5rem" }}>
					<img style={{ width: 60 }} src={myPhoto} alt="logo" />
					<p>Profile</p>
				</div>
				<Drawer
					title="Basic Drawer"
					placement="right"
					onClose={this.onClose}
					visible={this.state.visible}
				>
					{this.props.cart.map((el) => {
						<div>
							<img src="" alt="logo" />
							<h1>{el.title}</h1>
							<p>el.price</p>
						</div>;
					})}
				</Drawer>
			</div>
		);
	}
}
