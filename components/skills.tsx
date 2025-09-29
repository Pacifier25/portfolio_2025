import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Programming & Data",
    skills: [
      { name: "Python", level: 95, description: "Scikit-learn, PyTorch, TensorFlow" },
      { name: "SQL", level: 90, description: "T-SQL, PostgreSQL" },
      { name: "R", level: 80, description: "Statistical Analysis" },
      { name: "Java", level: 75, description: "Object-Oriented Programming" },
    ],
  },
  {
    title: "Cloud & Platforms",
    skills: [
      { name: "Microsoft Azure", level: 92, description: "Data Factory, Synapse, ML Studio" },
      { name: "AWS", level: 88, description: "S3, Redshift, SageMaker" },
      { name: "Databricks", level: 85, description: "Big Data Processing" },
      { name: "Google Colab", level: 90, description: "ML Development" },
    ],
  },
  {
    title: "ML & AI Specialties",
    skills: [
      { name: "Deep Learning", level: 93, description: "Neural Networks, CNNs, RNNs" },
      { name: "NLP", level: 90, description: "BERT, Text Analytics" },
      { name: "Computer Vision", level: 88, description: "Image Classification, Object Detection" },
      { name: "Time Series", level: 85, description: "Forecasting, Trend Analysis" },
    ],
  },
  {
    title: "Visualization & BI",
    skills: [
      { name: "Power BI", level: 90, description: "DAX, Power Query" },
      { name: "Tableau", level: 85, description: "Interactive Dashboards" },
      { name: "Matplotlib/Seaborn", level: 88, description: "Statistical Visualization" },
      { name: "Plotly", level: 82, description: "Interactive Charts" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
