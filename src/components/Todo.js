import React from "react";

import List from "./TodoList";

export default class Component extends React.Component {
	render() {
		return (
			<>
				<div>
					<List list={this.state.test} />
				</div>
			</>
		);
	}
}
