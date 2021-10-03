export enum UniqueFilterType {
    Input,
    Select,
}

// OptionType is void when type === UniqueFilterType.Input
export interface UniqueFilter<OptionType = void> {
    id: string;
    title: string;
    type: UniqueFilterType;
    options?: OptionType[];
    value: number | OptionType[];
}
