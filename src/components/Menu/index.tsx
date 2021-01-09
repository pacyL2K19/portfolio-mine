import React from 'react';
import { theme } from '../../core/theme';
import { Box } from './styled';
import { colors } from '../../core/theme/colors';
interface Props {

}
const Menu: React.FC<Props> = () => {
    return (
        <>
            <Box items={['Home', 'Contacts']} style={{backgroundColor: theme.colors?.navBgcol}}>
                
            </Box>
        </>
    )
}

export default Menu