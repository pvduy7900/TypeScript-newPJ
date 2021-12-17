import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  boxSignUp: {
    marginTop: '8rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submitButton: {
    marginTop: '1rem',
    marginBottom: '1rem',
    background: '#1976d2',
    color: 'white',
    fontFamily: '"Roboto" "Helvetica" "Arial" sans-serif',
    textTransform: 'uppercase',
    fontSize: '0.875rem',
    '&:hover': {
        background: '#1565c0',
    },
  },
}));

export default useStyles;
