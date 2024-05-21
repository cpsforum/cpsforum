'use client'

import React from 'react';
import {
    useFormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
}
    from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import styled from 'styled-components'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
} from "@/components/ui/select"
import { sectionlinks } from '@/components/data/section-data'
import Editor from '@/components/editor/editor';
import { toast } from 'sonner';
import Footer from '@/components/footer/footer';


const Main = styled.main`
    padding: 2rem 1rem 2rem 1rem;
`

export default function Criar() {
    //Schema para o form
    const formSchema = z.object({
        title: z.string()
            .min(15, {
                message: "O título deve ter no mínimo 15 caracteres.",
            })
            .max(150, {
                message: "O título deve ter no máximo 150 caracteres.",
            }),
        privacy: z.string({
            required_error: "Selecione a privacidade do tópico."
        }),
        section: z.string({
            required_error: "Selecione uma seção."
        }),
        // tags: z.string({required_error: "Insira ao menos uma tag valida."}),
        body: z.string({
            required_error: "O corpo do tópico é obrigatório."
        }).min(20, {
            message: "O corpo do tópico deve ter no mínimo 20 caracteres.",
        })
    })

    const editorAutoSavedValue = typeof window !== "undefined" ? window.localStorage.getItem('editor-auto-saved-content') || '' : '';

    //Hook do form
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            privacy: "public",
            body: editorAutoSavedValue,
        }
    });

    //onSubmit
    function onSubmit(values) {
        toast("Tópico criado com sucesso!", {
            description: JSON.stringify(values),
        })
    }

    //State para etapas
    const [step, setStep] = React.useState(1);
    const [tags, setTags] = React.useState([]);
    const [inputTag, setInputTag] = React.useState("");


    React.useEffect(() => {
        
    }, [tags])
    
    const handleTags = () => {
        if (inputTag.trim() !== "" && !tags.includes(inputTag) & tags.length < 6) {
            setTags([...tags, inputTag.trim()]);
            setInputTag("");
        }
    }
    const removeTag = (tagToRemove) => {
        const updatedTags = tags.filter(tag => tag !== tagToRemove);
        setTags(updatedTags);
    } 
    return (
        <div className='flex flex-col justify-items-center items-center'>

            <Main className=''>
                <h2 className="scroll-m-20 pb-5 font-medium text-3xl tracking-tight first:mt-0">
                    Criar tópico
                </h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 max-w-[1000px]">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className={`p-4 bg-muted rounded-md border`}>
                                    <FormLabel>Título</FormLabel>
                                    <FormDescription className="!mt-0">
                                        Seja conciso e tente resumir seu tópico em uma linha.
                                    </FormDescription>
                                    <FormControl>
                                        <Input placeholder="Como resolver essa equação?" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    {step == 1 ? <Button size={"sm"} onClick={() => setStep(step + 1)} type="next" id={"next"}>Próximo</Button> : null}
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="privacy"
                            render={({ field }) => (
                                <FormItem className={`p-4 bg-muted rounded-md border ${step >= 2 ? null : "cursor-not-allowed opacity-50"}`}>
                                    <FormLabel>Privacidade</FormLabel>
                                    <FormDescription className="!mt-0">
                                        Selecione a visibilidade de seu tópico.
                                    </FormDescription>
                                    <FormControl>
                                        <Select disabled={step >= 2 ? false : true} onValueChange={field.onChange} defaultValue={field.value} className="overflow-auto">
                                            <SelectTrigger className="w-[300px]">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="public">Público</SelectItem>
                                                <SelectItem value="institution">Minha instituição</SelectItem>
                                                <SelectItem value="private">Privado</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                    {step == 2 ? <Button size={"sm"} onClick={() => setStep(step + 1)} type="next" id={"next"}>Próximo</Button> : null}
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="section"
                            render={({ field }) => (
                                <FormItem className={`p-4 rounded-md bg-muted border ${step >= 3 ? null : "cursor-not-allowed opacity-50"}`}>
                                    <FormLabel>Seção</FormLabel>
                                    <FormDescription className="!mt-0">
                                        Selecione em qual seção seu tópico será postado.
                                    </FormDescription>
                                    <FormControl>
                                        <Select disabled={step >= 3 ? false : true} className="overflow-auto" onValueChange={field.onChange} defaultValue={field.value} >
                                            <SelectTrigger className="w-[300px]">
                                                <SelectValue placeholder="Selecione a seção" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {sectionlinks.slice(1).map((supersection, i) =>
                                                    <SelectGroup key={i}>
                                                        <SelectLabel>{supersection.title}</SelectLabel>
                                                        {supersection.sections.map((section, si) =>
                                                            <SelectItem key={si} value={section.slug}>{section.title}</SelectItem>
                                                        )}
                                                    </SelectGroup>
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                    {step == 3 ? <Button size={"sm"} onClick={() => setStep(step + 1)} type="next" id={"next"}>Próximo</Button> : null}
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="tags"
                            render={({ field }) => (
                                <FormItem className={`p-4 bg-muted rounded-md border ${step >= 4 ? null : "cursor-not-allowed opacity-50"}`}>
                                    <FormLabel>Tags</FormLabel>
                                    <FormDescription className="!mt-0">
                                        Digite as Tags de seu tópico. (Opcional)
                                    </FormDescription>
                                    <div className='tag-row'>
                                        {tags.map((tag, key) => (
                                            <div key={key} className="tag bg-slate-800">
                                                <span className='text-blue-500'>{tag}</span>
                                                <span onClick={() => removeTag(tag)} className='close-tag bg-slate-700 text-blue-500'>
                                                    <svg className='fill-blue-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <FormControl>
                                        <FormControl>
                                            <div>
                                                <Input
                                                    c
                                                    name="tags"
                                                    placeholder="Exemplos: Frações, Pítagoras, Guerra Fria"
                                                    {...field}
                                                    onChange={(e) => setInputTag(e.target.value)}
                                                />
                                            </div>
                                        </FormControl>

                                    </FormControl>
                                    <FormMessage className="m-1" />
                                    <Button size={'sm'} className="mr-3 ml-1" onClick={handleTags}>Add Tag</Button>
                                    {step == 4 ? <Button size={"sm"} onClick={() => { setStep(step + 1); }} type="next" id={"next"}>Próximo</Button> : null}
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="body"
                            render={({ field }) => (
                                <FormItem className={`p-4 rounded-md bg-muted border ${step >= 5 ? '' : "cursor-not-allowed opacity-50"}`}>
                                    <FormLabel>Corpo</FormLabel>
                                    <FormDescription className="!mt-0">
                                        Escreva aqui o corpo de seu tópico.
                                    </FormDescription>
                                    <FormControl>
                                        <Editor disabled={step >= 4 ? false : true} field={field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className={`${step >= 5 ? '' : "cursor-not-allowed opacity-50"} text-right`}>
                            <Button className={`${step >= 5 ? '' : "pointer-events-none"}`} type="submit">Criar tópico</Button>
                        </div>
                    </form>
                </Form>
            </Main>
            <Footer/>
        </div>

    )
}