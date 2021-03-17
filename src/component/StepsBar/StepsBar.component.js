import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './StepsBar.style';

/** @namespace TestAssignmentScandipwa/Src/Component/StepsBar/Component/StepsBarComponent */
export class StepsBarComponent extends PureComponent {
    static propTypes = {
        steps: PropTypes.arrayOf.isRequired,
        currentStep: PropTypes.string.isRequired
    };

    render() {
        const { steps, currentStep } = this.props;
        const stepsName = ['Shipping', 'Billing', 'Finish'];
        return (
            <div block="StepsBar">
                <ul block="MultiSteps">
                    { stepsName.map((item, index) => {
                        const isActive = index === steps.indexOf(currentStep);
                        const isProgress = index <= steps.indexOf(currentStep);
                        return (
                            <>
                                <div block={ isProgress ? 'progress' : '' } />
                                <li block={ isActive ? 'active' : '' }>{ item }</li>
                            </>
                        );
                    }) }
                    <div block="line">
                        <div block="line-progress" />
                    </div>
                </ul>
            </div>
        );
    }
}

export default StepsBarComponent;
