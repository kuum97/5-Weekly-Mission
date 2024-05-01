import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import useAsync from "../../services/useAsync";
import { getFoldersByUserId, getUserById } from "../../services/api";
import Header from "../../globalComponents/Header";
import LinkAddForm from "./components/LinkAddForm";
import FoldersController from "./components/FolderController";
import Footer from "../../globalComponents/Footer";
const SAMPLE_USER_ID = 1;
function FolderPage() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const { value: userProfileData, isLoading: isLoadingUser, error: userError, } = useAsync(getUserById, SAMPLE_USER_ID);
    const { value: foldersData, isLoading: isLoadingFolders, error: foldersError, } = useAsync(getFoldersByUserId, SAMPLE_USER_ID);
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
    return (_jsxs(_Fragment, { children: [_jsx(Header, { userAvatarImage: userProfileData.image_source, userProfileEmail: userProfileData.email, userLogInSuccess: isUserLoggedIn }), isUserLoggedIn ? (_jsxs(_Fragment, { children: [_jsx(LinkAddForm, {}), _jsx(FoldersController, { folders: foldersData, userId: SAMPLE_USER_ID })] })) : (_jsx("div", { children: "\uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694." })), _jsx(Footer, {})] }));
}
export default FolderPage;
