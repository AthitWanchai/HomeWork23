
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

export default function MediaCard() {
    return (
        <Card className='container m-6 ' sx={{ maxWidth: 345 }}>
            <div className='grid justify-items-center'>
                <img alt='robots' width='300' src='https://robohash.org/karnyong?set=set4' />
            </div>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This is a wider card with supporting text below as natural
                    lead-in to additional content. This content is a little bit longer.
                </Typography>
            </CardContent>
            <CardActions className='flex justify-between'>
                <ButtonGroup variant="outlined" className='coler'>
                    <Link to='/product' className='grayButton'>
                        <Button>
                            View
                        </Button>
                    </Link>
                    <Button className='grayButton'>Edit</Button>
                </ButtonGroup>
                <div className='text-right'>
                    <Typography variant="body2" color="text.secondary">
                        9 mins
                    </Typography>
                </div>
            </CardActions>
        </Card>
    );
}