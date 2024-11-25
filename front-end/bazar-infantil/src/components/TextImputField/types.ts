interface PropsInput {
    placeHolder: string;
    typeInput?: boolean;
    valueInput: string;
    hadleFunctionInput: (value: string) => void;
    typeIcon?: string;
}