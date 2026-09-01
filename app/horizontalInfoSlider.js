"use client";

import React, { useEffect, useMemo, useState } from "react";

const RUNNING_NEWS_BASE_URL =
  "https://membership.dreamasiaworld.com";

const HorizontalInfoSlider = () => {
  const [runningNews, setRunningNews] = useState([]);

  const fallbackMessage =
    "Park will be closed on Tuesday";

  /* =====================================================
     FETCH RUNNING NEWS
  ===================================================== */
  useEffect(() => {
    let isMounted = true;

    const fetchRunningNews = async () => {
      try {
        const res = await fetch(
          `${RUNNING_NEWS_BASE_URL}/api/api/getRunningNews`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error(
            `Failed to fetch running news. Status: ${res.status}`
          );
        }

        const data = await res.json();

        let parsedData = [];

        if (typeof data?.Data === "string") {
          try {
            parsedData = JSON.parse(
              data.Data || "[]"
            );
          } catch (parseError) {
            console.error(
              "Running news JSON parse error:",
              parseError
            );

            parsedData = [];
          }
        } else if (Array.isArray(data?.Data)) {
          parsedData = data.Data;
        }

        if (!isMounted) {
          return;
        }

        const validNews = parsedData
          .filter(
            (item) =>
              item &&
              String(item.MSG || "").trim() !== ""
          )
          .sort(
            (a, b) =>
              Number(a.SORT_ORDER || 0) -
              Number(b.SORT_ORDER || 0)
          );

        setRunningNews(validNews);
      } catch (error) {
        console.error(
          "Error fetching running news:",
          error
        );

        if (isMounted) {
          setRunningNews([]);
        }
      }
    };

    fetchRunningNews();

    return () => {
      isMounted = false;
    };
  }, []);

  /* =====================================================
     PREPARE ITEMS FOR CONTINUOUS LOOP
  ===================================================== */
  const sliderItems = useMemo(() => {
    const source =
      runningNews.length > 0
        ? runningNews
        : [
            {
              SRNO: 0,
              MSG: fallbackMessage,
              LINK_URL: null,
              SORT_ORDER: 0,
            },
          ];

    const minimumItems = 3;

    if (source.length >= minimumItems) {
      return source;
    }

    return Array.from(
      { length: minimumItems },
      (_, index) =>
        source[index % source.length]
    );
  }, [runningNews]);

  /* =====================================================
     RENDER NEWS ITEM
  ===================================================== */
  const renderNewsItem = (
    news,
    index,
    group
  ) => {
    const message = String(
      news?.MSG || ""
    ).trim();

    const rawLink = String(
      news?.LINK_URL || ""
    ).trim();

    const linkUrl =
      rawLink &&
      rawLink.toLowerCase() !== "null"
        ? rawLink
        : "";

    return (
      <div
        key={`${group}-${news?.SRNO || 0}-${index}`}
        className="
          flex items-center
          whitespace-nowrap
          px-10 md:px-16
          text-[13px] md:text-[15px]
          font-semibold
          tracking-[0.2px]
        "
      >
        <span
          className="
            mr-3 flex h-4 w-4
            items-center justify-center
            rounded-full
            bg-[#ffc928]
            text-[12px]
            text-[#64166f]
            shadow-sm
          "
        >
          !
        </span>

        {linkUrl ? (
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-white
              no-underline
              hover:text-white
            "
          >
            {message}
          </a>
        ) : (
          <span>{message}</span>
        )}

        <span
          className="
            ml-10
            md:ml-16
            text-[#f4c84a]
          "
        >
          ✦
        </span>
      </div>
    );
  };

  return (
    <>
      <div
        className="
          relative z-50 w-full overflow-hidden
          bg-gradient-to-r
          from-[#5f176d]
          via-[#7b1b87]
          to-[#5f176d]
          border-b border-[#e6c5eb]
          py-2
          text-white
          shadow-sm
          font-[inherit]
        "
      >
        <div
          className="flex w-max items-center"
          style={{
            animation:
              "horizontalInfoScroll 22s linear infinite",
          }}
        >
          {/* First Group */}
          <div className="flex shrink-0 items-center">
            {sliderItems.map(
              (news, index) =>
                renderNewsItem(
                  news,
                  index,
                  "first"
                )
            )}
          </div>

          {/* Duplicate Group For Seamless Loop */}
          <div
            className="flex shrink-0 items-center"
            aria-hidden="true"
          >
            {sliderItems.map(
              (news, index) =>
                renderNewsItem(
                  news,
                  index,
                  "duplicate"
                )
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes horizontalInfoScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default HorizontalInfoSlider;