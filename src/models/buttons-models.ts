export interface ButtonProps {
    children?: string;
    setColor: string;
    setSize: string;
    setFontColor: string;
    type?: "button" | "submit" | "reset";
    click?: any
}