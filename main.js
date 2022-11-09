import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQhhlOHgx7VY93t5PxC-EIONRhKsZcnpg",
  authDomain: "homefirebase-cfedf.firebaseapp.com",
  projectId: "homefirebase-cfedf",
  storageBucket: "homefirebase-cfedf.appspot.com",
  messagingSenderId: "3990707349",
  appId: "1:3990707349:web:f8980e9eb028606f6d4f9c",
};

// const pcCountElement = document.getElementById("pcCount");
// const pcDetailsElement = document.getElementById("pcDetails");
const tableDataElement = document.getElementById("dataTable");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let X;

async function getDevices(db, X) {
  const DevicesCol = collection(db, `${X}`);
  const DevicesSnapshot = await getDocs(DevicesCol);
  const DevicesList = DevicesSnapshot.docs.map((doc) => doc.data());
  return DevicesList;
}

await getDevices(db, "Devices").then((data) => {
  console.log(data);
  for (var i = 0; i < Object.keys(data).length; i++) {
    
    tableDataElement.innerHTML += `
      <tr>
        <td>${data[i].PcDetails}</td>
        <td>${data[i].PcCount}</td>
      
      </tr>
    `;
  }
});

// setDoc(doc(db, "Devices", "33"), {
//   PcDetails: "Device 1",
//   PcCount: 30,
// });

// setDoc(doc(db, "Devices", "9324"), {
//   PcDetails: "JavaScrip",
//   PcCount: 303,
// });

await getDoc(doc(db, "Devices", "4")).then((doc) => {
  if (doc.exists()) {
    console.log("Document data:", doc.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
});

//Update Table
