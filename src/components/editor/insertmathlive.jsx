'use client'

import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, RowSpacingIcon } from '@radix-ui/react-icons';
import * as Collapsible from '@radix-ui/react-collapsible';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import 'mathlive';
import 'mathlive/fonts.css';
import { ref } from '@/components/editor/editor';
import { renderMathInElement } from 'mathlive';
import * as Separator from '@radix-ui/react-separator';
import * as Tooltip from "@radix-ui/react-tooltip";
import '@/components/editor/insertmathlive.css'

function insertLatex() {
    ref.current?.focus();
    // O editor não permite espaço/quebra de linha no começo do texto, então é necessário inserir um caractere invisível
    ref.current?.insertMarkdown(`
    ‎

    $$
    ` + document.getElementById('mfdialog').getValue() + ` 
    $$

    ‎
    `);
    renderMathInElement('editor')

}

const InsertMathLive = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Dialog.Root>
            <Tooltip.Provider delayDuration={100}>
                <Tooltip.Root>
                    <Dialog.Trigger asChild>
                        <Tooltip.Trigger asChild>
                            <span className='_tooltipTrigger_19o4e_630'>
                                <button type="button" className="_toolbarButton_19o4e_218" data-toolbar-item="true" tabIndex="0" data-orientation="horizontal" data-radix-collection-item="">
                                    <div className="mathlive-icon">
                                        <svg width="20" height="20" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M295.648 32h267.304v64.029H336.208L229.677 480h-45.936L75.842 288.114H0v-64.028h119.236l74.377 143.664L295.648 32Zm88.841 201.49c12.216-12.506 9.296-9.716 22.039-22.76l62.599 64.078 62.599-64.078 22.137 22.66L576 256.05l-62.599 64.079L576 384.207l-22.137 22.66-22.137 22.66-62.599-64.078-62.599 64.078-22.137-22.66-22.137-22.66 62.599-64.078-62.501-63.979c7.59-7.97 9.822-10.255 22.039-22.76l.098.1Z" fill='var(--baseText)' />
                                        </svg>
                                    </div>
                                </button>
                            </span>
                        </Tooltip.Trigger>                        
                    </Dialog.Trigger>
                    <Tooltip.Portal>
                            <Tooltip.Content className='TooltipContent' sideOffset={10}>
                                Inserir fórmula
                            </Tooltip.Content>
                        </Tooltip.Portal>
                    <Dialog.Portal>
                        <Dialog.Overlay className="DialogOverlay" />
                        <Dialog.Content className="DialogContent" onPointerDownOutside={(e) => e.preventDefault()}>
                            <Dialog.Title className="DialogTitle">Inserir fórmula</Dialog.Title>
                            <Dialog.Description className="DialogDescription">
                                Utilize o teclado virtual, insira LaTeX ou digite a fórmula no campo abaixo.
                            </Dialog.Description>
                            <math-field id="mfdialog" value="x=y">
                            </math-field>
                            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                                <Dialog.Close className='DialogClose' asChild>
                                    <button className="Button blue" onClick={() => insertLatex()}>Inserir</button>
                                </Dialog.Close>
                            </div>
                            <Dialog.Close className='DialogClose' asChild>
                                <button className="IconButton" aria-label="Close">
                                    <Cross2Icon />
                                </button>
                            </Dialog.Close>
                            <Collapsible.Root className="CollapsibleRoot" open={open} onOpenChange={setOpen}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span className="Text" style={{ fontWeight: 500, color: 'var(--font)', marginRight: '10px' }}>
                                        Atalhos de teclado
                                    </span>
                                    <Collapsible.Trigger asChild>
                                        <button className="IconButtonIn">{open ? <Cross2Icon /> : <RowSpacingIcon />}</button>
                                    </Collapsible.Trigger>
                                </div>
                                <Separator.Root className="SeparatorRoot" style={{ margin: '15px 0' }} />
                                <Collapsible.Content>
                                    <ScrollArea.Root className="ScrollAreaRoot">
                                        <ScrollArea.Viewport className="ScrollAreaViewport">
                                            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', width: '100%' }}>
                                                <div className='mathlive-cell'>

                                                    <div className="mathlive-icon">
                                                        <svg
                                                            width="31px" height="49px">
                                                            <path fill-rule="evenodd" fill="var(--font)"
                                                                d="M0.875,24.875 L0.875,24.125 L30.500,24.125 L30.500,24.875 L0.875,24.875 ZM6.500,0.125 L24.500,0.125 L24.500,18.125 L6.500,18.125 L6.500,0.125 ZM24.500,48.500 L6.500,48.500 L6.500,30.500 L24.500,30.500 L24.500,48.500 Z" />
                                                        </svg>
                                                    </div>
                                                    <label className='label'>Fração</label>
                                                    <div className='shortcut'>
                                                        <kbd>;</kbd>
                                                    </div>
                                                </div>
                                                <div className='mathlive-cell'>
                                                    <div className="mathlive-icon">
                                                        <svg
                                                            width="30px" height="28px">
                                                            <path fill-rule="evenodd" fill="var(--font)"
                                                                d="M21.000,8.1000 L21.000,-0.000 L30.000,-0.000 L30.000,8.1000 L21.000,8.1000 ZM-0.000,8.1000 L19.000,8.1000 L19.000,28.000 L-0.000,28.000 L-0.000,8.1000 Z" />
                                                        </svg>
                                                    </div>
                                                    <label className='label'>Superscrito, elevado</label>
                                                    <div className='shortcut'>
                                                        <kbd>^</kbd>
                                                    </div>
                                                </div>
                                                <div className='mathlive-cell'>
                                                    <div className="mathlive-icon">
                                                        <svg
                                                            width="30px" height="24px">
                                                            <path fill-rule="evenodd" fill="var(--font)"
                                                                d="M21.000,24.000 L21.000,14.1000 L30.000,14.1000 L30.000,24.000 L21.000,24.000 ZM-0.000,-0.000 L19.000,-0.000 L19.000,19.000 L-0.000,19.000 L-0.000,-0.000 Z" />
                                                        </svg>
                                                    </div>
                                                    <label className='label'>Subscrito</label>
                                                    <div className='shortcut'>
                                                        <kbd>_</kbd>
                                                    </div>
                                                </div>
                                                <div className='mathlive-cell'>
                                                    <div className="mathlive-icon">
                                                        <svg
                                                            width="45px" height="28px">
                                                            <path fill-rule="evenodd" fill="var(--font)"
                                                                d="M18.786,1.625 L9.330,27.439 L8.391,27.095 L8.482,26.846 L8.386,26.921 L2.865,19.814 L1.461,20.741 L0.910,19.907 L2.275,19.005 L3.831,17.797 L9.245,24.765 L18.000,0.863 L18.000,0.625 L44.1000,0.625 L44.1000,1.625 L18.786,1.625 ZM38.1000,26.1000 L20.000,26.1000 L20.000,7.1000 L38.1000,7.1000 L38.1000,26.1000 Z" />
                                                        </svg>
                                                    </div>
                                                    <label className='label'>Raíz quadrada</label>
                                                    <div className='shortcut'>
                                                        <kbd>sqrt</kbd>
                                                    </div>
                                                </div>
                                                <div className='mathlive-cell'>
                                                    <div className="mathlive-icon">
                                                        <svg
                                                            width="27px" height="58px">
                                                            <path fill-rule="evenodd" fill="var(--font)"
                                                                d="M16.727,57.085 L16.727,46.825 L26.988,46.825 L26.988,57.085 L16.727,57.085 ZM16.727,0.825 L26.988,0.825 L26.988,11.085 L16.727,11.085 L16.727,0.825 ZM12.955,9.989 C12.609,9.890 12.280,9.646 12.081,9.138 C11.497,7.768 10.901,8.400 10.764,9.263 C10.486,11.038 10.262,18.843 9.438,25.425 L8.147,35.882 C7.201,43.481 5.802,49.698 5.125,51.810 C4.442,53.971 3.396,55.627 1.666,55.133 C0.596,54.828 0.110,53.186 0.035,52.462 C-0.089,51.325 0.285,50.379 1.110,50.013 C1.904,49.638 2.331,50.411 2.787,51.494 C3.544,53.314 4.353,49.836 4.640,46.910 C5.009,43.307 5.559,37.650 6.527,29.606 L7.366,22.628 C8.025,17.152 8.772,10.950 10.115,7.624 C10.901,5.693 11.870,4.667 13.035,4.999 C14.199,5.331 14.959,6.852 14.779,8.354 C14.627,9.614 13.647,10.186 12.955,9.989 Z" />
                                                        </svg>
                                                    </div>
                                                    <label className='label'>Integral</label>
                                                    <div className='shortcut'>
                                                        <kbd>int</kbd>
                                                    </div>
                                                </div>
                                                <div className='mathlive-cell'>
                                                    <div className="mathlive-icon">
                                                        <svg
                                                            width="28px" height="29px">
                                                            <path fill-rule="evenodd" fill="var(--font)"
                                                                d="M0.620,27.165 C3.453,24.405 10.150,17.652 12.725,14.957 C8.518,10.281 4.784,6.158 0.791,1.482 C0.620,1.287 0.620,1.222 0.620,1.093 C0.620,0.898 0.834,0.833 1.478,0.833 L14.400,0.833 C15.730,0.833 17.791,0.865 21.869,0.735 C23.028,0.703 23.286,0.508 23.672,0.508 C23.930,0.508 24.016,0.670 24.101,1.125 C24.316,2.099 24.960,5.054 24.960,5.443 C24.960,5.703 24.917,5.865 24.702,5.865 C24.488,5.865 24.316,5.768 24.230,5.281 C24.101,4.534 23.329,3.333 21.783,2.716 C20.410,2.164 17.791,2.067 15.602,2.067 L5.385,2.067 C8.948,5.995 12.468,10.021 15.988,14.048 C12.682,17.424 7.231,22.814 4.011,26.061 L18.650,26.061 C23.157,26.061 24.531,25.444 25.432,24.470 C25.819,24.048 26.205,23.171 26.291,22.717 C26.377,22.392 26.463,22.197 26.677,22.197 C26.935,22.197 27.021,22.327 27.021,22.944 C27.021,23.951 26.420,26.840 26.162,27.652 C25.904,28.431 25.862,28.496 24.874,28.496 C17.705,28.496 8.304,28.334 0.791,28.334 C0.276,28.334 0.019,28.301 0.019,28.074 C0.019,27.912 0.061,27.717 0.620,27.165 Z" />
                                                        </svg>
                                                    </div>
                                                    <label className='label'>Soma</label>
                                                    <div className='shortcut'>
                                                        <kbd>sum</kbd>
                                                    </div>
                                                </div>
                                                <div className='mathlive-cell'>
                                                    <div className="mathlive-icon">
                                                        <svg
                                                            width="26px" height="59px">
                                                            <path fill-rule="evenodd" fill="var(--font)"
                                                                d="M24.602,46.037 C22.810,46.037 20.955,45.941 20.795,45.941 C20.635,45.941 18.619,46.037 17.659,46.037 C17.307,46.037 17.147,45.973 17.147,45.781 C17.147,45.685 17.211,45.589 17.403,45.589 C17.691,45.589 18.075,45.525 18.363,45.461 C19.003,45.333 19.163,44.629 19.291,43.701 C19.451,42.357 19.451,39.797 19.451,36.725 L19.451,15.319 C19.451,15.191 19.355,15.127 19.259,15.127 L5.788,15.127 C5.692,15.127 5.596,15.159 5.596,15.319 L5.596,36.725 C5.596,39.797 5.596,42.357 5.756,43.701 C5.852,44.629 6.044,45.333 7.004,45.461 C7.452,45.525 8.155,45.589 8.443,45.589 C8.635,45.589 8.699,45.685 8.699,45.781 C8.699,45.941 8.539,46.037 8.187,46.037 C6.428,46.037 4.380,45.941 4.220,45.941 C4.060,45.941 2.204,46.037 1.244,46.037 C0.892,46.037 0.732,45.973 0.732,45.781 C0.732,45.685 0.796,45.589 0.988,45.589 C1.276,45.589 1.660,45.525 1.948,45.461 C2.588,45.333 2.748,44.629 2.876,43.701 C3.036,42.357 3.036,39.797 3.036,36.725 L3.036,23.350 C3.036,18.327 3.036,17.431 2.972,16.407 C2.908,15.319 2.652,14.807 1.596,14.583 C1.340,14.519 0.796,14.487 0.508,14.487 C0.380,14.487 0.252,14.423 0.252,14.295 C0.252,14.103 0.412,14.039 0.764,14.039 C2.268,14.039 4.156,14.135 4.380,14.135 L20.635,14.135 C20.987,14.135 21.531,14.103 22.106,14.071 C22.682,14.071 23.322,14.039 23.802,14.039 C24.154,14.039 24.314,14.103 24.314,14.295 C24.314,14.423 24.186,14.487 24.058,14.487 C23.834,14.487 23.610,14.519 23.226,14.583 C22.362,14.743 22.106,15.287 22.042,16.407 C21.978,17.431 21.978,18.327 21.978,23.350 L21.978,36.725 C21.978,39.797 21.978,42.357 22.138,43.701 C22.234,44.629 22.426,45.333 23.386,45.461 C23.866,45.525 24.570,45.589 24.858,45.589 C25.050,45.589 25.114,45.685 25.114,45.781 C25.114,45.941 24.954,46.037 24.602,46.037 ZM6.727,0.825 L16.988,0.825 L16.988,11.085 L6.727,11.085 L6.727,0.825 ZM16.988,58.085 L6.727,58.085 L6.727,47.825 L16.988,47.825 L16.988,58.085 Z" />
                                                        </svg>
                                                    </div>
                                                    <label className='label'>Produto</label>
                                                    <div className='shortcut'>
                                                        <kbd>prod</kbd>
                                                    </div>
                                                </div>
                                                <div className='mathlive-cell'>
                                                    <div className="mathlive-icon">
                                                        <svg
                                                            width="17px" height="18px">
                                                            <path fill-rule="evenodd" fill="var(--font)"
                                                                d="M6.142,4.917 C6.142,7.957 6.110,11.125 5.438,14.101 C5.022,15.924 3.902,17.460 1.758,17.460 C1.406,17.460 1.214,17.396 1.214,17.236 C1.214,17.108 1.374,17.108 1.470,17.012 C2.622,16.084 2.974,14.965 3.294,14.101 C4.286,11.285 4.606,7.413 4.606,4.885 C3.614,4.885 3.134,4.885 2.270,5.333 C1.278,5.845 1.054,6.581 0.958,7.221 C0.894,7.637 0.734,7.701 0.574,7.701 C0.446,7.701 0.414,7.573 0.414,7.349 C0.414,5.685 1.438,3.061 2.910,2.965 C5.470,2.805 4.766,2.869 5.694,2.869 C7.838,2.869 8.414,2.997 10.878,2.965 L13.053,2.933 C14.813,2.901 15.645,2.421 15.901,1.110 C15.933,0.886 16.029,0.790 16.157,0.790 C16.285,0.790 16.381,0.886 16.381,1.270 C16.381,1.622 16.189,3.093 15.965,4.213 C15.837,4.757 15.773,5.013 13.949,5.013 C12.765,5.013 14.045,5.077 12.989,5.013 C12.829,7.317 12.733,9.941 12.765,12.245 C12.797,14.869 13.437,15.189 14.013,15.189 C15.037,15.189 15.453,14.773 15.741,14.389 C15.869,14.197 15.869,14.069 15.997,14.069 C16.125,14.069 16.221,14.165 16.221,14.549 C16.221,15.636 15.005,17.396 13.597,17.396 C12.094,17.396 10.590,16.884 10.590,13.333 C10.590,10.325 10.718,7.605 10.878,4.949 C9.054,4.917 7.422,4.917 6.142,4.917 Z" />
                                                        </svg>
                                                    </div>
                                                    <label className='label'>Pi</label>
                                                    <div className='shortcut'>
                                                        <kbd>pi</kbd>
                                                    </div>
                                                </div>
                                                <div className='mathlive-cell'>
                                                    <div className="mathlive-icon">
                                                        <svg
                                                            width="22px" height="10px">
                                                            <path fill-rule="evenodd" fill="var(--font)"
                                                                d="M0.158,4.085 C-0.098,6.453 1.918,9.301 4.862,9.013 C8.158,8.693 9.982,6.293 10.750,5.621 C11.518,6.293 13.341,8.693 16.637,9.013 C19.581,9.301 21.597,6.453 21.341,4.085 C21.053,1.269 17.981,-0.875 14.877,0.501 C13.373,1.173 12.701,1.749 10.750,3.509 C8.798,1.749 8.126,1.173 6.622,0.501 C3.518,-0.875 0.446,1.269 0.158,4.085 ZM1.758,4.725 C1.726,3.317 3.134,1.013 5.886,1.973 C6.974,2.357 7.870,3.029 9.694,4.565 C7.806,6.389 7.262,6.997 5.470,7.413 C3.710,7.829 1.822,6.613 1.758,4.725 ZM19.741,4.725 C19.677,6.613 17.789,7.829 16.029,7.413 C14.237,6.997 13.693,6.389 11.806,4.565 C13.629,3.029 14.525,2.357 15.613,1.973 C18.365,1.013 19.773,3.317 19.741,4.725 Z" />
                                                        </svg>
                                                    </div>
                                                    <label className='label'>Infinito</label>
                                                    <div className='shortcut'>
                                                        <kbd>o</kbd><kbd>o</kbd>
                                                    </div>
                                                </div>
                                                <div className='mathlive-cell'>
                                                    <div className="mathlive-icon">
                                                        <svg
                                                            width="15px" height="17px">
                                                            <path fill-rule="evenodd" fill="var(--font)"
                                                                d="M6.686,0.246 L6.686,6.229 L0.670,6.229 L0.670,7.861 L6.686,7.861 L6.686,13.909 L8.350,13.909 L8.350,7.861 L14.301,7.861 L14.301,6.229 L8.318,6.229 L8.318,0.246 L6.686,0.246 ZM14.301,15.413 L0.670,15.413 L0.670,17.012 L14.301,17.012 L14.301,15.413 Z" />
                                                        </svg>
                                                    </div>
                                                    <label className='label'>Mais ou menos</label>
                                                    <div className='shortcut'>
                                                        <kbd>+</kbd><kbd>-</kbd>
                                                    </div>
                                                </div>
                                                <div className='mathlive-cell'>
                                                    <div className="mathlive-icon">
                                                        <svg
                                                            width="25" height="24.854" viewBox="0 0 22.5 22.369">
                                                            <path fill="var(--font)"
                                                                d="M0.54 0.01C0.168 0.041 0.001 0.18 0 0.461c-0.001 0.274 0.168 0.433 0.499 0.466 0.048 0.005 0.225 0.012 0.391 0.014 0.34 0.005 0.514 0.016 0.693 0.041 0.295 0.042 0.476 0.12 0.603 0.255 0.122 0.128 0.18 0.284 0.223 0.591 0.014 0.107 0.016 0.585 0.02 7.4 0.002 5.22 0 7.329 -0.008 7.437 -0.02 0.293 -0.055 0.46 -0.129 0.609a0.499 0.499 0 0 1 -0.117 0.166 0.5 0.5 0 0 1 -0.174 0.121c-0.229 0.112 -0.467 0.147 -1.117 0.16 -0.338 0.008 -0.398 0.01 -0.477 0.027 -0.27 0.058 -0.405 0.209 -0.405 0.454 0.001 0.224 0.116 0.364 0.347 0.42 0.077 0.018 0.091 0.018 4.314 0.018 4.212 0 4.238 0 4.31 -0.018 0.202 -0.051 0.309 -0.162 0.334 -0.348 0.029 -0.22 -0.05 -0.388 -0.224 -0.472 -0.135 -0.063 -0.274 -0.082 -0.642 -0.082 -0.255 0 -0.48 -0.011 -0.655 -0.032 -0.578 -0.07 -0.798 -0.265 -0.87 -0.773 -0.035 -0.25 -0.035 -0.239 -0.038 -3.557l-0.003 -3.237h0.988l0.15 0.23a801.057 801.057 0 0 1 4.168 6.455c0.373 0.616 0.663 1.076 0.841 1.327l0.148 0.211c0.12 0.176 0.195 0.245 0.302 0.277 0.059 0.018 0.08 0.018 2.459 0.018 2.372 0 2.4 0 2.476 -0.018 0.154 -0.038 0.27 -0.124 0.31 -0.235a0.734 0.734 0 0 0 0.03 -0.13 0.452 0.452 0 0 0 -0.237 -0.471 0.964 0.964 0 0 0 -0.198 -0.068c-0.384 -0.093 -0.777 -0.355 -1.283 -0.852 -0.43 -0.423 -0.818 -0.883 -1.427 -1.689 -0.116 -0.155 -0.28 -0.37 -0.363 -0.477 -0.708 -0.911 -1.745 -2.427 -2.678 -3.909a43.455 43.455 0 0 1 -0.595 -0.966 4.163 4.163 0 0 1 0.162 -0.035c1.091 -0.225 1.984 -0.553 2.657 -0.979 0.961 -0.608 1.563 -1.462 1.798 -2.553 0.07 -0.324 0.099 -0.579 0.114 -0.966 0.035 -0.938 -0.162 -1.752 -0.598 -2.477 -0.738 -1.23 -2.183 -2.123 -4.123 -2.55 -0.565 -0.125 -1.07 -0.195 -1.82 -0.248C9.978 0.003 0.691 -0.002 0.54 0.01zm5.73 0.93a1.052 1.052 0 0 1 -0.051 0.084c-0.171 0.271 -0.252 0.555 -0.277 0.968 -0.012 0.203 -0.012 14.345 0 14.595 0.021 0.43 0.076 0.764 0.168 1.03 0.017 0.05 0.032 0.095 0.032 0.098s-0.672 0.004 -1.491 0.004H3.159l0.023 -0.055c0.032 -0.077 0.08 -0.26 0.108 -0.398 0.043 -0.226 0.066 -0.427 0.078 -0.738 0.012 -0.283 0.012 -14.113 0 -14.405 -0.018 -0.466 -0.07 -0.791 -0.171 -1.085L3.161 0.936h1.555c0.855 0 1.555 0.002 1.555 0.003zM8.897 0.946c0.86 0.04 1.474 0.224 1.952 0.583 0.302 0.227 0.532 0.513 0.72 0.897 0.258 0.523 0.391 1.113 0.455 2.007 0.027 0.38 0.02 1.285 -0.014 1.725 -0.116 1.498 -0.526 2.21 -1.491 2.592 -0.648 0.257 -1.543 0.366 -3.147 0.386l-0.499 0.005V5.752c0 -1.963 0.003 -3.46 0.009 -3.555 0.013 -0.274 0.048 -0.426 0.132 -0.598 0.242 -0.495 0.837 -0.699 1.884 -0.651zm3.245 0.338c1.184 0.298 2.161 0.834 2.766 1.514 0.474 0.534 0.73 1.102 0.827 1.838 0.023 0.178 0.023 0.752 0 0.96 -0.078 0.702 -0.28 1.234 -0.645 1.696a3.905 3.905 0 0 1 -0.466 0.465 4.588 4.588 0 0 1 -0.473 0.32 5.812 5.812 0 0 1 -1.458 0.555 9.209 9.209 0 0 1 -0.557 0.118 0.16 0.16 0 0 1 0.027 -0.042c0.295 -0.387 0.53 -0.948 0.655 -1.565 0.122 -0.598 0.166 -1.207 0.158 -2.141a9.44 9.44 0 0 0 -0.038 -0.93c-0.098 -1.075 -0.371 -1.937 -0.829 -2.622a6.434 6.434 0 0 0 -0.12 -0.172c-0.027 -0.035 -0.03 -0.042 -0.016 -0.039l0.167 0.043zm-1.21 8.73 0.888 1.395c1.843 2.863 3.313 4.854 4.521 6.123l0.179 0.189h-1.323l-1.323 -0.001 -2.451 -3.796c-1.349 -2.088 -2.449 -3.798 -2.447 -3.801s0.073 -0.021 0.158 -0.041c0.146 -0.034 0.164 -0.036 0.376 -0.043 0.427 -0.016 0.679 -0.028 0.855 -0.041 0.22 -0.016 0.484 -0.04 0.496 -0.045 0.022 -0.009 0.029 -0.001 0.07 0.062z" /></svg>
                                                    </div>
                                                    <label className='label'>Números reais</label>
                                                    <div className='shortcut'>
                                                        <kbd>⇧</kbd>+<kbd>R</kbd><kbd>⇧</kbd>+<kbd>R</kbd>
                                                    </div>
                                                </div>
                                                <div className='mathlive-cell'>
                                                    <div className="mathlive-icon">
                                                        <span style={{ color: 'var(--secondary-font)', textAlign: 'center' }}>Alternar modo LaTeX</span>
                                                    </div>
                                                    <div className='shortcut'>
                                                        <kbd>ESC</kbd>
                                                    </div>
                                                </div>

                                                <div className='mathlive-cell'>
                                                    <div className='mathlive-icon'>
                                                        <span style={{ color: 'var(--secondary-font)', textAlign: 'center' }}>Alternar modo texto</span>
                                                    </div>
                                                    <div className='shortcut'>
                                                        <kbd>⇧</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>
                                                    </div>
                                                </div>
                                                <div className='mathlive-cell'>
                                                    <span style={{ textAlign: 'center' }}><a target="_blank" href='https://cortexjs.io/mathlive/reference/keybindings/'>Lista completa de atalhos</a></span>
                                                </div>
                                            </div>
                                        </ScrollArea.Viewport>
                                        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                                            <ScrollArea.Thumb className="ScrollAreaThumb" />
                                        </ScrollArea.Scrollbar>
                                        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                                            <ScrollArea.Thumb className="ScrollAreaThumb" />
                                        </ScrollArea.Scrollbar>
                                        <ScrollArea.Corner className="ScrollAreaCorner" />
                                    </ScrollArea.Root>
                                </Collapsible.Content>
                            </Collapsible.Root>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>
        </Dialog.Root>
    )
}


export default InsertMathLive