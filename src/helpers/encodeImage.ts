export const fileToBase64 = (
  img: Blob | File,
  callback: (arg0: string | ArrayBuffer | null) => any,
) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
