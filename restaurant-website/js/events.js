fetch('data/events.csv')
    .then(res => res.text())
    .then(csv => {
        const parsed = Papa.parse(csv, { header: true }).data;
        const container = document.getElementById('events-container');

        if (!container) {
            console.error("Missing #events-container");
            return;
        }

        // Parse dates and group by Month/Year
        const eventsByMonth = {};

        parsed.forEach(event => {
            if (!event.Name || !event.Date) return;

            const date = new Date(event.Date);
            if (isNaN(date)) return;

            const monthKey = date.toLocaleString('default', { month: 'long', year: 'numeric' });

            if (!eventsByMonth[monthKey]) eventsByMonth[monthKey] = [];
            eventsByMonth[monthKey].push({ ...event, _parsedDate: date });
        });

        const sortedMonths = Object.keys(eventsByMonth).sort((a, b) => {
            const aDate = new Date(eventsByMonth[a][0]._parsedDate);
            const bDate = new Date(eventsByMonth[b][0]._parsedDate);
            return aDate - bDate;
        });

        sortedMonths.forEach(month => {
            const monthSection = document.createElement('section');

            const heading = document.createElement('h2');
            heading.textContent = month;
            heading.className = "text-2xl font-bold border-b pb-2 mb-4";
            monthSection.appendChild(heading);

            const list = document.createElement('div');
            list.className = "space-y-4";

            eventsByMonth[month]
                .sort((a, b) => a._parsedDate - b._parsedDate)
                .forEach(event => {
                    const card = document.createElement('div');
                    card.className = "bg-white shadow p-4 rounded";

                    const title = document.createElement('h3');
                    title.textContent = event.Name;
                    title.className = "text-lg font-semibold";
                    card.appendChild(title);

                    // Optional image
                    if (event.Image && event.Image.trim() !== '') {
                        const img = document.createElement('img');
                        img.src = `images/${event.Image.trim()}`;
                        img.alt = event.Name;
                        img.className = "w-full max-w-md mx-auto mb-3 rounded";
                        card.appendChild(img);
                    }

                    const date = document.createElement('p');
                    date.textContent = new Date(event.Date).toLocaleDateString(undefined, {
                        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                    });
                    date.className = "text-sm text-gray-600";
                    card.appendChild(date);

                    if (event.Description) {
                        const desc = document.createElement('p');
                        desc.textContent = event.Description;
                        desc.className = "mt-1 text-gray-700 text-sm";
                        card.appendChild(desc);
                    }

                    if (event.Time) {
                        const time = document.createElement('p');
                        time.textContent = `Time: ${event.Time}`;
                        time.className = "text-sm text-gray-700";
                        card.appendChild(time);
                    }

                    list.appendChild(card);
                });

            monthSection.appendChild(list);
            container.appendChild(monthSection);
        });
    });
