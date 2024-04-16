import Button from '../../../Components/Button/Button'
import classes from './SubmissionGuide.module.css'

const SubmissionGuide = () => {
    return (
        <div className={classes.container}>
            <div>
                <svg onClick={() => { window.history.back() }} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M1 1L13 13" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className={classes.content}>
                <div className={classes.header}>
                    <h2>Guide for submitting your course for review</h2>
                    <p>Congratulations on completing your course curriculum! You're one step closer to sharing your knowledge and expertise with students.</p>
                </div>

                <div className={classes.body}>
                    <div>
                        <h4>Ready to submit?</h4>
                        <p>Great! Click the big black "Submit All for Review" button on your "curriculum page". It's hard to miss; it looks like this:</p>
                    </div>
                    <div>
                        <h4>What next?</h4>
                        <p>Our dedicated course review team will receive your submission and thoroughly review each piece of content. We'll check for clarity, accuracy, engagement, and alignment with platform guidelines.</p>
                    </div>
                    <div>
                        <h4>Review timeline</h4>
                        <p>We aim to complete course reviews within [Insert typical review timeframe] days. You'll receive an email notification as soon as the review is finished.</p>
                    </div>
                    <div>
                        <h4>While you wait</h4>
                        <p>Take a well-deserved break! You've done a fantastic job creating this course.</p>
                    </div>
                    <div>
                        <h4>Feedback and revisions</h4>
                        <p>If any minor adjustments are needed, we'll provide detailed feedback and clear instructions for revision. You can easily make these changes directly within your dashboard.</p>
                    </div>
                    <div>
                        <h4>Major revisions</h4>
                        <p>In rare cases, if the review team identifies significant areas needing improvement, we'll schedule a call with you to discuss the feedback and next steps.</p>
                    </div>
                    <div>
                        <h4>Review your curriculum</h4>
                        <p>Ensure all modules, weeks and lessons are complete and well-structured. Check for any missing elements or typographical errors.</p>
                    </div>
                    <div>
                        <h4>Making edits</h4>
                        <p>Once you submit, you can't make edits. We'll send you feedback, if any, then you can edit your submission. Take time to craft your curriculum carefully before submitting.</p>
                    </div>
                    <div>
                        <h4>Final approval</h4>
                        <p>You'll receive a final approval notification once you've addressed any feedback and the course meets all quality standards. </p>
                    </div>
                </div>
            </div>

            <Button onClick={() => { window.history.back() }}>Close</Button>
        </div>
    )
}

export default SubmissionGuide