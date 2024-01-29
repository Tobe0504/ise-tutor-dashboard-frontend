import classes from './InsightTab.module.css'

type InsightTabProps = {
   totalNumber?: number
   title: string
   image?: string
   showtitle?: boolean
   status?: 'Published' | 'Draft' | 'Paid' | 'Pending'
   children?: React.ReactNode
}

const InsightTab = ({
   totalNumber,
   title,
   image,
   status,
   children,
   showtitle = true,
}: InsightTabProps) => {
   const statusClassName: {
      Published: any
      Draft: any
      Paid: any
      Pending: any
   } = {
      Published: classes.purple,
      Draft: classes.yellow,
      Paid: classes.yellow,
      Pending: classes.cyan,
   }

   const statusClass = status ? statusClassName[status] : ''

   return (
      <div className={classes.container}>
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
