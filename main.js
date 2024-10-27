function analyzeResults() {
    const parameters = {
        bod: parseFloat(document.getElementById("bod").value),
        cod: parseFloat(document.getElementById("cod").value),
        tds: parseFloat(document.getElementById("tds").value),
        nh4: parseFloat(document.getElementById("nh4").value),
        nh3: parseFloat(document.getElementById("nh3").value),
        cn: parseFloat(document.getElementById("cn").value),
        fog: parseFloat(document.getElementById("fog").value),
        hg: parseFloat(document.getElementById("hg").value),
        ag: parseFloat(document.getElementById("ag").value),
        fe: parseFloat(document.getElementById("fe").value),
        mg: parseFloat(document.getElementById("mg").value),
        cl: parseFloat(document.getElementById("cl").value),
        f: parseFloat(document.getElementById("f").value),
        as: parseFloat(document.getElementById("as").value),
        se: parseFloat(document.getElementById("se").value),
    };

    let results = {};
    
    const ranges = {
        bod: { low: 0, high: 20 },
        cod: { low: 0, high: 50 },
        tds: { low: 0, high: 500 },
        nh4: { low: 0, high: 0.5 },
        nh3: { low: 0, high: 1 },
        cn: { low: 0, high: 0.1 },
        fog: { low: 0, high: 10 },
        hg: { low: 0, high: 0.05 },
        ag: { low: 0, high: 0.1 },
        fe: { low: 0, high: 0.3 },
        mg: { low: 0, high: 0.1 },
        cl: { low: 0, high: 250 },
        f: { low: 0, high: 4 },
        as: { low: 0, high: 0.01 },
        se: { low: 0, high: 0.01 },
    };

    for (const [key, value] of Object.entries(parameters)) {
        if (isNaN(value)) {
            results[key] = { value: '', within_range: null, range: '' };
            continue;
        }
        const withinRange = value >= ranges[key].low && value <= ranges[key].high;
        results[key] = { value: value, within_range: withinRange, range: `${ranges[key].low}-${ranges[key].high}` };
    }

    const encodedResults = encodeURIComponent(JSON.stringify(results));
    window.location.href = `result.html?results=${encodedResults}`;
}
