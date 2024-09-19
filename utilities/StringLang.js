"use client";
import useLanguage from "@/hooks/useLanguage";

function StringLang({ string }) {
  const language = useLanguage();
  return language[string] ? language[string] : string;
}

export default StringLang;