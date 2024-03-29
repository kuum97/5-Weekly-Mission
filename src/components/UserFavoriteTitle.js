import Avatar from "./Avatar";

function UserFavoriteTitle({ userData }) {
  const { profileImageSource, name } = userData;

  return (
    <div>
      <Avatar src={profileImageSource} />
      <div>@{name}</div> {/* 유저네임 api */}
      <div>⭐️즐겨찾기</div>
    </div>
  );
}

export default UserFavoriteTitle;
