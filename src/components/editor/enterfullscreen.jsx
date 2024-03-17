'use client'

import React, { useEffect, useState } from 'react'
import '@/components/editor/insertmathlive.css'

const EnterFullScreen = () => {
    const handleFullscreen = () => {
        setFullScreen(!isFullScreen)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }

    const [isFullScreen, setFullScreen] = useState(false)
    useEffect(() => {
        isFullScreen ? document.getElementById('editor').className = 'fullscreen_editor !mt-0' : document.getElementById('editor').className = ''
    }, [isFullScreen])
    return (
        <span className='_tooltipTrigger_19o4e_630'>
            <button type="button" onClick={handleFullscreen} className="_toolbarButton_19o4e_218" data-toolbar-item="true" tabIndex="0" data-orientation="horizontal" data-radix-collection-item="">
                <div className="mathlive-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 17.142" width="17" height="17.142">
                        {isFullScreen ?
                            <path d="M5.357 2.143c0 -0.593 -0.479 -1.071 -1.071 -1.071S3.214 1.55 3.214 2.143v2.143H1.071c-0.593 0 -1.071 0.479 -1.071 1.071s0.479 1.071 1.071 1.071h3.214c0.593 0 1.071 -0.479 1.071 -1.071V2.143zM1.071 10.714c-0.593 0 -1.071 0.479 -1.071 1.071s0.479 1.071 1.071 1.071h2.143v2.143c0 0.593 0.479 1.071 1.071 1.071s1.071 -0.479 1.071 -1.071v-3.214c0 -0.593 -0.479 -1.071 -1.071 -1.071H1.071zM11.786 2.143c0 -0.593 -0.479 -1.071 -1.071 -1.071s-1.071 0.479 -1.071 1.071v3.214c0 0.593 0.479 1.071 1.071 1.071h3.214c0.593 0 1.071 -0.479 1.071 -1.071s-0.479 -1.071 -1.071 -1.071h-2.143V2.143zm-1.071 8.571c-0.593 0 -1.071 0.479 -1.071 1.071v3.214c0 0.593 0.479 1.071 1.071 1.071s1.071 -0.479 1.071 -1.071v-2.143h2.143c0.593 0 1.071 -0.479 1.071 -1.071s-0.479 -1.071 -1.071 -1.071h-3.214z" fill='var(--baseText)' />
                            :
                            <path d="M1.073 1.073A1.069 1.069 0 0 0 0 2.143v3.214a1.071 1.071 0 1 0 2.145 0V3.214h2.143a1.071 1.071 0 1 0 0 -2.145H1.073zm1.073 10.714A1.071 1.071 0 1 0 0 11.786V15c0 0.593 0.479 1.073 1.073 1.073h3.214a1.071 1.071 0 1 0 0 -2.145H2.143V11.784zM10.714 1.073a1.071 1.071 0 1 0 0 2.145h2.143v2.143a1.071 1.071 0 1 0 2.145 0V2.143a1.071 1.071 0 0 0 -1.073 -1.073H10.716zM15 11.786a1.071 1.071 0 1 0 -2.145 0v2.143H10.712a1.071 1.071 0 1 0 0 2.145h3.214a1.071 1.071 0 0 0 1.073 -1.073V11.787z" fill='var(--baseText)' />
                        }
                    </svg>
                </div>
            </button>
        </span>
    )
}

export default EnterFullScreen