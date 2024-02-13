import classes from './CourseTypeItem.module.css'

type CourseTypeItemProps = {
    title: string
    details?: string
    onClick?: () => void;
    svg: React.ReactNode;
};

const CourseTypeItem = ({ title, details, svg, onClick }: CourseTypeItemProps) => {
    return (
        <div className={classes.CourseTypeItem} onClick={onClick}>
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

export default CourseTypeItem