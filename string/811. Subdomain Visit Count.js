// Challenge https://leetcode.com/problems/subdomain-visit-count/description/
// Solution Reference https://leetcode.com/problems/subdomain-visit-count/solutions/3414733/simple-javascript-solution-beats-100/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const map = new Map();

    for (let domain of cpdomains) {
        const [visits, fullDomain] = domain.split(" ")
        const subdomains  = fullDomain.split(".")

        while (subdomains.length) {
            const domain = subdomains.join(".")
            if (map.has(domain)) {
                const curr = map.get(domain);
                map.set(domain, Number(curr) + Number(visits));
            } else map.set(domain, Number(visits));
            subdomains.shift();
        }
    }
    return  Array.from(map, ([key,value]) => `${value} ${key}`);
};