import {Theme, createStyles} from "@material-ui/core";

export default (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
    },
    img: {
        height: 450,
        display: 'block',
        overflow: 'hidden',
        width: '100%',
    }
});
