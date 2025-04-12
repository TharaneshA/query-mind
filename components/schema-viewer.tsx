"use client"

import { useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Sample schema data for demonstration
const sampleSchema = [
  {
    name: "customers",
    columns: [
      { name: "id", type: "INTEGER", isPrimary: true, isNullable: false },
      { name: "name", type: "VARCHAR(255)", isPrimary: false, isNullable: false },
      { name: "email", type: "VARCHAR(255)", isPrimary: false, isNullable: false },
      { name: "created_at", type: "TIMESTAMP", isPrimary: false, isNullable: true },
      { name: "updated_at", type: "TIMESTAMP", isPrimary: false, isNullable: true },
    ],
    foreignKeys: [],
  },
  {
    name: "orders",
    columns: [
      { name: "id", type: "INTEGER", isPrimary: true, isNullable: false },
      { name: "customer_id", type: "INTEGER", isPrimary: false, isNullable: false },
      { name: "total", type: "DECIMAL(10,2)", isPrimary: false, isNullable: false },
      { name: "status", type: "VARCHAR(50)", isPrimary: false, isNullable: false },
      { name: "created_at", type: "TIMESTAMP", isPrimary: false, isNullable: true },
    ],
    foreignKeys: [{ column: "customer_id", references: { table: "customers", column: "id" } }],
  },
  {
    name: "products",
    columns: [
      { name: "id", type: "INTEGER", isPrimary: true, isNullable: false },
      { name: "name", type: "VARCHAR(255)", isPrimary: false, isNullable: false },
      { name: "sku", type: "VARCHAR(50)", isPrimary: false, isNullable: false },
      { name: "price", type: "DECIMAL(10,2)", isPrimary: false, isNullable: false },
      { name: "description", type: "TEXT", isPrimary: false, isNullable: true },
      { name: "created_at", type: "TIMESTAMP", isPrimary: false, isNullable: true },
    ],
    foreignKeys: [],
  },
  {
    name: "order_items",
    columns: [
      { name: "id", type: "INTEGER", isPrimary: true, isNullable: false },
      { name: "order_id", type: "INTEGER", isPrimary: false, isNullable: false },
      { name: "product_id", type: "INTEGER", isPrimary: false, isNullable: false },
      { name: "quantity", type: "INTEGER", isPrimary: false, isNullable: false },
      { name: "price", type: "DECIMAL(10,2)", isPrimary: false, isNullable: false },
    ],
    foreignKeys: [
      { column: "order_id", references: { table: "orders", column: "id" } },
      { column: "product_id", references: { table: "products", column: "id" } },
    ],
  },
  {
    name: "inventory",
    columns: [
      { name: "id", type: "INTEGER", isPrimary: true, isNullable: false },
      { name: "product_id", type: "INTEGER", isPrimary: false, isNullable: false },
      { name: "quantity", type: "INTEGER", isPrimary: false, isNullable: false },
      { name: "last_updated", type: "TIMESTAMP", isPrimary: false, isNullable: false },
    ],
    foreignKeys: [{ column: "product_id", references: { table: "products", column: "id" } }],
  },
]

export function SchemaViewer() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSchema = sampleSchema.filter(
    (table) =>
      table.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      table.columns.some((col) => col.name.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tables and columns..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">Refresh Schema</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredSchema.map((table) => (
          <Card key={table.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">{table.name}</CardTitle>
              <CardDescription>{table.columns.length} columns</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible defaultValue="columns">
                <AccordionItem value="columns">
                  <AccordionTrigger className="text-sm">Columns</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-1">
                      {table.columns.map((column) => (
                        <div key={column.name} className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            {column.isPrimary && <span className="mr-1 text-amber-500">🔑</span>}
                            <span className="font-medium">{column.name}</span>
                          </div>
                          <span className="text-muted-foreground">{column.type}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {table.foreignKeys.length > 0 && (
                  <AccordionItem value="foreignKeys">
                    <AccordionTrigger className="text-sm">Foreign Keys</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-1">
                        {table.foreignKeys.map((fk, index) => (
                          <div key={index} className="text-sm">
                            <span className="font-medium">{fk.column}</span>
                            <span className="text-muted-foreground">
                              {" → "}
                              {fk.references.table}.{fk.references.column}
                            </span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
