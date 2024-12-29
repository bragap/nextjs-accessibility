import Image from "next/image";
import Link from "next/link";
import { Github, Sparkles } from "lucide-react";


export default function Home() {
    return (
        <div className="bg-gradient-light dark:bg-gradient-dark min-h-screen">
            <div className="w-[95%] md:w-[80%] mx-auto p-10">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Image src="/logo.png" width={70} height={70} alt="Logo" />
                        <p>/</p>
                        <h1 className="font-semibold"> Accessibility</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Link href="https://github.com/bragap" target="_blank" className="p-3 rounded-full bg-card hover:bg-card-foreground hover:text-background hover:duration-200"><Github /></Link>
                    </div>
                </div>


                <div className=" mt-10 p-0 md:p-10 text-center space-y-10">
                    <h1 className="text-3xl md:text-4xl font-semibold">The ultimate Next.js starter kit designed with a focus on Accessibility.</h1>

                    <div className="flex items-center justify-center flex-wrap">
                        <p className="flex items-center gap-4 flex-wrap justify-center text-center sm:text-left">
                            {["Next.js", "TailwindCSS", "Shadcn/UI", "ESLint", "SEO", "Accessibility", "TypeScript"].map((tech, index) => (
                                <span key={index} className="flex items-center gap-1 mb-2 sm:mb-0">
                                    {tech} <Sparkles strokeWidth={0.5} fill="true" />
                                </span>
                            ))}
                        </p>
                    </div>

                </div>


                <div className="mt-5 text-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-center">

                        <Link href="https://github.com/bragap" target="_blank" className="p-4 border border-border rounded-full bg-destructive hover:text-background hover:duration-200" >Get started</Link>

                        <Link href="https://github.com/bragap" target="_blank" className="p-4 border border-border rounded-full bg-card hover:bg-card-foreground hover:text-background hover:duration-200">Star on GitHub</Link>
                    </div>
                </div>

                <footer className="mt-10 text-center">
                    <p>© 2025 by Pedro Braga</p>
                </footer>

            </div>
        </div>
    );
}
