const breakpoints = [375, 768, 1440];

const [mobile, tablet, desktop] = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
);

const mq = {
  mobile,
  tablet,
  desktop,
};

export default mq;
