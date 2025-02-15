import { render, screen } from "@testing-library/react";
import BandComponent from "@/pages/bands/[bandId]";

import { readFakeData } from "../__mocks__/fakeData";

test("band component displays correct band information",async ()=>{
    const {fakeBands} = await readFakeData()
    render(<BandComponent band={fakeBands[0]} error={null}/>)

    const heading = screen.getByRole("heading",{name:/the wandering bunnies/i})
    expect(heading).toBeInTheDocument()

})

test("band component displays correct band information",async ()=>{
    const {fakeBands} = await readFakeData()
    render(<BandComponent band={null} error={"Hello world"}/>)

    const heading = screen.getByRole("heading",{name:/hello world/i})
    expect(heading).toBeInTheDocument()
    
})