import {
  Button,
  Grid,
  MenuItem,
  Popover,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import React from 'react';

const ReactMUIDatatableToolbarFilterPopover = props => {
  return (
    <Popover
      open={Boolean(props.anchorEl)}
      anchorEl={props.anchorEl}
      onClose={() => {
        props.updateAnchorEl(null);
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Grid container spacing={24} className={props.classes.root}>
        <Grid item xs={12}>
          <Typography variant={'h6'}>Фильтр</Typography>
        </Grid>
        {Object.keys(props.filterLists).map((column, columnIndex) => (
          <Grid item xs={6} key={columnIndex}>
            <TextField
              select
              SelectProps={{ displayEmpty: true }}
              InputLabelProps={{ shrink: true }}
              value={props.filterValues[column]}
              label={props.filterLists[column].label}
              onChange={e => props.addFilter({ column, value: e.target.value })}
              fullWidth
            >
              <MenuItem value={''}>Все</MenuItem>
              {props.filterLists[column].list.map((value, valueIndex) => (
                <MenuItem value={value} key={valueIndex}>
                  {value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button color={'primary'} onClick={props.resetFilter} fullWidth>
            <Typography variant={'subheading'}>Сбросить</Typography>
          </Button>
        </Grid>
      </Grid>
    </Popover>
  );
};

export default withStyles(theme => ({
  root: { padding: theme.spacing.unit * 2 },
}))(ReactMUIDatatableToolbarFilterPopover);
