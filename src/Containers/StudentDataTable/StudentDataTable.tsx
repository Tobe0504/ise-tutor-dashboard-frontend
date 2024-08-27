import React, { Dispatch, SetStateAction, useContext } from 'react'
import classes from './StudentDataTable.module.css'
import Checkbox from '../../Components/Checkbox/Checkbox'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'
import { activeTogglerRestAll } from '../../HelperFunctions/activeTogglers'
import noResultFound from '../../Assets/Images/noResult.svg'
import EmptyTabComponent from '../../Components/EmptyTabComponent/EmptyTabComponent'
import { studentRequestDataType, studentsType } from '../../Utilities/types'
import moment from 'moment'
import { mutate } from 'swr'
import { backend_url } from '../../Utilities/global'
import { LinearProgress } from '@mui/material'

type StudentDataTableTypes = {
  students: studentRequestDataType
  setStudents?: Dispatch<SetStateAction<studentRequestDataType>>
  pageNumber: number
  setPageNumber: Dispatch<SetStateAction<number>>
  isValidating: boolean
}

const StudentDataTable = ({
  students,
  setStudents,
  pageNumber,
  setPageNumber,
  isValidating,
}: StudentDataTableTypes) => {
  const navigate = useNavigate()
  const { searchValue } = useContext(AppContext)

  const listedStudents = students?.data?.filter((data) => {
    return (
      data?.email?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
      data?.full_name?.toLowerCase()?.includes(searchValue?.toLowerCase())
    )
  })

  return (
    <>
      <section className={classes.container}>
        {isValidating && (
          <LinearProgress style={{ color: '#664efe' }} color="inherit" />
        )}

        <div className={classes.tableHeader}>
          <span></span>
          <span>Student name</span>
          <span>Email address</span>
          <span>Enrollment date</span>
          <span></span>
        </div>
        {listedStudents?.length > 0 ? (
          listedStudents?.map((data: studentsType, i) => {
            return (
              <div key={Math.random()} className={classes.tableBody}>
                <Checkbox
                  isChecked={data?.isActive as boolean}
                  onChange={(e: any) => {
                    if (setStudents) {
                      setStudents((prevState: studentRequestDataType) => {
                        const updatedState = { ...prevState }
                        const checkedStudents = updatedState?.data?.map(
                          (data: studentsType, index: number) => {
                            if (i === index) {
                              return { ...data, isActive: e }
                            } else {
                              return { ...data, isActive: data?.isActive }
                            }
                          }
                        )
                        return { ...updatedState, data: checkedStudents }
                      })
                    }
                  }}
                />
                <span>{data?.full_name}</span>
                <span>{data?.email}</span>
                <span>
                  {moment(data?.enrollment_date).format('DD MMM, YYYY ')}
                </span>

                <span
                  onClick={() => {
                    navigate(`/student/${String(data?.studentId)}`)
                  }}
                >
                  View
                </span>
              </div>
            )
          })
        ) : (
          <EmptyTabComponent
            image={noResultFound}
            header={`No results for “${searchValue}”`}
            firstParagraph="Try a new search"
            imageHeight={280}
            route=""
            onClick={() => {
              mutate(
                `${backend_url}/api/ise/v1/tutors/enrolled-students?page=${pageNumber}`
              )
            }}
            buttontext="Retry search"
            buttonType="null"
            buttonSvg={
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1.5V5.25H1.93614M13.4536 6.75C13.0845 3.79027 10.5597 1.5 7.5 1.5C4.98197 1.5 2.82622 3.05113 1.93614 5.25M1.93614 5.25H5.25M13.5 13.5V9.75H13.0639M13.0639 9.75C12.1738 11.9489 10.018 13.5 7.5 13.5C4.44029 13.5 1.91549 11.2097 1.54642 8.25M13.0639 9.75H9.75"
                  stroke="#664EFE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        )}
      </section>

      {/* {students?.data?.length > 0 && ( */}
      <div className={classes.pageButtons}>
        <span
          style={
            pageNumber > 1
              ? { border: '1px solid #664efe', background: '#664efe' }
              : { border: '1px solid #d8d8d8', background: 'none' }
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            onClick={() => {
              if (pageNumber > 1) {
                setPageNumber((prevState) => prevState - 1)
              }
            }}
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="#d8d8d8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <button>{pageNumber || 1}</button>
        <span
          style={
            pageNumber < students?.last_page
              ? { border: '1px solid #664efe', background: '#664efe' }
              : { border: '1px solid #d8d8d8', background: 'none' }
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            onClick={() => {
              if (pageNumber < students?.last_page) {
                setPageNumber((prevState) => prevState + 1)
              }
            }}
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="#d8d8d8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      {/* )} */}
    </>
  )
}

export default StudentDataTable
