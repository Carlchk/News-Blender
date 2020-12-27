import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

import NewsList from './NewsList.js';
import BrowsePageContainer from './BrowsePageContainer';

import ToggleButton from '@material-ui/lab/ToggleButton';
import { ToggleButtonGroup } from '@material-ui/lab';

const GridSwitchContainer = styled.div`
    width: 100%;
    margin: 30px;
    max-width: 200px;
    margin-left: auto;
    margin-right: auto
`

const ContentContainer = () => {
    const [selected, setSelected] = useState('Headlines')

    return (
        <Container fixed>
            <GridSwitchContainer>
                <ToggleButtonGroup value={selected} onChange={(e, n) => { setSelected(n) }} size="medium" exclusive >
                    <ToggleButton value="Headlines">
                        <Typography gutterBottom variant="button" display="block">
                            Headlines
                        </Typography>
                    </ToggleButton>
                    <ToggleButton value="Browser">
                        <Typography gutterBottom variant="button" display="block">
                            Search
                        </Typography>
                    </ToggleButton>
                </ToggleButtonGroup>
            </GridSwitchContainer>
            {selected === 'Headlines'
                ? <NewsList />
                : <BrowsePageContainer />
            }
        </ Container>
    );
}

export default ContentContainer; 