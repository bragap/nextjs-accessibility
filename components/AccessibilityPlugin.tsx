import { AArrowUp, PersonStanding } from "lucide-react"
import { ModeToggle } from "./ToggleDarkMode"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog-accessibility"
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import LanguageToggle from "./LanguageToggle";

export default async function AccessibilityPlugin({ params: { lang } }: { params: { lang: string } }) {
    return (
        <Dialog>
            <DialogTrigger className="fixed top-[50%] right-0 h-9 w-9">
                <PersonStanding className=" bg-blue-600 text-white w-full h-full text-xs  rounded-none rounded-l-md flex items-center justify-center" />
            </DialogTrigger>
            <DialogContent className="bg-gray-200">
                <DialogTitle>
                    <div className="flex justify-around items-center gap-5">
                        <div className="flex items-center gap-2">
                            <Image src="/logo.png" width={25} height={25} alt="Logo" />
                            Accessibility
                        </div>
                        <div>
                            <LanguageToggle currentLang={lang} />
                        </div>
                    </div>
                </DialogTitle>
                <div className="px-4 ">
                    <h2 className="font-semibold w-full">Controle de fonte</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <Button className="bg-white text-black h-auto">
                            <div className="flex flex-wrap items-center gap-2 text-left">
                                <div className="block w-full">
                                    <AArrowUp />
                                </div>
                                <div className="block w-full">
                                    Tamanho de fonte
                                </div>
                                <div>
                                    <span className="text-blue-600 text-xs">Padrão</span>
                                </div>
                            </div>
                        </Button>
                        <Button className="bg-white text-black h-auto ">
                            <div className="flex flex-wrap items-center gap-2 text-left">
                                <div className="block w-full">
                                    <AArrowUp />
                                </div>
                                <div className="block w-full">
                                    Letras destacadas
                                </div>
                                <div>
                                    <span className="text-blue-600 text-xs">Padrão</span>
                                </div>
                            </div>
                        </Button>
                        <Button className="bg-white text-black h-auto">
                            <div className="flex flex-wrap items-center gap-2 text-left">
                                <div className="block w-full">
                                    <AArrowUp />
                                </div>
                                <div className="block w-full">
                                    Espaçamento entre linhas
                                </div>
                                <div>
                                    <span className="text-blue-600 text-xs">Padrão</span>
                                </div>
                            </div>
                        </Button>
                        <Button className="bg-white text-black h-auto">
                            <div className="flex flex-wrap items-center gap-2 text-left">
                                <div className="block w-full">
                                    <AArrowUp />
                                </div>
                                <div className="block w-full">
                                    Espaçamento entre letras
                                </div>
                                <div>
                                    <span className="text-blue-600 text-xs">Padrão</span>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>
                <Separator />
                <div className="px-4 pb-2">
                    <h2 className="font-semibold w-full">Controle de cor</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <Button className="bg-white text-black h-auto">
                            <div className="flex flex-wrap items-center gap-2 text-left">
                                <div className="block w-full">
                                    <AArrowUp />
                                </div>
                                <div className="block w-full">
                                    Controle de cores
                                </div>
                                <div>
                                    <span className="text-blue-600 text-xs">Padrão</span>
                                </div>
                            </div>
                        </Button>
                        <Button className="bg-white text-black h-auto ">
                            <div className="flex flex-wrap items-center gap-2 text-left">
                                <div className="block w-full">
                                    <AArrowUp />
                                </div>
                                <div className="block w-full">
                                    Saturação
                                </div>
                                <div>
                                    <span className="text-blue-600 text-xs">Padrão</span>
                                </div>
                            </div>
                        </Button>
                        <Button className="bg-white text-black h-auto">
                            <div className="flex flex-wrap items-center gap-2 text-left">
                                <div className="block w-full">
                                    <AArrowUp />
                                </div>
                                <div className="block w-full">
                                    Cores da página
                                </div>
                                <div>
                                    <span className="text-blue-600 text-xs">Padrão</span>
                                </div>
                            </div>
                        </Button>
                        <ModeToggle />

                    </div>
                </div>


            </DialogContent>
        </Dialog>


    )
}