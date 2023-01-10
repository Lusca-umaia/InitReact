import { useState } from "react"

export default function Message(Component) {
    const MessageHOC = (props) => {
        const [display, setDisplay] = useState(false)

        return <Component {...props} MouseOver={() => setDisplay(true)} MouseOut={() => setDisplay(false)} status={display} />
    }

    return MessageHOC
}