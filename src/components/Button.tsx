interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: string;
    className?: string;
}


const Button = ({className, children, ...props}: ButtonProps) =>  {
    return (
        <button className={`btn btn-wide text-lg ${className}`} {...props}>{children}</button>
    );
}

export default Button;