import classes from './AddLessonResourcesOptional.module.css'
import DropdownWithSearch from '../DropdownWithSearch/DropdownWithSearch'
import Input from '../Input/Input'

const AddLessonResourcesOptional = () => {
    return (
        <div className={classes.addResources}>
            <h3>Add resources to this lesson (optional)</h3>
            <p>Share relevant documents that provide additional context or support for the lesson.</p>
            <DropdownWithSearch
                label="Resource type"
                title="Select the type of resources you want to add"
                options={[]}
            />
            <Input
                label='Resource URL'
                placeholder='Enter the URL of the external resource'
            />
        </div>
    )
}

export default AddLessonResourcesOptional