function Card({ title, description }) {
    const styles = {
        CardResult: {
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
          color: '#000',
          margin: '20px',
        },
      };
    return (
        <div style={styles.CardResult}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  export default Card;