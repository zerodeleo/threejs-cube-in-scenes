// Canvas
export const canvasHtml = Array.from(document.getElementsByTagName('canvas'));

let tempObj;
canvasHtml.forEach(el => (tempObj = {...tempObj, [el.id]: el}));

export const canvas = tempObj;
