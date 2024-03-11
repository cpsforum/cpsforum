'use client'

import React from 'react'
import {
    MDXEditor,
    linkPlugin,
    markdownShortcutPlugin,
    Separator,
    codeMirrorPlugin,
    BlockTypeSelect,
    InsertCodeBlock,
    headingsPlugin,
    quotePlugin,
    listsPlugin,
    thematicBreakPlugin,
    UndoRedo,
    BoldItalicUnderlineToggles,
    toolbarPlugin,
    codeBlockPlugin,
    tablePlugin,
    InsertTable,
    imagePlugin,
    InsertImage,
    linkDialogPlugin,
    ConditionalContents,
    ListsToggle,
    InsertThematicBreak,
    ChangeCodeMirrorLanguage
}
    from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css'
import InsertMathLive from '@/components/editor/insertmathlive';
import EnterFullScreen from '@/components/editor/enterfullscreen';
import '@/components/editor/editor.css'
import { CloudUploadIcon, CloudIcon } from 'lucide-react';

export var ref

var [autoSaveState, setAutoSaveState] = [0, <CloudIcon size={12} fill='hsl(var(--muted-foreground))' />, 'Alterações salvas']

async function imageUploadHandler(media) {
    const formData = new FormData()
    formData.append('media', media)
    const response = await fetch('https://forum-php.vercel.app/api', {
        method: 'POST',
        body: formData
    })
    const json = (await response.json())
    return json
}

const AutoSaveState = () => {
    [autoSaveState, setAutoSaveState] = React.useState([0, <CloudIcon size={12} fill='hsl(var(--muted-foreground))' />, 'Alterações salvas'])
    return (
        <div className='flex px-1 text-muted-foreground'>
            <div className='me-1'>
                {autoSaveState[1]}
            </div>
            <span style={{ fontSize: '10px' }}>{autoSaveState[2]}</span>
        </div>
    )
}

var timeoutID
const autoSave = () => {   
    if (autoSaveState[0] == 0) {
        setAutoSaveState([1, <CloudUploadIcon size={12} />, 'Armezenando suas alterações...'])
    }
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
        localStorage.setItem('editor-auto-saved-content', ref.current?.getMarkdown());
        setAutoSaveState([0, <CloudIcon size={12} fill='hsl(var(--muted-foreground))' />, 'Alterações salvas'])
    }, 3000);
}

export default function Editor({disabled, field}) {
    ref = React.useRef(null);
    const onChangeHandler = () =>{
        field.onChange()
        autoSave()
    }
    return (
        <div id='editor'>
            <MDXEditor
                className={`!font-mono prose max-w-none prose-p:my-1 ${disabled ? 'pointer-events-none' : ''}`}
                markdown={field.value}
                onChange={onChangeHandler}
                ref={ref}
                plugins={[
                    //Plugins
                    headingsPlugin(),
                    quotePlugin(),
                    listsPlugin(),
                    tablePlugin(),
                    linkPlugin(),
                    imagePlugin({ imageUploadHandler }),
                    linkPlugin(),
                    linkDialogPlugin(),
                    thematicBreakPlugin(),
                    codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
                    codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', html: 'HTML', css: 'CSS' } }),
                    markdownShortcutPlugin(),
                    //Toolbar
                    toolbarPlugin({
                        toolbarContents: () => (
                            <>
                                <UndoRedo />
                                <Separator />
                                <BlockTypeSelect />
                                <BoldItalicUnderlineToggles />
                                <Separator />
                                <ListsToggle />
                                <Separator />
                                <InsertImage />
                                <Separator />
                                <InsertTable />
                                <InsertThematicBreak />
                                <Separator />
                                <InsertCodeBlock />
                                <InsertMathLive />
                                <Separator />
                                <EnterFullScreen />
                                <ConditionalContents
                                    options={[
                                        { when: (editor) => editor?.editorType === 'codeblock', contents: () => <><Separator /><ChangeCodeMirrorLanguage /></> },
                                    ]}
                                />
                            </>
                        )
                    })
                ]}
            />
            <AutoSaveState />
        </div>
    )
}