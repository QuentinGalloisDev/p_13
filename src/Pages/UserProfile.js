import React, { useState, useEffect } from 'react';
import { AccountUser } from '../Components/AccountUser'
import { postDataForEditName } from '../Service/EditName'
import { HelloUser } from '../Components/HelloUser';
import { useSelector, useDispatch } from 'react-redux'
import { setUserFirstName, setUserLastName } from '../test_redux_toolkit/dataUserSlice';
import { useNavigate } from 'react-router-dom'

export const UserProfile = () => {
    const token = useSelector((state) => state.dataUser.token)
    const navigate = useNavigate();

    const dispatch = useDispatch()
    useEffect(() => {
        if (!token) {
            navigate('/error');
        }
    }, [token, navigate]);


    const handleSetUserFirstName = (userFirstName) => {
        dispatch(setUserFirstName(userFirstName))
    }
    const handleSetUserLastName = (userLastName) => {
        dispatch(setUserLastName(userLastName))
    }
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => setIsVisible(!isVisible);

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');

    function onlyLetters(str) {
        // Regex to detect anything other than letters
        const regex = /[^a-zA-ZéèçÀàù^']/;
        // Return false if the regex matches (indicating presence of non-letter characters)
        return !regex.test(str);
    }

    const handlefirstnameChange = (event) => {
        setfirstname(event.target.value);
    };

    const handlelastnameChange = (event) => {
        setlastname(event.target.value);
    };

    const handleSubmit = async (event) => {
        // post the new lastname & firstname & update the copmo that shows the names (banner and helloUser)
        event.preventDefault();
        let result = null
        if (onlyLetters(firstname) && onlyLetters(lastname)) {
            result = await postDataForEditName(firstname, lastname, token);
        }
        else {
            result = null
        }
        if (result) {
            // Store the data in redux
            handleSetUserFirstName(result.firstName)
            handleSetUserLastName(result.lastName)
        }
    };
    //Hide the input form on click
    const handleCancel = (event) => {
        event.preventDefault();
        setIsVisible(true);
    };

    return (
        <main className='main bg-light'>
            <div className="header">
                <HelloUser />
                <button onClick={handleClick} className={isVisible ? 'edit-button' : 'edit-button-hided'}>Edit Name</button>
            </div>
            <form className={isVisible ? 'editUserNameFormHided' : 'editUserNameForm'}>
                <div className='userNameInput'>
                    <div className='firstNameInput'>
                        <label>FirstName</label>
                        <input id='firstname' type='text' className={isVisible ? 'edit-input-hided' : 'edit-input'} value={firstname}
                            onChange={handlefirstnameChange}></input>
                        <span className={onlyLetters(firstname) ? 'error_message_input_hided' : 'error_message_input'}>firstname unauthorized</span>
                    </div>
                    <div className='lastNameInput'>
                        <label>LastName</label>
                        <input id='lastname' type='text' className={isVisible ? 'edit-input-hided' : 'edit-input'} value={lastname}
                            onChange={handlelastnameChange}></input>
                        <span className={onlyLetters(lastname) ? 'error_message_input_hided' : 'error_message_input'}>lastname unauthorized</span>
                    </div>
                </div>

                <div className='buttons'>
                    <button onClick={handleSubmit}>Save</button>
                    <button onClick={handleCancel} className={isVisible ? 'edit-input-hided' : 'edit-input'}>Cancel</button>
                </div>
            </form>
            <h2 className="sr-only">Accounts</h2>
            <AccountUser title="Argent Bank Checking (x8349)" amount='$2,082.79' description='Available Balance' />
            <AccountUser title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <AccountUser title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
    )
}
