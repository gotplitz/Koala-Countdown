import React, { useState, useEffect, Fragment } from 'react';
import { CdownItems, CountdownWrapper } from './styles';

const NumbersDate: React.FC = () => {
    const [yourAredone, setYourdone] = useState(false);
    const [finaldate, setFinaldate] = useState(
        localStorage.deadline ? new Date(localStorage.deadline) : new Date()
    );
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setFinaldate(new Date(localStorage.deadline));
    }, [localStorage.deadline]);

    useEffect(() => {
        const target = finaldate;

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            setLoading(false);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setYourdone(true);
            } else {
                setYourdone(false);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [finaldate]);

    return loading ? (
        <h4>Loading...</h4>
    ) : (
        <div>
            {yourAredone ? (
                <Fragment>
                    <h2>Times Up!</h2>
                    <p>Please report to your manager</p>
                </Fragment>
            ) : (
                <CountdownWrapper>
                    <CdownItems>
                        <span className='time'>{days}</span>
                        <span className='label'>Days</span>
                    </CdownItems>
                    <span className='divider'>:</span>
                    <CdownItems>
                        <span className='time'>{hours}</span>
                        <span className='label'>Hours</span>
                    </CdownItems>
                    <span className='divider'>:</span>
                    <CdownItems>
                        <span className='time'>{minutes}</span>
                        <span className='label'>Minutes</span>
                    </CdownItems>
                    <span className='divider'>:</span>
                    <CdownItems>
                        <span className='time'>{seconds}</span>
                        <span className='label'>Seconds</span>
                    </CdownItems>
                </CountdownWrapper>
            )}
        </div>
    );
};

export default NumbersDate;
