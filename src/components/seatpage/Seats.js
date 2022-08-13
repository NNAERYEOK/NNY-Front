import Seat from "./Seat";
const Seats = ({ seats, share, SelectSeat, clickWarning }) => {
  const now = 2; // 현 위치
  return (
    <div>
      {seats.map(seat => {
        if (share) {
          // 내 자리 공유 할 때
          if (seat.mine) {
            return (
              <Seat key={seat.id} left={seat.left} top={seat.top} myseat />
            );
          } else {
            if (seat.seated) {
              // 누가 앉음
              return (
                <Seat
                  key={seat.id}
                  left={seat.left}
                  top={seat.top}
                  onClick={() => clickWarning(seat.id, seat.station)}
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
              left={seat.left}
              top={seat.top}
            />
          );
        } else {
          //조회만 할 때
          if (seat.mine) {
            return (
              <Seat key={seat.id} left={seat.left} top={seat.top} myseat />
            );
          } else {
            if (seat.seated) {
              // 누가 앉음
              return (
                <Seat
                  key={seat.id}
                  left={seat.left}
                  top={seat.top}
                  onClick={() => clickWarning(seat.id, seat.station)}
                  seated
                >
                  {now - seat.station}
                </Seat>
              );
            }
          }
          return <Seat key={seat.id} left={seat.left} top={seat.top} />;
        }
      })}
    </div>
  );
};

export default Seats;
