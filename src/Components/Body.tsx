import { useEffect, useState } from 'react';
import './Body.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import { searchData } from '../utils';

function Body() {
    const globalSearch = ['Ekya School/Math 101/John Doe', 'New Horizon Gurukul/History 202/Jane Doe', 'National Public School/Science 303/Alice Brown'];
    const schoolslist = ['Ekya School', 'New Horizon Gurukul', 'National Public School', 'Sri Kumaran Public School', 'Oakridge International School'];
    const classeslist = ['Math 101', 'History 202', 'Science 303'];
    const studentslist = ['John Doe', 'Jane Doe', 'Alice Brown', 'Bob White', 'Charlie Green'];

    const [schoolValue, setSchoolValue] = useState('');
    const [studentValue, setStudentValue] = useState('');
    const [classValue, setClassValue] = useState('');
    const [searchBarValue, setSearchBarValue] = useState('');
    const [showAutocomplete, setShowAutocomplete] = useState(false);

    const toggleAutocomplete = () => {
        setShowAutocomplete(!showAutocomplete);
    };

    useEffect(() => {
        console.log("searchBarValue::", searchBarValue);
        searchData(searchBarValue);
    }, [searchBarValue]);

    return (
        <div className='body-section'>
            <div>
                <div className='global-search'>
                    <div className='search-bar'>
                        <Autocomplete
                            options={globalSearch}
                            value={searchBarValue}
                            openOnFocus
                            onInputChange={(_, newValue) => setSearchBarValue(newValue)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    id="input-with-icon-textfield"
                                    label="Search by Schools, Classes, Students"
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <SearchIcon />
                                        ),
                                    }}
                                    variant="standard"
                                />
                            )}
                        />
                    </div>
                    <div className='filter-search' onClick={toggleAutocomplete}>
                        <Tooltip title="Advance Search">
                            <FilterAltIcon />
                        </Tooltip>
                    </div>
                </div>
            </div>
            {showAutocomplete && (
                <div>
                    <div className='search-boxes'>
                        <Autocomplete
                            options={schoolslist}
                            value={schoolValue}
                            onInputChange={(_, newValue) => setSchoolValue(newValue)}
                            renderInput={(params) => <TextField {...params} label="Schools" />}
                        />
                        <Autocomplete
                            options={studentslist}
                            value={studentValue}
                            onInputChange={(_, newValue) => setStudentValue(newValue)}
                            renderInput={(params) => <TextField {...params} label="Students" />}
                        />
                        <Autocomplete
                            options={classeslist}
                            value={classValue}
                            onInputChange={(_, newValue) => setClassValue(newValue)}
                            renderInput={(params) => <TextField {...params} label="Classes" />}
                        />
                        <div className='search-button'>
                            <Button variant="contained" disabled={!schoolValue && !studentValue && !classValue && !searchBarValue}>Search</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Body;