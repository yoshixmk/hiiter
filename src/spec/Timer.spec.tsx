import { getPositionNumber } from "../components/Timer";

test('position is first', () => {
  expect(getPositionNumber({
    expirySeconds: 240,
    timeLeft: 230,
    interval: 30
  })).toBe(1);
})

test('position is last', () => {
  expect(getPositionNumber({
    expirySeconds: 240,
    timeLeft: 10,
    interval: 30
  })).toBe(4);
})

test('position is end-of-time', () => {
  expect(getPositionNumber({
    expirySeconds: 240,
    timeLeft: 0,
    interval: 30
  })).toBe(1);
})


test('position is start-of-time', () => {
  expect(getPositionNumber({
    expirySeconds: 240,
    timeLeft: 240,
    interval: 30
  })).toBe(1);
})
