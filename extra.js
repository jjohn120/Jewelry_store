document.addEventListener('DOMContentLoaded', function() {
        const dateField = document.getElementById('appointment-date');
        const timeField = document.getElementById('appointment-time');
        const bookingForm = document.getElementById('booking-form');
        const messageDiv = document.getElementById('message');

        const today = new Date().toISOString().split('T')[0];
        dateField.setAttribute('min', today);

        const generateDefaultTimes = () => {
            const times = [];
            for (let hour = 9; hour <= 17; hour++) {
                times.push(`${hour.toString().padStart(2, '0')}:00`);
            }
            return times;
        };

        const updateAvailableTimes = () => {
            const selectedDate = dateField.value;
            const unavailableAppointments = JSON.parse(localStorage.getItem('unavailableAppointments') || '[]');
            const unavailableTimes = unavailableAppointments.filter(app => app.date === selectedDate).map(app => app.time);
            const availableTimes = generateDefaultTimes().filter(time => !unavailableTimes.includes(time));
            
            if (availableTimes.length === 0) {
                timeField.setAttribute('disabled', 'true');
                timeField.innerHTML = '<option value="">No available times</option>';
            } else {
                timeField.removeAttribute('disabled');
                availableTimes.sort((a, b) => new Date(selectedDate + 'T' + a) - new Date(selectedDate + 'T' + b));
                timeField.innerHTML = availableTimes.map(time => `<option value="${time}">${time}</option>`).join('');
            }
        };

        dateField.addEventListener('change', updateAvailableTimes);

        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(bookingForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const numberOfPeople = formData.get('Number of people attending');
            const date = formData.get('Date');
            const time = formData.get('time');

            if (time === "") {
                messageDiv.textContent = "No available appointments at the selected time.";
                return;
            }

            const unconfirmed = JSON.parse(localStorage.getItem('unconfirmedAppointments') || '[]');
            unconfirmed.push({ date, time, name, numberOfPeople });
            localStorage.setItem('unconfirmedAppointments', JSON.stringify(unconfirmed));

            const unavailableAppointments = JSON.parse(localStorage.getItem('unavailableAppointments') || '[]');
            unavailableAppointments.push({ date, time });
            localStorage.setItem('unavailableAppointments', JSON.stringify(unavailableAppointments));

            alert('Appointment booked and waiting for admin confirmation.');
            window.location.reload();
        });

        // Initial load of available times
        updateAvailableTimes();
    });
