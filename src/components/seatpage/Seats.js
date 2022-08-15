import Seat from "./Seat";
import { seatpixel } from "../../data/seatpixel";
const Seats = ({ seats, share, SelectSeat, selectedId, clickWarning, id }) => {
  const now = 2; // 현 위치

  return (
    <div>
      {seats.map(seat => {
        if (share) {
          // 내 자리 공유 할 때
          if (seat.user === id || seat.id === selectedId) {
            // 내 자리
            return (
              <Seat
                key={seat.id}
                left={seatpixel[seat.id - 1].left}
                top={seatpixel[seat.id - 1].top}
                myseat
              />
            );
          } else {
            if (seat.is_seated) {
              // 누가 앉음
              return (
                <Seat
                  key={seat.id}
                  left={seatpixel[seat.id - 1].left}
                  top={seatpixel[seat.id - 1].top}
                  onClick={() => clickWarning(seat.user, seat.station)}
                  seated
                >
                  {now - seat.station}
                </Seat>
              );
            }
          }
          return (
            <Seat
              onClick={() => SelectSeat(seat.id)}
              key={seat.id}
              left={seatpixel[seat.id - 1].left}
              top={seatpixel[seat.id - 1].top}
            />
          );
        } else {
          //조회만 할 때
          if (seat.user === id) {
            return (
              <Seat
                key={seat.id}
                left={seatpixel[seat.id - 1].left}
                top={seatpixel[seat.id - 1].top}
                myseat
              />
            );
          } else {
            if (seat.is_seated) {
              // 누가 앉음
              return (
                <Seat
                  key={seat.id}
                  left={seatpixel[seat.id - 1].left}
                  top={seatpixel[seat.id - 1].top}
                  onClick={() => clickWarning(seat.user, seat.station)}
                  seated
                >
                  {now - seat.station}
                </Seat>
              );
            }
          }
          return (
            <Seat
              key={seat.id}
              left={seatpixel[seat.id - 1].left}
              top={seatpixel[seat.id - 1].top}
            />
          );
        }
      })}
    </div>
  );
};

export default Seats;
