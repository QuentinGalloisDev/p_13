import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postDataForUser } from '../Service/UserProfile';
import { setUserFirstName, setUserLastName } from '../test_redux_toolkit/counterSlice';

export const HelloUser = () => {

    const token = useSelector((state) => state.counter.token)
    const userFirstName = useSelector((state) => state.counter.firstName)
    const userLastName = useSelector((state) => state.counter.lastName)
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
                // Mise à jour de l'état pour l'utilisateur connecté
            }
        }
        if (token) {
            userName();
        }
    }, [token])

    return (
        <div>
            <h1>Welcome back <br /><span className='userName'>{userFirstName} {userLastName}!</span> </h1>
        </div>
    )
}
