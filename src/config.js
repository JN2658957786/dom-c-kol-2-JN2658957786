export const color = {
    primaryHEX: "#8b5cf6",
    secondaryHEX: "#a8d9e7",

    bgPrimaryTW: "bg-[#6c5dd2]",
    bgPrimaryHoverTW: "hover:bg-[#6c5dd2]",
    bgSecondaryTW: "bg-[#a8d9e7]",
    
    bgColorTW: "bg-neutral-800",

    primaryTextHex: "#262626",
    secondaryTextHex: "#262626",

    highlightTextTW: "text-neutral-200",
    shadowTextTW: "text-neutral-950",

    textHEX: "#e2e8f0",

    iconLightHEX: "#e5e5e5",
    iconShadowHEX: "#0a0a0a"
}

export const button = {
    primary: `
        z-10
        w-full h-full p-[3px]
        rounded-xl
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        flex justify-center items-center
        relative` ,
    primary_inner: `
        z-10
        w-full h-full px-2
        rounded-lg
        bg-neutral-800
        text-slate-300` ,
    primary_hover: `
        absolute z-0 w-full h-full
        bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50
        blur-[8px]` ,
    primary_solid: `
        w-full h-full px-2
        bg-[${color.primaryHEX}]`
}

export const costTypes = [
    "None",
    "CZK",
    "EUR",
]

export const stateTypes = {
    0: "None",
    1: "Finished",
    2: "In progress",
    3: "Waiting",
    4: "Delayed",
    5: "Canceled",
}