/**  将hex颜色转成rgb */
export const hexToRgba = (hex: string, opacity: number) => {
    let rgba = "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")";
    return rgba;
}