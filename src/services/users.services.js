import dbConnect from './firebase';



export const getUserServices = async (data) => {

    let docRef = dbConnect.collection("users");
    let query = docRef
        .where("email", "==", data.email)
        .where("password", "==", data.password); 
    let output = {};
    let dataResult = [];
    // query.limit(50)
    await query
      .get()
      .then (querySnapshot => {
        querySnapshot.docs.map((documentSnapshot)=> {
            return ([output[documentSnapshot.id] = documentSnapshot.data()]);
          });
            let data = [];
            Object.entries(output).forEach(doc => {
                data.push({
                    id: doc[0],
                    ...doc[1],
                    created:new Date(doc[1].created['seconds']*1000)
                });
            });

            dataResult = data[0];
        
        }).catch((error)=> {
            dataResult = { error: error }
        });

        return dataResult;

};

export const setUserServices = async (data) => {
    let id='';
    let docRef = await dbConnect.collection("users")
        .add({
            email: data.email,
            password: data.password,
            created: new Date()
        })
        .then( (docRef) => {
            id = docRef.id;
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
            id = 0;
        });

    return id;
};

export default {
	getUserServices,
	setUserServices,
};