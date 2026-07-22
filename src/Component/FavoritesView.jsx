import { useContext } from "react";
import { favContext } from "../context/favoritesContext";
import useMealById from "../CustomHook/useMealById";
import { Link } from "react-router-dom";

function FavoriteMeal({ id, onRemove }) {
  const { meal, loading, error } = useMealById(id);

  if (loading) return <li>Loading...</li>;
  if (error) return <li>Error loading meal</li>;
  if (!meal) return null;

  return (
    <li
      style={{
        cursor: "pointer",
        padding: "10px",
        borderBottom: "1px solid #ddd",
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to={`/meal/${meal.idMeal}`}>{meal.strCategory} - {meal.strMeal}</Link>
      <button
        onClick={() => onRemove(id)}
        style={{
          background: "none",
          border: "none",
          color: "red",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Remove from Favorites
      </button>
    </li>
  );
}

function FavoritesView() {
  const { favorites, setFavorites } = useContext(favContext);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((favId) => favId !== id));
  };

  return (
    <div
      style={{
        textAlign: "left",
        padding: "20px",
      }}
    >
        <Link to="/">← Back to Home</Link>

      <h1>My Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorites added.</p>
      ) : (
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
          }}
        >
          {favorites.map((id) => (
            <FavoriteMeal key={id} id={id} onRemove={removeFavorite} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesView;
