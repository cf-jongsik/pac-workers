function pac(endpoint: string): string {
	const res = `function FindProxyForURL(url, host) {
  // No proxy for private (RFC 1918) IP addresses (intranet sites)
  if (
    isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
    isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
    isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")
  ) {
    return "DIRECT";
  }

  // No proxy for localhost
  if (isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0")) {
    return "DIRECT";
  }

  // Proxy all
  return "HTTPS ${endpoint}.proxy.cloudflare-gateway.com:443";
}`;
	console.log(res);
	return res;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		const endpoint = url.pathname.slice(1).split('.')[0];

		return new Response(pac(endpoint), {
			headers: {
				'content-type': 'application/x-ns-proxy-autoconfig',
			},
		});
	},
} satisfies ExportedHandler<Env>;
