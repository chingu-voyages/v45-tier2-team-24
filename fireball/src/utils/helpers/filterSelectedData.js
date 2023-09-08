export function filterSelected(selected, data) {
    if (!data) {
        return null;
    }
    const filteredData = data.find((item) => item.id === selected);
    return filteredData;
}
