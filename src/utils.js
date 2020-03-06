export function mapObjectToArray(obj) {
    const objAsArr = Object.keys(obj).map(k => obj[k]);

    objAsArr.sort((prev, curr) => prev.order - curr.order);

    return objAsArr;
}