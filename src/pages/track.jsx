import React from "react";
import MainLayout from "../components/templates/Main";
import { Link } from "react-router-dom";
import InputForm from "../components/molecules/InputForm";
import Button from "../components/atoms/Button";


export default function TrackPage() {
    // state for data
return(
<MainLayout title={"Track"}>
<form>
<InputForm label="Kode Barang" type="text" name="Kode Barang" placeholder="Masukkan Kode" size="w-40" />
<div className="text-center">
<Button color="bg-blue-600" text="text-white" size="w-[200px]"> 
          Cari Barang
        </Button>
</div>
</form>
</MainLayout>
);
}