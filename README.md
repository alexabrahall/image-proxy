# image-proxy
Proxy images that are usually blocked by web CDNs

Simple reverse proxy for images on sites such as SNS and Footasylum which block Discord's scraping user agent

Also includes a very simple yet effective caching system to stop the same image being downloaded everytime it is requested

## Non-cached VS Cached response times ##
(Note all times are averages over 10 requests)
```
Non-Cached (localhost): 450ms
Cached (localhost): 7ms

Non-Cached (Hosted): 685ms
Cached (Hosted): 104ms
```

If there are any bugs / improvements that can be made, feel free to make a PR. 

Please note this is mostly for educational purposes rather than commercial.

