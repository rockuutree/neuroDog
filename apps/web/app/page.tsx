/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Hero } from "@/components/Hero";
import ShapeBackground from "@/components/ShapeBackground";
import Logo from "@/components/assets/Logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center mt-4">
        <Link className="flex items-center justify-center" href="#">
          <div className="flex center text-lg">
            <Logo className="w-5 h-5 mr-2 font-serif" />
            Neurodog
          </div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/login"
          >
            <Button className="w-full " variant="secondary">
              Login
            </Button>
          </Link>
        </nav>
      </header>
      <main className="flex-1 relative animate-in-slide-top">
        <ShapeBackground />
        <Hero />
        <Separator />
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 animate-in-slide-top"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Deeper connections. More innovation.
                </h2>
                <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                  This platform aims to provide an automated experience towards
                  caretaking and compassion for the elderly. Developed for an
                  accessible and seamless user experiencie.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
              <div className="mx-auto aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800 rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  src={
                    "https://i.ibb.co/2yNYd6w/Screenshot-2024-02-18-at-12-02-30-AM.png"
                  }
                  alt="Robot Dog looking at  guy"
                  width={1080}
                  height={1080}
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Voice Control</h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Our platforms and features all come with voice
                        capabilities enabling a more accessible experience.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Automation</h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Our service dogs understand your emotions and will come
                        to your side when you need it the most.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Power by AI</h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                        Our platforms allow us a more personalized experience
                        through natural language comprehension.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
