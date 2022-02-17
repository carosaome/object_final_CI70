import db from "./index.js"
import * as _noti from "../common/notify.js"
function createUser(email, fullname, phone, address) {

  db.collection("users").add({
    email,
    fullname,
    phone,
    address
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      _noti.error(errorCode, errorMessage);
    });
}
async function getUserByEmail(email) {
  try {
    const querySnapshot = await db
      .collection("users")
      .where("email", "==", email) /// condition
      .get();

    if (querySnapshot.docs.length === 0) {
      return null;
    }

    return {
      id: querySnapshot.docs[0].id,
      ...querySnapshot.docs[0].data(),            // convert data
    };
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode, errorMessage);
    _noti.error(errorCode, errorMessage);
    throw error;
  }
}
async function updateUser(uid, email, fullname, phone, address) {
  try {
    const response = await db.collection("users").doc(uid).update({
      email,
      fullname,
      phone,
      address,
    });
    localStorage.removeItem("auth-info");
    localStorage.setItem(
      "auth-info",
      JSON.stringify({
        email,
        name,
        phone,
        address,
      })
    );
    _noti.success('Sucess', 'Update succesfully')
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode, errorMessage);
    throw error;
  }
}

function createProduct(fullname, price, urlImg) {

  db.collection("products").add({
    fullname,
    price,
    urlImg
  })
    .then((docRef) => {
      _noti.success('Sucess', 'Create succesfully')
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      _noti.error(errorCode, errorMessage);
    });

  function getProducts() {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots

          if (querySnapshot.docs.length === 0) {
            return null;
          }

          return {
            id: querySnapshot.docs[0].id,
            ...querySnapshot.docs[0].data(),            // convert data
          };
          console.log(doc.id, " => ", doc.data());
        });

      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        _noti.error(errorCode, errorMessage);
      });;
  }
}

export { createUser, getUserByEmail, updateUser, createProduct }