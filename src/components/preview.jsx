import { useSelector } from "react-redux"
import "./css/preview.css"

let Preview = () => {

    let details = useSelector(state => state.details)
    let { fName, lName, email, phone, city, state, summary, skill1,skill2,skill3,skill4} = details
    // console.log({fname})
    console.log(details)
    return (
        <svg className="svg-tag">

            <rect width="70" height="70" x="19" y="37"></rect>

            <text x="62" y="92" class="text-icon">
                <tspan x="33" y="82" class="text-cap">SW</tspan>
            </text>

            <text x="92" y="32" class="h1">
                <tspan xmlns="http://www.w3.org/2000/svg" x="106" y="80"> {fName} {lName} </tspan>
            </text>

            <text x="100" y="100" class="p3">
                <tspan x="106" y="104">{city} {state} (H)  (C) {phone} {email} </tspan>
            </text>

            <text x="22" y="174" class="h2">PROFESSIONAL SUMMARY</text>

            <text x="194" y="172" class="p2"> {summary}</text>

            <text x="22" y="282" class="h2">SKILLS</text>

            <circle cx="195" cy="275" r="1.5" class="li-disc"></circle>
            <circle cx="195" cy="292" r="1.5" class="li-disc"></circle>
            <circle cx="195" cy="308" r="1.5" class="li-disc"></circle>
            <circle cx="195" cy="326" r="1.5" class="li-disc"></circle>

            <text x="210" y="278" class="p2">{skill1}</text>
            <text x="210" y="295" class="p2">{skill2}</text>
            <text x="210" y="311" class="p2">{skill3}</text>
            <text x="210" y="329" class="p2">{skill4}</text>


        </svg>

    )
}

export default Preview