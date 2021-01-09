import React from 'react';
import { theme } from '../../core/theme';
import { Menu } from './styled';
import { colors } from '../../core/theme/colors';
interface Props {

}
const Header: React.FC<Props> = () => {
    return (
        <>
            <Menu items={['Home', 'Contacts']} theme={theme}>

            </Menu>
        </>
    )
}

export default Header