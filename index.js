import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const tableData = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",        
    "phone": "1-770-736-8031",
    "website": "hildegard.org"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Athan@yes.net",
    "phone": "010-692-6593",
    "website": "anastasia.net"    
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447",
    "website": "ramiro.info"
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",    
    "phone": "493-170-9623",
    "website": "kale.biz"
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",    
    "phone": "(254)954-1289",
    "website": "demarco.info"
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "phone": "1-477-935-8478",
    "website": "ola.org"
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",   
    "phone": "210.067.6132",
    "website": "elvis.io"
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",   
    "phone": "586.493.6943",
    "website": "ambrose.net" 
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",    
    "phone": "(775)976-6794",
    "website": "conrad.com"
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",    
    "phone": "024-648-3804",
    "website": "ambrose.net"
  }
]
class App extends Component{
  render(){
    const tblStyle ={
      borderCollapse: 'collapse'
    }
    const tdStyle ={
      padding: '5px'
    }
    return(
      <>
      <h1>Table with Internal JSON Data</h1>
      <table border="1" width="100%" cellspacing="0" cellpadding="0" style={tblStyle}>
        {
          tableData.map(
            item => 
            <tr>
              <td style={tdStyle}>{ item.id }</td>
              <td style={tdStyle}>{ item.name }</td>
              <td style={tdStyle}>{ item.username }</td>
              <td style={tdStyle}>{ item.email }</td>
              <td style={tdStyle}>{ item.phone }</td>
              <td style={tdStyle}>{ item.website }</td>
            </tr>
          )
        }    
      </table>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))