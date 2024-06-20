import axios from "axios";
export const postDataForSignIn = async (username, password) => {
    // Envoyer les données de connexion
    let dataSignIn = { "email": username, "password": password }
    console.log(dataSignIn)

    // Faire une requete post avec un objet au format : {"email": "firstname@lastname.com", "password": "password123"}
    try {
        // Si requete valide :
        // {
        //     "status": 200,
        //     "message": "User successfully logged in",
        //     "body": {
        //         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjA1MTNhMWE1OGEyNjA3MDMxM2IyYiIsImlhdCI6MTcxNzY2Mjc2OCwiZXhwIjoxNzE3NzQ5MTY4fQ.TqB-f95n1Kejxcf7WwerIBDDWOpqGgfvLlKkbyIKuL0"
        //     }
        // }
        // stocker le token dans redux et rediriger vers la page transactions de l'utilisateur.

        const response = await axios.post('http://127.0.0.1:3001/api/v1/user/login', {

            "email": username,
            "password": password

        });
        console.log('Data posted successfully:', response.data.body.token);
        return { token: response.data.body.token } // Renvoie le token de la réponse
        // Si le token est présent dans redux redirigé vers la page user
    } catch (error) {
        // Si Renvoie un objet {"status": 400,"message": "Error: Password is invalid"} ou {"status": 400,"message": "Error: User not found!"}
        // Afficher le message d'erreur dans le dom sous le formulaire
        return { error: error.response.data.message }
        // console.log('Error posting data:', error.response.data.message);

    }

    //  "tony@stark.com", "password123"
}