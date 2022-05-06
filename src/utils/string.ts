const pad = (v: number | string) => {
    if (v.toString().length < 2) {
        return '0' + v;
    }
    return v;
};

export const getFormatTimeFromMinute = (minute: number) => {
    const p = minute / 60;
    const h = Math.floor(p);
    const m = Math.round((p - h) * 60);
    return `${pad(h)}:${pad(m)}`;
};
