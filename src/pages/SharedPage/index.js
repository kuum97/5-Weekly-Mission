import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "../../global.css";
import useAsync from "../../services/useAsync";
import { getFolder, getUser } from "../../services/api";
import Header from "../../globalComponents/Header";
import UserProfileAndTitle from "./components/UserProfileAndTitle";
import SharedLinkCards from "./components/SharedLinkCards/SharedLinkCards";
import Footer from "../../globalComponents/Footer";
function SharedPage() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const { value: userProfileData, isLoading: isLoadingUser, error: userError, } = useAsync(getUser);
    const { value: folderData, isLoading: isLoadingFolders, error: foldersError, } = useAsync(getFolder);
    useEffect(() => {
        if (!isLoadingUser && userProfileData) {
            setIsUserLoggedIn(true);
        }
    }, [isLoadingUser, userProfileData]);
    if (isLoadingUser || isLoadingFolders) {
        return _jsx("div", { children: "Loading..." });
    }
    if (userError || foldersError) {
        return _jsx("div", { children: "Error loading data." });
    }
    return (_jsxs(_Fragment, { children: [_jsx(Header, { userAvatarImage: userProfileData.profileImageSource, userProfileEmail: userProfileData.email, userLogInSuccess: isUserLoggedIn }), isUserLoggedIn ? (_jsx(UserProfileAndTitle, { userName: userProfileData.name, folderName: folderData.name, folderImage: folderData.owner.profileImageSource })) : (_jsx("div", { children: "\uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694." })), isUserLoggedIn ? (_jsx(SharedLinkCards, { links: folderData.links })) : (_jsx("div", { children: "\uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694." })), _jsx(Footer, {})] }));
}
export default SharedPage;
