/**
 * @SiteContext.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import React, { createContext, useContext, useState, useEffect } from "react";

interface SiteSettings {
  siteName: string;
  tagline: string;
  primaryColor: string;
  secondaryColor: string;
  whatsappNumber: string;
  isWhatsAppEnabled: boolean;
  heroHeadline: string;
  heroSubheadline: string;
  address: string;
  phone: string;
  email: string;
}

interface SiteContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
}

const defaultSettings: SiteSettings = {
  siteName: "Synergy Asia",
  tagline: "WLL",
  primaryColor: "#0D8ABC",
  secondaryColor: "#EAB308",
  whatsappNumber: "+97451688517",
  isWhatsAppEnabled: true,
  heroHeadline: "Elevating Business Synergy Across Borders",
  heroSubheadline: "Synergy Asia WLL is your premier partner for strategic trading solutions and expert business consulting. We bridge markets and empower growth with professional excellence.",
  address: "Doha, Qatar",
  phone: "+974-51688517",
  email: "info@synergyasiaqatar.com",
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem("synergy_site_settings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem("synergy_site_settings", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <SiteContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return context;
};
