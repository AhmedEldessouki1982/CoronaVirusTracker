import { FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import React from 'react'
import InfoBoxs from './InfoBoxs';
import Table from './Table';

export default function Nav () {

    let [countries, setCountries] = React.useState([]);
    let [defultCountry, setDefultCountry] = React.useState('WorldWide');
    let [countryData, setCountryData] = React.useState({});

    //fetching data APIs
    React.useEffect(
        () => {
            const getCountriesData = async () => {
                await fetch ('https://corona.lmao.ninja/v3/covid-19/countries')
                .then (res => res.json())
                .then (data => {
                    const countries = data.map (
                        EachCountry => (
                            {
                                name: EachCountry.country,
                                value: EachCountry.countryInfo.iso2,
                                totalCases : EachCountry.cases,
                            }
                        )
                    );
                    setCountries (countries);
                    
                });
            };
            getCountriesData ();
        },[]        
    )

    let OncountryChange = (e) => {
        let countryID = e.target.value;
        setDefultCountry (countryID); 
        let url = `https://corona.lmao.ninja/v3/covid-19/countries/${countryID}`;
        let getcountryInfoDate = async () => {
            await fetch (url)
            .then (res => res.json())
            .then (data => {
                const CoronaVirusCases = {
                    TotalCases: data.cases,
                    TodayCases: data.todayCases,
                    TotalRecovered: data.recovered,
                    TodayRecovered: data.todayRecovered,
                    TotalDeaths: data.deaths,
                    TodayDeaths: data.todayDeaths
                } 
                setCountryData (CoronaVirusCases)
            })
        }
        getcountryInfoDate ();
    }

    return (
        <>
        
            <div className='Nav__container'>
                <h1>Covid-19 Tracker</h1>
                    <FormControl className = 'Nav__dropSelector'>
                        <InputLabel> Country </InputLabel>
                        <Select value = {defultCountry} label = 'Country' onChange = {OncountryChange}>
                        <MenuItem value = 'WorldWide'>WorldWide</MenuItem>
                        {
                            countries.map (country => <MenuItem totalCases = {country.totalCases} value = {country.value}>{country.name}</MenuItem>)
                        }                                                   
                        </Select>
                    </FormControl>
            </div>

                 
            <div className='InfoBoxs__Content'>
                <InfoBoxs 
                Title = 'CoronaVirus Cases'
                CurrentCases = {countryData.TodayCases}
                TotalCases = {countryData.TotalCases}
                />
                <InfoBoxs
                Title = 'Recovered Cases'
                CurrentCases = {countryData.TodayRecovered}
                TotalCases = {countryData.TotalRecovered}
                />
                <InfoBoxs
                Title = 'Death Cases'
                CurrentCases = {countryData.TodayDeaths}
                TotalCases = {countryData.TotalDeaths}
                />  
                
                <div className = 'Table__Container'>
                    <Table Listed = {countries}/>
                </div>
            </div>

            
        
        </>
    )
}