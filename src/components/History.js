import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/Table.css';

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
    return () => {};
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='body-table'>
    <section className='section-table'>
      <h1 className='h1-table'>Expense Tracker</h1>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th className="th">product</th>
              <th className="th">amount</th>
              <th className="th">balance</th>
              <th className="th">income</th>
              <th className="th">expense</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            {data &&
              data.map((item) => (
                <tr key={item.id}>
                  <td className="td">{item.product}</td>
                  <td className="td">{item.amount}</td>
                  <td className="td">{item.balance}</td>
                  <td className="td">{item.income}</td>
                  <td className="td">{item.expense}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
    </div>
  );
}
