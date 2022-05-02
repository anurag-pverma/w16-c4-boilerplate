import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      <Link  style={{ margin: "10px 10px", color:"blue"}} to="/">Home</Link>
      <Link  style={{ margin: "10px 10px", color:"blue"}} to="/about">About</Link>
      <Link  style={{ margin: "10px 10px", color:"blue"}} to="/products">Products</Link>
      <Link style={{ margin: "10px 10px", color:"blue"}} to="/CategoryCard">CardCategory</Link>
    </nav>
  );
};
