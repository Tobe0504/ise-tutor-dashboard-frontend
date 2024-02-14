import classes from './AddCodeExample.module.css'

type AddCodeExampleProps = {
    onClick?: () => void;
    onClick2?: () => void;
}

const AddCodeExample = ({ onClick, onClick2 }: AddCodeExampleProps) => {
    return (
        <div className={classes.container}>AddCodeExample</div>
    )
}

export default AddCodeExample