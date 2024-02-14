import classes from './AddCodeExample.module.css'

type AddCodeExampleProps = {
    onclick?: () => void;
    onclick2?: () => void;
}

const AddCodeExample = ({ onclick, onclick2 }: AddCodeExampleProps) => {
    return (
        <div className={classes.container}>AddCodeExample</div>
    )
}

export default AddCodeExample