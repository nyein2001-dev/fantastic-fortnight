import "./globals.css";
import StoreProvider from "@/components/Helper/StoreProvider";
import SiteSetup from "@/components/Partials/SiteSetup";
import TopBarSmallAnnounce from "@/components/Partials/TopBarSmallAnnounce";
import Maintainance from "@/components/Helper/Maintainance";

async function getData() {
  try {
    const res = await fetch(`${process.env.BASE_URL}api/website-setup`, {
      cache: "no-store",
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error(
        `Fetch Failed! Check your API BASE_URL ${process.env.BASE_URL + "api"} `
      );
    }
  } catch (error) {
    throw new Error(
      `Fetch Failed! Check your API BASE_URL ${process.env.BASE_URL + "api"} `
    );
  }
}

export default async function RootLayout({ children }) {
  const data = await getData();

  const {
    setting,
    categories,
    languages,
    currencies,
    social_links,
    localizations,
    googleAnalytic,
    tawkChat,
    cookieConsent,
    maintenance,
    homepage_ads,
    shoppage_ads,
    shop_detail_ads,
    footer,
  } = data
    ? data
    : {
        setting: null,
        categories: null,
        languages: null,
        currencies: null,
        social_links: null,
        localizations: null,
        googleAnalytic: null,
        tawkChat: null,
        cookieConsent: null,
        maintenance: null,
        homepage_ads: null,
        shoppage_ads: null,
        shop_detail_ads: null,
        footer: null,
      };

  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          rel="icon"
          type="image/png"
          href={process.env.BASE_URL + setting?.favicon}
        />
      </head>
      <body id="portal-root" suppressHydrationWarning={true}>
        <StoreProvider>
          <Maintainance maintenance={maintenance} />
          <SiteSetup
            data={{
              setting,
              categories,
              languages,
              currencies,
              social_links,
              localizations,
              googleAnalytic,
              tawkChat,
              cookieConsent,
              homepage_ads,
              shoppage_ads,
              shop_detail_ads,
              footer,
            }}
          />
          <header>
            <TopBarSmallAnnounce
              currencies={currencies}
              settings={setting}
              languages={languages}
            />
          </header>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
