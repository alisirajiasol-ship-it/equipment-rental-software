// lib/faq.ts - ONE array feeds BOTH the visible FAQ (<details> accordion) and the FAQPage JSON-LD,
// so the markup can never drift from what visitors can read. Answers must be in the DOM at load (no lazy rendering).
export const FAQ: { q: string; a: string }[] = [
  {
    q: "What is equipment rental software?",
    a: "Equipment rental software is a system rental businesses use to manage their equipment, availability, bookings, payments, and maintenance in one place. Instead of spreadsheets, whiteboards, and paper forms, your team works from a single, current record of what you own and what is rented.",
  },
  {
    q: "Who is this equipment rental software for?",
    a: "It is built for businesses that rent out equipment, including contractors and construction equipment rental companies, tool rental shops, party and event rental businesses, and AV and production rental companies. Starter is designed for small rental businesses, and Business supports multiple locations.",
  },
  {
    q: "How does the software prevent double bookings?",
    a: "Availability updates in real time as bookings are made. Each booking is checked against current availability for the dates requested, so you can see when an item is already committed before you confirm another rental.",
  },
  {
    q: "Can customers book equipment online?",
    a: "Yes. Online booking is included with the Professional plan ($79/mo) and the Business plan, so customers can reserve equipment without calling your team. Availability stays in sync with the rest of your bookings.",
  },
  {
    q: "Can I take payments and security deposits?",
    a: "Yes. Professional and Business plans include payments and invoicing, and security deposits are handled as part of the rental, so you can see what has been paid and what is still due.",
  },
  {
    q: "How do maintenance tracking and mobile inspections work?",
    a: "You keep maintenance history and upcoming service with each piece of equipment, and mobile inspections let your team document condition at pickup and return. Equipment maintenance is included from the Professional plan.",
  },
  {
    q: "How much does equipment rental software cost?",
    a: "Plans start at $39/month for Starter, $79/month for Professional, and $149/month for Business. Starter and Professional start with a free trial, and Business is available through a demo. See the pricing page for a full plan comparison.",
  },
  {
    q: "Is it a good fit for a small business or multiple locations?",
    a: "Yes to both. Starter ($39/mo) is designed for small rental businesses and includes 2 users and 1 location. Professional ($79/mo) adds 5 users, and Business ($149/mo) adds unlimited users and multiple locations.",
  },
];
