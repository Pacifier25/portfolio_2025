import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Rotten Fruit and Vegetable Detection",
    description:
      "Built a computer vision model using EfficientNetV2B0 architecture to classify the freshness of fruits and vegetables. Achieved 97.42% accuracy with over 30,000 images and created a Streamlit app for real-time classification.",
    tech: ["Python", "TensorFlow", "EfficientNet", "Streamlit", "Computer Vision"],
    github: "https://github.com/Pacifier25/Fruit-and-vegetable-disease-predictor",
    accuracy: "97.42%",
    dataset: "30,000+ images",
  },
  {
    title: "Waste Classification System",
    description:
      "Designed a sustainable waste management solution using ResNet50-based model with 98.62% validation accuracy. Classifies waste into 4 categories and includes a user-friendly Streamlit app for automated categorization.",
    tech: ["Python", "TensorFlow", "ResNet50", "Streamlit", "Sustainability"],
    github: "https://github.com/Pacifier25/Waste-Classification-System",
    accuracy: "98.62%",
    dataset: "15,000+ images",
  },
  {
    title: "SkimLit - NLP Classifier",
    description:
      "Built an NLP-powered classifier using fine-tuned BERT models to categorize research abstract sentences into predefined roles (Objective, Methods, Results). Features an interactive Streamlit app with PDF upload support.",
    tech: ["Python", "BERT", "NLP", "Streamlit", "Research"],
    github: "https://github.com/Pacifier25/Skim_Lit",
    specialty: "Fine-tuned BERT",
    feature: "PDF Upload Support",
  },
  {
    title: "Advertisement Classification App",
    description:
      "AI-powered system that automatically classifies advertisements based on text data. Helps businesses streamline ad categorization, improve searchability, and enhance targeted marketing strategies.",
    tech: ["Python", "TensorFlow", "NLP", "Streamlit", "Marketing"],
    github: "https://github.com/Pacifier25/Advertisment_Classification",
    feature: "Real-time Classification",
    impact: "Automated Marketing",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my work in machine learning, computer vision, and NLP, demonstrating practical applications of
            AI in solving real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-xl gradient-text group-hover:scale-105 transition-transform">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="space-y-3">
                  {project.accuracy && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Accuracy:</span>
                      <Badge variant="default" className="bg-green-500/20 text-green-400 border-green-500/30">
                        {project.accuracy}
                      </Badge>
                    </div>
                  )}
                  {project.dataset && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Dataset:</span>
                      <span className="text-foreground font-medium">{project.dataset}</span>
                    </div>
                  )}
                  {project.specialty && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Model:</span>
                      <span className="text-foreground font-medium">{project.specialty}</span>
                    </div>
                  )}
                  {project.feature && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Feature:</span>
                      <span className="text-foreground font-medium">{project.feature}</span>
                    </div>
                  )}
                  {project.impact && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Impact:</span>
                      <span className="text-foreground font-medium">{project.impact}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:scale-105 transition-transform bg-transparent"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
