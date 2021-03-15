export const timeIntervals = (start, end) => {
  let intervals = [];
  let minutes = [
    '00',
    '05',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '55',
  ];
  for (let j = start; j <= end; j++) {
    for (let i = 0; i < minutes.length; i++) {
      intervals.push(`${j}:${minutes[i]}`);
    }
  }
  return intervals;
};

export const setIntervals = (time, finish, interval) => {
  let intervals = [];
  do {
    intervals.push({
      id: time.toString(),
      title: `${time.toString()} minutes`,
    });
    time = time + interval;
  } while (time <= finish);
  return intervals;
};
