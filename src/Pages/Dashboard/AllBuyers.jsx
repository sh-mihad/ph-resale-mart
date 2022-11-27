import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data:buyers, isLoading, } = useQuery({
        queryKey: ["buyers"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/all-buyers`)
            const data = await res.json()
            return data
        }
    })
  console.log(buyers);
    return (
        <div>
            this is all buyers page
        </div>
    );
};

export default AllBuyers;