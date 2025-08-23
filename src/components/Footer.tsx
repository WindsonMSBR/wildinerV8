import { Phone, MapPin, Mail, Clock } from "lucide-react";
import wlLogo from "@/assets/wl-motors-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={wlLogo} alt="WL Motors" className="h-10 w-10" />
              <div>
                <h3 className="font-orbitron font-bold text-lg">WL MOTORS</h3>
                <p className="text-sm text-muted-foreground">Wildiner Lucio dos Santos</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Especialistas em lanternagem e pintura automotiva. 
              Transformando veículos com a precisão de um motor V8.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-rajdhani font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Pintura Automotiva</li>
              <li>Lanternagem</li>
              <li>Restauração</li>
              <li>Proteção Veicular</li>
              <li>Reparo Rápido</li>
              <li>Personalização</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-rajdhani font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(11) 9 8765-4321</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@wlmotors.com.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Rua das Oficinas, 123<br />Vila Mecânica - São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-rajdhani font-semibold text-lg mb-4">Funcionamento</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Segunda a Sexta</span>
              </div>
              <p className="ml-6">8h às 18h</p>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Sábado</span>
              </div>
              <p className="ml-6">8h às 12h</p>
              <p className="ml-6 text-red-400">Domingo: Fechado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 WL Motors - Wildiner Lucio dos Santos. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};