import type {Metadata} from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "CareerLens - An AI-powered Resume Analyzer and Interview Coach",
};
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <Navbar/>
            {children}
        </main>
    )
}