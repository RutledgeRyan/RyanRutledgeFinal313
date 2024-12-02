import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endDate }) => {
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const calculateDaysLeft = () => {
            const now = new Date();
            const end = new Date(endDate);
            const difference = end - now; // Difference in milliseconds
            const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Convert to days
            setDaysLeft(days >= 0 ? days : 0); // Ensure days don't go negative
        };

        calculateDaysLeft(); // Initial calculation
        const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60 * 24); // Update daily

        return () => clearInterval(interval); // Cleanup on unmount
    }, [endDate]);

    return (
        <div>
            <h1>{daysLeft} days until Graduation</h1>
        </div>
    );
};

export default CountdownTimer;