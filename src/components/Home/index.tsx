import React from "react";
import { Grid } from "@material-ui/core";
import { Box, Icon, Profile, Text } from "./styled";
import social from "../../helper/social.json";
import { theme } from "../../core/theme";
import profile from "../../assets/img.png";
import animations from "../../helper/animations.json";

const Home : React.FC<Home> = (props: Home) => {
    return (
        <Box> 
            <Grid
                container
                className="align-items-center"
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
                            social.social.map(i => <Grid key={i.class} item xs = {3} md = {3} lg = {12} xl = {12} ><Icon className={i.class}></Icon></Grid>)
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
                        data-aos={animations.home["introduction-text"]}
                        data-aos-duration={animations.home["duration-intro"]}
                        data-aos-anchor-placement="center-bottom"
                        color={theme.colors?.titleText}
                        fontSize={theme.fonts?.title.fontSize}
                        fontFamilly={theme.fonts?.title.fontFamilly}
                    >{props.main}</Text>
                    <Text
                        data-aos={animations.home["title-text"]}
                        data-aos-duration={animations.home["duration-title"]}
                        data-aos-anchor-placement="center-bottom"
                        color={theme.colors?.mainText}
                        fontSize={theme.fonts?.secondary.fontSize}
                        fontFamilly={theme.fonts?.secondary.fontFamilly}
                    >{props.title}</Text>
                    <Text
                        data-aos={animations.home["description-text"]}
                        data-aos-duration={animations.home["duration-description"]}
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
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Profile
                        data-aos={animations.home.image}
                        data-aos-duration={animations.home["duration-description"]}
                        data-aos-anchor-placement="center-bottom"
                    >
                        <img
                            src={profile}
                            alt=" Pacifique Linjanja "
                            style={{height: 500}}
                        />
                    </Profile>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;