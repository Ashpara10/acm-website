"use client";
import React, { useState, useEffect } from "react";
import { X, Newspaper } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as ScrollArea from '@radix-ui/react-scroll-area';

interface NewsItem {
  title: string;
  url: string;
}

const TechNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentHeadline, setCurrentHeadline] = useState<number>(0);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json')
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDialogOpen) {
        setCurrentHeadline(prevHeadline => (prevHeadline + 1) % news.length);
        setShowMessageBox(true);
        setTimeout(() => {
          setShowMessageBox(false);
        }, 5000);
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [news, isDialogOpen]);

  return (
    <div className="fixed right-6 bottom-6 z-50 hidden md:block">
      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {showMessageBox && (
          <div className="absolute bottom-16 right-0 w-[90vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] 
            p-4 rounded-lg bg-background/85 backdrop-blur-md border border-border
            shadow-lg animate-in slide-in-from-bottom-5 fade-out-0 duration-300 z-[60]">
            <a
              href={news[currentHeadline]?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {news[currentHeadline]?.title}
            </a>
          </div>
        )}

        <Dialog.Trigger asChild>
          <button className="group p-4 rounded-full bg-background/50 backdrop-blur-sm 
            hover:bg-background/70 border border-white shadow-lg transition-all
            hover:scale-105 active:scale-95">
            {isDialogOpen ? (
              <X className="h-5 w-5 text-foreground group-hover:rotate-90 transition-transform" />
            ) : (
              <Newspaper className="h-5 w-5 text-foreground" />
            )}
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in-0"/>
          <Dialog.Content className="fixed right-6 bottom-20 w-[90vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] 
            h-[60vh] p-6 rounded-lg bg-background/85 backdrop-blur-md border border-border
            shadow-lg animate-in slide-in-from-bottom-5 z-[80]">
            <ScrollArea.Root className="h-full w-full">
              <ScrollArea.Viewport className="h-full w-full">
                <div className="space-y-4">
                  <Dialog.Title className="text-lg font-semibold text-foreground">
                    Tech News
                  </Dialog.Title>
                  
                  <div className="mb-4">
                    <a
                      href={news[currentHeadline]?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {news[currentHeadline]?.title}
                    </a>
                  </div>

                  <ul className="space-y-2">
                    {news.map((article, index) => (
                      <li key={index}>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 rounded-md bg-muted/60 hover:bg-muted 
                            border border-border text-sm text-foreground 
                            hover:text-primary transition-colors"
                        >
                          {article.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-muted/20 transition-colors 
                  duration-150 ease-out hover:bg-muted/30 data-[orientation=vertical]:w-2 
                  data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2"
                orientation="vertical"
              >
                <ScrollArea.Thumb className="flex-1 bg-border rounded-[10px] relative before:content-[''] 
                  before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 
                  before:-translate-y-1/2 before:w-full before:h-full min-h-[44px]" />
              </ScrollArea.Scrollbar>
            </ScrollArea.Root>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default TechNews;