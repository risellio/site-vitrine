import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <blockquote>
            <p className="text-lg font-medium sm:text-xl md:text-3xl">
              Une solution d’automatisation ultra fluide. L’interface est
              propre, les analyses sont précises, et surtout, les résultats sont
              là. Je recommande à 100 %.
            </p>

            <div className="mt-12 flex items-center justify-center gap-6">
              <Avatar className="size-12">
                <AvatarImage
                  src="https://tailus.io/images/reviews/shekinah.webp"
                  alt="Shekinah Tshiokufila"
                  height="400"
                  width="400"
                  loading="lazy"
                />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>

              <div className="space-y-1 border-l pl-6">
                <cite className="font-medium">Julien Meyer</cite>
                <span className="text-muted-foreground block text-sm">
                  Fondateur de ResellFlow
                </span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
