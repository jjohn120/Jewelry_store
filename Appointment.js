document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    const dateField = document.getElementById('appointment-date');
    const timeField = document.getElementById('appointment-time');
    
    dateField.setAttribute('min', today);

    const availability = JSON.parse(localStorage.getItem('availability')) || [];
    dateField.addEventListener('change', function() {
        const selectedDate = dateField.value;
        const availableTimes = availability.filter(slot => slot.date === selectedDate);
        
        if (availableTimes.length > 0) {
            const times = availableTimes.map(slot => ({
                start: slot.startTime,
                end: slot.endTime
            }));
            timeField.disabled = false;
            timeField.min = times[0].start;
            timeField.max = times[times.length - 1].end;
        } else {
            timeField.disabled = true;
            alert('No available times for this date');
        }
    });
});
