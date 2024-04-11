import { rest } from "msw";
import { readFakeData } from "../fakeData";
import { fakeUserReservations } from "../fakeData/userReservations";

export const handlers = [
  rest.get("http://localhost:3000/api/shows/:showId", async (req, res, ctx) => {
    const { fakeShows } = await readFakeData();
    return res(ctx.json({ show: fakeShows[0] }));
  }),
  rest.get(
    "http://localhost:3000/api/:user/:userId/reservations",
    (req, res, ctx) => {
      // const {fakeReservations} =  await fakeData()
      return res(ctx.json({ userReservations: fakeUserReservations }));
    }
  ),
];
