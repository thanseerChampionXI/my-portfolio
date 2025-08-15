// common/AnimatedSection.tsx
import React, { useState, useEffect, useRef } from 'react';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px',
                ...options,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return { ref, isIntersecting };
};

interface AnimatedSectionProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    delay = 0,
    className = ''
}) => {
    const { ref, isIntersecting } = useIntersectionObserver();

    const animationClasses = isIntersecting
        ? 'opacity-100 translate-y-0 transition-all duration-700 ease-out'
        : 'opacity-0 translate-y-8 transition-all duration-700 ease-out';

    return (
        <div
            ref={ref}
            className={`${animationClasses} ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;