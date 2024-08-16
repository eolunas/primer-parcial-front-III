import { useState } from 'react'
import './App.css'
import Card from './Card';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del primer input
    if (title.length < 3 || title.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta: Input Titulo');
      return;
    }

    // Validación del segundo input
    if (description.length < 6) {
      setError('Por favor chequea que la información sea correcta: Input Descripción');
      return;
    }

    // Si pasa las validaciones, se borra el error y se indica que se envió el formulario
    setError('');
    setSubmitted(true);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      marginTop: '50px',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
    },
    formCard: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
    },
    form: {
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'column',
    },
    inputGroup: {
      margin: '15px',
      width: '100%',
    },
    label: {
      marginBottom: '10px',
      color: '#555555',
      fontWeight: 'bold',
    },
    input: {
      margin: '10px',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: '200px',
      backgroundColor: '#5d5e6d',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      width: '300px',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    error: {
      color: 'red',
      marginTop: '10px',
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
      marginTop: '20px',
      textAlign: 'center',
    },
  };

  return (
     <div style={styles.container}>
      <h1 style={styles.heading}>Formulario de Libros</h1>
      <div style={styles.formCard}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="title" style={styles.label}>Título:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="description" style={styles.label}>Descripción:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Enviar</button>
          {error && <p style={styles.error}>{error}</p>}
        </form>
      </div>

      {submitted && !error && (
        <Card title={title} description={description} />
      )}
    </div>
  )
}

export default App
