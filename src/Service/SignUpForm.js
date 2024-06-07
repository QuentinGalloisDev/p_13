// On a 4 champ: email, password, firstName et LastName.
// On prend la valeur des input pour créer un objet :
// {
//   "email": "string",
//   "password": "string",
//   "firstName": "string",
//   "lastName": "string"
// }

// Si on a une réponse positive :
// {
//     "status": 200,
//     "message": "User successfully created",
//     "body": {
//         "_id": "66617bfd0058fe47a89a5d33",
//         "email": "quentin@yahoo.com",
//         "password": "$2b$12$QcHcB3rodJ/XtPSZnOSlYOb68SuNpMtJdu1X3qOo6ROnPE.vDE.he",
//         "firstName": "Quentin",
//         "lastName": "Gallois",
//         "createdAt": "2024-06-06T09:06:05.371Z",
//         "updatedAt": "2024-06-06T09:06:05.371Z",
//         "__v": 0
//     }
// }
// On affiche le message de l'objet dans le dom

// Si on à une erreur 400 : {"status": 400,"message": "Error: Email already exists"}
// on affiche dans le dom le message d'erreur.

// NB: Dans le back on peux créer un utilisateur ave les même nom et prénom si le mail est différent.