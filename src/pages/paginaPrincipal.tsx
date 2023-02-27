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
        <section className="bg-[url(https://myarquives.s3.sa-east-1.amazonaws.com/rm222batch3-mind-03.jpg)] bg-cover bg-center h-screen">
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