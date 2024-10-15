"use client"
import { useState, useEffect } from "react"
import Input from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link";

export default function SEARCH() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchSearchResults = () => {
      if (searchTerm.trim() === "") {
        setSearchResults([])
        return
      }

      // Filter from static data, replace with API fetch if needed
      const results = [
        { id: 1, title: "Dashboard", href: "/dashboard" },
        { id: 2, title: "Invoices", href: "/dashboard/invoices" },
        { id: 3, title: "Customers", href: "/dashboard/customers" },
        { id: 4, title: "Settings", href: "/dashboard/setting" },
        { id: 5, title: "Analytics", href: "/dashboard/analytics" },
      ].filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSearchResults(results)
    }

    fetchSearchResults()
  }, [searchTerm])

  const handleItemClick = (href) => {
    setSearchTerm("");
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center border border-input bg-background rounded-md bg-white">
        <span className="flex items-center justify-center p-2">
          <Search className="h-5 w-5 text-gray-500" />
        </span>
        <Input
          type="search"
          placeholder="Search contents ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border-0 bg-transparent px-0 py-2 text-black shadow-sm"
        />
      </div>
      {searchResults.length > 0 && (
        <div className="text-xs absolute z-10 mt-1 w-full rounded-md border border-input bg-background py-2 shadow-lg bg-white">
          <ul className="space-y-1">
            <p className="font-bold flex items-center justify-center text-black">Suggestion</p>
            {searchResults.map((result) => (
              <li key={result.id} className="cursor-pointer px-4 py-2 hover:bg-muted text-black" onClick={() => handleItemClick(result.href)}>
                <Link href={result.href} passHref>
                  {result.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
