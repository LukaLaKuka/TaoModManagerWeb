import { esTranslations, enTranslations, type translationInterface } from "../../lang";

export default function getTranslation(lang: string): translationInterface {
    if (lang === 'es') return esTranslations;
    return enTranslations;
}