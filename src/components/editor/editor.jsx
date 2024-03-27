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
import InsertMathLive from '@/components/editor/insertmathlive';
import EnterFullScreen from '@/components/editor/enterfullscreen';
import { CloudUploadIcon, CloudIcon } from 'lucide-react';
import i18next from 'i18next';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import {toast} from 'sonner'

const ClientMDXEditor = dynamic(() => import('@/components/editor/clientMDXEditor'), { ssr: false })

//Localizador para o editor
i18next.init({
    lng: 'pt',
    debug: true,
    resources: {
        pt: {
            translation: {
                "frontmatterEditor": {
                    "title": "Editar frontmatter do documento",
                    "key": "Chave",
                    "value": "Valor",
                    "addEntry": "Adicionar entrada"
                },
                "dialogControls": {
                    "save": "Salvar",
                    "cancel": "Cancelar"
                },
                "uploadImage": {
                    "uploadInstructions": "Enviar uma imagem do seu dispotivo:",
                    "addViaUrlInstructions": "Ou adicionar uma imagem a partir de um URL:",
                    "autoCompletePlaceholder": "Insira um link de imagem",
                    "alt": "Texto alternativo:",
                    "title": "Título:"
                },
                "imageEditor": {
                    "editImage": "Editar imagem"
                },
                "createLink": {
                    "url": "URL",
                    "urlPlaceholder": "Insira um URL",
                    "title": "Título",
                    "saveTooltip": "Definir URL",
                    "cancelTooltip": "Cancelar"
                },
                "linkPreview": {
                    "open": "Abrir {{url}} em uma nova janela",
                    "edit": "Editar URL",
                    "copyToClipboard": "Copiar para a área de transferência",
                    "copied": "Copiado para a área de transferência!",
                    "remove": "Remover link"
                },
                "table": {
                    "deleteTable": "Deletar tabela",
                    "columnMenu": "Opções da coluna",
                    "textAlignment": "Alinhamento do texto",
                    "alignLeft": "Alinhar à esquerda",
                    "alignCenter": "Centralizar",
                    "alignRight": "Alinhar à direita",
                    "insertColumnLeft": "Inserir uma coluna à esquerda desta",
                    "insertColumnRight": "Inserir uma coluna à direita desta",
                    "deleteColumn": "Deletar esta coluna",
                    "rowMenu": "Opções de linha",
                    "insertRowAbove": "Inserir uma linha acima desta",
                    "insertRowBelow": "Inserir uma linha abaixo desta",
                    "deleteRow": "Deletar esta linha"
                },
                "toolbar": {
                    "blockTypes": {
                        "paragraph": "Parágrafo",
                        "quote": "Citação",
                        "heading": "Cabeçalho {{level}}"
                    },
                    "blockTypeSelect": {
                        "selectBlockTypeTooltip": "Selecione o tipo de bloco de texto",
                        "placeholder": "Bloco de texto"
                    },
                    "removeBold": "Remover negrito",
                    "bold": "Negrito",
                    "removeItalic": "Remover itálico",
                    "italic": "Itálico",
                    "underline": "Sublinhado",
                    "removeUnderline": "Remover sublinhado",
                    "removeInlineCode": "Remover linha de código",
                    "inlineCode": "Linha de código",
                    "link": "Criar link",
                    "richText": "Modo rich text",
                    "diffMode": "Modo de diferença",
                    "source": "Modo código fonte",
                    "admonition": "Inserir aviso",
                    "codeBlock": "Inserir bloco de código",
                    "editFrontmatter": "Editar frontmatter",
                    "insertFrontmatter": "Inserir frontmatter",
                    "image": "Inserir imagem",
                    "insertSandpack": "Inserir Sandpack",
                    "table": "Inserir tabela",
                    "thematicBreak": "Inserir quebra de seção",
                    "bulletedList": "Lista com marcadores",
                    "numberedList": "Lista numerada",
                    "checkList": "Checklist",
                    "deleteSandpack": "Deletar esse bloco de código",
                    "undo": "Desfazer {{shortcut}}",
                    "redo": "Refazer {{shortcut}}"
                },
                "admonitions": {
                    "note": "Nota",
                    "tip": "Dica",
                    "danger": "Perigo",
                    "info": "Informação",
                    "caution": "Cuidado",
                    "changeType": "Selecionar tipo de aviso",
                    "placeholder": "Tipo de aviso"
                },
                "codeBlock": {
                    "language": "Linguagem do bloco de código",
                    "selectLanguage": "Selecionar linguagem do bloco de código"
                }
            }
        }
    }
})

export var ref

var [autoSaveState, setAutoSaveState] = ""

async function imageUploadHandler(media) {  
    toast("Enviando imagem", {
        description: media.name
    })
    const formData = new FormData();
    formData.append('media', media);
    try {
        var response = await fetch('https://forum-php.vercel.app/api', {
            method: 'POST',
            body: formData
        });
        toast("Imagem enviada com sucesso",{
            description: "A imagem foi adicionada ao editor.",
        });
    } catch (error) {
        toast("Falha ao enviar imagem", {
            description: "Um erro pode ter ocorrido ou sua imagem pode conter conteúdo impróprio. Tente novamente mais tarde.",
            style: {
                background: 'rgb(127, 29, 29)',
              },
              
        });
    }
    const json = (await response.json())
    return (
        json
    );
}

const AutoSaveState = () => {
    [autoSaveState, setAutoSaveState] = React.useState([0])
    return (
        <div className='flex px-1 text-muted-foreground'>
            {autoSaveState == 0 ?
                <>
                    <div className='me-1'>
                        <CloudIcon size={12} fill='hsl(var(--muted-foreground))' />
                    </div>
                    <span className='text-[10px]'>Alterações salvas</span>
                </>
                :
                <>
                    <CloudUploadIcon size={12} />
                    <span className='text-[10px]'>Armazenando suas alterações...</span>
                </>
            }
        </div>
    )
}

export default function Editor({ disabled, field }) {       
    ref = React.useRef(null);
    var timeoutID
    const onChangeHandler = () => { 
        if (autoSaveState == 0) {
            setAutoSaveState([1])
        }
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => {
            typeof window !== "undefined" ? window.localStorage.setItem('editor-auto-saved-content', ref.current?.getMarkdown()) : null;
            setAutoSaveState([0])
        }, 3000);
    }
    const { theme, resolvedTheme } = useTheme()
    return (
        <div id='editor'>            
            <ClientMDXEditor
                translation={(key, defaultValue, interpolations) => { return i18next.t(key, defaultValue, interpolations) }}
                className={`!font-mono prose max-w-none dark:prose-invert prose-headings:my-1 prose-p:my-1 ${theme == 'dark' || resolvedTheme == 'dark' ? 'dark-theme dark-editor' : ''} ${disabled ? 'pointer-events-none' : ''}`}
                markdown={field.value}
                onChange={onChangeHandler}
                onBlur={() => field.onChange(ref.current?.getMarkdown())  }
                innerref={ref}
                plugins={[
                    //Plugins
                    headingsPlugin(),
                    quotePlugin(),
                    listsPlugin(),
                    tablePlugin(),
                    linkPlugin(),
                    imagePlugin({
                        imageUploadHandler
                    }),
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
