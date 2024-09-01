  var map = L.map('map').setView([55.03878498763901, -1.4781508288359293], 13);

        // Load and display the tile layer from OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        // Optional: Add a marker
        var marker = L.marker([55.03878498763901, -1.4781508288359293]).addTo(map)
            .bindPopup('Your Location<br> 15MC')
            .openPopup();