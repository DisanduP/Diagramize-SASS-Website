import { Upload, Zap, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "1",
    title: "Paste Your Mermaid Code",
    description: "Simply paste your Mermaid diagram syntax into our converter"
  },
  {
    icon: Zap,
    number: "2",
    title: "Instant Conversion",
    description: "Our engine processes and converts your diagram to DrawIO XML format"
  },
  {
    icon: Download,
    number: "3",
    title: "Download & Use",
    description: "Download the XML file and import it directly into DrawIO"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to convert your diagrams
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-50"></div>
                    <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-full">
                      <step.icon className="size-8" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white border-4 border-blue-500 text-blue-600 size-10 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white border-2 border-gray-200 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg mb-3 text-gray-500">Input (Mermaid)</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                <pre>{`graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Process]
    B -->|No| D[End]
    C --> D`}</pre>
              </div>
            </div>
            <div>
              <h3 className="text-lg mb-3 text-gray-500">Output (DrawIO XML)</h3>
              <div className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto">
                <pre>{`<mxGraphModel>
  <root>
    <mxCell id="0"/>
    <mxCell id="1" parent="0"/>
    ...
  </root>
</mxGraphModel>`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
