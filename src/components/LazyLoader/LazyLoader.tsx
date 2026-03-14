import { useInView } from "react-intersection-observer";

interface LazyLoaderProps {
    children: React.ReactNode;
    className?: string;
    rootMargin?: string;
    triggerOnce?: boolean;
}

const LazyLoader: React.FC<LazyLoaderProps> = ({ children, className, rootMargin = "0px", triggerOnce = true }) => {
    const { ref, inView } = useInView({
        rootMargin,
        triggerOnce,
    });

    return (
        <div ref={ref} className={className}>
            {inView ? children : null}
        </div>
    );
};

export default LazyLoader;
