export const normalize = (txt: string) => {
  return txt.toLowerCase().replaceAll(' ', '').replaceAll('+', '');
};
