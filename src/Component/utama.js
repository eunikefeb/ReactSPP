import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Beranda from './beranda';
import Siswa from './siswa'; 
import Kelas from './kelas';
import Spp from './spp';
import Petugas from './petugas';
import Transaksi from './transaksi';
import History from './history';
import Logout from './logout';

const Utama = () => (
    <Routes>
        <Route exact path= "/" element={<Beranda/>} />
        <Route path="/siswa" element={<Siswa/>} />
        <Route path="/kelas" element={<Kelas/>} />
        <Route path="/spp" element={<Spp/>} />
        <Route path="/petugas" element={<Petugas/>} />
        <Route path="/transaksi" element={<Transaksi/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/logout" element={<Logout/>} />
    </Routes>
)

export default Utama;