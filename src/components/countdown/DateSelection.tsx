import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// External

interface Props {
    futureDate: Date;
    setFutureDate: (val: Date) => void;
}

const DateSelection: React.FC<Props> = ({ futureDate, setFutureDate }) => {
    const [deadline, setDeadline] = useLocalStorage(
        localStorage.deadline ? new Date(localStorage.deadline) : futureDate
    );

    const handleChange = (e: Date) => {
        setFutureDate(new Date(e));
        setDeadline(new Date(e));
    };

    useEffect(() => {
        if (localStorage.deadline && localStorage !== null) {
            setDeadline(deadline);
        }

        // eslint-disable-next-line
    }, [deadline]);

    return (
        <DatePicker
            selected={deadline}
            onChange={(e: Date) => handleChange(e)}
            showTimeSelect
            dateFormat='MMMM d, yyyy h:mm aa'
        />
    );
};

const useLocalStorage = (key: Date) => {
    const [currentDate, setCurrentDate] = useState<Date>(key);

    useEffect(() => {
        const handler = (e: StorageEvent) => {
            if (
                e.storageArea === localStorage &&
                new Date(`${e.key}`) === key
            ) {
                setCurrentDate(new Date(`${e.newValue}`));
            }
        };
        window.addEventListener('storage', handler);
        return () => {
            window.removeEventListener('storage', handler);
        };
    });

    useEffect(() => {
        localStorage.setItem(`deadline`, `${currentDate}`);
    }, [key, currentDate]);

    return [currentDate, setCurrentDate] as const;
};

export default DateSelection;
