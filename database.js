// 1. Importaciones necesarias de Firebase v9+ (modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// 2. Configuración de Firebase (tomada de auth/firebase.js para consistencia)
const firebaseConfig = {
    apiKey: "AIzaSyC2BSFYZBvIF7cxUr7xUvZKmlhg0ACk504",
    authDomain: "tp-js-48675.firebaseapp.com",
    projectId: "tp-js-48675",
    storageBucket: "tp-js-48675.firebasestorage.app",
    messagingSenderId: "930594601481",
    appId: "1:930594601481:web:d67813a0ffdd977144d6d8",
    measurementId: "G-GN0C2S2GSS"
};

// 3. Inicializar Firebase y Firestore
let app;
let db;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Conexión a Firestore establecida con éxito.");
} catch (error) {
    console.error("Error al inicializar Firebase o Firestore:", error);
}


// 4. EJEMPLO DE UNA FUNCIÓN SIMPLE PARA OBTENER DATOS (adaptada a v9+)
async function obtenerDatos() {
    // Asegurarnos de que la base de datos esté inicializada
    if (!db) {
        console.error("Firestore no está inicializado. No se pueden obtener datos.");
        return;
    }

    try {
        // La referencia al documento ahora se crea así:
        const docRef = doc(db, "usuarios", "perfil-ejemplo");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Datos del documento:", docSnap.data());
        } else {
            console.log("¡No existe ese documento!");
        }
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

// Llama a la función para probar la conexión
// Descomenta la siguiente línea si quieres que se ejecute al cargar el script
// obtenerDatos();

// 5. Exportar la instancia de la base de datos para usarla en otros archivos
export { db };
