$.get('https://openexchangerates.org/api/latest.json', {app_id: '763dea102db74a99bcc06f01950f3e8c', base: 'EUR'}, function(data) {
    $eurorate = data.rates.THB;
    console.log($eurorate);
});