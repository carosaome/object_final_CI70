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

    console.log(querySnapshot.docs[0].id)
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
        fullname,
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

  let id = Math.random().toString() + '_' + String(new Date().getTime());


  db.collection("products").add({
    id: id,
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

}
function getProducts() {
  db.collection("products")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        if (querySnapshot.docs.length === 0) {
          return null;
        }

        console.log(doc.id, " => ", doc.data());
        return {
          id: querySnapshot.docs[0].id,
          ...querySnapshot.docs[0].data(),            // convert data
        };
      });

    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      _noti.error(errorCode, errorMessage);
    });;
}
//*           ADDTOCARTOLD
// async function addProductsToCart(uid, name, price, amout, img, id) {
//   let email = localStorage.getItem('emailLogined')
//   try {
//     const response = await db.collection("cart")
//     .add({
//          id,
//         name,
//         price,
//         amout,
//         img,
//         emailUser: email

//     });
//     console.log(response);
//   } catch (error) {
//     let errorCode = error.code;
//     let errorMessage = error.message;
//     console.log(errorCode, errorMessage);
//     throw error;
//   }
// }


//******** ADTOCART NEW */
// function addProductsToCart(uid, name, price, amout, img, id) {
//   let email = localStorage.getItem('emailLogined')
//   const cart = db.collection("cart")
//   .where("userEmail", "==", 'email')
//   .get();
//   if (cart.docs.length === 0) {
//     console.log(cart);
// Update
// cart.get()
//   .then((querySnapshot) => {
//     console.log(querySnapshot);



// const indexExistItem = querySnapshot.docs.items.findIndex((item) => item.id === id); // 2

// const newItems = cart.items;
// if (indexExistItem > -1) {
//   cart.items[indexExistItem].amount =
//     cart.items[indexExistItem].amount + amount;
// } else {
//   newItems.push({
//     name, price, amout, img, id
//   });
// }

// let newCart = {
//   ...cart,
//   items: newItems,
// };

// db.collection("carts").doc(cart.id).update(newCart);


// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots

//   if (querySnapshot.docs.length === 0) {
//     return null;
//   }

//   console.log(doc.id, " => ", doc.data());
//   return {
//     id: querySnapshot.docs[0].id,
//     ...querySnapshot.docs[0].data(),            // convert data
//   };
// });

// })

//   } else {
//     // create
//   db.collection("cart").add({
//     userEmail: email,
//     items: [
//       {
//         name, price, amout, img, id
//       },
//     ],
//   });
// }
// }


async function addProductsToCart(uid, name, price, amout, img, id) {
  const email = localStorage.getItem('emailLogined')
  try {
    const querySnapshot = await db
      .collection("cart")
      .where("userEmail", "==", email) /// condition
      .get();

    if (querySnapshot.docs.length === 0) {
      db.collection("cart").add({
        userEmail: email,
        items: [
          {
            name, price, amout, img, id
          },
        ],
      });
    }
    else {
      console.log(querySnapshot.docs[0].id)
      const cart = querySnapshot.docs[0].data()
      const indexExistItem = querySnapshot.docs[0].data().items.findIndex((item) => item.id === id); // 2
      const newItems = cart.items;
      if (indexExistItem > -1) {
        cart.items[indexExistItem].amout =
          cart.items[indexExistItem].amout + amout;
      } else {
        newItems.push({
          name, price, amout, img, id
        });
      }
      let newCart = {
        ...cart,
        items: newItems,
      };

      db.collection("cart").doc(querySnapshot.docs[0].id).update(newCart);
    }

  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode, errorMessage);
    _noti.error(errorCode, errorMessage);
    throw error;
  }


}


async function deleteProductInCart(id) {
  const email = localStorage.getItem('emailLogined')
  try {
    const querySnapshot = await db
      .collection("cart")
      .where("userEmail", "==", email) /// condition
      .get();


    console.log(querySnapshot.docs[0].id)
    const cart = querySnapshot.docs[0].data()
    const indexExistItem = querySnapshot.docs[0].data().items.findIndex((item) => item.id === id); // 2


    cart.items.splice(indexExistItem, 1)
    const newItems = cart.items;

    let newCart = {
      ...cart,
      items: newItems,
    };

    db.collection("cart").doc(querySnapshot.docs[0].id).update(newCart);


  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode, errorMessage);
    _noti.error(errorCode, errorMessage);
    throw error;
  }
}

async function addProductInCart(id) {
  const email = localStorage.getItem('emailLogined')
  try {
    const querySnapshot = await db
      .collection("cart")
      .where("userEmail", "==", email) /// condition
      .get();


    console.log(querySnapshot.docs[0].id)
    const cart = querySnapshot.docs[0].data()
    const indexExistItem = querySnapshot.docs[0].data().items.findIndex((item) => item.id === id); // 2
    
    cart.items[indexExistItem].amout =
    cart.items[indexExistItem].amout + 1;
    const newItems = cart.items;

    let newCart = {
      ...cart,
      items: newItems,
    };

    db.collection("cart").doc(querySnapshot.docs[0].id).update(newCart);


  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode, errorMessage);
    _noti.error(errorCode, errorMessage);
    throw error;
  }


}
async function subProductInCart(id) {
  const email = localStorage.getItem('emailLogined')
  try {
    const querySnapshot = await db
      .collection("cart")
      .where("userEmail", "==", email) /// condition
      .get();


    console.log(querySnapshot.docs[0].id)
    const cart = querySnapshot.docs[0].data()
    const indexExistItem = querySnapshot.docs[0].data().items.findIndex((item) => item.id === id); // 2
    
    cart.items[indexExistItem].amout =
    cart.items[indexExistItem].amout - 1;
    const newItems = cart.items;

    let newCart = {
      ...cart,
      items: newItems,
    };

    db.collection("cart").doc(querySnapshot.docs[0].id).update(newCart);


  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode, errorMessage);
    _noti.error(errorCode, errorMessage);
    throw error;
  }


}
export { createUser, getUserByEmail, updateUser,
        createProduct, getProducts, addProductsToCart,
        deleteProductInCart, addProductInCart, subProductInCart }