import { useHunter } from "../context/HunterContext.jsx";
import { monsterImageStyle, capitalize } from "../utils/helpers.js";

export default function MonsterCard({ monster }) {
  const { isFavorite, isWishlist, isDefeated, dispatch } = useHunter();
  const id = monster.id;
  const favorite = isFavorite(id);
  const wishlist = isWishlist(id);
  const defeated = isDefeated(id);

  return (
    <article className="monster-card">
      <div className="monster-card-image" style={monsterImageStyle(monster)}>
        <span className="monster-card-type">{monster.type}</span>
      </div>

      <div className="monster-card-body">
        <h3 className="monster-card-title">{monster.name}</h3>
        <p className="monster-card-species">
          {capitalize(monster.species)}
          {defeated && <span className="monster-tag defeated">Defeated</span>}
        </p>
        {monster.elements?.length > 0 && (
          <div className="tag-row">
            {monster.elements.slice(0, 4).map((element) => (
              <span key={element} className="tag">
                {element}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="monster-card-actions">
        <button
          type="button"
          className={`action-btn ${favorite ? "action-btn-on" : ""}`}
          onClick={() => dispatch({ type: "TOGGLE_FAVORITE", payload: monster })}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          title={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          {favorite ? "Favorited" : "Favorite"}
        </button>
        <button
          type="button"
          className={`action-btn ${wishlist ? "action-btn-on" : ""}`}
          onClick={() => dispatch({ type: "TOGGLE_WISHLIST", payload: monster })}
          aria-label={wishlist ? "Remove from wishlist" : "Add to wishlist"}
          title={wishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          {wishlist ? "Wishlisted" : "Wishlist"}
        </button>
      </div>
    </article>
  );
}
