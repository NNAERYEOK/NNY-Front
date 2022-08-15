import http from "../http";

const SeatService = {
  // 좌석 정보 조회
  getSeat: train_id => http.get(`/nny/trains/${train_id}`),

  // 내릴역 공유 (어느 지하철, 어느 자리에, 누가, 내릴역)
  patchStation: (user_id, seat_id, station) =>
    http.patch(`/nny/seats/${seat_id}`, {
      user: user_id,
      is_seated: "true",
      station: station,
    }),
};

export default SeatService;
