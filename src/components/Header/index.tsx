import React from 'react';
import { Grid } from '@material-ui/core'

const Header = (props: Header) => {
    return (
        <>
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
                        <Grid item xs = {3} md = {3} lg = {12} xl = {12} ></Grid>
                        <Grid item xs = {3} md = {3} lg = {12} xl = {12} ></Grid>
                        <Grid item xs = {3} md = {3} lg = {12} xl = {12} ></Grid>
                        <Grid item xs = {3} md = {3} lg = {12} xl = {12} ></Grid>
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
        </>
    )
}