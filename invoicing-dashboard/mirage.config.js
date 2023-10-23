// mirage.config.js
import { createServer } from "miragejs";

export function makeServer() {
  const server = createServer({
    routes() {
      this.namespace = "api";

      this.get("/expenses", () => {
        return {
          expenses: [
            {
              id: 1,
              content: "Balance",
              date: "20 April 2022",
              amount: "$20,129",
              icon: "https://res-console.cloudinary.com/dwc1snd78/thumbnails/v1/image/upload/v1698029240/bW9uZXktaWNvbl9saDh1dTE=/grid_landscape",
            },
            {
              id: 2,
              content: "Income",
              date: "15 February 2023",
              amount: "$20,129",
              icon: "https://res-console.cloudinary.com/dwc1snd78/thumbnails/v1/image/upload/v1698029255/ZGViaXRfbzVucG15/grid_landscape",
            },
            {
              id: 3,
              content: "Expenses",
              date: "24 Juli 2023",
              amount: "$20,129",
              icon: "https://res-console.cloudinary.com/dwc1snd78/thumbnails/v1/image/upload/v1698029262/a3JlZGl0X2t0YTNycw==/grid_landscape",
            },
          ],
        };
      });
    },
  });

  return server;
}
