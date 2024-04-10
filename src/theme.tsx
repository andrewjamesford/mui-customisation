import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: blue.A200,
        },
        error: {
            main: red.A400,
        },
    }
},
);

export default theme;