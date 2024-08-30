import { useState } from 'react'
import classes from './SchedulesSessionModules2.module.css'
import ScheduleContainer from '../ScheduleContainer/ScheduleContainer'
import SectionsNav2 from '../../Components/SectionsNav2/Sectionsnav2'

type SchedulesSessionModules2Type = {
  schedule: any
}

const SchedulesSessionModules2 = ({
  schedule,
}: SchedulesSessionModules2Type) => {
  // States
  const [navItems, setNavItems] = useState<any[]>([
    {
      title: 'All',
      isActive: true,
    },
    {
      title: 'Live Sessions',
      isActive: false,
    },
    {
      title: '1-on-1 sessions',
      isActive: false,
    },
  ])

  return (
    <div className={classes.container}>
      <h2>Schedule</h2>
      <SectionsNav2 navItems={navItems} setNavItems={setNavItems} />
      <div className={classes.body}>
        {navItems[0].isActive && <ScheduleContainer schedule={schedule} />}
        {navItems[1].isActive && <ScheduleContainer height="" padding="" />}
        {navItems[2].isActive && <ScheduleContainer height="" padding="" />}
      </div>
    </div>
  )
}

export default SchedulesSessionModules2
