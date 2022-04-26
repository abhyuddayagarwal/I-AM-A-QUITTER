var firebaseConfig = {
      apiKey: "AIzaSyBvx2KouPvXNt91o3hPUr16VAmTkrc9vLg",
      authDomain: "kwitter-758e8.firebaseapp.com",
      databaseURL: "https://kwitter-758e8-default-rtdb.firebaseio.com",
      projectId: "kwitter-758e8",
      storageBucket: "kwitter-758e8.appspot.com",
      messagingSenderId: "974822231529",
      appId: "1:974822231529:web:193fa54517525b51620f78"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
