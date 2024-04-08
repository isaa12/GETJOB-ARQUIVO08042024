  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getDatabase, ref, set, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCZ3Tmsc5ZunVDl6_JKNvtJYgLgp4xHFmI",
    authDomain: "getjob-0704.firebaseapp.com",
    databaseURL: "https://getjob-0704-default-rtdb.firebaseio.com",
    projectId: "getjob-0704",
    storageBucket: "getjob-0704.appspot.com",
    messagingSenderId: "355212167322",
    appId: "1:355212167322:web:a9dfc821d804a5590f3723",
    measurementId: "G-VZ01L01XVT"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e) {

    set(ref(db, 'username/' + document.getElementById("username").value),
    {
      username: document.getElementById("username").value,
      biography: document.getElementById("biography").value,
      area: document.getElementById("area").value

    })
    alert("profile sucessfull!" );
  })
