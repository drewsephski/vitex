export default class Magnetic {
    private readonly kinetInstance;
    private readonly throttledMouseMove;
    private readonly element;
    private rect;
    private center;
    private maxDistanceX;
    private maxDistanceY;
    private destroying;
    onTick: (() => void) | null;
    constructor(element: HTMLElement);
    destroy: () => void;
    private mouseMove;
    private getDistance;
    render(distance: number, x: number, y: number): void;
}
