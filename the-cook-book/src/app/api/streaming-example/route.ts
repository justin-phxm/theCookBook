export const runtime = "edge"; // or 'nodejs' which uses Serverless Functions
export const dynamic = "force-dynamic"; // always run dynamically

export async function GET() {
  // This encoder will stream your text
  const encoder = new TextEncoder();
  const customReadable = new ReadableStream({
    start(controller) {
      // Start encoding 'Basic Streaming Test',
      // and add the resulting stream to the queue
      controller.enqueue(encoder.encode("Basic Streaming Test"));
      // Prevent anything else being added to the stream
      controller.close();
    },
  });

  return new Response(customReadable, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
