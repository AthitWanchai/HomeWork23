import Button from '@mui/material/Button';

function Hero() {
    return (
        <div className="flex flex-col items-center bg-slate-200 p-6 text-center">
            <h1 className="text-5xl">Album example</h1>
            <div className="flex justify-center">
                <h2 className="text-xl pt-6 max-w-screen-sm">
                    Something short and leading about the collection below--its
                    contents, the creator, etc. Make it short and sweet, but not
                    too short so folks don't simply skip over it entirely.
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6">
                <Button variant="contained">Main call to action</Button>
                <Button variant="outlined">Secondary action
                </Button>
            </div>
        </div>
    );
}

export default Hero;
