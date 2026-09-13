import { faqsData } from './data.js';

const corsHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'public, max-age=300, s-maxage=3600'
};

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders
  });
}

export async function onRequestGet() {
  try {
    const publishedFaqs = faqsData
      .filter((faq) => faq.published)
      .sort((a, b) => a.order - b.order);

    return new Response(
      JSON.stringify({
        success: true,
        data: publishedFaqs
      }),
      {
        status: 200,
        headers: corsHeaders
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to retrieve FAQs'
      }),
      {
        status: 500,
        headers: corsHeaders
      }
    );
  }
}
