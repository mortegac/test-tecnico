import dbConnect from './firebase';



export const getPostServices = async () => {

    let docRef = dbConnect.collection("posts");
    let query = docRef

    let output = {};
    let dataResult = [];
    // query.limit(50)
    await query
        // .onSnapshot(snapshot => {

        //     let dataRealTime = [];
        //     // snapshot.forEach(function(doc) {
        //     snapshot.docChanges().forEach((change)=> {
        //         console.log('**snapshot**', change);
        //         // cities.push(change.doc.data());

        //         dataRealTime.push({
        //             id: change.doc.data().id,
        //             title: change.doc.data().title,
        //             message: change.doc.data().message,
        //             date: change.doc.data().date,
        //             });
        //     });

        //     console.log("Current cities in CA: ", JSON.stringify(dataRealTime) );
        //     dataResult = dataRealTime;
        // })
        

      .get()
      .then (querySnapshot => {
        querySnapshot.docs.map((documentSnapshot)=> {
            return ([output[documentSnapshot.id] = documentSnapshot.data()]);
          });
        const data = [];
        Object.entries(output).forEach(doc => {
            // const { date, title, message } = doc;
            data.push({
            id: doc[0],
            ...doc[1],
            date:new Date(doc[1].date['seconds']*1000)
            });
        });



        dataResult = data;
        
        }).catch((error)=> {
            dataResult = { error: error }
        });

        return dataResult;

};


export default {
	getPostServices,
};