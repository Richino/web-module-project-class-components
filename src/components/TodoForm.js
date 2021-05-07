import React from "react";
import List from "./TodoList";

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			list_val: "",
			list: [],
			id: [],
		};
	}

	getValue = (e) => {
		this.setState({
			list_val: e.target.value,
		});
	};

	add = (e) => {
		if (this.state.list_val === "") {
			return;
		} else {
			this.setState({
				id: [...this.state.id, this.state.list.length + 1],
				list: [...this.state.list, this.state.list_val],
			});
		}
	};

	complete = (e) => {
		console.log("complete");
	};

	render() {
		return (
			<div>
				<List list={this.state.list} />
				<form>
					<label>
						<input type="text" onChange={this.getValue} />
						<input type="button" value="add" onClick={this.add} />
						<input type="button" value="clear completed" />
					</label>
				</form>
			</div>
		);
	}
}

export default Form;
