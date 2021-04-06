import React from "react";
import Home from "../../components/Home";
import home from "../../helper/header.json";
import { theme } from "../../core/theme/index";

const Header: React.FC = () => {
    return (
        <div style={{backgroundColor: theme.colors?.background}}>
            <Home main = {home.texts.main} title = {home.texts.title} intro = {home.texts.intro} />
        </div>
    );
};

export default Header;
