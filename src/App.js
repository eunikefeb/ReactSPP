import React from 'react';
import Utama from'./Component/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div> <hr />
          <Link to="/"> Beranda</Link> |<Link to="/siswa"> Data Siswa</Link> | 
          <Link to="/petugas"> Data Petugas</Link> | 
          <Link to="/kelas"> Data Kelas</Link> | 
          <Link to="/transaksi"> Transaksi</Link> |
          <Link to="/spp"> Data SPP</Link> | 
          <Link to="/histori"> Histori Pembayaran</Link> |
          <Link to="/logout"> Logout</Link>
      <p><Utama /></p>
      </div>
    );
  }
}

export default App; 