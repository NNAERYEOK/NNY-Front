import UserService from "./services/userservice";

// 로그인
export const GetUser = async (email, password) => {
  try {
    const response = await UserService.getUser(email, password);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "유저 정보 조회 실패");
  }
};
// 회원가입
export const PostUser = async (id, password, username) => {
  try {
    const response = await UserService.postUser(id, password, username);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "회원가입 실패");
  }
};
// 회원가입(닉네임)
export const PatchUserName = async username => {
  try {
    const response = await UserService.patchUserName(username);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "닉네임 수정 실패");
  }
};

export const GetWarningHistory = async user => {
  try {
    const response = await UserService.getWarningHistory(user);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "경고 내역 조회 실패");
  }
};

export const PatchEye = async user => {
  try {
    const response = await UserService.patchEye(user);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "eye 정보 업데이트 실패");
  }
};

export const PostWarning = async (user, station) => {
  try {
    const response = await UserService.postWarning(user, station);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "경고 주기 실패");
  }
};

export const PatchUserInfo = async (user, station) => {
  try {
    const response = await UserService.patchUserInfo(
      user,
      id,
      password,
      nickname,
    );
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "유저 정보 업데이트 실패");
  }
};
