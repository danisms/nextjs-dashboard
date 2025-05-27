import { Metadata } from 'next';

// Adding meta data to overide the parent layout metadata
export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
    return <p>Customers Page</p>;
}