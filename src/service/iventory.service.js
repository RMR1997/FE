//mengimpor modul axios untuk manipulasi API
import axios from "axios"
//import modul axios

//bikin function get/fetch yg akan diexport/panggil/pake
export const login = (callback) => {
    axios
    .get ("http://localhost:3006/login") //pake method get buat ngambil data di API
    .then((res) => { //mengirimkan response data jika sukses
        console.log(res);
        callback(res.data);
    })
    .catch((err) => {
    //nampilin error jika tidak benar
        console.log(err);
    });
};

export const register = (callback) => {
    axios
    .get ("http://localhost:3006/register") //pake method get buat ngambil data di API
    .then((res) => { //mengirimkan response data jika sukses
        console.log(res);
        callback(res.data);
    })
    .catch((err) => {
    //nampilin error jika tidak benar
        console.log(err);
    });
};

//bikin function get/fetch yg akan diexport/panggil/pake
export const getAllItems = (callback) => {
    axios
    .get ("http://localhost:3006/get") //pake method get buat ngambil data di API
    .then((res) => { //mengirimkan response data jika sukses
        console.log(res);
        callback(res.data);
    })
    .catch((err) => {
    //nampilin error jika tidak benar
        console.log(err);
    });
};

export const editItem = (id, callback) => {
    axios
    .put (`http://localhost:3006/update/${id}`) //pake method get buat ngambil data di API
    .then((res) => { //mengirimkan response data jika sukses
        console.log(res);
        callback(res.data);
    })
    .catch((err) => {
    //nampilin error jika tidak benar
        console.log(err);
    });
};

export const getItemById = (id, callback) => {
    axios
    .get (`http://localhost:3006/get/${id}`) //pake method get buat ngambil data di API
    .then((res) => { //mengirimkan response data jika sukses
        console.log(res);
        callback(res.data);
    })
    .catch((err) => {
    //nampilin error jika tidak benar
        console.log(err);
    });
};

export const getCategory = (callback) => {
    axios
    .get (`http://localhost:3006/getCategory`) //pake method get buat ngambil data di API
    .then((res) => { //mengirimkan response data jika sukses
        console.log(res);
        callback(res.data);
    })
    .catch((err) => {
    //nampilin error jika tidak benar
        console.log(err);
    });
};


export const getOwnership = (callback) => {
    axios
    .get (`http://localhost:3006/getOwnership`) //pake method get buat ngambil data di API
    .then((res) => { //mengirimkan response data jika sukses
        console.log(res);
        callback(res.data);
    })
    .catch((err) => {
    //nampilin error jika tidak benar
        console.log(err);
    });
};

export const getLocation = (callback) => {
    axios
    .get (`http://localhost:3006/getLocation`) //pake method get buat ngambil data di API
    .then((res) => { //mengirimkan response data jika sukses
        console.log(res);
        callback(res.data);
    })
    .catch((err) => {
    //nampilin error jika tidak benar
        console.log(err);
    });
};



export const deleteItem = (id, callback) => {
    axios
    .get (`http://localhost:3006/delete/${id}`) //pake method get buat ngambil data di API
    .then((res) => { //mengirimkan response data jika sukses
        console.log(res);
        callback(res.data);
    })
    .catch((err) => {
    //nampilin error jika tidak benar
        console.log(err);
    });
};
