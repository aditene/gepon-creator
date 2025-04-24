# 📘 Documentație GEPON Creator

**GEPON Creator** este o aplicație desktop pentru configurarea și monitorizarea rețelelor de tip GEPON, destinată furnizorilor de servicii de comunicații și proiectanților de rețele optice.

---

## 🔧 Tehnologii utilizate

- **Electron.js** – pentru dezvoltarea aplicației desktop
- **React.js** – interfață grafică modernă și reactivă
- **HTML / CSS / JavaScript** – componentele de bază ale UI
- **Node.js** – pentru partea de backend și gestionare fișiere locale

---

## 🧱 Arhitectura proiectului

gepon-creator/ │ ├── electron/ # Procesele Electron (main.js etc.) ├── react-ui/ # Interfața React (componente, pagini) ├── public/ # Fișiere statice și assets ├── package.json # Configurații npm ├── LICENSE # Licență MIT ├── CONTRIBUTING.md # Ghid pentru contribuții └── docs/README.md # Documentația tehnică

yaml
Copy
Edit

---

## ▶️ Instrucțiuni de rulare (mod dezvoltare)

1. Clonează repository-ul:
   ```bash
   git clone https://github.com/aditene/gepon-creator.git
   cd gepon-creator
Instalează pachetele necesare:

bash
Copy
Edit
npm install
Rulează aplicația:

bash
Copy
Edit
npm start
🔒 Securitate
Aplicația este destinată pentru utilizare locală, cu accent pe controlul fizic al configurării rețelelor. Pentru implementări comerciale, se recomandă integrarea cu protocoale de autentificare și criptare avansată.

📩 Suport
Pentru sugestii, întrebări sau contribuții, deschide un Issue sau trimite un Pull Request în repository.
