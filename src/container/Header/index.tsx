import React from 'react';
import Menu from '../../components/Menu';
import Home from '../../components/Home';
import { colors } from '../../core/theme/colors';
import home from '../../helper/header.json';
interface Props {

}
const Header: React.FC<Props> = () => {
    return (
        <div style={{backgroundColor: colors.background}}>
            <Menu navs={['Home', 'About', 'Contacts']} />
            <Home main = {home.main} title = {home.title} intro = {home.intro} />
        </div>
    )
}

export default Header