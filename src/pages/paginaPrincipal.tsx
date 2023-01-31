import React, { useCallback, useEffect, useState } from "react";
import { AutorenewOutlined, ContentCopyOutlined } from '@mui/icons-material';
import { Alert, Checkbox, Divider, Icon, Popover, Slider } from "@mui/material";
const PaginaPrincipal = () => {

    const [size, setSize] = useState(15);
    const [password, setPassword] = useState("");
    const [simbolos, setSimbolos] = useState(false);
    const [maiusculas, setMaisculas] = useState(false);
    const [minusculas, setMinusculas] = useState(true);
    const [numeros, setNumeros] = useState(false);
    const [copyed, setCopyed] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [fontSize, setFontSize] = useState("text-2xl")

    const copyPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText(password);
        setCopyed(true)
        setAnchorEl(event.currentTarget);
        setTimeout(() => {
            setCopyed(false)
        }, 1000)
    }

    const generatePassword = () => {
        let chars = ""
        const lowerCaseChars = "abcdefghjkmnpqrstuvwxyz"
        const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ"
        const numberChars = "0123456789"
        const symbolChars = "?!@&*#$"
        let provisorePassword = ""

        if (maiusculas) {
            chars += upperCaseChars
        }
        if (minusculas) {
            chars += lowerCaseChars
        }
        if (numeros) {
            chars += numberChars
        }
        if (simbolos) {
            chars += symbolChars
        }

        for (let i = 0; i < size; i++) {
            const numberRandom = Math.floor(Math.random() * chars.length)
            provisorePassword += chars.substring(numberRandom, numberRandom + 1)
        }
        setPassword(provisorePassword)
    }

    const fontSizeCalculate = () => {
        if (size < 60) {
            setFontSize("text-2xl")
        }
        if (size > 60) {
            setFontSize("text-1xl")
        }
    }

    useEffect(() => {
        generatePassword();
        fontSizeCalculate();
    }, [maiusculas, simbolos, numeros, size, minusculas])

    return (
        <section className="bg-[url(https://myarquives.s3.sa-east-1.amazonaws.com/rm222batch3-mind-03.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXNhLWVhc3QtMSJHMEUCIQD8%2FlTq1FVfL%2FO7QwFmoyiP2PyHwVQt%2BPw0G39eO995EAIgRnYDc1PbfPFFPjNRJXaCSW7VT22Mv9%2BdW5jpSuXWVsgq7QIIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMjY5NDk0MzQxMzkiDD9ljoKO6dvkLg1VoCrBAr26VOh94Tp9GoMABqwNvZ6Yw11Z8PSfPDYP0KUtxQr4l8wSxBclllGLK1cbcK%2FYYcBCL0tC7NXSE4%2F7VeuXZ6RmXW%2BDOF2DgADQZwIqnRWFtBAz6gqlIsMg69Q%2BFgdJdT%2B9AaByd6gbRdBMz1otYvwia1b6vqb7uvjBqV7qrGWaFmrwQ3F0NereIuDx5glc%2Bx2k5dsZC7QnHXOK2z8ZX81sXcSnfW7VR5KcnxslcVrNYKcZyUVnOMC%2FpZhd3k4jxya8SjIatzCG3eeVnYxCBxyCNurRdR5Wc027cV6cgWxntbQikgU%2F2bZ7wG%2BvdMyK9c%2F9Mwgww9Nkqs73Q5XKzXqJ5A2jCneFdRuE1pmEb2rDnJWhdHY01mBTBP%2BKVkStnN1OqkB9H0bbZHE24kJld0PvkRqJpVxQ%2FplRT302p%2Ba8CDCHieSeBjqzAhLtoeFc3qH3iUPw4yHBtS34EQvDj2gj2lz9HlhhhC9zqh1tAFX01FyrQYFdvI27mJR7UMl%2FurljYaCscPjHIAGB013X3zQp5x7f0En6cY9mQaFMBCYx6wW%2BO26Xp4y8x1GkLfwPxj8uO5nLuueSVTYLXyZ4vNly3D5%2BVY4vrDhfjxkGVYMaf0IZ%2FiFgMyyRiq4U9IgWyX61TnIZFQ8XQEqPW5lgFieQSeJeoF8NXEIhqcVV9wBtdY6RPqU53H4gCt5m9LXjC1LAq3GKKivG%2FE%2FY4%2FS6pzeIuWyaBfsR%2BEIGu5BeudMxHU62dxIXIbSA3KtWA0zcA%2BMXTw4Tr1GmgKx6XOWFxbvrxd4UQrMcfVYSpe8rkjfJ58GzXbporOMS5eYprAWAr7tZYdBz3OZ0dI0MPw8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230131T121336Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR3DWGUMNS4RJV6SA%2F20230131%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a4545ee290e0045edb06c183bdef31830f0fc84ece8fc8693123bcf4eb6d4b6b)] bg-cover bg-center h-screen">
            <section className="p-7 lg:w-[60%] m-auto">
                <h1 className="font-bold w-full text-lg mt-8 lg:mt-28 text-center uppercase lg:text-3xl text-[#00CEF9]">Gerador de senhas seguras</h1>
                <section className="flex mt-10 flex-col lg:flex-row gap-6 lg:justify-center lg:items-center">
                    <input disabled id="password" value={password} className={`${fontSize} bg-slate-200 rounded-md p-2 lg:w-full`} />
                    <div className=" flex gap-1 w-full items-center justify-center lg:w-24">
                        <button id="copy" type="button" onClick={(e) => copyPassword(e)} className="text-gray-500 hover:text-gray-800">
                            <Icon aria-describedby="copi" fontSize="large" component={ContentCopyOutlined} />
                        </button>
                        <Popover sx={{ boxShadow: "none" }} id="copi" anchorEl={anchorEl} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={copyed}> <div className="p-2 bg-green-200">Copiado</div></Popover>
                        <button id="renew" type="button" onClick={generatePassword} className="text-gray-500 hover:text-gray-800">
                            <Icon fontSize="large" component={AutorenewOutlined} />
                        </button>
                    </div>
                </section>
                <div className="py-9 lg:py-16">
                    <Divider className="font-bold uppercase text-lg lg:text-3xl text-[#00CEF9]">Personalizar</Divider>
                </div>
                <section className="flex flex-col items-center w-full lg:justify-center">
                    <div className="w-full flex flex-col items-center gap-2">
                        <span className="">Tamanho: {size}</span>
                        <Slider defaultValue={15} orientation="horizontal" valueLabelDisplay="auto" onChange={(e: any) => setSize(e.target.value)} />
                    </div>
                    <div className="w-full my-10">
                        <ul className="flex gap-6 lg:gap-1 items-center justify-center lg:justify-center lg:items-start flex-wrap ">
                            <li className="flex flex-col items-center justify-center lg:flex-row">
                                <Checkbox checked={simbolos} onChange={() => setSimbolos(!simbolos)} />
                                <span>Símbolos</span>
                            </li>
                            <li className="flex flex-col items-center justify-center lg:flex-row">
                                <Checkbox checked={maiusculas} onChange={() => setMaisculas(!maiusculas)} />
                                <span>Maiúsculas</span>
                            </li>
                            <li className="flex flex-col items-center justify-center lg:flex-row">
                                <Checkbox checked={minusculas} onChange={() => setMinusculas(!minusculas)} />
                                <span>Minúsculas</span>
                            </li>
                            <li className="flex flex-col items-center justify-center lg:flex-row">
                                <Checkbox checked={numeros} onChange={() => setNumeros(!numeros)} />
                                <span>Números</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default PaginaPrincipal;