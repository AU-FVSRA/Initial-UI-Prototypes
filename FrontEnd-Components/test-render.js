const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'ConvertedPUG'));
app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
    // res.render('MainLayout.pug', {
    //     page_title: 'Minor Injury Report | FVSR',
    //     user: {isLoggedIn: true, firstName: "James"},
    //     copyright_current_year: new Date().getFullYear(),
    //     pretty: true //This is for pretty HTML output (technically its deprecated, but it still works)
    // });

    res.render('MainLayout.pug', {
        page_title: 'Minor Injury Report | FVSR',
        user: {isLoggedIn: true, firstName: "James"},
        minorInjuryLogReport: minorInjuryLogReport,
        copyright_current_year: new Date().getFullYear(),
        pretty: true,
    });
});

app.listen(3000, () => {
    console.table({
        "Port": 3000,
        "Environment": "Development"
    });
});



// Generate a random array of objects for minor injury reports
minorInjuryLogReport = [
    {
        ID: 1,
        ReportDate: "2020-01-01",
        ReportTime: "12:00",
        ProgramName: "Winter Basketball",
        ProgramSeasonYear: "2020",
    },
    {
        ID: 1,
        ReportDate: "2020-01-01",
        ReportTime: "12:00",
        ProgramName: "Winter Basketball",
        ProgramSeasonYear: "2020",
    },
    {
        ID: 1,
        ReportDate: "2020-01-01",
        ReportTime: "12:00",
        ProgramName: "Winter Basketball",
        ProgramSeasonYear: "2020",
    },
    {
        ID: 1,
        ReportDate: "2020-01-01",
        ReportTime: "12:00",
        ProgramName: "Winter Basketball",
        ProgramSeasonYear: "2020",
    },
    {
        ID: 1,
        ReportDate: "2020-01-01",
        ReportTime: "12:00",
        ProgramName: "Winter Basketball",
        ProgramSeasonYear: "2020",
    },
    {
        ID: 1,
        ReportDate: "2020-01-01",
        ReportTime: "12:00",
        ProgramName: "Winter Basketball",
        ProgramSeasonYear: "2020",
    },
    {
        ID: 1,
        ReportDate: "2020-01-01",
        ReportTime: "12:00",
        ProgramName: "Winter Basketball",
        ProgramSeasonYear: "2020",
    },
    {
        ID: 1,
        ReportDate: "2020-01-01",
        ReportTime: "12:00",
        ProgramName: "Winter Basketball",
        ProgramSeasonYear: "2020",
    },
    {
        ID: 1,
        ReportDate: "2020-01-01",
        ReportTime: "12:00",
        ProgramName: "Winter Basketball",
        ProgramSeasonYear: "2020",
    },
];