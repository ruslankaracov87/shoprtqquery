"use client";
import scss from "./Featured.module.scss";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShieldCheckLine } from "react-icons/ri";

const Featured = () => {
  return (
    <section className={scss.featured}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainText}>
            <div className={scss.bg}></div>
            <h3>Featured</h3>
          </div>
          <h1>New Arrival</h1>
          <div className={scss.featuredBlocks}>
            <div className={scss.bigBlock}>
              <img
                src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NtgqGR4tP4k6JcdZWL4AqOrzWQ3K0o-~jheUrs-QN2dsvhPxuW6uM79p9Tl8GqKMPzO4affC7nSb4pABqvLe-s~6FgNL9Ac81AVRcNZvBNQ4OPnn26F8m8NEIS6cIn8rKm-rO43A6nQfepwAxUAJhWnnqfVHg-6ftI4dXdepPuB6zw3~OXRTFoEFRRwicIyOTz0-XpMMDNWbLT9vGqtz~g~D5MW2Jfeiq7yPT0ECvwe-pQjgZBbwxHGQAIAgOZtmlwBO2YYUgMpK8bwpcKLS8QqLf3Yhg8H~tmXOx9h~kPkhfPxuaknIpCeimjjMj2A3PGQaetv5IXE90jgKkxEPCg__"
                alt=""
              />
              <div className={scss.text}>
                <h1>PlayStation 5</h1>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <span>Shop Now</span>
              </div>
            </div>
            <div className={scss.nextBlocks}>
              <div className={scss.top}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/455c/8d64/08463f7e8f57dd3048a2444dbfa0cb90?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RsttD~KQr6801je9ZQazbJe4TopwBT5u~-xpVwEXc2Gon9dkhQHeH95hZHGqW1sqKedybkrBkuF1ebPb3Xkn4hck471BjUYw2FXi0Kofiuy~wmFw92cFgDyviIFEE8mcqqO2kM6qVPkzHFDFNUgN8VPHd~kRr4VB4mgl9~oHA6PVNArAWqY~fCvW1-FtDSIGHG~vyJmhlXUkj~xKGFMz1S9RQtQVBCgQDWsLWg7diD5lL2z74GF~G79qyf~K9p1W-tcXC9HKSciqym2aeHPrdIFdalMJOyXUeQHQU1RTD7Pc~tAkNezxfSZcMpMWhGDCtUoneGDS4r9BjcNqNUyvxA__"
                  alt=""
                />
                <div className={scss.text}>
                  <h1>Women’s Collections </h1>
                  <p>Featured woman collections that give you another vibe.</p>
                  <span>Shop Now</span>
                </div>
                3
              </div>
              <div className={scss.bottom}>
                <div className={scss.block}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/e565/9d57/2977438364a41d7e8c9d1e9a794d43ed?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UKAK~a8t7UCvq9FDXfZLyYtrlIi5dZS-dA8ZxxIAyHjbIfbpZ5kVqp0zQNK5QDr9cz4h0rE9xBPzoRvvF0QVJzf6LNdlZsB0yF94x~5~9Zc1aV4kjINiddreb8JwehzIVn9jUxPlhkFYDY2kLldeLiF7xA6JAoX3Ccipp0udLOSNxeCl5OqJQy-mEoyiomBwlcjPgvb9MVykMN~n-VrBaRgzYdjqvjRmuHHsyOpJRgQ0sm3oWPpR0yDC8KDLR4hpm3SGaFh~PbmnTxkBlYqV6CssmC5qiKEyTesTLaVyYMK5wK7qF19qoFw874PyRYQ~Y-uN7ndfrWbtwI~jRB8VaA__"
                    alt=""
                  />
                  <div className={scss.text}>
                    <h1>Speakers</h1>
                    <p>Amazon wireless speakers</p>
                    <span>Shop Now</span>
                  </div>
                </div>
                <div className={scss.block}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/1531/5cd1/5102562cf220504d288fa568eaa816dd?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUOrwnfLsMkTYeQOuLtR1-KEoylz3CqNWpD--CY6E55sOjkRP1C61GLYXwnbhUBeLumQe7rvzBEXuzG1XE9-paEyZiFTX9PZKrK~HRcTQbU4pxty3Svsh4-eqKpk8FUZlJDUY-nevhCNH6-5bxJ0X8miw1Nd6QziVnlLRPhMZZOkHPS52d6IgUIS9gAe29TO3UK6KyMg3GgzT33gedSI8e-RlDsLYr1BlcXWrDfKKZtRdwY4rzZsfDMLO~ZyWxx6~3PIi48k1lEP048~azcRm2kjMO6VPdu8MN9qnQczGWJCRKUdnkzOPBbI2elyrY4qKn7zDkIse-ZbLHdtvjknOA__"
                    alt=""
                  />
                  <div className={scss.text}>
                    <h1>Perfume</h1>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <span>Shop Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={scss.details}>
          <div className={scss.block}>
            <div className={scss.icon}>
              <a>
                <TbTruckDelivery />
              </a>
            </div>
            <h2>FREE AND FAST DELIVERY</h2>
            <h6>Free delivery for all orders over $140</h6>
          </div>
          <div className={scss.block}>
            <div className={scss.icon}>
              <a>
                <TfiHeadphoneAlt />
              </a>
            </div>
            <h2>24/7 CUSTOMER SERVICE</h2>
            <h6>Friendly 24/7 customer support</h6>
          </div>
          <div className={scss.block}>
            <div className={scss.icon}>
              <a>
                <RiShieldCheckLine />
              </a>
            </div>
            <h2>MONEY BACK GUARANTEE</h2>
            <h6>We reurn money within 30 days</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
