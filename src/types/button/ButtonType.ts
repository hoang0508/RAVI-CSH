export interface IButtonTypes {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  kind: string;
}
