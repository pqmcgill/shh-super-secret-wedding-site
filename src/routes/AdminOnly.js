import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
	class AdminOnly extends Component {
		static contextTypes = {
			router: PropTypes.object
		}

		static propTypes = {
			access: PropTypes.string
		}

		// check if user is admin
		componentWillMount() {
			this.checkAccess(this.props.access);
		}

		// check if user is still admin
		componentWillUpdate(nextProps) {
			this.checkAccess(nextProps.access);
		}

		checkAccess(access) {
			console.log(access);
			if (access !== 'admin') {
				this.context.router.push('/');
			}
		}

		render() {
			return <ComposedComponent { ...this.props } />
		}
	} 

	const mapStateToProps = state => ({
		access: state.user.access
	});

	return connect(mapStateToProps)(AdminOnly);
};


