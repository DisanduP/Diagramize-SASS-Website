import { GitBranch, Workflow, ChartNetwork, CalendarDays, Check } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: GitBranch,
    title: "Flowcharts",
    description: "Convert complex flowchart diagrams with all nodes and connections preserved."
  },
  {
    icon: Workflow,
    title: "Sequence Diagrams",
    description: "Transform sequence diagrams with actors, messages, and lifelines intact."
  },
  {
    icon: ChartNetwork,
    title: "Mindmaps",
    description: "Convert mindmap structures with hierarchical relationships maintained."
  },
  {
    icon: CalendarDays,
    title: "Kanban Boards",
    description: "Export Kanban boards with columns and cards perfectly formatted."
  },
  {
    icon: CalendarDays,
    title: "Timelines",
    description: "Convert timeline diagrams with events and dates accurately mapped."
  },
  {
    icon: CalendarDays,
    title: "Gantt Charts",
    description: "Transform Gantt charts with tasks, dependencies, and timelines."
  },
  {
    icon: Workflow,
    title: "Org Charts",
    description: "Export organizational charts with hierarchy and reporting lines."
  },
  {
    icon: ChartNetwork,
    title: "Bar Charts",
    description: "Convert bar chart data visualizations to DrawIO format."
  },
  {
    icon: ChartNetwork,
    title: "Pie Charts",
    description: "Transform pie chart diagrams with labels and percentages."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Support for Every Diagram Type
          </h2>
          <p className="text-xl text-gray-600">
            Convert 9+ different diagram types from Mermaid to DrawIO format with perfect fidelity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <feature.icon className="size-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl mb-2">Why Choose Our Converter?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Check className="size-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="mb-1">Perfect Conversion</h4>
                <p className="text-gray-600">Maintains all diagram elements, styles, and relationships</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="size-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="mb-1">Lightning Fast</h4>
                <p className="text-gray-600">Convert diagrams in milliseconds, not minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="size-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="mb-1">Batch Processing</h4>
                <p className="text-gray-600">Convert multiple diagrams at once (Pro plan)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="size-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="mb-1">API Access</h4>
                <p className="text-gray-600">Integrate into your workflow with our API</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
