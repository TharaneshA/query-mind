import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Documentation - QueryMind",
  description: "Learn how to use QueryMind to query your databases with natural language",
}

export default function DocumentationPage() {
  return (
    <div className="container max-w-6xl py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">Documentation</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Learn how to use QueryMind to query your databases with natural language.
        </p>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="getting-started">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-lg grid-cols-3">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="getting-started" className="mt-8 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Installation</CardTitle>
                  <CardDescription>Learn how to set up QueryMind in your environment.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get started with QueryMind by connecting your first database and running your first natural language
                    query.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">
                      Read More <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Connecting Databases</CardTitle>
                  <CardDescription>Learn how to connect to different database types.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Connect to MySQL, PostgreSQL, MongoDB, Oracle, SQL Server, and more with our simple connection
                    interface.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">
                      Read More <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Natural Language Queries</CardTitle>
                  <CardDescription>Learn how to write effective natural language queries.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Discover the best practices for writing natural language queries that get accurate results from your
                    database.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">
                      Read More <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Query History & Saving</CardTitle>
                  <CardDescription>Learn how to manage your queries for future use.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Save, organize, and reuse your most valuable queries to increase productivity and consistency.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">
                      Read More <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="flex justify-center">
              <Button
                asChild
                className="bg-gradient-yellow hover:opacity-90 transition-opacity dark:bg-gradient-yellow-dark"
              >
                <Link href="/dashboard">
                  Try QueryMind Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="guides" className="mt-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Guides & Tutorials</h2>
              <p className="text-muted-foreground">
                Learn how to make the most of QueryMind with our comprehensive guides and tutorials.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <span className="text-lg font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Analyzing Customer Data</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Learn how to use natural language to analyze customer behavior, purchase patterns, and
                      demographics.
                    </p>
                    <Button variant="link" className="mt-2 px-0" asChild>
                      <Link href="#">Read Guide</Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <span className="text-lg font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Inventory Management Queries</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Discover how to track inventory levels, identify low stock items, and optimize reordering.
                    </p>
                    <Button variant="link" className="mt-2 px-0" asChild>
                      <Link href="#">Read Guide</Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <span className="text-lg font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Sales Performance Analysis</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Learn how to analyze sales data by region, product, time period, and sales representative.
                    </p>
                    <Button variant="link" className="mt-2 px-0" asChild>
                      <Link href="#">Read Guide</Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <span className="text-lg font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Advanced Query Techniques</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Master advanced natural language query techniques for complex data analysis and reporting.
                    </p>
                    <Button variant="link" className="mt-2 px-0" asChild>
                      <Link href="#">Read Guide</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="api" className="mt-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">API Reference</h2>
              <p className="text-muted-foreground">
                Integrate QueryMind into your applications with our comprehensive API.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>REST API</CardTitle>
                    <CardDescription>Access QueryMind functionality via REST endpoints.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our REST API allows you to integrate natural language database queries into any application.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="#">
                        View Documentation <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>JavaScript SDK</CardTitle>
                    <CardDescription>Integrate QueryMind into your JavaScript applications.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our JavaScript SDK makes it easy to add natural language database queries to your web
                      applications.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="#">
                        View Documentation <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Python SDK</CardTitle>
                    <CardDescription>Integrate QueryMind into your Python applications.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our Python SDK allows you to add natural language database queries to your Python applications and
                      data pipelines.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="#">
                        View Documentation <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Webhooks</CardTitle>
                    <CardDescription>Receive notifications for query events.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Set up webhooks to receive notifications when queries are run, saved, or when results are
                      available.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="#">
                        View Documentation <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
