import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const nzdFormatter = new Intl.NumberFormat('en-NZ', {style:'currency', currency:'NZD'})
