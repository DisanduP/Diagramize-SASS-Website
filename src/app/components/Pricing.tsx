import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check, Zap, Sparkles, Crown } from "lucide-react";

const plans = [
  {
    name: "Free",
    icon: Zap,
    price: "$0",
    period: "forever",
    description: "Perfect for trying out the converter",
    features: [
      "5 conversions per day",
      "All diagram types",
      "Basic support",
      "Export to XML",
      "Community access"
    ],
    cta: "Start Free",
    popular: false,
    color: "gray"
  },
  {
    name: "Pro",
    icon: Sparkles,
    price: "$12",
    period: "per month",
    description: "For professionals who need more power",
    features: [
      "Unlimited conversions",
      "All diagram types",
      "Priority support",
      "Batch conversion (up to 50)",
      "API access (1000 calls/month)",
      "Custom styling options",
      "Export history (30 days)"
    ],
    cta: "Start Pro Trial",
    popular: true,
    color: "blue"
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "$49",
    period: "per month",
    description: "For teams and organizations",
    features: [
      "Unlimited conversions",
      "All diagram types",
      "24/7 Premium support",
      "Unlimited batch conversion",
      "Unlimited API access",
      "Advanced customization",
      "Unlimited export history",
      "Team collaboration",
      "SSO integration",
      "Custom SLA"
    ],
    cta: "Contact Sales",
    popular: false,
    color: "purple"
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-xl scale-105' 
                  : 'border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`inline-flex p-3 rounded-full mb-4 ${
                  plan.color === 'blue' ? 'bg-blue-100' :
                  plan.color === 'purple' ? 'bg-purple-100' :
                  'bg-gray-100'
                }`}>
                  <plan.icon className={`size-6 ${
                    plan.color === 'blue' ? 'text-blue-600' :
                    plan.color === 'purple' ? 'text-purple-600' :
                    'text-gray-600'
                  }`} />
                </div>
                
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-2">
                  <span className="text-5xl">{plan.price}</span>
                </div>
                <p className="text-gray-500 text-sm">{plan.period}</p>
              </div>
              
              <Button 
                className={`w-full mb-6 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
                    : ''
                }`}
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
              >
                {plan.cta}
              </Button>
              
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day money-back guarantee
          </p>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="size-4 text-green-600" />
              <span>No credit card required for free plan</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-green-600" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-green-600" />
              <span>Secure payments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
