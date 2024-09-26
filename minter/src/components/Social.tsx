// @ts-nocheck

"use client";

import GitHubButton from "react-github-btn";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

export const SocialMedias = () => {
  const url = "https://minter.mintbase.xyz";
  const title = "Bitte Templates - Minter";

  return (
    <div className="absolute pt-5 top-2 left-0  w-full h-[30px] z-50">
      <div className="flex gap-2 justify-end flex-wrap pr-4">
        <GitHubButton
          href="https://github.com/mintbase/templates"
          data-color-scheme="no-preference: dark; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star bitte/templates on GitHub"
        >
          Star
        </GitHubButton>{" "}
        <div className="social-networks">
          <FacebookShareButton url={url}>
            <FacebookIcon size={24} round />
          </FacebookShareButton>
          <TwitterShareButton url={url} title={title}>
            <XIcon size={24} round />
          </TwitterShareButton>

          <TelegramShareButton url={url} title={title}>
            <TelegramIcon size={24} round />
          </TelegramShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={24} round />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};
