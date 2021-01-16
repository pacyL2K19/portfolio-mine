import React from 'react';
import { theme } from '../../core/theme';
import { Box, MenuLink, MenuLinks } from './styled';
import { Name } from './styled';
interface Props {
    navs: string[]
}
const Menu: React.FC<Props> = (props: Props) => {
    return (
        <>
            <Box style={{backgroundColor: theme.colors?.navBgcol}}>
                <div>
                    <Name>Pacifique Linjanja</Name>
                </div>
                <MenuLinks>
                    {
                        props.navs.map(item => (
                            <MenuLink href = {"#"+item}>{item}</MenuLink>
                        ))
                    }
                    <a href = '#contacts'><i className=""></i></a>
                </MenuLinks>
            </Box>
        </>
    )
}

export default Menu