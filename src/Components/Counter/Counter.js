import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = ({ className, ...rest }) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <CountUp duration={5} {...rest} start={viewPortEntered ? null : 0}>
            {({ countUpRef }) => {
                return (
                    <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={(isVisible) => {
                            if (isVisible) {
                                setViewPortEntered(true);
                            }
                        }}
                        delayedCall
                    >
                        <h4 className={className} ref={countUpRef} />
                    </VisibilitySensor>
                );
            }}
        </CountUp>
    );
};

export default Counter;
