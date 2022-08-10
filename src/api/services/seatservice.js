import http from "../http";

const SeatService = {
  // 좌석 정보 조회
  getSeat: train => http.get("~/train"),

  // 내릴역 공유 (어느 지하철, 어느 자리에, 누가, 내릴역)
  patchStation: (train, id, station, user) =>
    http.patch("~~~~/share", {
      train: train,
      id: id,
      station: station,
      user: user,
    }),
};

export default SeatService;
