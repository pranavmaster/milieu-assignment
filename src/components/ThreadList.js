import React from "react";
import { connect } from "react-redux";
import { fetchThreads } from "../actions";
import { VoteUpDown } from "./VoteUpDown";

class ThreadList extends React.Component {
	componentDidMount() {
		this.props.fetchThreads();
	}

	renderList() {
		return this.props.threads.map((thread) => {
			return (
				<div className="item" key={thread.id}>
					<i className="large middle aligned angle up" />
					<div className="content">
						<div className="description">
							<h2>{thread.title}</h2>
							<VoteUpDown votes={this.state.score} />
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui relaxed divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { threads: state.threads };
};

export default connect(mapStateToProps, { fetchThreads })(ThreadList);
