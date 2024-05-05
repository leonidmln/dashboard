'use client'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ServerData } from "../StubData";
import { RedirectType, redirect } from 'next/navigation';

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

    type Option = {
        title: string;
        value: string;
    };
    const searchTerm = (term: Option) => {
        window.location.href = `https://4urspace.com/search/${term.title}/${term.value}`;
    }

    return (
        <Autocomplete
            onChange={(event, option) => searchTerm(option)}
            freeSolo
            id="grouped-demo"
            options={result}
            groupBy={(option: any) => option.title}
            getOptionLabel={(option: any) => option.value}
            sx={{ width: "auto", left: "100%" }}
            renderInput={(params) => <TextField {...params} InputProps={{ ...params.InputProps, style: { height: 48, padding: "0 0 0 40px" } }} placeholder="Country, state, city, or mall" />}
        />

    );
}