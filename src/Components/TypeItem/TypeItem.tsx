import classes from './TypeItem.module.css'

type TypeItemProps = {
    title: string
    details: string
    onClick?: () => void;
    svg: React.ReactNode;
};

const TypeItem = ({ title, details, svg, onClick }: TypeItemProps) => {
    return (
        <div className={classes.typeItem} onClick={onClick}>
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