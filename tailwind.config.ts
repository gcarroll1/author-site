import type { Config } from "tailwindcss";
export default {content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
theme:{extend:{colors:{brand:{DEFAULT:"#0A4D68",light:"#1B6B8F",dark:"#072F3A",accent:"#F4A261"}}}},plugins:[],} satisfies Config;