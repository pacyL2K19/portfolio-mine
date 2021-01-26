import React from 'react';
import { Grid } from '@material-ui/core';
import { Box, Icon } from './styled';
import data from '../../helper/header.json';

interface Props {

}

const Home : React.FC<Home> = (props: Home) => {
    return (
        <Box>
            <Grid
                container
            >
                <Grid
                    item
                    xl = {1}
                    md = {12}
                    lg = {1}
                    xs = {12}
                >
                    <Grid container>
                        {
                            data.icons.map(i => <Grid item xs = {3} md = {3} lg = {12} xl = {12} ><Icon className={i.class}></Icon></Grid>)
                        }
                        {/* <Grid item xs = {3} md = {3} lg = {12} xl = {12} ><i style = {{color: 'white', margin: "10px auto"}} className="fab fa-github"></i></Grid>
                        <Grid item xs = {3} md = {3} lg = {12} xl = {12} ><i style = {{color: 'white', margin: "10px auto"}} className="fab fa-linkedin-in"></i></Grid>
                        <Grid item xs = {3} md = {3} lg = {12} xl = {12} ><i style = {{color: 'white', margin: "10px auto"}} className="fab fa-twitter"></i></Grid>
                        <Grid item xs = {3} md = {3} lg = {12} xl = {12} ><i style = {{color: 'white', margin: "10px auto"}} className="fab fa-stack-overflow"></i></Grid> */}
                    </Grid>
                </Grid>
                <Grid
                    item
                    xl = {6}
                    md = {12}
                    lg = {6}
                    xs = {12}
                >
                    
                </Grid>
                <Grid
                    item 
                    xl = {5}
                    md = {12}
                    lg = {5}
                    xs = {12}
                >
                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home