import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import wlLogo from "@/assets/wl-motors-logo.png";
export const Header = () => {
  return <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top Contact Bar */}
        <div className="py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(31) 73411640</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Santana do Paraíso - MG</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Seg-Sex 8h-18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={wlLogo} alt="WL Motors" className="h-12 w-12" />
              <div>
                <h1 className="font-orbitron font-bold text-xl text-foreground">
                  WL MOTORS
                </h1>
                <p className="text-sm text-muted-foreground">
                  Wildiner Lucio dos Santos
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#galeria" className="text-foreground hover:text-primary transition-colors">
                Galeria
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </nav>

            <Button variant="racing" size="lg" className="hidden md:inline-flex">
              <Phone className="h-4 w-4 mr-2" />
              Orçamento
            </Button>
          </div>
        </div>
      </div>
    </header>;
};