  var map = L.map('map').setView([51.505, -0.09], 13);

        // Load and display the tile layer from OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        // Optional: Add a marker
        var marker = L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('Your Location<br> 15MC')
            .openPopup();