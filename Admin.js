document.addEventListener('DOMContentLoaded', function() {
    const availabilityForm = document.getElementById('availability-form');
    const availabilityList = document.getElementById('availability-list');
    
    const loadAvailability = () => {
        const availability = JSON.parse(localStorage.getItem('availability')) || [];
        availabilityList.innerHTML = '';
        availability.forEach((slot, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${slot.date}: ${slot.startTime} - ${slot.endTime}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => {
                availability.splice(index, 1);
                localStorage.setItem('availability', JSON.stringify(availability));
                loadAvailability();
            };
            listItem.appendChild(deleteButton);
            availabilityList.appendChild(listItem);
        });
    };
    
    availabilityForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const date = document.getElementById('available-date').value;
        const startTime = document.getElementById('start-time').value;
        const endTime = document.getElementById('end-time').value;
        
        if (new Date(`1970-01-01T${startTime}:00`) >= new Date(`1970-01-01T${endTime}:00`)) {
            alert('End time must be after start time');
            return;
        }
        
        const availability = JSON.parse(localStorage.getItem('availability')) || [];
        availability.push({ date, startTime, endTime });
        localStorage.setItem('availability', JSON.stringify(availability));
        
        loadAvailability();
    });
    
    loadAvailability();
});
