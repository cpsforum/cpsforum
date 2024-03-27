import Header from "@/components/header/header"
import MaterialsLayout from "@/components/layout/materials.jsx"

export default function MaterialLayout({ children }) {
    return (
        <div>
            <Header />
            <MaterialsLayout>
                {children}
            </MaterialsLayout>
        </div>
    )
}

