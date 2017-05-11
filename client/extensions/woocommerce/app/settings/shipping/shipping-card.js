/**
 * External dependencies
 */
import React, { Component } from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import CompactCard from 'components/card/compact';
import FormCheckbox from 'components/forms/form-checkbox';
import PaymentLogo from 'components/payment-logo';

class ShippingCard extends Component {
	render() {
		const { translate, selected, type, digits, name, date, onSelect } = this.props;

		return (
			<CompactCard className="shipping__card">
				<FormCheckbox
					className="shipping__card-checkbox"
					checked={ selected }
					onChange={ onSelect }
				/>
				<div className="shipping__card-info">
					<PaymentLogo className="shipping__card-logo" type={ type.toLowerCase() } />
					<div className="shipping__card-details">
						<p className="shipping__card-number">{ type } ****{ digits }</p>
						<p className="shipping__card-name">{ name }</p>
					</div>
					<div className="shipping__card-date">
						{ translate( 'Expires %(date)s', {
							args: { date: date },
							context: 'date is of the form MM/YY'
						} ) }
					</div>
				</div>
			</CompactCard>
		);
	}
}

export default localize( ShippingCard );
