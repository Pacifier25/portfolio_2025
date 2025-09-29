import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Data Scientist",
    company: "SearchPilot",
    location: "London, UK",
    period: "July 2025 – Oct 2025",
    type: "Contract",
    achievements: [
      "Applied statistical analysis and A/B testing to SEO experiments, driving data-backed product decisions",
      "Built and validated time-series forecasting models, improving web traffic prediction accuracy by 18%",
      "Partnered with engineering teams to ensure experiment reproducibility and scalable ML deployment",
    ],
    skills: ["Python", "SQL", "A/B Testing", "Time Series", "Statistical Analysis"],
  },
  {
    title: "Data Engineer",
    company: "Netcom Technologies",
    location: "Delhi, India",
    period: "Jun 2023 – Jun 2024",
    type: "Full-time",
    achievements: [
      "Engineered and optimised ETL pipelines, reducing data processing time by 35%",
      "Automated deployments with CI/CD, enhancing system reliability and reducing downtime by 25%",
      "Designed Power BI dashboards for real-time reporting, accelerating business decision-making",
    ],
    skills: ["Python", "SQL", "ETL", "Power BI", "CI/CD"],
  },
  {
    title: "Python Developer",
    company: "Cognizant",
    location: "India",
    period: "Feb 2022 – Aug 2022",
    type: "Full-time",
    achievements: [
      "Developed and deployed ML models, boosting predictive accuracy by 22% across business use cases",
      "Automated data ingestion and training pipelines in Azure ML Studio, reducing manual effort by 40%",
      "Managed GitHub-based version control, improving collaboration and release efficiency across teams",
    ],
    skills: ["Python", "TensorFlow", "Azure ML", "GitHub", "Machine Learning"],
  },
  {
    title: "Data Scientist",
    company: "DC IKIGAI",
    location: "India",
    period: "May 2021 – Nov 2021",
    type: "Full-time",
    achievements: [
      "Built sentiment analysis models, improving classification accuracy by 30% and enhancing customer insights",
      "Designed end-to-end ML workflows, cutting model training time by 40% and accelerating deployment",
    ],
    skills: ["Python", "NLP", "Sentiment Analysis", "Machine Learning"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl gradient-text">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-2">•</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
