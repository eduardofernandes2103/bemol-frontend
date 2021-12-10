export interface ButtonProps {
    children?: string;
    setColor: string;
    setSize: string;
    setFontColor: string;
    type?: string;
    click?: () => void
}