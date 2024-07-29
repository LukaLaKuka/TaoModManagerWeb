import { esTranslations, enTranslations } from "../../lang";

export default function getTranslation(lang: string) {
    if (lang === 'es') return esTranslations;
    return enTranslations;
}