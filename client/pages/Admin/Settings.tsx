/**
 * @Settings.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Shield, Bell, Key } from "lucide-react";
import { toast } from "sonner";
import { useSite } from "@/context/SiteContext";

export default function SiteSettings() {
  const { settings, updateSettings } = useSite();
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const handleSave = () => {
    toast.success("General settings saved successfully!");
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Site Settings</h1>
        <p className="text-slate-500">Configure global site behavior and security.</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-white border border-slate-200">
          <TabsTrigger value="general"><Settings size={16} className="mr-2" /> General</TabsTrigger>
          <TabsTrigger value="security"><Shield size={16} className="mr-2" /> Security</TabsTrigger>
          <TabsTrigger value="api"><Key size={16} className="mr-2" /> API & Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Site Identity</CardTitle>
              <CardDescription>Basic information about your website.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Site Name</Label>
                  <Input 
                    value={settings.siteName} 
                    onChange={(e) => updateSettings({ siteName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Tagline</Label>
                  <Input 
                    value={settings.tagline}
                    onChange={(e) => updateSettings({ tagline: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Site Logo URL</Label>
                  <Input defaultValue="/placeholder.svg" />
                </div>
                <div className="space-y-2">
                  <Label>Favicon URL</Label>
                  <Input defaultValue="/favicon.ico" />
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Maintenance Mode</Label>
                  <p className="text-sm text-slate-500">Enable to show a "Coming Soon" page to visitors.</p>
                </div>
                <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Security & Spam Protection</CardTitle>
              <CardDescription>Protect your site from malicious attacks and spam leads.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Enable Google reCAPTCHA v3</Label>
                  <Switch defaultChecked />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Site Key</Label>
                    <Input placeholder="Enter reCAPTCHA site key" />
                  </div>
                  <div className="space-y-2">
                    <Label>Secret Key</Label>
                    <Input type="password" placeholder="Enter reCAPTCHA secret key" />
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Cloudflare Integration</Label>
                  <Switch />
                </div>
                <Input placeholder="Cloudflare API Token" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>External Integrations</CardTitle>
              <CardDescription>Manage API keys for third-party services.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>TinyMCE API Key</Label>
                <Input defaultValue="hhiyirqkh3fnrmgjs7nq6tpk6nqb62m3vww7smgrz7kjfv6v" />
              </div>
              <div className="space-y-2">
                <Label>WhatsApp Business API (optional)</Label>
                <Input placeholder="Access Token" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end pt-4 border-t border-slate-200">
        <Button onClick={handleSave} className="bg-primary text-white">Save Site Settings</Button>
      </div>
    </div>
  );
}
