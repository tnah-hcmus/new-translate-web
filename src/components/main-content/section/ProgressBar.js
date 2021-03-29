import React from 'react';
import {CircularProgress, Typography, Box} from '@material-ui/core';

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex" justifyContent = "center">
      <CircularProgress variant="determinate" {...props}  style = {{color: 'var(--color-accent)'}} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style = {{
          color: 'currentcolor'
        }}
      >
        <Typography variant="caption" component="div" color="primary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default React.memo(CircularProgressWithLabel);
