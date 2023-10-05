export function sortByDateAscending(data: any[]): any[] {
  return data.sort((a, b) => {
    const dateA = new Date(a.time);
    const dateB = new Date(b.time);
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  });
}
