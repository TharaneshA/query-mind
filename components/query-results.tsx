"use client"

import { useState } from "react"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Sample data for demonstration
const sampleData = {
  columns: ["id", "name", "email", "order_count", "total_spent"],
  rows: [
    { id: 1, name: "John Smith", email: "john@example.com", order_count: 12, total_spent: 2450.0 },
    { id: 2, name: "Sarah Johnson", email: "sarah@example.com", order_count: 8, total_spent: 1875.5 },
    { id: 3, name: "Michael Brown", email: "michael@example.com", order_count: 5, total_spent: 1340.25 },
    { id: 4, name: "Emily Davis", email: "emily@example.com", order_count: 15, total_spent: 3200.75 },
    { id: 5, name: "David Wilson", email: "david@example.com", order_count: 3, total_spent: 750.0 },
    { id: 6, name: "Jessica Taylor", email: "jessica@example.com", order_count: 7, total_spent: 1625.3 },
    { id: 7, name: "James Anderson", email: "james@example.com", order_count: 10, total_spent: 2100.0 },
    { id: 8, name: "Jennifer Thomas", email: "jennifer@example.com", order_count: 6, total_spent: 1450.8 },
    { id: 9, name: "Robert Jackson", email: "robert@example.com", order_count: 4, total_spent: 980.5 },
    { id: 10, name: "Lisa White", email: "lisa@example.com", order_count: 9, total_spent: 1890.25 },
  ],
}

export function QueryResults() {
  const [page, setPage] = useState(1)
  const [rowsPerPage] = useState(5)

  const startIndex = (page - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const displayedRows = sampleData.rows.slice(startIndex, endIndex)
  const totalPages = Math.ceil(sampleData.rows.length / rowsPerPage)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {startIndex + 1}-{Math.min(endIndex, sampleData.rows.length)} of {sampleData.rows.length} results
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export JSON
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {sampleData.columns.map((column) => (
                <TableHead key={column} className="font-medium">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedRows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {sampleData.columns.map((column) => (
                  <TableCell key={column}>
                    {column === "total_spent"
                      ? `$${row[column as keyof typeof row].toFixed(2)}`
                      : row[column as keyof typeof row]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }).map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink onClick={() => setPage(i + 1)} isActive={page === i + 1}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className={page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
