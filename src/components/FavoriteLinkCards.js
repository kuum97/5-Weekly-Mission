function FavoriteLinkCard({ link }) {
  const { url, createdAt, description, imageSource } = link;

  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={imageSource} alt="cardImage" />
      </a>
      <div>
        <div></div>
        <div>{description}</div>
        <div>{createdAt}</div>
      </div>
    </div>
  );
}

function FavoriteLinkCards({ folderData }) {
  const { links } = folderData;

  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <FavoriteLinkCard link={link} />
        </li>
      ))}
    </ul>
  );
}

export default FavoriteLinkCards;
