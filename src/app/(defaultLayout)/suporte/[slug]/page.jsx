'use client'
import { notFound, useParams } from "next/navigation";
import { privacyPolitcs, about } from "@/components/data/suport-data";
import Link from "next/link";

export default function SuportPage() {
    const { slug } = useParams();
    const pageData = {
        "politica-de-privacidade": privacyPolitcs,
        "sobre": about,
    }

    let page = pageData[slug]

    if (!page) {
        return notFound();
    }
    page = page[0]

    return (
        <>
            <div className="mx-10 my-6">
                <p className="my-4">
                    <span className="text-gray-400">Suporte &gt; </span>
                    <span>
                        <Link href={"#"} className="hover:underline">{page.title}</Link>
                    </span>
                </p>
                <h2 className="text-2xl my-2 border-b max-w-5xl">{page.title}</h2>
                <h3 className="mb-4">{page.subtitle}</h3>
                <div className="w-100">
                    {page.content.map((data, index) => {
                        let title = data.title
                        let text = data.text
                        return(
                            <div key={index} className="max-w-5xl">
                                <h2 className="my-2">{title}</h2>
                                <p className="text-sm mb-4">{text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
