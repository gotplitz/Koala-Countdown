import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import {
    Container,
    DatePickerContainer,
    EightColumns,
    FourColumns,
    HeaderContainer,
    NumbersContainer,
    Section,
    StyledCountdown,
    ThirdHeader,
    Title,
} from './styles';

// Parts
import DateSelection from './DateSelection';
import NumbersDate from './NumbersDate';

// Write your countdown code in this component
const Countdown: React.FC = () => {
    const theme = useTheme();
    const [futureDate, setFutureDate] = useState<Date>(new Date());

    return (
        <StyledCountdown theme={theme}>
            <HeaderContainer>
                <img
                    className='logo'
                    src='koala-logo.png'
                    width='280'
                    height='63'
                    alt='Koala Logo'
                />
            </HeaderContainer>
            <Section>
                <Title>Koala Web Engineer Coding Challenge</Title>
                <p>Build a countdown clock!</p>
                <Container>
                    <FourColumns>
                        <ThirdHeader>Choose Deadeline</ThirdHeader>
                        <p>What is your project deadline?</p>
                        <DatePickerContainer>
                            <DateSelection
                                futureDate={futureDate}
                                setFutureDate={setFutureDate}
                            />
                        </DatePickerContainer>
                    </FourColumns>
                    <EightColumns>
                        <NumbersContainer>
                            <NumbersDate />
                        </NumbersContainer>
                    </EightColumns>
                </Container>
            </Section>
        </StyledCountdown>
    );
};

export default Countdown;
