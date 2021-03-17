import ContentWrapper from 'Component/ContentWrapper';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

import StepsBar from '../../component/StepsBar';

import './Checkout.style';

/** @namespace TestAssignmentScandipwa/Src/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    render() {
        return (
            <main block="Checkout">
                <StepsBar steps={ Object.keys(this.stepMap) } currentStep={ this.props.checkoutStep } />
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
