import { useState } from 'react';

interface UseFormProps<FormValues> {
    initialValues: FormValues;
    onSubmit: (values: FormValues) => void;
}

const UseForm = <FormValues extends Record<string, any>>(
    { initialValues, onSubmit }: UseFormProps<FormValues>
) => {
    const [values, setValues] = useState<FormValues>(initialValues);

    const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(values);
    };

    return {
        values,
        HandleChange,
        HandleSubmit,
    };
};

export default UseForm;