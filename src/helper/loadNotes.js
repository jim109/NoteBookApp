import { db } from "../firebase/firebaseConfig"
import { collection, query, getDocs } from "@firebase/firestore";

export const loadNotes = async ( uid ) =>{

   const noteSnap =  await getDocs(query( collection(db, `${ uid }/journal/notes`)));
   const notes = [];

   noteSnap.forEach( snapHijo =>{
       
       notes.push({
           id:snapHijo.id,
           ...snapHijo.data()
       })
   })

   return notes;
} 