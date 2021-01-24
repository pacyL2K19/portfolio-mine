import React from 'react';
import Menu from '../../components/Menu';
import { colors } from '../../core/theme/colors';
interface Props {

}
const Header: React.FC<Props> = () => {
    return (
        <div style={{backgroundColor: colors.background, height: 900}}>
            <Menu navs={['Home', 'About', 'Contacts']} />
        </div>
    )
}

export default Header