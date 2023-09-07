export function filterRanges(range1, range2, data) {
    const filteredData = data.filter((item) => {
        const mass = Number(item.mass);
        return mass >= range1 && mass <= range2;
    });

    return filteredData;
}
