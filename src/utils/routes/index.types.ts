export type RecursiveKeyOf<TObj extends object> = {
    [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>
}[keyof TObj & (string | number)]

export type RecursiveKeyOfInner<TObj extends object> = {
    [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
        TObj[TKey],
        `.${TKey}`
    >
}[keyof TObj & (string | number)]

export type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
    ? Text
    : TValue extends object
    ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
    : Text

export type RouteObject = {
    [key: string]: string | RouteObject
};

export type RouteParams = {
    [key: string]: any
} | null;