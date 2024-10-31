"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/BlurFade";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ReviewProps {
    image: string;
    name: string;
    userName: string;
    comment: string;
    rating: number;
}

const reviewList: ReviewProps[] = [
    {
        image: "/audience/member2.webp",
        name: "XYZ",
        userName: "Member",
        comment:
            "Being a part of the MU-ACM community has allowed me to connect with like-minded individuals and enhance my skills in a supportive environment.",
        rating: 5.0,
    },
    {
        image: "/audience/member2.webp",
        name: "XYZ",
        userName: "Member",
        comment:
            "Being a part of the MU-ACM community has allowed me to connect with like-minded individuals and enhance my skills in a supportive environment.",
        rating: 5.0,
    },
    {
        image: "/audience/member2.webp",
        name: "XYZ",
        userName: "Member",
        comment:
            "Being a part of the MU-ACM community has allowed me to connect with like-minded individuals and enhance my skills in a supportive environment.",
        rating: 5.0,
    },
    {
        image: "/audience/member2.webp",
        name: "XYZ",
        userName: "Member",
        comment:
            "Being a part of the MU-ACM community has allowed me to connect with like-minded individuals and enhance my skills in a supportive environment.",
        rating: 5.0,
    },
    {
        image: "/audience/member2.webp",
        name: "XYZ",
        userName: "Member",
        comment:
            "Being a part of the MU-ACM community has allowed me to connect with like-minded individuals and enhance my skills in a supportive environment.",
        rating: 5.0,
    },
    {
        image: "/audience/member2.webp",
        name: "XYZ",
        userName: "Member",
        comment:
            "Being a part of the MU-ACM community has allowed me to connect with like-minded individuals and enhance my skills in a supportive environment.",
        rating: 5.0,
    },
];

export const TestimonialSectionAudience = () => {
    return (
        <section id="testimonials" className="container mt-[-75px]">
            <div className="text-center mb-8">
                <BlurFade delay={0.25 * 2} inView>
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                        Hear What Our Audience Say
                    </h2>
                </BlurFade>
            </div>
            <BlurFade delay={0.25 * 3} inView>
                <div className="w-full flex items-center justify-center">
                    <div className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {reviewList?.map((review) => (
                            <Card
                                key={review.name}
                                className="bg-muted/50 hover:scale-105 transition-all cursor-pointer flex flex-col items-start justify-between basis-1/2 dark:bg-card"
                            >
                                <CardContent className="pt-6 pb-0">
                                    {`"${review.comment}"`}
                                </CardContent>

                                <CardHeader>
                                    <div className="flex flex-row items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src={review.image} alt="radix" />
                                            <AvatarFallback>SV</AvatarFallback>
                                        </Avatar>

                                        <div className="flex flex-col">
                                            <CardTitle className="text-lg">{review.name}</CardTitle>
                                            <CardDescription>{review.userName}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </BlurFade>
        </section>
    );
};
