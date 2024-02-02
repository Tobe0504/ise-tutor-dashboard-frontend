import classes from './TypeItem.module.css'

type TypeItemProps = {
    title: string
    details: string
    svg: React.ReactNode;
};

const TypeItem = ({ title, details, svg }: TypeItemProps) => {
    return (
        <div className={classes.typeItem}>
            <div>
                {svg}
            </div>
            <div>
                <p>{title}</p>
                <span>{details}</span>
            </div>
        </div>
    )
}

export default TypeItem