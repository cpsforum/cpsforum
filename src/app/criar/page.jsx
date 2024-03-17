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
import dynamic from 'next/dynamic';


const Main = styled.main`
    padding: 2rem 1rem 2rem 1rem;
`

const Editor = dynamic(() => import('@/components/editor/editor'), { ssr: false })

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
        body: z.string().min(20, {
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
        console.log(values)
    }

    //State para etapas
    const [step, setStep] = React.useState(1);
    return (
        <Main>
            <h2 className="scroll-m-20 pb-5 font-medium text-3xl tracking-tight first:mt-0">
                Criar tópico
            </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 max-w-[1000px]">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className={`p-4 rounded-md border`}>
                                <FormLabel>Título</FormLabel>
                                <FormDescription className="!mt-0">
                                    Seja conciso e tente resumir seu tópico em uma linha.
                                </FormDescription>
                                <FormControl>
                                    <Input placeholder="Como resolver essa equação?" {...field} />
                                </FormControl>
                                <FormMessage />
                                {step == 1 ? <Button size={"sm"} onClick={() => setStep(step+1)} type="next" id={"next"}>Próximo</Button> : null}
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="privacy"
                        render={({ field }) => (
                            <FormItem className={`p-4 rounded-md border ${step >= 2 ? null:"bg-muted cursor-not-allowed opacity-50"}`}>
                                <FormLabel>Privacidade</FormLabel>
                                <FormDescription className="!mt-0">
                                    Selecione a visibilidade de seu tópico.
                                </FormDescription>
                                <FormControl>
                                    <Select disabled={step >= 2 ? false:true} onValueChange={field.onChange} defaultValue={field.value} className="overflow-auto">
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
                                {step == 2 ? <Button size={"sm"} onClick={() => setStep(step+1)} type="next" id={"next"}>Próximo</Button> : null}
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="section"
                        render={({ field }) => (
                            <FormItem className={`p-4 rounded-md border ${step >= 3 ? null:"bg-muted cursor-not-allowed opacity-50"}`}>
                                <FormLabel>Seção</FormLabel>
                                <FormDescription className="!mt-0">
                                    Selecione em qual seção seu tópico será postado.
                                </FormDescription>
                                <FormControl>
                                    <Select disabled={step >= 3 ? false:true} className="overflow-auto" onValueChange={field.onChange} defaultValue={field.value} >
                                        <SelectTrigger className="w-[300px]">
                                            <SelectValue placeholder="Selecione a seção" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {sectionlinks.map((supersection, i) =>
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
                                {step == 3 ? <Button size={"sm"} onClick={() => setStep(step+1)} type="next" id={"next"}>Próximo</Button> : null}
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem className={`p-4 rounded-md border ${step >= 4 ? '':"bg-muted cursor-not-allowed opacity-50"}`}>
                                <FormLabel>Corpo</FormLabel>
                                <FormDescription className="!mt-0">
                                    Escreva aqui o corpo de seu tópico.
                                </FormDescription>
                                <FormControl>
                                    <Editor disabled={step == 4 ? false : true} field={field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className={`${step >= 4 ? '':"cursor-not-allowed opacity-50"}`}>
                    <Button className={`${step >= 4 ? '':"pointer-events-none"}`} type="submit">Criar tópico</Button>
                    </div>
                </form>
            </Form>
        </Main>
    )
}