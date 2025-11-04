import { TweetCard } from '@/components/ui/tweet-card'

export default async function TestimonialTweet() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center mb-12">
                    <h2 className="text-4xl font-semibold lg:text-5xl">What people are saying</h2>
                    <p className="text-muted-foreground">See what our customers have to say about us on social media.</p>
                </div>
                <div className="flex justify-center">
                    <TweetCard id="1809383599531626652" />
                </div>
            </div>
        </section>
    )
}
