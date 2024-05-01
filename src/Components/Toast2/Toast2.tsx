import { useContext, useEffect } from 'react'
import { AppContext, notificationsType } from '../../Context/AppContext'
import classes from './Toast2.module.css'
import { motion, AnimatePresence } from 'framer-motion'

type ToastProps = {
  children: React.ReactNode
}

// ... (imports)

const leftSectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
}

const Toast2 = ({ children }: ToastProps) => {
  // Context
  const { notifications, setNotifications } = useContext(AppContext)

  // Utils
  const filterNotifications = (id: string | number) => {
    const newNotifications = notifications?.filter((data) => {
      return data.id !== id
    })

    setNotifications(newNotifications as notificationsType)
  }
  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = []

    notifications?.forEach((data) => {
      const timeoutId = setTimeout(() => {
        filterNotifications(data.id)
      }, 6000)
      timeoutIds.push(timeoutId)
    })

    // Clear timeouts unconditionally
    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId))
    }
  }, [notifications])

  return (
    <div className={classes.container}>
      <div className={classes.body}>{children}</div>
      <AnimatePresence>
        {notifications && (
          <div className={classes.notificationContainer}>
            {notifications?.map((data) => (
              <motion.div
                key={data.id}
                variants={leftSectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={classes.notification}
                style={{
                  background:
                    data.severity === 'success' ? '#38CCB3' : '#DC362E',
                  color: data.severity === 'success' ? '#011627' : '#FFFFFF',
                }}
              >
                <div className={classes.leftSection}>
                  <p>{data.title}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  fill="none"
                  onClick={() => {
                    filterNotifications(data.id)
                  }}
                >
                  <path
                    d="M10 30L30 10M10 10L30 30"
                    stroke={`${
                      data.severity === 'success' ? '#011627' : '#FFFFFF'
                    }`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Toast2
