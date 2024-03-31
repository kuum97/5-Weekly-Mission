import Avatar from "./Avatar";

function UserFavoriteTitle({ userProfileData, folderData }) {
  const { profileImageSource, name } = userProfileData;

  return (
    <div>
      <Avatar src={profileImageSource} />
      <div>@{name}</div>
      <div>{folderData.name}</div>
    </div>
  );
}

export default UserFavoriteTitle;
