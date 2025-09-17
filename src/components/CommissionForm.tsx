import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, X, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CommissionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    whatsappNumber: '',
    fullAddress: '',
    material: '',
    idolNameSize: '',
    detailedRequirements: '',
    referenceImages: [] as File[],
    securityText: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const countries = [
    'India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Japan', 'South Korea', 'Singapore', 'Malaysia', 'Thailand', 'UAE', 'Saudi Arabia', 'Other'
  ];

  const materials = [
    'Bronze', 'Brass', 'Copper', 'Marble', 'Wood', 'Silver', 'Gold', 'Silver Plated', 'Gold Plated', 'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (formData.referenceImages.length + files.length > 5) {
      toast({
        title: "Too many files",
        description: "You can upload a maximum of 5 images.",
        variant: "destructive"
      });
      return;
    }
    setFormData(prev => ({
      ...prev,
      referenceImages: [...prev.referenceImages, ...files]
    }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      referenceImages: prev.referenceImages.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Commission Request Submitted",
        description: "Thank you! We'll review your request and get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        country: '',
        whatsappNumber: '',
        fullAddress: '',
        material: '',
        idolNameSize: '',
        detailedRequirements: '',
        referenceImages: [],
        securityText: ''
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient-heritage mb-4">
          Commission Your Sacred Idol
        </h2>
        <p className="text-lg text-muted-foreground">
          Share your vision with us. Let's create something divine together.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Your Details Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Your Details</CardTitle>
            <CardDescription>
              So we can get to know you and your location.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country..." />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsappNumber">WhatsApp Number *</Label>
                <div className="flex">
                  <div className="flex items-center px-3 border border-r-0 border-input bg-muted rounded-l-md">
                    <span className="text-sm text-muted-foreground">Code</span>
                  </div>
                  <Input
                    id="whatsappNumber"
                    type="tel"
                    value={formData.whatsappNumber}
                    onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                    placeholder="98765 43210"
                    className="rounded-l-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullAddress">Full Address *</Label>
              <Textarea
                id="fullAddress"
                value={formData.fullAddress}
                onChange={(e) => handleInputChange('fullAddress', e.target.value)}
                placeholder="Your complete address"
                rows={3}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Idol Specifications Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Idol Specifications</CardTitle>
            <CardDescription>
              Tell us about the masterpiece you envision.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="material">Material *</Label>
                <Select value={formData.material} onValueChange={(value) => handleInputChange('material', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="e.g., Bronze, Marble" />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.map((material) => (
                      <SelectItem key={material} value={material}>
                        {material}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="idolNameSize">Idol Name & Size *</Label>
                <Input
                  id="idolNameSize"
                  value={formData.idolNameSize}
                  onChange={(e) => handleInputChange('idolNameSize', e.target.value)}
                  placeholder="e.g., Ganesha, 12 inches"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="detailedRequirements">Detailed Requirements *</Label>
              <Textarea
                id="detailedRequirements"
                value={formData.detailedRequirements}
                onChange={(e) => handleInputChange('detailedRequirements', e.target.value)}
                placeholder="Describe the pose, specific ornaments, and any other special details..."
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Reference Images (up to 5)</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="referenceImages"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label htmlFor="referenceImages" className="cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Drop images or click to upload
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    No file chosen
                  </p>
                </label>
              </div>
              
              {formData.referenceImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                  {formData.referenceImages.map((file, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-xs text-muted-foreground truncate px-2">
                          {file.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Security Check Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Security Check</CardTitle>
            <CardDescription>
              Please verify you are human.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">Enter text above</p>
                <div className="text-2xl font-mono tracking-widest">
                  MAKEMYIDOL
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="securityText">Security Text *</Label>
                <Input
                  id="securityText"
                  value={formData.securityText}
                  onChange={(e) => handleInputChange('securityText', e.target.value)}
                  placeholder="Enter the text above"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            type="submit"
            size="lg"
            className="px-8"
            disabled={isSubmitting || formData.securityText.toUpperCase() !== 'MAKEMYIDOL'}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Submitting...
              </>
            ) : (
              <>
                <Check className="h-4 w-4 mr-2" />
                Submit Request and Commission Your Idol
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommissionForm;

