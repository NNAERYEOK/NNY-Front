import SeatService from "./services/seatservice";

export const GetSeat = async train_id => {
  try {
    const response = await SeatService.getSeat(train_id);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "좌석 현황 조회 실패");
  }
};

export const PatchStation = async (user_id, seat_id, station) => {
  try {
    const response = await ProposalService.patchStation(
      seat_id,
      user_id,
      station,
    );
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "내릴역 공유 실패");
  }
};
