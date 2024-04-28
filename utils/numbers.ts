export const formatViews = (num: number) => {
    if (num >= 1000000) {
        return (num /1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    else if (num >= 1000) {
        return (num /1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}