import { MDXEditor } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css'
import '@/components/editor/editor.css'

export default function ClientMDXEditor({innerref, ...props }) {
    return (
        <MDXEditor ref={innerref} {...props} />
    )
}