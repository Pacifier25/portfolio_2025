"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from "lucide-react"

const certifications = [
  {
    title: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "Feb 2025",
    expires: "Feb 2028",
    id: "3773d2bb-031e-4e54-939d-eebd8ec8ffff",
    category: "Machine Learning",
    color: "bg-orange-500",
    credentialUrl: "https://www.credly.com/badges/3773d2bb-031e-4e54-939d-eebd8ec8ffff/linked_in_profile",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issued: "Jan 2025",
    expires: "Jan 2028",
    id: "8f3a8d15-c035-4034-ad33-b3f249366df9",
    category: "Cloud Computing",
    color: "bg-orange-500",
    credentialUrl: "https://www.credly.com/badges/8f3a8d15-c035-4034-ad33-b3f249366df9/linked_in_profile",
  },
  {
    title: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft",
    issued: "Dec 2024",
    expires: "Dec 2026",
    id: "db620ab8c9cdf6d3",
    category: "Data Engineering",
    color: "bg-blue-500",
    credentialUrl: "https://learn.microsoft.com/en-us/users/piyushbist-9615/credentials/db620ab8c9cdf6d3?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    title: "Microsoft Certified: Fabric Analytics Engineer Associate",
    issuer: "Microsoft",
    issued: "Jan 2025",
    expires: "Jan 2027",
    id: "fec62e678ed3cb5b",
    category: "Analytics",
    color: "bg-blue-500",
    credentialUrl: "https://learn.microsoft.com/en-us/users/piyushbiststudent-9146/credentials/fec62e678ed3cb5b?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    title: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    issued: "Jan 2025",
    expires: "Jan 2027",
    id: "ad66cd5a81991b62",
    category: "Data Science",
    color: "bg-blue-500",
    credentialUrl: "https://learn.microsoft.com/en-us/users/piyushbist-9615/credentials/ad66cd5a81991b62?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-4 h-4 rounded-full ${cert.color} flex-shrink-0 mt-1`}></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Issued:</span>
                    <span className="text-foreground font-medium">{cert.issued}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Expires:</span>
                    <span className="text-foreground font-medium">{cert.expires}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Category:</span>
                    <span className="text-foreground font-medium">{cert.category}</span>
                  </div>
                </div>

                <Button
                  onClick={() => window.open(cert.credentialUrl, "_blank")}
                  className="w-full mt-6 group-hover:scale-105 transition-transform"
                  variant="outline"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Credential
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
