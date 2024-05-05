'use client'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ServerData } from "../StubData";
import { ListSubheader, Paper, PaperOwnProps } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import { JSX, ElementType } from 'react';

type Option = {
    title: string;
    value: string;
};

export default function SearchTerms() {
    const result: any = []
    const q = ServerData.vendor_search.map((option: any) => {
        option.data.forEach((subdata: any) => {
            result.push({
                title: subdata.t,
                value: subdata.v
            })
        })
    })

    const searchTerm = (term: Option) => {
        window.location.href = `https://4urspace.com/search/${term.title}/${term.value}`;
    }

    const CustomPaper = (props) => (
        <Paper
            {...props}
            style={{
                ...props.style,
                marginLeft: 'auto',
                marginRight: 'auto',
                width: 600,
                left: '50%',
                transform: 'translateX(-50%)',
                position: 'absolute',
                fontFamily: '"Open Sans", Arial, Helvetica, sans-serif'
            }}
        />
    );

    return (
        <Autocomplete
            onChange={(event, option) => searchTerm(option)}
            freeSolo
            id="grouped-demo"
            options={result}
            groupBy={(option: any) => option.title}
            getOptionLabel={(option: any) => option.value}
            PaperComponent={CustomPaper}
            renderGroup={(params) => (
                <ul key={params.key}>
                    <ListSubheader style={{ backgroundColor: '#E6E6E6' }}>{params.group}</ListSubheader>
                    {params.children}
                </ul>
            )}
            sx={{ width: "auto", left: "100%" }}
            renderInput={(params) => <TextField {...params} sx={{
                '& .MuiOutlinedInput-root': {
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'transparent',
                        borderRadius: '0px'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'transparent',
                        borderRadius: '0px'
                    }
                }
            }}
                InputProps={{
                    ...params.InputProps, style: {
                        height: 48, padding: "0 0 0 40px"
                    }
                }} placeholder="Country, state, city, or mall"
            />}
        />

    );
}