export function convertToSlug(text: string) {
  return text.toLowerCase().replace(/ /g, '');
}
export const exportName = `Customers-${Date.now()}.xlsx`;
