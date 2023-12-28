export const getAvailableTimes = (hourRange, list, total) => {
  let available = [];
  for (let i = hourRange[0]; i <= hourRange[1]; i++) {
    console.log(i);
    available.push({ time: i, spots: total });
  }
  available.forEach(slot => {
    if (list[slot.time]) {
      slot.spots -= list[slot.time];
    }
    slot['available'] = slot.spots > 0;
    slot.time = convertTime(slot.time);
  })
  return available;
}

export const convertTime = (number) => {
  if (number === 24) return '12:00 AM';
  if (number === 12) return '12:00 PM';

  let time = `${number % 12}:00`;

  if (number < 12) {
    return time += ' AM';
  } else {
    return time += ' PM';
  }
}