const DEFAULT_COLOR = "#c4c4c4";
const ACTIVE_COLOR = "#1fc76a";

export const generateData = (length = 51, activeData = '3.7') => {
  let labels = [];
  let backgroundColor = [];
  let hoverBackgroundColor = [];

  backgroundColor.length = length;
  hoverBackgroundColor.length = length;
  
  backgroundColor.fill(DEFAULT_COLOR);
  hoverBackgroundColor.fill(DEFAULT_COLOR);

  let i = 1;
  let start = 0;
  let step = 0.1;

  if (activeData && activeData === '0.0') {
    labels[0] = "0.0";
    backgroundColor[0] = ACTIVE_COLOR;
    hoverBackgroundColor[0] = ACTIVE_COLOR;
  }

  while (i < length) {
    const value = parseFloat(start + step).toFixed(1);

    labels[i] = value;

    if (activeData && activeData === value) {
      backgroundColor[i] = ACTIVE_COLOR;
      hoverBackgroundColor[i] = ACTIVE_COLOR;
    }

    start += step;
    i++
  }
  
  return {
    labels,
    backgroundColor,
    hoverBackgroundColor,
  };
}
