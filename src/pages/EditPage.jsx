import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { editItem, getItemById } from '../service/iventory.service';
import axios from 'axios';



export default function EditPage() {

  const { id } = useParams();
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [ownershipId, setOwnershipId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [qty, setQty] = useState("");
  const [status, setStatus] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
 
  
  const updateUser = async (id) => {
    try {
      const reqdata = { 
        namabarang : itemName,
        kategori: categoryId,
        kepemilikan : ownershipId,
        lokasi: locationId,
        stock: qty,
        status: status,
        tanggalbeli: purchaseDate 
      }
        await axios.put(`http://localhost:3006/update/${id}`, reqdata);
        window.location.href="/edit"
        // navigate("/");
    } catch (error) {
        console.log(error);
    }
};

  useEffect(() => {
    getItemById(id, (data) => {
      console.log(getItemById);
      setItemId(data.data);
    });
  }, [id]);
  console.log(itemId);

  useEffect(() => {
    setItemName(itemId.itemName)
    setCategoryId(itemId.categoryId)
    setOwnershipId(itemId.ownershipId)
    setLocationId(itemId.locationId)
    setQty(itemId.qty)
    setStatus(itemId.status)
    setPurchaseDate(itemId.purchaseDate)
  },[itemId])


  return (
    <div className="flex flex-col justify-center w-full h-full p-20">
      <form onSubmit={(e) => { 
        e.preventDefault()
        updateUser(data.id)
      }}
      >
        <div className="flex flex-col justify-center items-center w-full px-44 space-y-8">
          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="itemName" className="text-md font-semibold text-gray-700">NAMA BARANG :</label>
            <input type="text" id="itemName" name="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} required
              className="py-2 px-4 rounded-md bg-gray-100"></input>
          </div>

          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="umur" className="text-md font-semibold text-gray-700">KATEGORI </label>
            <input type="text" id="umur" name="umur" value={umur} onChange={(e) => setUmur(e.target.value)} required
              className="py-2 px-4 rounded-md bg-gray-100"></input>
          </div>

          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="tempatlahir" className="text-md font-semibold text-gray-700">Tempat Lahir:</label>
            <input type="tempatlahir" id="tempatlahir" name="tempatlahir" value={tempatlahir} onChange={(e) => setTempatLahir(e.target.value)} required
              className="py-2 px-4 rounded-md bg-gray-100"></input>
          </div>
            
          <div className="flex flex-col w-full space-y-2">
                            <label htmlFor="noHp" className="text-md font-semibold text-gray-700">No Telp:</label>
                            <input type="noHp" id="noHp" name="noHp" value={noHp} onChange={(e) => setNoHp(e.target.value)} required
                                className="py-2 px-4 rounded-md bg-gray-100"></input>
                        </div>
                        <button type="submit"
                            className="bg-gray-900 text-lg font-semibold text-gray-100 px-4 py-2 rounded-md w-1/2">
                            UPDATE DATA
                        </button>
        </div>
      </form>

    </div>

  )
}