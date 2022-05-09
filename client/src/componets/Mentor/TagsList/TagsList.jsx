import React, { Component } from "react";

import TagsItem from "./TagsItem/TagsItem";
import {host} from '../../../Api/Main'

import "./style.css"
import vector from "./img/vector.svg"

class TagsList extends Component {

	constructor(props) {
		super(props);
		this.state = { limit: 11, showAll: false , tagsList: false};

		this.tagClickHandler = props.tagClickHandler
	}

	echoTagsList = () => {

		if(this.state.tagsList === false || this.state.tagsList.length === 0)
			return '';

		let res = [];

		let { limit } = this.state;

		for (let index = 0; index < limit; index++) {
			if(!this.state.tagsList[index])
				continue;
			const isActive = this.props.activeTags && this.props.activeTags.indexOf(this.state.tagsList[index].id) !== -1;
			res.push(<TagsItem key={index} tag={this.state.tagsList[index]} isActive={isActive} tagClickHandler={this.tagClickHandler} />);
		}

		return res;

	}

	handleShowMore = () => {

		let { showAll } = this.state;

		if (showAll) {
			this.setState({ limit: 11, showAll: false });
		} else {
			let { length } = this.state.tagsList;

			this.setState({ limit: length, showAll: true });
		}
	}

	echoShowMore() {

		if(!this.state.tagsList || this.state.tagsList.length < this.state.limit)
			return '';

		return (
			<li className={`tags-item show-more ${this.state.showAll ? 'active' : ''}`} onClick={this.handleShowMore}>
				Ещё
				<svg className="vector">
					<use xlinkHref={`${vector}#vector`}> </use>
				</svg>
			</li>
		);
	}

	render() {

		if (this.state.tagsList === false) {
			host.get('api/tags/get-all').then((res) => {
				this.setState({tagsList: res.data})
			});
		}

		return (
			<ul className="tags-list">
				{
					this.echoTagsList()
				}
				{this.echoShowMore()}
			</ul>
		);
	}
}

export default TagsList;