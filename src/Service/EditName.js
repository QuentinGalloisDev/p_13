import axios from "axios";

export const postDataForEditName = async (firstname, lastname, token) => {

    try {
        const response = await axios.put('http://127.0.0.1:3001/api/v1/user/profile', {
            "firstName": firstname, "lastName": lastname
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }

        });
        return { firstName: response.data.body.firstName, lastName: response.data.body.lastName }
    } catch (error) {
        console.log('Error posting data:', error);
    }
}