export default function Button({ children, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={styles.btn}>
      {children}
    </a>
  );
}

const styles = {
  btn: {
    background: "#2563EB",
    color: "#ffffff",
    padding: "14px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-block"
  }
};

