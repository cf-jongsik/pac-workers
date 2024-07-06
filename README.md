<p>
  for Zero Trust agentless ramp option, <br />
  you can use this workers to provide its pac file for browser.
</p>
<p>once configured with custom domain, it <br />
  return pac config file according to subpath.  <br />

  ```bash
  example:
    custom domain for workers (in wrangler.toml): pac.example.com
    custom endpoint (from your ZT dashboard): 1q2w3e4r.proxy.cloudflare-gateway.com
    
  then
  configure your browser to pac.example.com/1q2w3e4r.pac
  ```
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file"> MOZILLA PAC FILE REFERENCE </a>
 <br />
 <br />
 ```bash
	Installation:
     1. clone this repo
     2. install npm packages => "npm install"
     3. copy wrangler.toml => "cp wrangler.toml.example wrangler.toml"
     4. edit wrangler.toml (custom domain field)
     5. deploy => "wrangler deploy"
     6. done
 ``` 
</p>
