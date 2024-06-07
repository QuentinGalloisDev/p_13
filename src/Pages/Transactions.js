import React, { useState } from 'react';
import { AccountUser } from '../Components/AccountUser'
import { postDataForProfile } from '../Service/EditName'

export const Transactions = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => setIsVisible(!isVisible);

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');

    const handlefirstnameChange = (event) => {
        setfirstname(event.target.value);
    };

    const handlelastnameChange = (event) => {
        setlastname(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postDataForProfile(firstname, lastname);
        // Redirection vers la page signIn après la soumission
        // window.location.href = '/signIn';
    };

    return (
        <main className='main bg-light'>
            <div className="header">
                <h1>Welcome back <br /><span className='userName'>Tony Jarvis!</span> </h1>
                <button onClick={handleClick} className={isVisible ? 'edit-button' : 'edit-button-hided'}>Edit Name</button>

            </div>

            <form className={isVisible ? 'editUserNameFormHided' : 'editUserNameForm'}>
                <div className='userNameInput'>
                    <div className='firstNameInput'>
                        <label>FirstName</label>
                        <input id='firstname' type='text' className={isVisible ? 'edit-input-hided' : 'edit-input'} value={firstname}
                            onChange={handlefirstnameChange}></input>
                    </div>
                    <div className='lastNameInput'>
                        <label>LastName</label>
                        <input id='lastname' type='text' className={isVisible ? 'edit-input-hided' : 'edit-input'} value={lastname}
                            onChange={handlelastnameChange}></input>
                    </div>
                </div>

                <div className='buttons'>
                    <button onClick={handleSubmit}>Save</button>
                    <button onClick={handleClick}>Cancel</button>
                </div>

            </form>

            <h2 className="sr-only">Accounts</h2>
            <AccountUser title="Argent Bank Checking (x8349)" amount='$2,082.79' description='Available Balance' />
            <AccountUser title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <AccountUser title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
    )
}
