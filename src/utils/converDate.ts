export const convertDate = (date: number) =>
    new Date(date * 1000).toLocaleDateString('uk-UA');
