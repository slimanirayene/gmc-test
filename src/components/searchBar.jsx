import React, { Component } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Input } from "antd";

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
		};
	}

	onSearch = async () => {
		try {
			let resp = await fetch(
				`https://itunes.apple.com/search?term=${this.state.inputValue}`
			);
			let data = await resp.json();
			console.log(data.results);
			this.props.data(data.results);
		} catch (e) {
			console.log(e);
		}
	};
	delete = () => {
		this.setState({ inputValue: "" });
	};
	suffix = (
		<DeleteOutlined
			style={{
				fontSize: 16,
				color: "#1890ff",
			}}
			onClick={this.delete}
		/>
	);

	render() {
		const { Search } = Input;

		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Search
					onChange={(e) => {
						this.setState({ inputValue: e.target.value });
					}}
					value={this.state.inputValue}
					placeholder="search for a song "
					enterButton="Search"
					size="large"
					suffix={this.suffix}
					onSearch={this.onSearch}
					style={{ width: "300px" }}
				/>
			</div>
		);
	}
}
