import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

const servicesOptions = [
  'Signal Audit',
  'Blueprint',
  'Social Media Management',
  'Social Media Marketing',
  'Social Media Coaching',
  'Analytics & Reporting',
  'Content Creation',
  'Website Development',
  'Other'
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    website: '',
    services: [] as string[],
    monthlyRevenue: '',
    paidAdsBudget: '',
    challenge: '',
    phone: '',
    email: '',
    enquiry: '',
    _honey: '' // Honeypot field
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => {
      const isSelected = prev.services.includes(service);
      
      return {
        ...prev,
        services: isSelected
          ? prev.services.filter(s => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const nextStep = () => {
    if (step === 2 && formData.services.length === 0) {
      alert("Please select at least one option.");
      return;
    }
    setStep(s => Math.min(s + 1, 4));
  };
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      ...formData,
      source: 'Contact Form'
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission failed', error);
      setIsSubmitting(false);
      alert('Something went wrong while sending your request. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-purewhite p-12 rounded-2xl shadow-xl text-center max-w-2xl mx-auto"
      >
        <CheckCircle2 className="w-16 h-16 text-[#25D366] mx-auto mb-6" />
        <h3 className="font-display text-4xl font-bold text-brand-navy mb-4">THANK YOU.</h3>
        <p className="text-lg text-brand-charcoal/80 mb-8">
          We've received your enquiry. We'll be in touch shortly to discuss how we can help your business grow.
        </p>
        <Button onClick={() => window.location.reload()} variant="primary">
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-brand-purewhite p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl mx-auto w-full">
      <div className="mb-8 flex justify-between items-center border-b border-brand-charcoal/10 pb-6">
        <h3 className="font-display text-xl md:text-2xl font-bold text-brand-navy">
          {step === 1 && "LET'S GET TO KNOW YOU"}
          {step === 2 && "WHAT DO YOU NEED?"}
          {step === 3 && "TELL US ABOUT YOUR BUSINESS"}
          {step === 4 && "LET'S TALK"}
        </h3>
        <span className="text-brand-navy font-bold font-display tracking-widest text-sm">
          0{step} / 04
        </span>
      </div>

      <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-charcoal mb-2">First Name *</label>
                    <input required type="text" value={formData.firstName} onChange={e => updateFormData('firstName', e.target.value)} className="w-full border-b-2 border-brand-charcoal/20 bg-transparent py-3 focus:border-brand-navy focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-charcoal mb-2">Last Name *</label>
                    <input required type="text" value={formData.lastName} onChange={e => updateFormData('lastName', e.target.value)} className="w-full border-b-2 border-brand-charcoal/20 bg-transparent py-3 focus:border-brand-navy focus:outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Business Name *</label>
                  <input required type="text" value={formData.businessName} onChange={e => updateFormData('businessName', e.target.value)} className="w-full border-b-2 border-brand-charcoal/20 bg-transparent py-3 focus:border-brand-navy focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Website URL (or N/A)</label>
                  <input type="text" value={formData.website} onChange={e => updateFormData('website', e.target.value)} className="w-full border-b-2 border-brand-charcoal/20 bg-transparent py-3 focus:border-brand-navy focus:outline-none transition-colors" placeholder="https:// or N/A" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesOptions.map(service => (
                  <label key={service} className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.services.includes(service) ? 'border-brand-navy bg-brand-navy/5' : 'border-brand-charcoal/10 hover:border-brand-navy/30'}`}>
                    <input type="checkbox" className="sr-only" checked={formData.services.includes(service)} onChange={() => toggleService(service)} />
                    <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${formData.services.includes(service) ? 'bg-brand-navy border-brand-navy' : 'border-brand-charcoal/30'}`}>
                      {formData.services.includes(service) && <div className="w-2.5 h-2.5 bg-brand-yellow rounded-sm" />}
                    </div>
                    <span className="font-semibold text-sm">{service}</span>
                  </label>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Monthly Revenue (USD) *</label>
                  <select required value={formData.monthlyRevenue} onChange={e => updateFormData('monthlyRevenue', e.target.value)} className="w-full border-b-2 border-brand-charcoal/20 bg-transparent py-3 focus:border-brand-navy focus:outline-none transition-colors">
                    <option value="" disabled>Select range</option>
                    <option value="under_10k">Under $10k</option>
                    <option value="10k_50k">$10k to $50k</option>
                    <option value="50k_100k">$50k to $100k</option>
                    <option value="100k_plus">$100k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Paid Ads Budget (Monthly) (USD) *</label>
                  <select required value={formData.paidAdsBudget} onChange={e => updateFormData('paidAdsBudget', e.target.value)} className="w-full border-b-2 border-brand-charcoal/20 bg-transparent py-3 focus:border-brand-navy focus:outline-none transition-colors">
                    <option value="" disabled>Select budget</option>
                    <option value="none">None yet</option>
                    <option value="under_1k">Under $1k</option>
                    <option value="1k_5k">$1k to $5k</option>
                    <option value="5k_plus">$5k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Current Marketing Challenge *</label>
                  <textarea required rows={3} value={formData.challenge} onChange={e => updateFormData('challenge', e.target.value)} className="w-full border-b-2 border-brand-charcoal/20 bg-transparent py-3 focus:border-brand-navy focus:outline-none transition-colors" placeholder="What's holding your growth back?" />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                {/* Honeypot field - visually hidden, ignores screen readers */}
                <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <label htmlFor="_honey">Ignore this field</label>
                  <input type="text" id="_honey" name="_honey" value={formData._honey} onChange={e => updateFormData('_honey', e.target.value)} tabIndex={-1} autoComplete="off" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-charcoal mb-2">Email Address *</label>
                    <input required type="email" value={formData.email} onChange={e => updateFormData('email', e.target.value)} className="w-full border-b-2 border-brand-charcoal/20 bg-transparent py-3 focus:border-brand-navy focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-charcoal mb-2">Phone Number *</label>
                    <input required type="tel" value={formData.phone} onChange={e => updateFormData('phone', e.target.value)} className="w-full border-b-2 border-brand-charcoal/20 bg-transparent py-3 focus:border-brand-navy focus:outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">Anything else we should know? *</label>
                  <textarea required rows={4} value={formData.enquiry} onChange={e => updateFormData('enquiry', e.target.value)} className="w-full border-b-2 border-brand-charcoal/20 bg-transparent py-3 focus:border-brand-navy focus:outline-none transition-colors" />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex justify-between items-center pt-6">
          {step > 1 ? (
            <button type="button" onClick={prevStep} className="flex items-center text-sm font-bold text-brand-charcoal/60 hover:text-brand-navy transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> BACK
            </button>
          ) : <div></div>}
          
          {step < 4 ? (
            <Button type="submit" variant="primary">
              NEXT <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button type="submit" variant="secondary" disabled={isSubmitting}>
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
