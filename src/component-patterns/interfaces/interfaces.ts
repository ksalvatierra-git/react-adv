import { ReactElement } from "react"

export interface ProductCardProps {
    children?: ReactElement | ReactElement[],
    product: ProductProps
}

export interface ProductProps {
    id: string,
    title: string,
    img?: string
}

export interface ProductContextProps {
    increaseBy: (value: number) => void,
    counter: number,
    product: ProductProps
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () => JSX.Element
}