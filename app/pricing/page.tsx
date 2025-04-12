import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Pricing - QueryMind",
  description: "Choose the right plan for your needs",
}

export default function PricingPage() {
  return (
    <div className="container max-w-6xl py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">Simple, Transparent Pricing</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the plan that's right for you and start exploring your data with natural language.
        </p>
      </div>
      <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <div className="text-3xl font-bold">$0</div>
            <CardDescription>Perfect for getting started with basic queries.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Connect to 1 database</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>50 queries per month</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Basic query history</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Community support</span>
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button asChild className="w-full">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col border-primary">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <div className="text-3xl font-bold">$29</div>
            <CardDescription>For professionals who need more power and flexibility.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Connect to 5 databases</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>500 queries per month</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Advanced query history</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Priority support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Export to CSV, JSON, Excel</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Team sharing</span>
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button
              asChild
              className="w-full bg-gradient-yellow hover:opacity-90 transition-opacity dark:bg-gradient-yellow-dark"
            >
              <Link href="/dashboard">Upgrade to Pro</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <div className="text-3xl font-bold">Custom</div>
            <CardDescription>For organizations with advanced requirements.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Unlimited databases</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Unlimited queries</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Advanced analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Dedicated support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Custom integrations</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>On-premise deployment</span>
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="mx-auto mt-12 flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-2xl font-bold">Need something different?</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Contact us for custom pricing options tailored to your specific needs.
        </p>
        <Button asChild variant="outline" className="mt-4">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
