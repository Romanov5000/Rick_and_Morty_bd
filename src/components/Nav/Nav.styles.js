import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    Nav: {
        '& a': {
            marginRight: '10px',
        },
        '& a:last-child': {
            marginRight: '0'
        }
    }
});

export default styles;