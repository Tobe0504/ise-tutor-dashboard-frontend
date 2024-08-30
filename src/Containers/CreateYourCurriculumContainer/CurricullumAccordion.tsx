import { useState } from 'react'
import Button from '../../Components/Button/Button'
import { capitalize } from '../../HelperFunctions/capitalize'
import classes from './CurricullumAccordion.module.css'

type weekIdIndex = {
  moduleId: number
  weekId: number[]
}

type CurricullumAccordionTypes = {
  curriculum: any
}

const iconHandler = (passedType: string) => {
  const type = passedType.toLowerCase()
  if (type === 'presentation' || type === 'video') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="15.5" stroke="black" />
        <path
          d="M13 21.1932V10.8086L21.1538 16.0009L13 21.1932ZM14 19.3509L19.2885 16.0009L14 12.6509V19.3509Z"
          fill="black"
        />
      </svg>
    )
  } else if (type === 'reading') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="15.5" stroke="black" />
        <path
          d="M17.8846 13.5917V12.6609C18.4218 12.3892 18.9971 12.1853 19.6106 12.0494C20.224 11.9135 20.8539 11.8456 21.5 11.8456C21.8692 11.8456 22.2237 11.8693 22.5635 11.9167C22.9032 11.9641 23.2538 12.0315 23.6154 12.1186V13.0263C23.2667 12.9148 22.9266 12.8376 22.5952 12.7946C22.2638 12.7517 21.8987 12.7302 21.5 12.7302C20.8539 12.7302 20.2231 12.8029 19.6077 12.9485C18.9923 13.094 18.418 13.3084 17.8846 13.5917ZM17.8846 19.0533V18.084C18.3962 17.8122 18.9683 17.6084 19.601 17.4725C20.2337 17.3366 20.8667 17.2686 21.5 17.2686C21.8692 17.2686 22.2237 17.2924 22.5635 17.3398C22.9032 17.3872 23.2538 17.4545 23.6154 17.5417V18.4494C23.2667 18.3379 22.9266 18.2606 22.5952 18.2177C22.2638 18.1747 21.8987 18.1533 21.5 18.1533C20.8539 18.1533 20.2231 18.2315 19.6077 18.3879C18.9923 18.5443 18.418 18.7661 17.8846 19.0533ZM17.8846 16.3417V15.3725C18.4218 15.1007 18.9971 14.8968 19.6106 14.7609C20.224 14.6251 20.8539 14.5571 21.5 14.5571C21.8692 14.5571 22.2237 14.5808 22.5635 14.6283C22.9032 14.6757 23.2538 14.743 23.6154 14.8302V15.7379C23.2667 15.6263 22.9266 15.5491 22.5952 15.5061C22.2638 15.4632 21.8987 15.4417 21.5 15.4417C20.8539 15.4417 20.2231 15.5209 19.6077 15.6792C18.9923 15.8375 18.418 16.0584 17.8846 16.3417ZM10.5 20.0379C11.3731 20.0379 12.2221 20.1382 13.0471 20.3388C13.8721 20.5395 14.6897 20.8661 15.5 21.3186V11.5071C14.7782 10.9917 13.9827 10.6052 13.1135 10.3475C12.2442 10.0898 11.3731 9.96096 10.5 9.96096C9.9 9.96096 9.37468 9.99685 8.92403 10.0686C8.47339 10.1404 7.97308 10.2738 7.42308 10.4686C7.26923 10.5199 7.16025 10.5936 7.09615 10.6898C7.03205 10.786 7 10.8917 7 11.0071V20.0225C7 20.202 7.0641 20.3334 7.1923 20.4167C7.32052 20.5 7.46154 20.5097 7.61538 20.4456C7.98076 20.3225 8.40287 20.2238 8.88173 20.1494C9.36057 20.075 9.9 20.0379 10.5 20.0379ZM16.5 21.3186C17.3103 20.8661 18.1279 20.5395 18.9529 20.3388C19.7779 20.1382 20.6269 20.0379 21.5 20.0379C22.1 20.0379 22.6394 20.075 23.1183 20.1494C23.5971 20.2238 24.0192 20.3225 24.3846 20.4456C24.5385 20.5097 24.6795 20.5 24.8077 20.4167C24.9359 20.3334 25 20.202 25 20.0225V11.0071C25 10.8917 24.968 10.7892 24.9039 10.6994C24.8398 10.6097 24.7308 10.5327 24.5769 10.4686C24.0269 10.2738 23.5266 10.1404 23.076 10.0686C22.6253 9.99685 22.1 9.96096 21.5 9.96096C20.6269 9.96096 19.7558 10.0898 18.8865 10.3475C18.0173 10.6052 17.2218 10.9917 16.5 11.5071V21.3186ZM16 22.7687C15.1872 22.2122 14.3141 21.7847 13.3808 21.486C12.4474 21.1872 11.4872 21.0379 10.5 21.0379C9.97948 21.0379 9.46827 21.0815 8.96635 21.1687C8.46442 21.2558 7.97563 21.3956 7.5 21.5879C7.13718 21.7328 6.79647 21.6892 6.47787 21.4571C6.15929 21.2251 6 20.9046 6 20.4956V10.8302C6 10.5827 6.06506 10.3532 6.19517 10.1417C6.32531 9.93018 6.50768 9.78275 6.7423 9.69941C7.32948 9.44043 7.94038 9.2526 8.575 9.13594C9.20962 9.01927 9.85128 8.96094 10.5 8.96094C11.4795 8.96094 12.4349 9.10196 13.3663 9.38401C14.2977 9.66606 15.1756 10.0763 16 10.6148C16.8244 10.0763 17.7023 9.66606 18.6337 9.38401C19.5651 9.10196 20.5205 8.96094 21.5 8.96094C22.1487 8.96094 22.7904 9.01927 23.425 9.13594C24.0596 9.2526 24.6705 9.44043 25.2577 9.69941C25.4923 9.78275 25.6747 9.93018 25.8048 10.1417C25.9349 10.3532 26 10.5827 26 10.8302V20.4956C26 20.9046 25.8279 21.2187 25.4837 21.4379C25.1394 21.6571 24.7731 21.6943 24.3846 21.5494C23.9218 21.3699 23.4491 21.2398 22.9664 21.159C22.4837 21.0783 21.9949 21.0379 21.5 21.0379C20.5128 21.0379 19.5526 21.1872 18.6192 21.486C17.6859 21.7847 16.8128 22.2122 16 22.7687Z"
          fill="black"
        />
      </svg>
    )
  } else {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="15.5" stroke="black" />
        <path
          d="M17.5 18.5385C17.7064 18.5385 17.8881 18.4599 18.0452 18.3029C18.2022 18.1458 18.2808 17.9641 18.2808 17.7577C18.2808 17.5513 18.2022 17.3695 18.0452 17.2125C17.8881 17.0555 17.7064 16.9769 17.5 16.9769C17.2936 16.9769 17.1119 17.0555 16.9548 17.2125C16.7978 17.3695 16.7192 17.5513 16.7192 17.7577C16.7192 17.9641 16.7978 18.1458 16.9548 18.3029C17.1119 18.4599 17.2936 18.5385 17.5 18.5385ZM17.0577 15.7231H17.9423C17.968 15.3038 18.034 14.9881 18.1404 14.776C18.2468 14.5638 18.5026 14.268 18.9077 13.8885C19.3308 13.5038 19.6257 13.1606 19.7923 12.8587C19.959 12.5567 20.0423 12.2103 20.0423 11.8192C20.0423 11.1462 19.8023 10.5849 19.3221 10.1356C18.842 9.68621 18.2346 9.46152 17.5 9.46152C16.9449 9.46152 16.4516 9.61153 16.0202 9.91153C15.5888 10.2115 15.2603 10.6205 15.0346 11.1385L15.8462 11.4962C16.0346 11.1051 16.2644 10.8119 16.5356 10.6163C16.8067 10.4208 17.1282 10.3231 17.5 10.3231C17.9769 10.3231 18.3724 10.4644 18.6865 10.7471C19.0006 11.0298 19.1577 11.3949 19.1577 11.8423C19.1577 12.1141 19.0814 12.367 18.9289 12.601C18.7763 12.8349 18.5141 13.1167 18.1423 13.4462C17.7205 13.8141 17.4343 14.1516 17.2837 14.4587C17.133 14.7657 17.0577 15.1872 17.0577 15.7231ZM12.1154 21C11.6551 21 11.2708 20.8458 10.9625 20.5375C10.6542 20.2292 10.5 19.8449 10.5 19.3846V8.61537C10.5 8.15512 10.6542 7.77083 10.9625 7.4625C11.2708 7.15417 11.6551 7 12.1154 7H22.8846C23.3449 7 23.7292 7.15417 24.0375 7.4625C24.3458 7.77083 24.5 8.15512 24.5 8.61537V19.3846C24.5 19.8449 24.3458 20.2292 24.0375 20.5375C23.7292 20.8458 23.3449 21 22.8846 21H12.1154ZM12.1154 20H22.8846C23.0385 20 23.1795 19.9359 23.3077 19.8077C23.4359 19.6795 23.5 19.5385 23.5 19.3846V8.61537C23.5 8.46154 23.4359 8.32052 23.3077 8.1923C23.1795 8.0641 23.0385 8 22.8846 8H12.1154C11.9615 8 11.8205 8.0641 11.6923 8.1923C11.5641 8.32052 11.5 8.46154 11.5 8.61537V19.3846C11.5 19.5385 11.5641 19.6795 11.6923 19.8077C11.8205 19.9359 11.9615 20 12.1154 20ZM9.11538 24C8.65513 24 8.27083 23.8458 7.9625 23.5375C7.65417 23.2292 7.5 22.8449 7.5 22.3846V10.6154H8.5V22.3846C8.5 22.5385 8.5641 22.6795 8.6923 22.8077C8.8205 22.9359 8.96153 23 9.11538 23H20.8846V24H9.11538Z"
          fill="black"
        />
      </svg>
    )
  }
}

