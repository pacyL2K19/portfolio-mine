import React from 'react';
import { Grid } from '@material-ui/core';
import { Box, Icon, Text } from './styled';
import data from '../../helper/header.json';
import { colors } from '../../core/theme/colors';
import { theme } from '../../core/theme';

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
                    </Grid>
                </Grid>
                <Grid
                    item
                    xl = {6}
                    md = {12}
                    lg = {6}
                    xs = {12}
                >
                    <Text color={theme.colors?.titleText} fontSize={theme.fonts?.title.fontSize} fontFamilly={theme.fonts?.title.fontFamilly}>{props.main}</Text>
                    <Text color={theme.colors?.mainText} fontSize={theme.fonts?.primary.fontSize} fontFamilly={theme.fonts?.primary.fontFamilly}>{props.title}</Text>
                    <Text color={theme.colors?.mainText} fontSize={theme.fonts?.title.fontSize} fontFamilly={theme.fonts?.title.fontFamilly}>{props.intro}</Text>                    
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