import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LeadGenerationPage = () => {
    return (
        <>
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-xl mx-auto">
                        <MagicBadge title="Effortless" />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                         Optimize performance, and drive leads
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Vairox powers your lead management with AI-driven insights. Shorten, track, and optimize links to maximize lead generation.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <Button size="sm" asChild>
                                <Link href="/dashboard">
                                    Leads Gen
                                </Link>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                                <Link href="/blog">
                                    Learn More
                                </Link>
                            </Button>
                        </div>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2} className="w-full">
                    <div className="w-full flex max-w-4xl py-10 mx-auto">
                        <Image
                            src="/assets/shorten-links.svg"
                            alt="Shorten links and track their performance"
                            width={80}
                            height={80}
                            className="w-full h-auto"
                        />
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.3} className="w-full">
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                                Trusted by Industry Leaders
                            </h2>
                            <div className="mt-8">
                                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center py-8">
                                    {COMPANIES.map((company) => (
                                        <li key={company.name}>
                                            <Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={80}
                                                height={80}
                                                quality={100}
                                                className="w-28 h-auto"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="pt-20">
                <AnimationContainer delay={0.4} className="w-full">
                    <LampContainer className="min-w-l mx-auto">
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
                                Supercharge Your Lead Generation
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
                                With Vairox’s AI-powered lead optimization, unlock powerful insights and drive quality leads faster than ever before.
                            </p>
                            <div className="mt-6">
                                <Button asChild>
                                    <Link href="/auth/sign-up" className="flex items-center">
                                        Start for Free and Drive Leads
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>
        </>
    )
};


export default LeadGenerationPage;
