import React from 'react'
import { axiosClient } from '../../libraries/axiosClient'

function List() {
    //useEffect: khi component mới đc tạo ra và gắn vào component cha:
    React.useEffect(() => {
        axiosClient.get("/employee").then((response) => {
            console.log(response.data);
        });
    }, []);
  return (
    <div>List</div>
  )
}

export default List