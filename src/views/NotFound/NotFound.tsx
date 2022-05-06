import './styles.scss';

export default function NotFound() {
    return (
        <div className="not-found flex flex-col justify-center">
            <div className="container ">
                <div className="flex items-center justify-center">
                    <h1 className="h1 text-secondary">404</h1>
                    <span className="text-lg">
                        The requested resource is not found.
                    </span>
                </div>
            </div>
        </div>
    );
}
