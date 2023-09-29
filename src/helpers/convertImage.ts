export function convertImageToJpg(imageUrl: string) {
  return fetch(imageUrl)
    .then((response) => response.blob())
    .then((blob) => {
      return new Promise<File>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result as string;
          const byteCharacters = atob(base64data.split(',')[1]); // Loại bỏ phần tiêu đề base64
          const byteArrays = [];
          for (let i = 0; i < byteCharacters.length; i++) {
            byteArrays.push(byteCharacters.charCodeAt(i));
          }
          const byteArray = new Uint8Array(byteArrays);
          const file = new File([byteArray], 'image.jpg', { type: 'image/jpeg' });
          resolve(file);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    });
}

export const convertImageToBlob = async (imageUrl: string) => {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
  return file;
};

export const handleImageToFile = async (facesImage: string) => {
  return await convertImageToJpg(String(facesImage));
};
