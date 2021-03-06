export default function Menu({
    fill = '#FAFBFD',
    className,
    onClick,
}: SVGProps) {
    return (
        <svg
            className={className}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                d="M4 24H28M4 8H28H4ZM4 16H28H4Z"
                stroke={fill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
