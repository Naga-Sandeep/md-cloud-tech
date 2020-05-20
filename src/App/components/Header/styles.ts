import {Theme, createStyles} from "@material-ui/core";

export default (theme: Theme) => createStyles({
    label: {
        fontWeight: 'bold',
        marginRight: theme.spacing(1)
    },
    gridContent: {
        display: 'flex',
        alignItems: 'center'
    }
});
