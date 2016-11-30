import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; 
import { connect } from 'react-redux';
import { clearGuests, getGuests, addGuest, deleteGuest } from '../../actions/admin';

const Guest = ({ details, onDelete }) => {
	const renderedDetails = Object.keys(details).map((detail) => {
		return <span key={detail}>{detail}: {details[detail]}, </span>;
	});

	const handleDelete = () => {
		onDelete(details._id);
	};

	return (
		<li>
			{ renderedDetails }
			<button onClick={ handleDelete }>delete</button>
		</li>
	);
};

const AddGuestForm = reduxForm({
	form: 'addGuest'
})(({ handleSubmit, reset }) => {
	const submit = (e) => {
		handleSubmit(e);
		reset();
	};
	return (
		<form onSubmit={ submit }>
			<span>
				<label htmlFor="username">username</label>
				<Field name="name" component="input" type="text" />
			</span>
			<span>
				<label htmlFor="affilliation">affilliation</label>
				<Field name="affilliation" component="input" type="text" />
			</span>
			<button type="submit">Add</button>
		</form>
	);
});

class GuestManagement extends Component {
	constructor (props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.deleteGuest = this.deleteGuest.bind(this);
	}

	deleteGuest(id) { 
		this.props.deleteGuest(id, this.props.token);
	}

	componentDidMount() {
		this.props.getGuests(this.props.token);
	}

	componentWillUnmount() {
		this.props.clearGuests();
	}

	handleAdd (guest) {
		this.props.addGuest(guest, this.props.token);
	}

	render () {
    // const { loading } = this.props;
		const guestListItems = this.props.guests.map(guest => {
			return (
				<Guest details={ guest } 
					onDelete={ this.deleteGuest }
					key={ guest._id }
				/>
			)
		});

		return (
			<div>
				<h1>Admin</h1>
				<div id="manage-guests">
					<h2>Here you can manage your guests</h2>
					<ul>
						{ guestListItems }
					</ul>
					<AddGuestForm onSubmit={ this.handleAdd } />
				</div>
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		loading: state.admin.guests.loading,
		guests: Object.keys(state.admin.guests.byId).map(key => state.admin.guests.byId[key])
	};
};

const mapDispatchToProps = {
		getGuests,
		clearGuests,
		addGuest,
		deleteGuest
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestManagement); 

//export default GuestManagement;
