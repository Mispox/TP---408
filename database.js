// 1. Importaciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// 2. Tu Configuración de Firebase
// *** ADVERTENCIA DE SEGURIDAD: Reemplaza estos valores con variables de entorno en producción ***
const firebaseConfig = {
  apiKey: "BIuywec3ze1PKL3SK073tPi_UxZg7rR8IyBBAWvLnJnWSKEIfkGGC6uP3FlkYcJZkq_K7E_1xWYcFL7Jr2vEz6I", // ¡REEMPLAZA ESTO!
  authDomain: "tp-js-48675.firebaseapp.com",
  projectId: "tp-js-48675",
  storageBucket: "tp-js-48675.appspot.com",
  messagingSenderId: "930594601481",
  appId: "TU_APP_ID", // ¡REEMPLAZA ESTO!
  databaseURL: "https://tp-js-48675-default-rtdb.firebaseio.com" // Importante para Realtime Database
};

// 3. Inicializa Firebase y obtén la instancia de la base de datos
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// 4. Función para leer datos de la base de datos
function leerDatosDeEjemplo() {
  // Define la referencia al nodo que quieres leer (por ejemplo, 'messages/welcome')
  const messagesRef = ref(database, 'messages/welcome');

  console.log("Escuchando cambios en:", messagesRef.toString());
  
  // onValue() establece un listener que se dispara inmediatamente
  // y luego cada vez que los datos en esa ubicación cambian.
  onValue(messagesRef, (snapshot) => {
    // snapshot.val() contiene los datos del nodo
    const data = snapshot.val(); 
    
    // Si los datos existen, los imprime en la consola
    if (data) {
        console.log("✅ Datos recibidos con éxito:", data);
    } else {
        console.log("⚠️ No hay datos en la ruta especificada (messages/welcome).");
    }
  }, (error) => {
    // Manejo de errores
    console.error("❌ Error al leer los datos:", error);
  });
}

// 5. Ejecuta la función para empezar a escuchar los datos
leerDatosDeEjemplo();

// OPCIONAL: Si necesitas usar la instancia de la DB en otro lugar, la podrías exportar
// export { database }; 

// Nota: Si usas este archivo como el punto de entrada (entry point) 
// de tu aplicación y no necesitas exportar nada, puedes omitir la línea "export".