import React from 'react';
import CommonSlider from '@/components/common/CommonSlider';
import { ARRIVALS_LIST } from '@/utils/helper';

const Arrivals = () => {
    return (
        <div id='arrivals'>
            <CommonSlider title="NEW ARRIVALS" list={ARRIVALS_LIST} />
        </div>
    );
};

export default Arrivals;
