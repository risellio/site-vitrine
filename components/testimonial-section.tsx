import { Check } from 'lucide-react'

export default function TestimonialSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center mb-12">
                    <h2 className="text-4xl font-semibold lg:text-5xl">What people are saying</h2>
                    <p className="text-muted-foreground">See what our customers have to say about their experience.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    <TestimonialCard
                        name="Sarah Johnson"
                        role="CEO at TechCorp"
                        image="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                        content="This platform has completely transformed how we handle testing. The intuitive interface and powerful features make it a game-changer for our team."
                        verified
                    />
                    <TestimonialCard
                        name="Michael Chen"
                        role="Lead Developer"
                        image="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                        content="Finally, a testing solution that actually understands developer needs. The automation capabilities alone have saved us countless hours."
                    />
                    <TestimonialCard
                        name="Emma Williams"
                        role="Product Manager"
                        image="https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
                        content="Outstanding support and an amazing product. We've seen a 40% increase in productivity since switching to this platform."
                        verified
                    />
                </div>
            </div>
        </section>
    )
}

const TestimonialCard = ({
    name,
    role,
    image,
    content,
    verified = false
}: {
    name: string
    role: string
    image: string
    content: string
    verified?: boolean
}) => {
    return (
        <div className="relative flex h-fit w-full flex-col gap-4 overflow-hidden rounded-lg border bg-card p-6 backdrop-blur-md hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                    <img
                        src={image}
                        alt={name}
                        className="size-12 rounded-full border"
                    />
                    <div>
                        <div className="flex items-center gap-1">
                            <h3 className="font-semibold">{name}</h3>
                            {verified && (
                                <Check className="size-4 text-blue-500" />
                            )}
                        </div>
                        <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                </div>
            </div>
            <p className="text-sm leading-relaxed">{content}</p>
        </div>
    )
}
