'use client'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ServerData } from "../StubData";

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

    return (
        <Autocomplete
            freeSolo
            id="grouped-demo"
            options={result}
            groupBy={(option: any) => option.title}
            getOptionLabel={(option: any) => option.value}
            sx={{ width: "auto", left: "100%" }}
            renderInput={(params) => <TextField {...params} placeholder="Country, state, city, or mall" />}
        />

    );
}