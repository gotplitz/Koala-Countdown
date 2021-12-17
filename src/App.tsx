import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import Countdown from './components/countdown';

const App: React.FC = () => {
    const [theme, setTheme] = useState({ data: { data: {} } });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const GetGloblas = async () => {
            await fetch(
                'https://api.koala.io/marketing/v1/device-configurations/alias/web-config',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Organization-Id': '1',
                    },
                }
            )
                .then((res) => res.json())
                .then(
                    (result) => setTheme(result),
                    (error) => console.log(error)
                )
                .then(() => setLoading(false));
        };

        GetGloblas();
    }, []);

    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <ThemeProvider theme={theme.data.data}>
            <Countdown />
        </ThemeProvider>
    );
};

export default App;
