"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import {currentCart} from "@wix/ecom"
import Cookies from "js-cookie";
import { createContext, ReactNode } from "react";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClient = createClient({
  modules: {
    products,
    collections,
    currentCart
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export type wixClient = typeof wixClient;

export const wixClientContext = createContext<wixClient>(wixClient);

export const WixClientContextProvider = ({
  Children,
}: {
  Children: ReactNode;
}) => {
  return (
    <wixClientContext.Provider value={wixClient}>
      {Children}
    </wixClientContext.Provider>
  );
};
