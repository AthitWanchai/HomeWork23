import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const TypographyOverlay = styled(Typography)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    idth: '70vw',
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

export default function CustomizedProgressBars() {
    return (
        <div>
            <h1 className="py-2">Stock (75/100)</h1>
            <Box className="max-w-full overflow-hidden" sx={{ position: 'relative', width: 800 }} > 
                <BorderLinearProgress variant="determinate" value={75} />
                <TypographyOverlay variant="body2" color="textSecondary">
                    75%
                </TypographyOverlay>
            </Box>
        </div>
    );
}
