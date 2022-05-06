import { HTMLProps } from 'react';

declare global {
    interface SVGProps extends HTMLProps<SVGElement> {
        fill?: string;
    }

    type TourType = 'guided' | 'sightseeing' | 'landscape';
}
export {};
