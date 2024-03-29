function FavoriteLinkCard() {
  return (
    <div>
      <img src="#" alt="cardImage" /> {/* "/api/sample/folder" 이미지 */}
      <div>
        <div>10 minutes ago</div> {/* "/api/sample/folder" createdAt */}
        <div>description</div> {/* "/api/sample/folder" description */}
        <div>2023. 3. 15</div> {/* "/api/sample/folder" createdAt */}
      </div>
    </div>
  );
}

function FavoriteLinkCards() {
  return (
    <ul>
      <li>
        <FavoriteLinkCard />
      </li>
    </ul>
  );
}

export default FavoriteLinkCards;
