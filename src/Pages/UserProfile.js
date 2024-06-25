import React, { useState } from 'react';
import { AccountUser } from '../Components/AccountUser'
import { postDataForEditName } from '../Service/EditName'
import { HelloUser } from '../Components/HelloUser';
import { useSelector, useDispatch } from 'react-redux'
import { setUserFirstName, setUserLastName } from '../test_redux_toolkit/dataUserSlice';

export const UserProfile = () => {
    const token = useSelector((state) => state.dataUser.token)
    const dispatch = useDispatch()

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

    const handlefirstnameChange = (event) => {
        setfirstname(event.target.value);
    };

    const handlelastnameChange = (event) => {
        setlastname(event.target.value);
    };

    const handleSubmit = async (event) => {
        // poste les nouveaux noms et prénoms et actualise les composants qui affiche les noms (banner et helloUser)
        event.preventDefault();
        const result = await postDataForEditName(firstname, lastname, token);

        if (result) {
            // Stocker le nom dans redux et rediriger vers la page user.
            handleSetUserFirstName(result.firstName)
            handleSetUserLastName(result.lastName)
            // Mise à jour de l'état pour l'utilisateur connecté
        }
    };
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
                    </div>
                    <div className='lastNameInput'>
                        <label>LastName</label>
                        <input id='lastname' type='text' className={isVisible ? 'edit-input-hided' : 'edit-input'} value={lastname}
                            onChange={handlelastnameChange}></input>
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
