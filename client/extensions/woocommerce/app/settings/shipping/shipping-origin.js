/**
 * External dependencies
 */
import React, { Component } from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import Notice from 'components/notice';
import ShippingHeader from './shipping-header';

class ShippingOrigin extends Component {
	constructor( props ) {
		super( props );

		//TODO: use redux state and real data
		this.state = {
			address: {
				name: 'Octopus Outlet Emporium',
				street: '27 Main Street',
				city: 'Ellington, CT 06029',
				country: 'United States'
			},
		};
	}

	render() {
		const { translate } = this.props;

		return (
			<div>
				<ShippingHeader
					label={ translate( 'Shipping Origin' ) }
					description={ translate( 'The address of where you will be shipping from.' ) } />
				<Notice
					status="is-info"
					className="shipping__address-notice"
					text={ translate( 'This is the address you entered while signing up for a WordPress.com Store.' ) }
					showDismiss={ true } >
				</Notice>
				<Card>
					<div className="shipping__address">
						<p className="shipping__address-name">{ this.state.address.name }</p>
						<p>{ this.state.address.street }</p>
						<p>{ this.state.address.city }</p>
						<p>{ this.state.address.country }</p>
					</div>
					<a>{ translate( 'Edit address' ) }</a>
				</Card>
			</div>
		);
	}
}

export default localize( ShippingOrigin );
