import Header from "@/components/header/header";

export default function DefaultLayout({children}){
    return(
        <>
            <Header />
            {children}
        </>
    )
}