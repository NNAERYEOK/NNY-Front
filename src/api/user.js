import UserService from "./services/userservice";

// 프로필 조회
export const GetProfile = async () => {
  try {
    const response = await UserService.getProfile();
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "프로필 조회 실패");
  }
};

// 로그인
export const GetUser = async (email, password) => {
  try {
    const response = await UserService.getUser(email, password);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "로그인 실패");
  }
};

// 로그아웃
export const GetLogout = async (email, password) => {
  try {
    const response = await UserService.getLogout(email, password);
    window.localStorage.removeItem("token"); // 토큰 삭제
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "로그아웃 실패");
  }
};

// 회원가입
export const PostUser = async (email, password) => {
  try {
    const response = await UserService.postUser(email, password);
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

// 경고 주기
export const PostWarning = async (id, created_at, station) => {
  try {
    const response = await UserService.postWarning(id, created_at, station);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "경고 주기 실패");
  }
};

// eye 사용 히스토리 업데이트
export const PostUsedEye = async (id, created_at, amount) => {
  try {
    const response = await UserService.postUsedEye(id, created_at, amount);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "eye 사용 히스토리 업뎃 실패");
  }
};

// eye 충전 히스토리 업데이트
export const PostAddEye = async (id, created_at, amount) => {
  try {
    const response = await UserService.postAddEye(id, created_at, amount);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "eye 충전 히스토리 업뎃 실패");
  }
};

// 현재 총 eye 개수 업데이트
export const PatchCurrentEye = async eye => {
  try {
    const response = await UserService.patchCurrentEye(eye);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "현재 eye 개수 업뎃 실패");
  }
};

// 경고 history 조회
export const GetWarningHistory = async () => {
  try {
    const response = await UserService.getWarningHistory();
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "경고 내역 조회 실패");
  }
};

// ********이 아래론 작업 안됨 ********

export const PatchEye = async user => {
  try {
    const response = await UserService.patchEye(user);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "eye 정보 업데이트 실패");
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
