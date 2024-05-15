import MessagesLayout from "@/components/layout/messageslayout";

export default function ChatLayout({ children }) {
    return (
        <MessagesLayout>
            {children}
        </MessagesLayout>
    )
}
