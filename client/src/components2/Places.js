import React from 'react';
import PropTypes from 'prop-types';

const PersonProfile = (props) => {
    return (
        <div>
            <h1>{props.person.first + ' ' + props.person.last}</h1>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat quam, luctus nec eros sit amet, facilisis finibus est. Vivamus varius condimentum leo, a placerat nisl dignissim et. Cras aliquam, est a commodo lobortis, lorem enim condimentum magna, vitae porta est justo nec arcu. Suspendisse dictum arcu in eros facilisis, at accumsan mi ultrices. Duis ac gravida arcu. Curabitur non pretium arcu, venenatis facilisis magna. In molestie sit amet arcu vel interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non neque at purus pharetra hendrerit quis in nunc. Donec molestie quam ut orci hendrerit tempor. Nunc eleifend et est scelerisque bibendum.
            </p>
            <p>
                In vel diam ut quam vehicula semper condimentum in ex. Ut tempus aliquet ante, eu iaculis purus varius sit amet. Fusce enim eros, blandit eget urna ac, fermentum placerat odio. Ut efficitur tempus lacus, sed mollis diam laoreet ut. Aenean elementum leo consectetur porttitor volutpat. Praesent finibus ante non quam tristique vulputate. Mauris quis placerat justo, sit amet pharetra risus. Phasellus vitae massa a leo mattis dapibus a nec turpis. Cras sit amet libero mauris. Nulla imperdiet, magna ac pretium tempor, ex magna dictum ante, in mollis sapien purus nec dolor. Donec ut mi a magna cursus consectetur. Phasellus eget mollis est.
            </p>
        </div>
    );
};

PersonProfile.PropTypes = {
    person: PropTypes.object.required
};

export default PersonProfile