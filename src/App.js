import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const rawData = [
  { name: "Fatir", age: 24, city: "Gujranwala", movie: "Godzilla VS King Kong" },
  { name: "Sikander", age: 23, city: "Layyeh", movie: "Jackie Chan" },
  { name: "Umer", age: 22, city: "Kanganpur", movie: "Dark" },
  { name: "Alam", age: 26, city: "Lahore", movie: "Lucy" },
  { name: "Shaheryar", age: 23, city: "faislabad", movie: "jurassic world" },
  { name: "Haris", age: 22, city: "Hafizabad", movie: "Mission Impossible" },
  { name: "Arham", age: 21, city: "Gakhar", movie: "Haunted" },
  { name: "Ibrahim", age: 19, city: "Islamabad", movie: "Fast & Furious" },
  { name: "Waleed", age: 20, city: "Kashmir", movie: "Resident Evil" },
  { name: "Bilal", age: 25, city: "Karachi", movie: "Evil dead" },
]

function App() {
  const [currentPage, setCurrentPage] = useState(1) //for pagination
  const [data, setData] = useState(rawData)

  console.log("data is", data)
  const postPerPage = 3
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentItems = data.slice(indexOfFirstPost, indexOfLastPost)
  const paginationLength = Math.ceil(data.length / postPerPage)



  const handleChange = (event, value) => {
    setCurrentPage(value)
  };
  return (
    <div>


      <table width='100%'>
        <tr>
          <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }} >Name</th>
          <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Age</th>
          <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>City</th>
          <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Movie</th>
        </tr>
        {
          currentItems.map((value, index) => {
            return (
              <tr key={index}>
                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                  {value.name}
                </td>
                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                  {value.age}
                </td>
                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                  {value.city}
                </td>
                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>
                  {value.movie}
                </td>
              </tr>
            )
          })
        }
      </table>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
        <Stack spacing={2}>
          <Pagination count={paginationLength} siblingCount={0} onChange={handleChange} variant="outlined" color="success" />
        </Stack>
      </div>
    </div >
  );
}

export default App;
