import classes from './InsightTab.module.css'

type InsightTabProps = {
  totalNumber?: number | string
  title: string
  image?: string
  showtitle?: boolean
  status?: 'Published' | 'Draft' | 'Paid' | 'Pending' | 'Upcoming'
  children?: React.ReactNode
  onClick?: () => void
  isActive?: boolean
}

const InsightTab = ({
  totalNumber,
  title,
  image,
  status,
  children,
  showtitle = true,
  onClick,
  isActive,
}: InsightTabProps) => {
  const statusClassName: {
    Published: any
    Draft: any
    Paid: any
    Pending: any
    Upcoming: any
  } = {
    Published: classes.purple,
    Draft: classes.yellow,
    Paid: classes.yellow,
    Pending: classes.cyan,
    Upcoming: classes.yellow,
  }

  const statusClass = status ? statusClassName[status] : ''

  return (
    <div
      className={`${classes.container} ${
        isActive ? classes.active : classes.inActive
      }`}
      onClick={onClick}
    >
      <div>
        <p className={classes.number}>{totalNumber}</p>
        {showtitle && <h3 className={classes.title}>{title}</h3>}
        {status && <span className={statusClass}>{status}</span>}
      </div>
      {image && <img src={image} alt={title} />}
    </div>
  )
}

export default InsightTab