const CurricullumAccordion = ({ curriculum }: CurricullumAccordionTypes) => {
  // States
  const [expandedWeekId, setExpandedWeekId] = useState<weekIdIndex[]>([])
  const [expandedModuleInfoId, setExpandModuleInfoId] = useState<number[]>([])
  const [expandedModuleId, setExpandModuleId] = useState<number[]>([])

  const courseInformationChecker = (modules: any) => {
    let reading = 0
    let presentation = 0
    let quiz = 0
    let video = 0

    if (modules) {
      for (let j = 0; j < modules?.course_weeks?.length; j++) {
        for (let k = 0; k < modules?.course_weeks[j]?.content?.length; k++) {
          if (modules?.course_weeks[j]?.content[k]?.type === 'reading') {
            reading += 1
          }
          if (modules?.course_weeks[j]?.content[k]?.type === 'presentation') {
            presentation += 1
          }
          if (modules?.course_weeks[j]?.content[k]?.type === 'quiz') {
            quiz += 1
          }
          if (modules?.course_weeks[j]?.content[k]?.type === 'video') {
            video += 1
          }
        }
      }
    }

    return { reading, video, presentation, quiz }
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h4>Curriculum outline</h4>
        <div className={classes.buttonSection}>
          <Button type="secondary">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2008 3.29917L15.9079 2.59207V2.59207L15.2008 3.29917ZM4.875 16.2766V17.2766C5.14022 17.2766 5.39457 17.1713 5.58211 16.9837L4.875 16.2766ZM2.25 16.2766H1.25C1.25 16.8289 1.69772 17.2766 2.25 17.2766V16.2766ZM2.25 13.5983L1.54289 12.8912C1.35536 13.0787 1.25 13.3331 1.25 13.5983H2.25ZM13.2562 4.00628C13.5979 3.66457 14.152 3.66457 14.4937 4.00628L15.9079 2.59207C14.7851 1.46931 12.9648 1.46931 11.842 2.59207L13.2562 4.00628ZM14.4937 4.00628C14.8354 4.34799 14.8354 4.90201 14.4937 5.24372L15.9079 6.65793C17.0306 5.53517 17.0306 3.71483 15.9079 2.59207L14.4937 4.00628ZM14.4937 5.24372L4.16789 15.5695L5.58211 16.9837L15.9079 6.65793L14.4937 5.24372ZM4.875 15.2766H2.25V17.2766H4.875V15.2766ZM11.842 2.59207L1.54289 12.8912L2.95711 14.3054L13.2562 4.00628L11.842 2.59207ZM1.25 13.5983V16.2766H3.25V13.5983H1.25ZM10.717 5.13128L13.3687 7.78293L14.7829 6.36872L12.1312 3.71707L10.717 5.13128Z"
                fill="#664EFE"
              />
            </svg>
            <span>Edit curriculum</span>
          </Button>
          <Button type="null">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2501 9.5C11.2501 10.7426 10.2427 11.75 9.00006 11.75C7.75742 11.75 6.75006 10.7426 6.75006 9.5C6.75006 8.25736 7.75742 7.25 9.00006 7.25C10.2427 7.25 11.2501 8.25736 11.2501 9.5Z"
                stroke="#664EFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.84375 9.49997C2.79946 6.45716 5.64217 4.25 9.00039 4.25C12.3586 4.25 15.2014 6.45719 16.157 9.50003C15.2013 12.5428 12.3586 14.75 9.00041 14.75C5.64217 14.75 2.79944 12.5428 1.84375 9.49997Z"
                stroke="#664EFE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Preview curriculum</span>
          </Button>
        </div>
      </div>

      {curriculum?.course_modules?.map((module: any, index: number) => {
        return (
          <div className={classes.moduleContainer} key={index}>
            <div
              className={classes.moduleHeader}
              style={
                expandedModuleId.includes(index)
                  ? { border: 'none' }
                  : { borderBottom: '1px solid #d8d8d8' }
              }
            >
              <div
                className={classes.moduleHeaderText}
                onClick={() => {
                  if (expandedModuleId.includes(index)) {
                    setExpandModuleId((prevState) => {
                      const filteredModuleIndex = prevState.filter(
                        (id) => id !== index
                      )

                      return filteredModuleIndex
                    })
                  } else {
                    setExpandModuleId((prevState) => {
                      return [...prevState, index]
                    })
                  }
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke="#2E2E2E"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h4>
                  {`Module ${index + 1}`}: {module?.title}{' '}
                </h4>
              </div>
              <div
                className={classes.iconsAndCount}
                style={
                  expandedModuleId.includes(index)
                    ? { maxHeight: '0px', marginTop: '0px' }
                    : { maxHeight: '100px' }
                }
              >
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="15.5" stroke="black" />
                    <path
                      d="M13 21.1932V10.8086L21.1538 16.0009L13 21.1932ZM14 19.3509L19.2885 16.0009L14 12.6509V19.3509Z"
                      fill="black"
                    />
                  </svg>
                  <span>{courseInformationChecker(module)?.video} videos</span>
                </div>
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="15.5" stroke="black" />
                    <path
                      d="M17.8846 13.5917V12.6609C18.4218 12.3892 18.9971 12.1853 19.6106 12.0494C20.224 11.9135 20.8539 11.8456 21.5 11.8456C21.8692 11.8456 22.2237 11.8693 22.5635 11.9167C22.9032 11.9641 23.2538 12.0315 23.6154 12.1186V13.0263C23.2667 12.9148 22.9266 12.8376 22.5952 12.7946C22.2638 12.7517 21.8987 12.7302 21.5 12.7302C20.8539 12.7302 20.2231 12.8029 19.6077 12.9485C18.9923 13.094 18.418 13.3084 17.8846 13.5917ZM17.8846 19.0533V18.084C18.3962 17.8122 18.9683 17.6084 19.601 17.4725C20.2337 17.3366 20.8667 17.2686 21.5 17.2686C21.8692 17.2686 22.2237 17.2924 22.5635 17.3398C22.9032 17.3872 23.2538 17.4545 23.6154 17.5417V18.4494C23.2667 18.3379 22.9266 18.2606 22.5952 18.2177C22.2638 18.1747 21.8987 18.1533 21.5 18.1533C20.8539 18.1533 20.2231 18.2315 19.6077 18.3879C18.9923 18.5443 18.418 18.7661 17.8846 19.0533ZM17.8846 16.3417V15.3725C18.4218 15.1007 18.9971 14.8968 19.6106 14.7609C20.224 14.6251 20.8539 14.5571 21.5 14.5571C21.8692 14.5571 22.2237 14.5808 22.5635 14.6283C22.9032 14.6757 23.2538 14.743 23.6154 14.8302V15.7379C23.2667 15.6263 22.9266 15.5491 22.5952 15.5061C22.2638 15.4632 21.8987 15.4417 21.5 15.4417C20.8539 15.4417 20.2231 15.5209 19.6077 15.6792C18.9923 15.8375 18.418 16.0584 17.8846 16.3417ZM10.5 20.0379C11.3731 20.0379 12.2221 20.1382 13.0471 20.3388C13.8721 20.5395 14.6897 20.8661 15.5 21.3186V11.5071C14.7782 10.9917 13.9827 10.6052 13.1135 10.3475C12.2442 10.0898 11.3731 9.96096 10.5 9.96096C9.9 9.96096 9.37468 9.99685 8.92403 10.0686C8.47339 10.1404 7.97308 10.2738 7.42308 10.4686C7.26923 10.5199 7.16025 10.5936 7.09615 10.6898C7.03205 10.786 7 10.8917 7 11.0071V20.0225C7 20.202 7.0641 20.3334 7.1923 20.4167C7.32052 20.5 7.46154 20.5097 7.61538 20.4456C7.98076 20.3225 8.40287 20.2238 8.88173 20.1494C9.36057 20.075 9.9 20.0379 10.5 20.0379ZM16.5 21.3186C17.3103 20.8661 18.1279 20.5395 18.9529 20.3388C19.7779 20.1382 20.6269 20.0379 21.5 20.0379C22.1 20.0379 22.6394 20.075 23.1183 20.1494C23.5971 20.2238 24.0192 20.3225 24.3846 20.4456C24.5385 20.5097 24.6795 20.5 24.8077 20.4167C24.9359 20.3334 25 20.202 25 20.0225V11.0071C25 10.8917 24.968 10.7892 24.9039 10.6994C24.8398 10.6097 24.7308 10.5327 24.5769 10.4686C24.0269 10.2738 23.5266 10.1404 23.076 10.0686C22.6253 9.99685 22.1 9.96096 21.5 9.96096C20.6269 9.96096 19.7558 10.0898 18.8865 10.3475C18.0173 10.6052 17.2218 10.9917 16.5 11.5071V21.3186ZM16 22.7687C15.1872 22.2122 14.3141 21.7847 13.3808 21.486C12.4474 21.1872 11.4872 21.0379 10.5 21.0379C9.97948 21.0379 9.46827 21.0815 8.96635 21.1687C8.46442 21.2558 7.97563 21.3956 7.5 21.5879C7.13718 21.7328 6.79647 21.6892 6.47787 21.4571C6.15929 21.2251 6 20.9046 6 20.4956V10.8302C6 10.5827 6.06506 10.3532 6.19517 10.1417C6.32531 9.93018 6.50768 9.78275 6.7423 9.69941C7.32948 9.44043 7.94038 9.2526 8.575 9.13594C9.20962 9.01927 9.85128 8.96094 10.5 8.96094C11.4795 8.96094 12.4349 9.10196 13.3663 9.38401C14.2977 9.66606 15.1756 10.0763 16 10.6148C16.8244 10.0763 17.7023 9.66606 18.6337 9.38401C19.5651 9.10196 20.5205 8.96094 21.5 8.96094C22.1487 8.96094 22.7904 9.01927 23.425 9.13594C24.0596 9.2526 24.6705 9.44043 25.2577 9.69941C25.4923 9.78275 25.6747 9.93018 25.8048 10.1417C25.9349 10.3532 26 10.5827 26 10.8302V20.4956C26 20.9046 25.8279 21.2187 25.4837 21.4379C25.1394 21.6571 24.7731 21.6943 24.3846 21.5494C23.9218 21.3699 23.4491 21.2398 22.9664 21.159C22.4837 21.0783 21.9949 21.0379 21.5 21.0379C20.5128 21.0379 19.5526 21.1872 18.6192 21.486C17.6859 21.7847 16.8128 22.2122 16 22.7687Z"
                      fill="black"
                    />
                  </svg>

                  <span>
                    {courseInformationChecker(module)?.reading} readings
                  </span>
                </div>
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="15.5" stroke="black" />
                    <path
                      d="M13 21.1932V10.8086L21.1538 16.0009L13 21.1932ZM14 19.3509L19.2885 16.0009L14 12.6509V19.3509Z"
                      fill="black"
                    />
                  </svg>

                  <span>
                    {courseInformationChecker(module)?.presentation}{' '}
                    presentations
                  </span>
                </div>
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="15.5" stroke="black" />
                    <path
                      d="M17.5 18.5385C17.7064 18.5385 17.8881 18.4599 18.0452 18.3029C18.2022 18.1458 18.2808 17.9641 18.2808 17.7577C18.2808 17.5513 18.2022 17.3695 18.0452 17.2125C17.8881 17.0555 17.7064 16.9769 17.5 16.9769C17.2936 16.9769 17.1119 17.0555 16.9548 17.2125C16.7978 17.3695 16.7192 17.5513 16.7192 17.7577C16.7192 17.9641 16.7978 18.1458 16.9548 18.3029C17.1119 18.4599 17.2936 18.5385 17.5 18.5385ZM17.0577 15.7231H17.9423C17.968 15.3038 18.034 14.9881 18.1404 14.776C18.2468 14.5638 18.5026 14.268 18.9077 13.8885C19.3308 13.5038 19.6257 13.1606 19.7923 12.8587C19.959 12.5567 20.0423 12.2103 20.0423 11.8192C20.0423 11.1462 19.8023 10.5849 19.3221 10.1356C18.842 9.68621 18.2346 9.46152 17.5 9.46152C16.9449 9.46152 16.4516 9.61153 16.0202 9.91153C15.5888 10.2115 15.2603 10.6205 15.0346 11.1385L15.8462 11.4962C16.0346 11.1051 16.2644 10.8119 16.5356 10.6163C16.8067 10.4208 17.1282 10.3231 17.5 10.3231C17.9769 10.3231 18.3724 10.4644 18.6865 10.7471C19.0006 11.0298 19.1577 11.3949 19.1577 11.8423C19.1577 12.1141 19.0814 12.367 18.9289 12.601C18.7763 12.8349 18.5141 13.1167 18.1423 13.4462C17.7205 13.8141 17.4343 14.1516 17.2837 14.4587C17.133 14.7657 17.0577 15.1872 17.0577 15.7231ZM12.1154 21C11.6551 21 11.2708 20.8458 10.9625 20.5375C10.6542 20.2292 10.5 19.8449 10.5 19.3846V8.61537C10.5 8.15512 10.6542 7.77083 10.9625 7.4625C11.2708 7.15417 11.6551 7 12.1154 7H22.8846C23.3449 7 23.7292 7.15417 24.0375 7.4625C24.3458 7.77083 24.5 8.15512 24.5 8.61537V19.3846C24.5 19.8449 24.3458 20.2292 24.0375 20.5375C23.7292 20.8458 23.3449 21 22.8846 21H12.1154ZM12.1154 20H22.8846C23.0385 20 23.1795 19.9359 23.3077 19.8077C23.4359 19.6795 23.5 19.5385 23.5 19.3846V8.61537C23.5 8.46154 23.4359 8.32052 23.3077 8.1923C23.1795 8.0641 23.0385 8 22.8846 8H12.1154C11.9615 8 11.8205 8.0641 11.6923 8.1923C11.5641 8.32052 11.5 8.46154 11.5 8.61537V19.3846C11.5 19.5385 11.5641 19.6795 11.6923 19.8077C11.8205 19.9359 11.9615 20 12.1154 20ZM9.11538 24C8.65513 24 8.27083 23.8458 7.9625 23.5375C7.65417 23.2292 7.5 22.8449 7.5 22.3846V10.6154H8.5V22.3846C8.5 22.5385 8.5641 22.6795 8.6923 22.8077C8.8205 22.9359 8.96153 23 9.11538 23H20.8846V24H9.11538Z"
                      fill="black"
                    />
                  </svg>
                  <span>{courseInformationChecker(module)?.quiz} quizzes</span>
                </div>
              </div>
            </div>
            <div
              className={classes.moduleWrapper}
              style={
                expandedModuleId.includes(index)
                  ? { maxHeight: '0px' }
                  : { maxHeight: '10000px' }
              }
            >
              <div
                className={classes.moduleInformation}
                style={
                  expandedModuleInfoId.includes(index)
                    ? { maxHeight: '0px' }
                    : { maxHeight: '1000px' }
                }
              >
                <h4>Module description</h4>
                <p>{module?.description}</p>

                <h4>Module Objectives</h4>
                <ul>
                  {module?.objective?.map(
                    (
                      moduleDescription: string,
                      moduleDescriptionIndex: number
                    ) => {
                      return (
                        <li key={moduleDescriptionIndex}>
                          {moduleDescription}
                        </li>
                      )
                    }
                  )}
                </ul>
              </div>

              <div
                className={classes.hide}
                onClick={() => {
                  if (expandedModuleInfoId.includes(index)) {
                    setExpandModuleInfoId((prevState) => {
                      const filteredModuleInfoIndex = prevState.filter(
                        (id) => id !== index
                      )

                      return filteredModuleInfoIndex
                    })
                  } else {
                    setExpandModuleInfoId((prevState) => {
                      return [...prevState, index]
                    })
                  }
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15L12 8L19 15"
                    stroke="#664EFE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  {expandedModuleInfoId.includes(index) ? 'Show' : 'Hide'}{' '}
                  module objectives
                </span>
              </div>

              <div className={classes.moduleWeeks}>
                {module?.course_weeks?.map((week: any, weekIndex: number) => {
                  return (
                    <div className={classes.week} key={weekIndex}>
                      <div
                        className={classes.weekHeader}
                        onClick={() => {
                          setExpandedWeekId((prevState) => {
                            const updatedExpandedWeekId: weekIdIndex[] = [
                              ...prevState,
                            ]

                            if (
                              updatedExpandedWeekId[index]?.weekId.includes(
                                weekIndex
                              )
                            ) {
                              const filtered = updatedExpandedWeekId[
                                index
                              ]?.weekId.filter((id) => id !== weekIndex)
                              updatedExpandedWeekId[index].weekId = filtered
                              return updatedExpandedWeekId
                            } else {
                              if (
                                updatedExpandedWeekId[index]?.weekId?.length > 0
                              ) {
                                updatedExpandedWeekId[index].weekId = [
                                  ...updatedExpandedWeekId[index]?.weekId,
                                  weekIndex,
                                ]
                              } else {
                                updatedExpandedWeekId[index] = {
                                  moduleId: index,
                                  weekId: [weekIndex],
                                }
                              }
                            }
                            return updatedExpandedWeekId
                          })
                        }}
                        style={
                          expandedWeekId[index]?.weekId.includes(weekIndex)
                            ? { border: 'none' }
                            : { maxHeight: '1px solid #d8d8d8' }
                        }
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={
                            expandedWeekId[index]?.weekId?.includes(weekIndex)
                              ? { transform: 'rotate(0deg)' }
                              : { transform: 'rotate(-90deg)' }
                          }
                        >
                          <path
                            d="M19 9L12 16L5 9"
                            stroke="#2E2E2E"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>{week?.title}</span>
                      </div>
                      <div
                        className={classes.weekContent}
                        style={
                          expandedWeekId[index]?.weekId?.includes(weekIndex)
                            ? { maxHeight: '0px', border: 'none' }
                            : { maxHeight: '2000px' }
                        }
                      >
                        {/* Week lesson collapses */}
                        {week?.content.map(
                          (weekContent: any, weekContentIndex: number) => {
                            return (
                              <div
                                className={classes.lesson}
                                key={weekContentIndex}
                              >
                                {iconHandler(weekContent?.type)}
                                <div>
                                  <h5>{weekContent?.title}</h5>
                                  <span>{capitalize(weekContent?.type)}</span>
                                  <span>.</span>
                                </div>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CurricullumAccordion
