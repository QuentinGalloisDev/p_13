export const postDataForSignIn = (username, password) => {
    // Envoyer les données de connexion
    let dataSignIn = { "email": username, "password": password }
    console.log(dataSignIn)
    // window.location.href = '/user';

    // Faire une requete post avec un objet au format : {"email": "firstname@lastname.com", "password": "password123"}

    // Si Renvoie un objet {"status": 400,"message": "Error: Password is invalid"} ou {"status": 400,"message": "Error: User not found!"}
    // Afficher le message d'erreur dans le dom sous l'input(trouvé l'input adéquat en recherchant le mot Passwors ou user avec une regex).

    // Si requete valide :
    // {
    //     "status": 200,
    //     "message": "User successfully logged in",
    //     "body": {
    //         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjA1MTNhMWE1OGEyNjA3MDMxM2IyYiIsImlhdCI6MTcxNzY2Mjc2OCwiZXhwIjoxNzE3NzQ5MTY4fQ.TqB-f95n1Kejxcf7WwerIBDDWOpqGgfvLlKkbyIKuL0"
    //     }
    // }
    // stocker le token dans redux et rediriger vers la page transactions de l'utilisateur.

}