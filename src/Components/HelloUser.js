import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postDataForUser } from '../Service/postDataForUser';
import { setUserFirstName, setUserLastName } from '../redux_toolkit/dataUserSlice';

export const HelloUser = () => {

    const token = useSelector((state) => state.dataUser.token)
    const userFirstName = useSelector((state) => state.dataUser.firstName)
    const userLastName = useSelector((state) => state.dataUser.lastName)
    const dispatch = useDispatch()

    const handleSetUserFirstName = (userFirstName) => {
        dispatch(setUserFirstName(userFirstName))
    }
    const handleSetUserLastName = (userLastName) => {
        dispatch(setUserLastName(userLastName))
    }

    useEffect(() => {
        const userName = async () => {
            const result = await postDataForUser(token)

            if (result) {
                // Stocker le nom dans redux et rediriger vers la page user.
                handleSetUserFirstName(result.firstName)
                handleSetUserLastName(result.lastName)
            }
        }
        if (token) {
            userName();
        }
    },)

    return (
        <div>
            <h1>Welcome back <br /><span className='userName'>{userFirstName} {userLastName}!</span> </h1>
        </div>
    )
}
