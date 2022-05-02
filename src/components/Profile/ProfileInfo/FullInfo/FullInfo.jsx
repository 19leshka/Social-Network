import s from './FullInfo.module.css';

const FullInfo = ({lookingForAJob, lookingForAJobDescription, contacts}) => {
    let isHaveContacts = false;
    const isLookingForAJob = (lookingForAJob === null ? false : true);
    const isLookingForAJobDescription = (lookingForAJobDescription === null ? false : true);
    for (let prop in contacts) {
        if(contacts[prop] != null) {
            isHaveContacts = true;
            break;
        }
    }

    return (
        <div className={s.fullInfo}>
            {(!isHaveContacts && !isLookingForAJob && !isLookingForAJobDescription) 
                ? <div className={s.noFullInfo}>
                    We have no information :(
                </div>
                : null
            }
            {(isLookingForAJob || isLookingForAJobDescription)
                ? <div className={s.lookingFor}>
                    <h3>FullInfo</h3>
                    {lookingForAJob != null
                        ? <div className={s.lookingForAJob}>
                            <span>Looking for a job: </span>
                            <span>{lookingForAJob ? "Yes" : "No"}</span>
                        </div>
                        : null
                    }
                    {lookingForAJobDescription != null
                        ? <div className={s.lookingForAJobDescription}>
                            <span>Looking for a job description: </span>
                            <span>{lookingForAJobDescription ? "Yes" : "No"}</span>
                        </div>
                        : null
                    }
                </div>
                : null
            }
            {isHaveContacts
                ? <div className={s.contacts}>
                    <h3>Contacts</h3>
                    {contacts.github != null
                        ? <div className={s.github}>
                            <span>Github: </span>
                            <span>{contacts.github}</span>
                        </div>
                        : null
                    }
                    {contacts.vk != null
                        ? <div className={s.vk}>
                            <span>Vk: </span>    
                            <span>{contacts.vk}</span>
                        </div>
                        : null    
                    }
                    {contacts.facebook != null
                        ? <div className={s.facebook}>
                            <span>Facebook: </span>
                            <span>{contacts.facebook}</span>
                        </div>
                        : null
                    }
                    {contacts.instagram != null
                        ? <div className={s.instagram}>
                            <span>Instagram: </span>
                            <span>{contacts.instagram}</span>
                        </div>
                        : null
                    }
                    {contacts.twitter != null
                        ? <div className={s.twitter}>
                            <span>Twitter: </span>
                            <span>{contacts.twitter}</span>
                        </div>
                        : null
                    }
                    {contacts.website != null
                        ? <div className={s.website}>
                            <span>Website: </span>
                            <span>{contacts.website}</span>
                        </div>
                        : null
                    }
                    {contacts.youtube != null
                        ? <div className={s.youtube}>
                            <span>Youtube: </span>
                            <span>{contacts.youtube}</span>
                        </div>
                        : null    
                    }
                    {contacts.mainLink != null
                        ? <div className={s.mainLink}>
                            <span>Main link: </span>
                            <span>{contacts.mainLink}</span>
                        </div>
                        : null
                    }
                </div>
                : null
            }
        </div>
    )
}

export default FullInfo;