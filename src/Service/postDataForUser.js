// Faire une requete Post avec le JWT dans le header en authorisation
// Si réponse 200, on a un objet :
// {
//     "status": 200,
//     "message": "Successfully got user profile data",
//     "body": {
//         "email": "tony@stark.com",
//         "firstName": "Tony",
//         "lastName": "Stark",
//         "createdAt": "2024-06-05T11:51:22.745Z",
//         "updatedAt": "2024-06-05T11:51:22.745Z",
//         "id": "6660513a1a58a26070313b2c"
//     }
// }
import axios from "axios";

export const postDataForUser = async (token) => {

    try {
        const response = await axios.post('http://127.0.0.1:3001/api/v1/user/profile', {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }

        });

        return { firstName: response.data.body.firstName, lastName: response.data.body.lastName }
    } catch (error) {
        console.log('Error posting data:', error);
    }

    //  "tony@stark.com", "password123"
}