export const isTablet = /iPad|Android(?!.*Mobile)|Tablet|PlayBook|Silk/i.test(
  navigator.userAgent
);
export const isMobile =
  /iPhone|iPod|Android|BlackBerry|Windows Phone|webOS|Mobile/i.test(
    navigator.userAgent
  );
