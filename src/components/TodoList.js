// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

export default class Component extends React.Component {
	render() {
		return (
			<>
				{this.props.list.map((list, i) => {
					let index = i + 1;
					return (
						<p
							className="text"
							key={index}
							id={index}
							onClick={(e) => {
								console.log(e.target.id);
							}}
						>
							{list}
						</p>
					);
				})}
			</>
		);
	}
}
