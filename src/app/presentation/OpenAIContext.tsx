import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { OpenAI } from "openai";

interface OpenAIContextProps {
  openai: OpenAI | null;
  updateOpenAI: (apiKey: string, organization: string) => void;
}

const OpenAIContext = createContext<OpenAIContextProps | undefined>(undefined);

export const OpenAIProvider = ({ children }: { children: ReactNode }) => {
  const [openai, setOpenai] = useState<OpenAI | null>(null);

  const updateOpenAI = (apiKey: string, organization: string) => {
    sessionStorage.setItem("openai_apiKey", apiKey);
    sessionStorage.setItem("openai_organization", organization);

    const openaiInstance = new OpenAI({
      organization,
      apiKey,
      dangerouslyAllowBrowser: true,
    });
    setOpenai(openaiInstance);
  };

  useEffect(() => {
    const apiKey = sessionStorage.getItem("openai_apiKey");
    const organization = sessionStorage.getItem("openai_organization");

    if (apiKey && organization) {
      const openaiInstance = new OpenAI({
        organization,
        apiKey,
        dangerouslyAllowBrowser: true,
      });
      setOpenai(openaiInstance);
    }
  }, []);

  return (
    <OpenAIContext.Provider value={{ openai, updateOpenAI }}>
      {children}
    </OpenAIContext.Provider>
  );
};

export const useOpenAI = (): OpenAIContextProps => {
  const context = useContext(OpenAIContext);
  if (context === undefined) {
    throw new Error("useOpenAI must be used within an OpenAIProvider");
  }
  return context;
};
