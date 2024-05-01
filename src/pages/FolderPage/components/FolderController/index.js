import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAsync from "../../../../services/useAsync";
import { getLinksByUserIdAndFolderId } from "../../../../services/api";
import styles from "./FoldersController.module.css";
import SearchBar from "../../../../globalComponents/SearchBar";
import FoldersList from "../FoldersList";
import FolderLinkCards from "../FolderLinkCards";
function FoldersController({ folders, userId }) {
    const [loading, setLoading] = useState(true);
    const [selectedFolderName, setSelectedFolderName] = useState("전체");
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedFolderId = searchParams.get("folderId");
    const { value: links, isLoading, error, } = useAsync(getLinksByUserIdAndFolderId, userId, selectedFolderId);
    const handleClick = (e, folderId) => {
        const selectedFolder = e.target.textContent;
        const newSearchParams = new URLSearchParams(searchParams);
        if (folderId) {
            newSearchParams.set("folderId", folderId);
        }
        else {
            newSearchParams.delete("folderId");
        }
        setSelectedFolderName(selectedFolder);
        setSearchParams(newSearchParams);
    };
    useEffect(() => {
        if (!isLoading && links) {
            setLoading(false);
        }
    }, [isLoading, links]);
    return (_jsxs("section", Object.assign({ className: styles.container }, { children: [_jsx(SearchBar, {}), loading ? (_jsx("div", { children: "Loading..." })) : error ? (_jsx("div", { children: "Error loading data." })) : (_jsxs(_Fragment, { children: [_jsx(FoldersList, { handleClick: handleClick, folders: folders, selectedFolderName: selectedFolderName, selectedFolderId: selectedFolderId }), _jsx(FolderLinkCards, { links: links })] }))] })));
}
export default FoldersController;
