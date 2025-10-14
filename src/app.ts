

import http from "node:http"

const products = [
  {id: 1, name: "Camiseta", price: 29.99 },
  {id: 1, name: "Short", price: 38.89 },
  {id: 1, name: "Jaqueta", price: 109.98 }
]

const app = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/products"){
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(products))
  }
})

export { app }