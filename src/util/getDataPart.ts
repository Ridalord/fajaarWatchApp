export function getDatePart(timestamp: number, part: string): number | string {
    const date = new Date(timestamp);
    const month = date.toLocaleString('default', { month: 'short' });

    if (part === 'month') {
        return month;
    } else if (part === 'day') {
        return date.getDate();
    } else {
        return 'Invalid part';
    }
}
