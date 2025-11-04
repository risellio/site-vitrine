export default function StatsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Un écosystème complet pour vos opportunités de revente</h2>
                    <p>
                        Notre technologie analyse les marchés, automatise les achats, <span className="font-medium">suit les tendances et revend au meilleur moment.</span> —  Vous ne ratez plus aucune opportunité.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">+5000</div>
                                <p>transactions automatisées</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">+120</div>
                                <p>intégrations actives</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">+98%</div>
                                <p>de satisfaction utilisateur</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 pl-4">
                            <p>Achetez moins. Gagnez plus.</p>

                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium">Luca Hallet, CEO</cite>
                                <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
