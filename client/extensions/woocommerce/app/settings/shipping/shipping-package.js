/**
 * External dependencies
 */
import React, { Component } from 'react';
import Gridicon from 'gridicons';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Button from 'components/button';

class ShippingPackage extends Component {
	render() {
		const { translate, type, name, dimensions } = this.props;
		const icon = 'envelope' === type ? 'mail' : 'product';

		return (
			<div className="shipping__packages-row">
				<div className="shipping__packages-row-icon">
					<Gridicon icon={ icon } size={ 18 } />
				</div>
				<div className="shipping__packages-row-details">
					<div className="shipping__packages-row-details-name">{ name }</div>
				</div>
				<div className="shipping__packages-row-dimensions">{ dimensions }</div>
				<div className="shipping__packages-row-actions">
					<Button compact>{ translate( 'Edit' ) }</Button>
				</div>
			</div>
		);
	}
}

export default localize( ShippingPackage );
