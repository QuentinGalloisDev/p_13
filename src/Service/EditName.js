export const postDataForProfile = (firstname, lastname) => {
    let dataEditName = { "firstname": firstname, "lastname": lastname }
    console.log(dataEditName)

    // Quand l'utilisateur clique sur le boutton class="edit-button" , le nom disparait et 2 input apparaissent pour les nom et prénom.
    // Récupérer le contenu de ces input et les mettre dans un objet.

    // Faire une requete Put, au clic sur le boutton save,avec dans le header le JWT Bearer et un objet : {"firstName": "string","lastName": "string"}
    // Si réponse positive :
    // {
    //     "status": 0,
    //     "message": "string",
    //     "body": {
    //       "id": "string",
    //       "email": "string"
    //     }
    //   }
    // alors on affiche un message provisoire dans le dom qui indique que les noms ont bien été changés, on enlève les input et on affiche le nouveau nom
    // Donc le composant qui affiche le nom doit être abonné au redux qui contient le nom pour se mettre à jour dés que le nom change.



    // Si l'utilisateur clique sur le boutton cancel, les input disparraissent et le nom réaparait.

    //
}