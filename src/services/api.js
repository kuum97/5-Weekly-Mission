var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "https://bootcamp-api.codeit.kr/api";
export function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/sample/user`);
        const user = yield response.json();
        if (!response.ok) {
            throw new Error("잘못된 요청입니다.");
        }
        return user;
    });
}
export function getFolder() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/sample/folder`);
        const data = yield response.json();
        const { folder } = data;
        if (!response.ok) {
            throw new Error("잘못된 요청입니다.");
        }
        return folder;
    });
}
export function getUserById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/users/${userId}`);
        const user = yield response.json();
        const { data } = user;
        if (!response.ok) {
            throw new Error("잘못된 요청입니다.");
        }
        return data[0];
    });
}
export function getFoldersByUserId(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/users/${userId}/folders`);
        const folders = yield response.json();
        const { data } = folders;
        if (!response.ok) {
            throw new Error("잘못된 요청입니다.");
        }
        return data;
    });
}
export function getLinksByUserIdAndFolderId(userId, folderId) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = `${BASE_URL}/users/${userId}/links`;
        if (folderId) {
            url += `?folderId=${folderId}`;
        }
        const response = yield fetch(url);
        const links = yield response.json();
        const { data } = links;
        if (!response.ok) {
            throw new Error("잘못된 요청입니다.");
        }
        return data;
    });
}
