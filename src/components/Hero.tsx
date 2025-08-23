import { Button } from "@/components/ui/button";
import { Phone, Star, Wrench } from "lucide-react";
import maverickHero from "@/assets/maverick-gt-hero.jpg";
import v8Engine from "@/assets/v8-engine.jpg";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-background via-card to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="racing-stripes absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Wrench className="h-6 w-6" />
                <span className="font-semibold text-sm tracking-wide uppercase">
                  Especialistas em Lanternagem e Pintura
                </span>
              </div>
              
              <h1 className="font-orbitron font-black text-5xl lg:text-7xl leading-tight">
                <span className="text-foreground">WL</span>
                <span className="text-primary engine-pulse"> MOTORS</span>
              </h1>
              
              <h2 className="font-rajdhani text-2xl lg:text-3xl text-muted-foreground font-light">
                Wildiner Lucio dos Santos
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Transformamos seu veículo com a precisão de um motor V8. 
                Lanternagem, pintura e restauração automotiva com mais de 15 anos de experiência.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-muted-foreground">
                +200 clientes satisfeitos
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="racing" size="lg" className="text-base">
                <Phone className="h-5 w-5 mr-2" />
                Solicitar Orçamento
              </Button>
              
              <Button variant="chrome" size="lg" className="text-base">
                <Wrench className="h-5 w-5 mr-2" />
                Ver Serviços
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            {/* Main Car Image */}
            <div className="relative z-20">
              <img 
                src={maverickHero} 
                alt="Ford Maverick GT 1974 - WL Motors"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>

            {/* V8 Engine Overlay */}
            <div className="absolute -bottom-10 -left-10 z-30 w-48 h-48 lg:w-56 lg:h-56">
              <img 
                src={v8Engine} 
                alt="Motor V8 - WL Motors"
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-xl engine-pulse"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 -right-5 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse delay-75"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};