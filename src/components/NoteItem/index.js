import React from 'react';
import { Box, Title } from './styles';

export default ({ data, index, onPress }) => {
    // console.log(data);

    return (
        <Box onPress={() => onPress(index)}>
            <Title>
                {data.title}
            </Title>
        </Box>
    );
}
