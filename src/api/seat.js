import SeatService from "../services/seatservice";

export const GetSeat = async train => {
  try {
    const response = await SeatService.getSeat(train);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "좌석 현황 조회 실패");
  }
};

export const PatchStation = async (train, id, station, user) => {
  try {
    const response = await ProposalService.patchStation(
      train,
      id,
      station,
      user,
    );
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error, "내릴역 공유 실패");
  }
};
