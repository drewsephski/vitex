
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogLayoutProps {
  title: string;
  author: string;
  authorImage: string;
  date: string;
  children: React.ReactNode;
}

export function BlogLayout({
  title,
  author,
  authorImage,
  date,
  children,
}: BlogLayoutProps) {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            {title}
          </h1>
          <div className="flex items-center space-x-4 mt-8">
            <Avatar className="h-12 w-12">
              <AvatarImage src={authorImage} alt={author} />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                {author.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100">{author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            </div>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:font-semibold prose-headings:tracking-tight prose-headings:scroll-mt-24
                    prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:font-bold prose-h1:mb-6
                    prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-10 prose-h3:mb-4
                    prose-p:my-4 prose-p:text-lg md:prose-p:text-base
                    prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-700 dark:hover:prose-a:text-blue-300
                    prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-blue-500 
                    prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:px-6 prose-blockquote:py-3
                    prose-code:before:hidden prose-code:after:hidden prose-code:bg-gray-100 dark:prose-code:bg-gray-800
                    prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                    prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800/50 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700
                    prose-ul:my-4 prose-ol:my-4
                    prose-li:my-1">
          {children}
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Card className="bg-gray-50 dark:bg-gray-900/30 border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">About the Author</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={authorImage} alt={author} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-xl">
                    {author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{author}</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Software developer and AI engineer building and scaling
                    full-stack web apps, AI-powered software, and e-commerce
                    websites.
                  </p>
                  <div className="mt-3 flex space-x-3">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                      <span className="sr-only">GitHub</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </footer>
      </article>
    </div>
  );
}
