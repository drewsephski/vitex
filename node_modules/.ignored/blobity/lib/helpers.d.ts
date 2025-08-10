export declare type Color = {
    r: number;
    g: number;
    b: number;
};
export declare const extractRgbFromHex: (hex: string) => {
    r: number;
    g: number;
    b: number;
};
export declare const extractRgbFromRgb: (rgb: string) => {
    r: number;
    g: number;
    b: number;
};
export declare const convertColor: (color: string) => {
    r: number;
    g: number;
    b: number;
};
export declare const isGradient: (color: Color | Color[]) => color is Color[];
export declare const positive: (n: number) => number;
export declare const negative: (n: number) => number;
