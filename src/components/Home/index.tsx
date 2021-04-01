import React from 'react';
import { Grid } from '@material-ui/core';
import { Box, Icon, Profile, Text } from './styled';
import data from '../../helper/header.json';
import { theme } from '../../core/theme';
import profile from '../../assets/profile.jpg';

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
                            data.icons.map(i => <Grid key={i.class} item xs = {3} md = {3} lg = {12} xl = {12} ><Icon className={i.class}></Icon></Grid>)
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
                    <Text
                        data-aos="fade-down"
                        data-aos-duration="700"
                        data-aos-anchor-placement="center-bottom"
                        color={theme.colors?.titleText}
                        fontSize={theme.fonts?.title.fontSize}
                        fontFamilly={theme.fonts?.title.fontFamilly}
                    >{props.main}</Text>
                    <Text
                        data-aos="fade-left" 
                        data-aos-duration="850"
                        data-aos-anchor-placement="center-bottom"
                        color={theme.colors?.mainText}
                        fontSize={theme.fonts?.secondary.fontSize}
                        fontFamilly={theme.fonts?.secondary.fontFamilly}
                    >{props.title}</Text>
                    <Text
                        data-aos="fade-right"
                        data-aos-duration="1100"
                        data-aos-anchor-placement="center-bottom"
                        color={theme.colors?.mainText}
                        fontSize={theme.fonts?.primary.fontSize}
                        fontFamilly={theme.fonts?.primary.fontFamilly}
                    >{props.intro}</Text>                    
                </Grid>
                <Grid
                    item 
                    xl = {5}
                    md = {12}
                    lg = {5}
                    xs = {12}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Profile
                        data-aos="zoom-in-up"
                        data-aos-duration="1100"
                        data-aos-anchor-placement="center-bottom"
                    >
                        <img
                            src={profile}
                            alt=" Pacifique Linjanja "
                            style={{height: 250, width: 250, borderRadius: 125}}
                        />
                    </Profile>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home