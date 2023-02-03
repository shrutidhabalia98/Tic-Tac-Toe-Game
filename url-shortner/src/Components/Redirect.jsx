import React from 'react'
import { db } from '../firebase'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Redirect() {

    const {code} = useParams();

    useEffect(() => {
        let query =db.collection('urls').where('code', '==', code)
        query.onSnapshot((data) => {
            let finalData = data.docs[0].data();
            window.location.replace(finalData.url);
        })
    }, [code])
    
  return (
    <div>
      
    </div>
  )
}

export default Redirect

