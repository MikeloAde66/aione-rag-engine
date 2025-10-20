import Stripe from "stripe";

export async function POST() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2025-04-30.basil" as any });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{ price: "price_12345", quantity: 1 }],
    mode: "payment",
    success_url: "https://proto.digitaldigestglobal.com/success",
    cancel_url: "https://proto.digitaldigestglobal.com/cancel"
  });
  return Response.json({ url: session.url });
}
