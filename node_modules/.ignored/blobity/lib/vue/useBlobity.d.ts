import { Options } from '../Blobity';
declare const _default: (options: Partial<Options>) => {
    updateOptions: (newOptions: Partial<Options>) => void;
    bounce: () => void;
    destroy: () => void;
    focusElement: (element: HTMLElement) => void;
    showTooltip: (text: string) => void;
    reset: () => void;
};
export default _default;
