import Link from "next/link"
import { ArrowRight, Database, MessageSquare, Search, Server, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LoginModal } from "@/components/login-modal"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-yellow opacity-70 blur-sm dark:bg-gradient-yellow-dark"></div>
              <Database className="relative h-6 w-6" />
            </div>
            <span className="font-bold text-lg gradient-text">QueryMind</span>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                Dashboard
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="/documentation"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Documentation
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Pricing
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <LoginModal />
              <Button
                asChild
                className="bg-gradient-yellow hover:opacity-90 transition-opacity dark:bg-gradient-yellow-dark"
              >
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="animate-fade-in text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Query Your Databases with <span className="gradient-text">Natural Language</span>
                  </h1>
                  <p className="animate-fade-in [animation-delay:200ms] max-w-[600px] text-muted-foreground md:text-xl">
                    Connect to any database and ask questions in plain English. QueryMind translates your questions into
                    perfect queries, saving you time and effort.
                  </p>
                </div>
                <div className="animate-fade-in [animation-delay:400ms] flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-yellow hover:opacity-90 transition-opacity dark:bg-gradient-yellow-dark"
                  >
                    <Link href="/dashboard">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary hover:bg-primary/10 transition-colors">
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="animate-fade-in-right [animation-delay:600ms] relative h-[350px] w-full overflow-hidden rounded-xl border bg-background p-4 shadow-xl sm:h-[400px] lg:h-[500px] gradient-border">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-yellow opacity-70 blur-sm dark:bg-gradient-yellow-dark"></div>
                      <div className="relative bg-background rounded-full p-2">
                        <Sparkles className="h-5 w-5 text-primary animate-pulse-slow" />
                      </div>
                    </div>
                  </div>
                  <div className="flex h-full flex-col space-y-4">
                    <div className="flex items-center space-x-2 rounded-md bg-muted p-3 animate-pulse-slow">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <p className="text-sm">Show me all customers who spent more than $1000 last month</p>
                    </div>
                    <div className="flex-1 rounded-md border p-3 bg-muted/50">
                      <pre className="text-xs text-muted-foreground">
                        <code>{`SELECT 
  customers.name, 
  SUM(orders.amount) as total_spent
FROM 
  customers
JOIN 
  orders ON customers.id = orders.customer_id
WHERE 
  orders.order_date >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
GROUP BY 
  customers.id
HAVING 
  total_spent > 1000
ORDER BY 
  total_spent DESC;`}</code>
                      </pre>
                    </div>
                    <div className="flex-1 rounded-md border p-3">
                      <div className="text-xs">
                        <div className="grid grid-cols-3 gap-2 font-medium">
                          <div>Name</div>
                          <div>Total Spent</div>
                          <div></div>
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          <div>John Smith</div>
                          <div className="text-primary font-medium">$2,450.00</div>
                          <div></div>
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          <div>Sarah Johnson</div>
                          <div className="text-primary font-medium">$1,875.50</div>
                          <div></div>
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          <div>Michael Brown</div>
                          <div className="text-primary font-medium">$1,340.25</div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="animate-fade-up inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="animate-fade-up [animation-delay:200ms] text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to <span className="gradient-text">query your data</span>
                </h2>
                <p className="animate-fade-up [animation-delay:400ms] max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  QueryMind combines the power of AI with a seamless database interface to make data exploration
                  effortless.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="animate-fade-up [animation-delay:200ms] flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-yellow text-primary-foreground dark:bg-gradient-yellow-dark">
                  <Database className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Multiple Database Support</h3>
                  <p className="text-muted-foreground">
                    Connect to MySQL, PostgreSQL, MongoDB, Oracle, SQL Server, SQLite and more with a simple interface.
                  </p>
                </div>
              </div>
              <div className="animate-fade-up [animation-delay:400ms] flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-yellow text-primary-foreground dark:bg-gradient-yellow-dark">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Natural Language Queries</h3>
                  <p className="text-muted-foreground">
                    Ask questions in plain English and get accurate database queries in return.
                  </p>
                </div>
              </div>
              <div className="animate-fade-up [animation-delay:600ms] flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-yellow text-primary-foreground dark:bg-gradient-yellow-dark">
                  <Search className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Advanced Query Editing</h3>
                  <p className="text-muted-foreground">
                    Review and modify generated queries before execution for complete control.
                  </p>
                </div>
              </div>
              <div className="animate-fade-up [animation-delay:800ms] flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-yellow text-primary-foreground dark:bg-gradient-yellow-dark">
                  <Server className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Schema Visualization</h3>
                  <p className="text-muted-foreground">
                    Understand your database structure with interactive schema diagrams.
                  </p>
                </div>
              </div>
              <div className="animate-fade-up [animation-delay:1000ms] flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-yellow text-primary-foreground dark:bg-gradient-yellow-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 2H2v10h10V2z" />
                    <path d="M12 12H2v10h10V12z" />
                    <path d="M22 2h-10v10h10V2z" />
                    <path d="M22 12h-10v10h10V12z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Query History</h3>
                  <p className="text-muted-foreground">
                    Save and revisit your previous queries for quick reference and reuse.
                  </p>
                </div>
              </div>
              <div className="animate-fade-up [animation-delay:1200ms] flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-yellow text-primary-foreground dark:bg-gradient-yellow-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M8 13h2" />
                    <path d="M8 17h2" />
                    <path d="M14 13h2" />
                    <path d="M14 17h2" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Export Results</h3>
                  <p className="text-muted-foreground">
                    Export your query results to CSV, JSON, or Excel with a single click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 relative">
            <div className="space-y-3">
              <h2 className="animate-fade-up text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to transform how you <span className="gradient-text">work with databases</span>?
              </h2>
              <p className="animate-fade-up [animation-delay:200ms] mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of developers and data analysts who are saving time with QueryMind.
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:400ms] mx-auto w-full max-w-sm space-y-2">
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-yellow hover:opacity-90 transition-opacity dark:bg-gradient-yellow-dark"
              >
                <Link href="/dashboard">Get Started for Free</Link>
              </Button>
              <p className="text-xs text-muted-foreground">No credit card required. Start with our free tier today.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 bg-muted/30">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-yellow opacity-70 blur-sm dark:bg-gradient-yellow-dark"></div>
              <Database className="relative h-6 w-6" />
            </div>
            <span className="font-bold gradient-text">QueryMind</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Documentation
            </Link>
          </nav>
          <div className="flex-1 text-center text-sm text-muted-foreground md:text-right">
            © {new Date().getFullYear()} QueryMind. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
