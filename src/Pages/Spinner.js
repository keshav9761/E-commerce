import React from 'react'

export default function Spinner() {
    return (
        <> <div style={{ backgroundColor: "red", position: "relative" }}>
            <div style={{ position: "absolute", top: " 17rem", left: "33rem" }}>
                <button type="button" className=" text-center" disabled>
                    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    </svg>
                    Processing...
                </button>
            </div>
        </div>
        </>
    )
}
