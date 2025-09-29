import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const highlights = ["MSc Data Science Graduate", "Azure & AWS Certified", "Open to Relocation"]

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Data Science graduate with extensive experience in machine learning, deep learning, and big data,
              delivering innovative solutions across NLP, computer vision, and predictive modeling.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Skilled in Python, SQL, TensorFlow, PyTorch, and cloud platforms including Azure and AWS. Previously
              worked as a Data Engineer and Python Developer, optimizing ETL pipelines, ML workflows, and deploying AI
              applications.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Passionate about using data to solve real-world problems and drive impactful, insight-led decision making.
              Currently seeking opportunities to contribute to innovative projects in data science and AI.
            </p>

            <div className="flex flex-wrap gap-2">
              {highlights.map((highlight) => (
                <Badge key={highlight} variant="secondary" className="px-3 py-1">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Education</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary">MSc in Data Science</h4>
                  <p className="text-muted-foreground">University of Glasgow</p>
                  <p className="text-sm text-muted-foreground">September 2024 – September 2025</p>
                  <p className="text-sm mt-2">
                    Specializing in machine learning, deep learning, big data systems, and data visualization. Key
                    modules include Deep Learning, ML & AI, Cybersecurity, and Text as Data.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary">B.Tech in Information Technology</h4>
                  <p className="text-muted-foreground">Sikkim Manipal Institute of Technology</p>
                  <p className="text-sm text-muted-foreground">August 2018 – August 2022</p>
                  <p className="text-sm mt-2">CGPA: 8.26 (Merit)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
