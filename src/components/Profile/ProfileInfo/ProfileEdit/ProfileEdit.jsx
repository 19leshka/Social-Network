import s from './ProfileEdit.module.css';
import { useFormik } from 'formik';


const ProfileEdit = (props) => {
    const initialValues = {
        aboutMe: props.status ? props.status : "",
        userId: props.userId,
        lookingForAJob: (props.lookingForAJob === null ? false : props.lookingForAJob),
        lookingForAJobDescription: (props.lookingForAJobDescription === null ? false : props.lookingForAJobDescription),
        fullName: props.fullName,
        contacts: {
            github: props.contacts.github,
            vk: props.contacts.vk,
            facebook: props.contacts.facebook,
            instagram: props.contacts.instagram,
            twitter: props.contacts.twitter,
            website: props.contacts.website,
            youtube: props.contacts.youtube,
            mainLink: props.contacts.mainLink
        }
    }

    const onSubmit = (value) => {
        let formData = value;
        props.saveFullInfo(formData);
    }

    const formik = useFormik({
        initialValues,
        onSubmit
    });
    console.log(formik.values.contacts)
    const onProfilePhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.background}>
            <div onClick={() => props.setEditMode(false)} className={s.exitBtn}>X</div>
            <div className={s.editFormWrapper}>
                <div className={s.changePhoto}>
                    <div>Change Photo:</div>
                    <input type="file" onChange={onProfilePhotoSelected}/>
                </div>
                    <form className={s.editForm} onSubmit={formik.handleSubmit}>
                        <div className={s.fullInfoInputs}>
                            <h4>Full Info: </h4>
                            <div>
                                <label>Looking for a job: </label>
                                <input type="checkbox" name="lookingForAJob" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lookingForAJob}/>
                            </div>
                            <div>
                                <label>Looking for a job description: </label>
                                <input type="checkbox" name="lookingForAJobDescription" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lookingForAJobDescription}/>
                            </div>
                            <div> 
                                <label>Status: </label>
                                <input type="text" name="aboutMe" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.aboutMe}/>
                            </div>
                            <div>
                                <label>Full Name: </label>
                                <input type="text" name="fullName" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fullName}/>
                            </div>
                        </div>
                        <div className={s.contactsInputs}>
                            <h4>Contacts:</h4>
                            <div>
                                <label>Github: </label>
                                <input type="text" name="contacts.github" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.contacts.github}/>
                            </div>
                            <div>
                                <label>Vk: </label>
                                <input type="text" name="contacts.vk" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.contacts.vk}/>
                            </div>
                            <div>
                                <label>Facebook: </label>
                                <input type="text" name="contacts.facebook" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.contacts.facebook}/>
                            </div>
                            <div>
                                <label>Instagram: </label>
                                <input type="text" name="contacts.instagram" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.contacts.instagram}/>
                            </div>
                            <div>
                                <label>Twitter: </label>
                                <input type="text" name="contacts.twitter" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.contacts.twitter}/>
                            </div>
                            <div>
                                <label>Website: </label>
                                <input type="text" name="contacts.website" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.contacts.website}/>
                            </div>
                            <div>
                                <label>Youtube: </label>
                                <input type="text" name="contacts.youtube" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.contacts.youtube}/>
                            </div>
                            <div>
                                <label>Main link: </label>
                                <input type="text" name="contacts.mainLink" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.contacts.mainLink}/>
                            </div>
                        </div>
                        <button className={s.submitBtn} type="submit">Save</button>
                    </form>

            </div>
        </div>
    )
}

export default ProfileEdit;