import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
const Container = () =>{
    return <Grid container spacing={5}>
        <Grid item xs={1} >
            <div class="menu" ></div>
        </Grid>
        <Grid item xs={8}>
            <Stack spacing={8}>
                <Paper elevation={3}>
                    <div className='row'>
                        <div className='col-lg-9'></div>
                        <div className='col-lg-3'></div>
                        </div><Button>Open</Button></Paper>
                <Paper elevation={3}>Hello</Paper>
                <Paper elevation={3}>Hello</Paper>
                <Paper elevation={3}>Hello</Paper>
                <Paper elevation={3}>Hello</Paper>
                <Paper elevation={3}>Hello</Paper>
                <Paper elevation={3}>Hello</Paper>
                <Paper elevation={3}>Hello</Paper>
            </Stack>
        </Grid>
        <Grid item xs={3} >
            <div class="extra"></div>
        </Grid>
    </Grid>
    
     
}

export default Container;