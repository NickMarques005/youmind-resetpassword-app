import { useState } from 'react';
import { Loading } from '../types/LoadingTypes';

export const UseLoading = () => {
    const [loading, setLoading] = useState<Loading>(false);

    return {
        loading,
        setLoading
    };
};