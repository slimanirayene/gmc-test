import React, { Component } from "react";
import { Button, Card } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;

export default class SingleResult extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPushed: true,
		};
	}
	render() {
		return (
			<div>
				{" "}
				<Card
					hoverable
					style={{
						width: 200,
						margin: 10,
					}}
					cover={
						<img style={{ height: 180 }} alt="example" src={this.props.img} />
					}
				>
					<h3 style={{ color: "darkgray" }}>{this.props.artist}</h3>
					<Meta title={this.props.title} description={this.props.album} />
					<Button
						style={{
							margin: 10,
							backgroundColor: `${this.state.isPushed ? "white" : "red"}`,
						}}
						onClick={() => {
							if (this.state.isPushed) {
								this.setState({ isPushed: false });
								this.props.addToCart(
									this.props.title,
									this.props.price,
									this.props.img
								);
							} else {
								this.setState({ isPushed: true });
								this.props.removeFromCart({
									name: this.props.title,
									price: this.props.price,
									image: this.props.image,
								});
							}
						}}
					>
						{this.state.isPushed ? <PlusOutlined /> : <DeleteOutlined />}
					</Button>
				</Card>
				,
			</div>
		);
	}
}
