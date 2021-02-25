import React from 'react';
import Menu from '../../components/Menu';
import Home from '../../components/Home';
import home from '../../helper/header.json';
import { theme } from '../../core/theme/index';
interface Props {

}
const Header: React.FC<Props> = () => {
    return (
        <div style={{backgroundImage: 'linear-gradient(to right, '+theme.colors?.background+' , #4f4d4c)'}}>
            <Menu navs={['Home', 'About', 'Contacts']} />
            <Home main = {home.texts.main} title = {home.texts.title} intro = {home.texts.intro} />
        </div>
    )
}

export default Header