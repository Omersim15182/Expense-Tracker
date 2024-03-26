import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
export default function History() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/showData');
                setData(response.data);
                setLoading(false);
                console.log(response.data);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
        return () => {
        };
    }, []);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;
    return (
         <div>
      <h1>My Data </h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <table className="table">
      <thead className="thead-dark">
        <tr>
        
          <th >product </th>
          <th >amount</th>
          <th >balance</th>
          <th >income</th>
          <th >expense</th>

        </tr>
      </thead>
      <tbody>
      {data.map(item => (
          <tr key={item.id}>
            <td >{item.product}</td>
            <td >{item.amount}</td>
            <td>{item.balance}</td>
            <td >{item.income}</td>
            <td >{item.expense}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    )
}
