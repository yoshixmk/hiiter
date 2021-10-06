import { getPositionNumber } from "../components/Timer";

test('position', () => {
  expect(getPositionNumber(240, 3, 30)).toBe(1);
})

